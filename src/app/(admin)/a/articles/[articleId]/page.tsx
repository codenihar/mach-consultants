import { BlogsService } from "@/actions/blogs/blogs.service";
import { TBlogSchema, TContentBlockSchema } from "@/actions/blogs/blogs.types";
import BlogForm from "@/components/admin/table/blogs/blog-form";
import { Skeleton } from "@/components/ui/skeleton";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

export default async function UpdateBlog({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;

  const [{ data: blogsData }] = await Promise.all([
    BlogsService.getBlogById(articleId),
  ]);

  return (
    <section className="bg-white font-RecoletaRegular">
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-lg text-gray-700 font-bold my-4">Update Blog</h2>

        <React.Suspense
          fallback={
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300 space-y-6">
              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          }
        >
          <BlogForm
            onSubmit={async (formData: TBlogSchema) => {
              "use server";
              const response = await BlogsService.updateBlog(
                articleId,
                formData
              );
              if (response.success) {
                revalidateTag("blogs");
                revalidateTag(`blog-${articleId}`);
                redirect("/a/dashboard");
              }
              if (!response.success) {
                console.error(response.error || "Failed to create blog");
              }
            }}
            type="update"
            initialData={blogsData as TBlogSchema}
          />
        </React.Suspense>
      </div>
    </section>
  );
}
