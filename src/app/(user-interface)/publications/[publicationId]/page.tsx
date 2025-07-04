import React from "react";
import { SingleBlogPage } from "./single-blog-page";
import { BlogsService } from "@/actions/blogs/blogs.service";
import { Skeleton } from "@/components/ui/skeleton";

export default async function page({
  params,
}: {
  params: Promise<{ publicationId: string }>;
}) {
  const { publicationId } = await params;

  const [{ data: blog }] = await Promise.all([
    BlogsService.getBlogById(publicationId),
  ]);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-10 md:py-36 font-Inter text-center text-gray-500">
        Blog not found.
      </div>
    );
  }

  return (
    <React.Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 pt-32 pb-10 md:py-36 font-Inter">
          <div className="text-sm flex items-center gap-4 text-gray-500 mb-4">
            <Skeleton className="h-4 w-40 md:w-52" />
            <Skeleton className="h-4 w-28" />
          </div>

          <Skeleton className="h-8 md:h-10 w-3/4 mb-6" />

          <Skeleton className="w-full h-[300px] rounded-xl mb-6" />

          <div className="space-y-6">
            <Skeleton className="h-6 w-1/2" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            <Skeleton className="h-6 w-1/3 mt-10" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-2/4" />
            </div>
          </div>
        </div>
      }
    >
      <SingleBlogPage blog={blog} />
    </React.Suspense>
  );
}
