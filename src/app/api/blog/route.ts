import { db } from "@/lib/db";
import { BlogContentBlock, blogPostSchema } from "@/lib/db/zodSchema";
import {
  blogs,
  contentBlocks,
  headerBlocks,
  paragraphBlocks,
} from "@/lib/drizzle/schema";
import { and, eq, inArray } from "drizzle-orm";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const validatedData = blogPostSchema.parse(data);

    if (!validatedData) {
      return NextResponse.json(
        { error: "Please fill valid details" },
        { status: 400 }
      );
    }

    const { title, featured_image_url } = validatedData;

    const [newBlog] = await db
      .insert(blogs)
      .values({ title, featured_image_url })
      .returning({ id: blogs.id });

    for (let i = 0; i < validatedData.contentBlocks.length; i++) {
      const block = validatedData.contentBlocks[i] as BlogContentBlock;
      const order = i + 1;

      const [newBlock] = await db
        .insert(contentBlocks)
        .values({
          blog_id: newBlog.id,
          block_type: block.block_type,
          block_order: order,
        })
        .returning({ id: contentBlocks.id });

      switch (block.block_type) {
        case "header":
          await db.insert(headerBlocks).values({
            block_id: newBlock.id,
            text: block.headerBlock.text,
            level: block.headerBlock.level,
          });
          break;

        case "paragraph":
          await db.insert(paragraphBlocks).values({
            block_id: newBlock.id,
            text: block.paragraphBlock.text,
          });
          break;
      }
    }

    return NextResponse.json(
      { success: true, blogID: newBlog.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("blogId");

    console.log(id);
    if (id) {
      const blog = await db.query.blogs.findFirst({
        where: eq(blogs.id, id),
        columns: {
          id: true,
          title: true,
          featured_image_url: true,
          published: true,
          updated_at: true,
        },
        with: {
          contentBlocks: {
            columns: { block_type: true },
            with: {
              headerBlock: {
                columns: {
                  text: true,
                  level: true,
                },
              },
              paragraphBlock: {
                columns: {
                  text: true,
                },
              },
            },
          },
        },
      });
      return NextResponse.json({ success: true, data: blog }, { status: 200 });
    }

    const AllBlogs = await db.query.blogs.findMany({
      columns: {
        id: true,
        title: true,
        featured_image_url: true,
        published: true,
        updated_at: true,
      },
      with: {
        contentBlocks: {
          columns: { block_type: true },
          with: {
            headerBlock: {
              columns: {
                text: true,
              },
            },
            paragraphBlock: {
              columns: {
                text: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json(
      { success: true, data: AllBlogs },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inserting blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const url = new URL(request.url);
    const blogId = url.searchParams.get("blogId");

    if (!blogId) {
      return NextResponse.json({ error: "Missing blogId" }, { status: 400 });
    }

    const data = await request.json();
    const validatedData = blogPostSchema.parse(data);
    const { title, featured_image_url } = validatedData;

    const existingBlog = await db.query.blogs.findFirst({
      where: (blogs, { eq }) => eq(blogs.id, blogId),
    });

    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    if (title || featured_image_url) {
      await db
        .update(blogs)
        .set({
          ...(title && { title }),
          ...(featured_image_url && { featured_image_url }),
        })
        .where(eq(blogs.id, blogId));
    }

    if (contentBlocks && Array.isArray(contentBlocks)) {
      const existingBlocks = await db
        .select({ id: contentBlocks.id })
        .from(contentBlocks)
        .where(eq(contentBlocks.blog_id, blogId));

      const blockIds = existingBlocks.map((b) => b.id);

      if (blockIds.length) {
        await db
          .delete(headerBlocks)
          .where(inArray(headerBlocks.block_id, blockIds));
        await db
          .delete(paragraphBlocks)
          .where(inArray(paragraphBlocks.block_id, blockIds));
        await db
          .delete(contentBlocks)
          .where(inArray(paragraphBlocks.block_id, blockIds));
      }

      for (let i = 0; i < contentBlocks.length; i++) {
        const block = contentBlocks[i] as BlogContentBlock;
        const order = i + 1;

        const [newBlock] = await db
          .insert(contentBlocks)
          .values({
            blog_id: blogId,
            block_type: block.block_type,
            block_order: order,
          })
          .returning({ id: contentBlocks.id });

        switch (block.block_type) {
          case "header":
            await db.insert(headerBlocks).values({
              block_id: newBlock.id,
              text: block.headerBlock.text,
              level: block.headerBlock.level,
            });
            break;
          case "paragraph":
            await db.insert(paragraphBlocks).values({
              block_id: newBlock.id,
              text: block.paragraphBlock.text,
            });
            break;
        }
      }
    }

    return NextResponse.json(
      { success: true, blogID: blogId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const blogId = url.searchParams.get("blogId");

    if (!blogId) {
      return NextResponse.json({ error: "Missing blogId" }, { status: 400 });
    }

    const blocks = await db
      .select({ id: contentBlocks.id })
      .from(contentBlocks)
      .where(eq(contentBlocks.blog_id, blogId));

    const blockIds = blocks.map((b) => b.id);

    if (blockIds.length > 0) {
      await db
        .delete(headerBlocks)
        .where(inArray(headerBlocks.block_id, blockIds));
      await db
        .delete(paragraphBlocks)
        .where(inArray(paragraphBlocks.block_id, blockIds));

      await db.delete(contentBlocks).where(inArray(contentBlocks.id, blockIds));
    }

    await db.delete(blogs).where(eq(blogs.id, blogId));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
