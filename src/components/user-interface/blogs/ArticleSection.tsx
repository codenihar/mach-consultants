"use client";

import React from "react";
import { CalendarDays } from "lucide-react";
import { BlogsService } from "@/actions/blogs/blogs.service";
import { Skeleton } from "@/components/ui/skeleton";

interface RecentBlogProps {
  promises: Promise<[Awaited<ReturnType<typeof BlogsService.getBlogs>>]>;
}

function RecentBlogSkeleton() {
  return (
    <>
      <div>
        <div
          className="relative
            rounded-2xl overflow-hidden border border-gray-200"
        >
          <Skeleton className="w-full h-72 object-cover rounded-2xl hover:scale-110 transform-all duration-300" />
        </div>

        <Skeleton className="text-lg md:text-xl lg:text-3xl font-semibold mt-3 line-clamp-2 font-PTSerif italic" />

        <div className="flex items-center gap-4 text-sm mt-2 flex-wrap">
          <Skeleton className="flex items-center gap-1" />
        </div>

        <Skeleton className="cursor-pointer w-[max-content] mt-2 lg:mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm flex items-center gap-2" />
      </div>

      <div className="w-full h-full space-y-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 relative overflow-hidden rounded-xl border border-gray-200">
              <Skeleton className="w-full h-full object-cover rounded-xl shrink-0 hover:scale-110 transform-all duration-300" />
            </div>

            <div className="lg:col-span-2 flex flex-col justify-between">
              <Skeleton className="text-md md:text-sm lg:text-xl font-semibold max-w-sm line-clamp-2 font-PTSerif italic" />

              <div className="flex items-center gap-3 text-xs lg:text-sm text-gray-600 mt-2 flex-wrap">
                <Skeleton className="flex items-center gap-1 text-sm" />
              </div>

              <Skeleton className="max-md:hidden cursor-pointer mt-2 px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition flex items-center gap-1 w-fit" />
            </div>

            <Skeleton className="md:hidden w-full col-span-2 cursor-pointer px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition flex justify-center items-center gap-1" />
          </div>
        ))}
      </div>
    </>
  );
}

export function RecentBlogs({ promises }: RecentBlogProps) {
  const [{ data }] = React.use(promises);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 font-Inter text-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 font-PTSerif italic">
        Recent Blogs
      </h2>

      <React.Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RecentBlogSkeleton />
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data && data.length > 0 && data[0] && (
            <div>
              <div
                className="relative
            rounded-2xl overflow-hidden border border-gray-200"
              >
                <img
                  src={data[0].featured_image_url}
                  alt={data[0].title}
                  className="w-full h-72 object-cover rounded-2xl hover:scale-110 transform-all duration-300"
                />
              </div>

              <h3 className="text-lg md:text-xl lg:text-3xl font-semibold mt-3 line-clamp-2 font-PTSerif italic">
                {data[0].title}
              </h3>

              <div className="flex items-center gap-4 text-sm mt-2 flex-wrap">
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  <span>
                    {data?.[0]?.updated_at &&
                      new Date(data[0].updated_at).toLocaleString()}
                  </span>
                </div>
              </div>

              <a
                href={`/blogs/${data[0].id}`}
                className="cursor-pointer w-[max-content] mt-2 lg:mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm flex items-center gap-2"
              >
                Read more →
              </a>
            </div>
          )}

          <div className="w-full h-full space-y-6">
            {data &&
              data.length > 0 &&
              data.slice(7, 11).map((blog, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  <div className="col-span-1 relative overflow-hidden rounded-xl border border-gray-200">
                    <img
                      src={blog.featured_image_url}
                      alt={blog.title}
                      className="w-full h-full object-cover rounded-xl shrink-0 hover:scale-110 transform-all duration-300"
                    />
                  </div>
                  <div className="lg:col-span-2 flex flex-col justify-between">
                    <h4 className="text-md md:text-sm lg:text-xl font-semibold max-w-sm line-clamp-2 font-PTSerif italic">
                      {blog.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs lg:text-sm text-gray-600 mt-2 flex-wrap">
                      <div className="flex items-center gap-1 text-sm">
                        <CalendarDays className="w-4 h-4" />
                        <span>
                          {data?.[0]?.updated_at &&
                            new Date(data[0].updated_at).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`/blogs/${blog.id}`}
                      className="max-md:hidden cursor-pointer mt-2 px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition flex items-center gap-1 w-fit"
                    >
                      Read more →
                    </a>
                  </div>
                  <a
                    href={`/blogs/${blog.id}`}
                    className="md:hidden w-full col-span-2 cursor-pointer px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition flex justify-center items-center gap-1"
                  >
                    Read more →
                  </a>
                </div>
              ))}
          </div>
        </div>
      </React.Suspense>
    </section>
  );
}
