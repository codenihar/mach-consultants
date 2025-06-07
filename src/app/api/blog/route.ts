import { db } from "@/lib/db/index";
import {
  blogs,
  contentBlocks,
  headerBlocks,
  paragraphBlocks,
  listBlocks,
  listItems,
  imageBlocks,
} from "@/lib/db/schema";
import { blogPostSchema } from "@/lib/db/zodSchema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const validatedData = blogPostSchema.parse(data);
    const { title, featured_image_url, content } = validatedData;

    const [newBlog] = await db
      .insert(blogs)
      .values({ title, featured_image_url })
      .returning({ id: blogs.id });

    const blogId = newBlog.id;
    for (let i = 0; i < content.length; i++) {
      const block = content[i];
      const order = i + 1;

      const [{ id: blockId }] = await db
        .insert(contentBlocks)
        .values({
          blog_id: blogId,
          block_type: block.type,
          block_order: order,
        })
        .returning({ id: contentBlocks.id });

      //   switch (block.type) {
      //     case "header":
      //       await db.insert(headerBlocks).values({
      //         block_id: blockId,
      //         text: block.data.text,
      //         level: block.data.level,
      //       });
      //       break;

      //     case "paragraph":
      //       await db.insert(paragraphBlocks).values({
      //         block_id: blockId,
      //         text: block.data.text,
      //       });
      //       break;

      //     case "list":
      //       await db.insert(listBlocks).values({
      //         block_id: blockId,
      //         list_style: block.data.list_style,
      //       });

      //       const items = block.data.items || [];
      //       await db.insert(listItems).values(
      //         items.map((text: string, index: number) => ({
      //           list_block_id: blockId,
      //           text,
      //           item_order: index + 1,
      //         }))
      //       );
      //       break;

      //     case "image":
      //       await db.insert(imageBlocks).values({
      //         block_id: blockId,
      //         image_url: block.data.image_url,
      //         caption: block.data.caption,
      //       });
      //       break;

      //     default:
      //       console.warn("Unknown block type:", block.type);
      //       break;
      //   }
    }

    return NextResponse.json({ success: true, blogId }, { status: 201 });
  } catch (error) {
    console.error("Error inserting blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
