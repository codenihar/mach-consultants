"use client";
import { FC, useEffect, useState } from "react";
import { CalendarDays, User } from "lucide-react";
import { Blog } from "@/lib/types";

const RecentBlogs: FC = () => {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchBlog = async () => {
        const response = await fetch("/api/blog");
        const { data } = await response.json();
        setBlogs(data);
      };

      fetchBlog();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-RecoletaRegular text-black">
      {loading ? (
        <div>
          <p className="text-black text-center">loading...</p>
        </div>
      ) : (
        <>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Recent Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs && blogs.length > 0 && blogs[0] && (
              <div className="">
                <div
                  className="relative
            rounded-2xl overflow-hidden border border-gray-200"
                >
                  <img
                    src={blogs[0].featured_image_url}
                    alt={blogs[0].title}
                    className="w-full h-72 object-cover rounded-2xl hover:scale-110 transform-all duration-300"
                  />
                </div>

                <h3 className="text-lg md:text-xl lg:text-3xl font-semibold mt-3 line-clamp-2">
                  {blogs[0].title}
                </h3>
                <div className="flex items-center gap-4 text-sm mt-2 flex-wrap">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>{blogs[0].published}</span>
                  </div>
                </div>
                <a
                  href={`/blogs/${blogs[0].id}`}
                  className="cursor-pointer w-[max-content] mt-2 lg:mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm flex items-center gap-2"
                >
                  Read more →
                </a>
              </div>
            )}

            <div className="w-full h-full space-y-6">
              {blogs &&
                blogs.length > 0 &&
                blogs.slice(7, 11).map((blog, index) => (
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
                      <h4 className="text-md md:text-sm lg:text-xl font-semibold max-w-sm line-clamp-2">
                        {blog.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs lg:text-sm text-gray-600 mt-2 flex-wrap">
                        <div className="flex items-center gap-1 text-sm">
                          <CalendarDays className="w-4 h-4" />
                          <span>{blog.published}</span>
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
        </>
      )}
    </section>
  );
};

export default RecentBlogs;
