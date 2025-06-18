import React from "react";
import BlogForm from "@/components/admin/table/blogs/blog-form";
import { BlogsService } from "@/actions/blogs/blogs.service";
import { TContentBlockSchema } from "@/actions/blogs/blogs.types";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function NewBlog() {
  return (
    <section className="bg-white font-RecoletaRegular">
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-lg text-gray-700 font-bold my-4">
          Create New Blog
        </h2>

        <BlogForm
          onSubmit={async (formData) => {
            "use server";
            const contentBlocks = JSON.parse(
              formData.get("contentBlocks") as string
            );
            const response = await BlogsService.createBlog({
              title: formData.get("title") as string,
              featured_image_url: formData.get("featured_image_url") as string,
              preference: parseInt(formData.get("preference") as string) || 1,
              type: formData.get("type") as "blog" | "publication",
              contentBlocks: contentBlocks as TContentBlockSchema[],
            });
            if (response.success) {
              revalidateTag("blogs");
              redirect("/a/dashboard");
            }
            if (!response.success) {
              console.error(response.error || "Failed to create blog");
            }
          }}
          initialData={null}
          type="create"
        />
      </div>
    </section>
  );
}
