import { BlogsService } from "@/actions/blogs/blogs.service";
import { ContentBlocksService } from "@/actions/content-blocks/content-blocks.service";
import { HeaderBlocksService } from "@/actions/header-blocks/header-blocks.service";
import { ParagraphBlocksService } from "@/actions/paragraph-blocks/paragraph-blocks.service";
import { blogPostSchema, TContentBlockSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const validatedData = blogPostSchema.partial().parse(data);

    if (!validatedData) {
      return NextResponse.json(
        { error: "Please fill valid details" },
        { status: 400 }
      );
    }

    const { title, featured_image_url, preference, type, contentBlocks } =
      validatedData;

    const newBlog = await BlogsService.createBlog({
      title,
      featured_image_url,
      preference,
      type,
    });

    if (!contentBlocks) return;
    for (let i = 0; i < contentBlocks.length; i++) {
      const block = contentBlocks[i] as TContentBlockSchema;
      const order = i + 1;

      const newBlock = await ContentBlocksService.createContentBlock({
        blog_id: newBlog.data?.id as string,
        block_type: block.block_type,
        block_order: order,
      });

      switch (block.block_type) {
        case "header":
          await HeaderBlocksService.creatHeaderBlock({
            block_id: newBlock.data?.id,
            text: block.headerBlock.text,
            level: block.headerBlock.level,
          });
          break;

        case "paragraph":
          await ParagraphBlocksService.createParagraphBlock({
            block_id: newBlock.data?.id,
            text: block.paragraphBlock.text,
          });
          break;
      }
    }

    return NextResponse.json(
      { success: true, blogID: newBlog },
      { status: 201 }
    );
  } catch (error) {
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

    if (id) {
      const blog = await BlogsService.getBlogById(id);
      return NextResponse.json({ blog }, { status: 200 });
    }

    const AllBlogs = await BlogsService.getBlogs();
    return NextResponse.json({ AllBlogs }, { status: 200 });
  } catch (error) {
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
    const validatedData = blogPostSchema.partial().parse(data);
    const { contentBlocks, ...rest } = validatedData;

    await BlogsService.updateBlog(blogId, rest);

    if (contentBlocks && Array.isArray(contentBlocks)) {
      const existingBlocks =
        await ContentBlocksService.getContentBlocksByBlogId(blogId);

      const blockIds =
        existingBlocks?.data && existingBlocks.data.map((b) => b.id);

      if (blockIds) {
        await HeaderBlocksService.deleteHeaderBlocks(blockIds);
        await ParagraphBlocksService.deleteParagraphBlocks(blockIds);
        await ContentBlocksService.deleteContentBlocks(blockIds);
      }

      for (let i = 0; i < contentBlocks.length; i++) {
        const block = contentBlocks[i] as TContentBlockSchema;
        const order = i + 1;

        const newBlock = await ContentBlocksService.createContentBlock({
          blog_id: blogId,
          block_type: block.block_type,
          block_order: order,
        });

        switch (block.block_type) {
          case "header":
            await HeaderBlocksService.creatHeaderBlock({
              block_id: newBlock.data?.id,
              text: block.headerBlock.text,
              level: block.headerBlock.level,
            });
            break;
          case "paragraph":
            await ParagraphBlocksService.createParagraphBlock({
              block_id: newBlock.data?.id,
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

    await BlogsService.deleteBlog(blogId);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
