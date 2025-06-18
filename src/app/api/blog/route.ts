import { BlogsService } from "@/actions/blogs/blogs.service";
import { blogSchema } from "@/actions/blogs/blogs.types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const validatedData = blogSchema.parse(data);

    if (!validatedData) {
      return NextResponse.json(
        { error: "Please fill valid details" },
        { status: 400 }
      );
    }

    const newBlog = await BlogsService.createBlog(validatedData);

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
    const validatedData = blogSchema.partial().parse(data);

    const blog = await BlogsService.updateBlog(blogId, validatedData);

    return NextResponse.json({ success: true, blog }, { status: 200 });
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
