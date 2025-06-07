import { FC } from "react";
import { CalendarDays, Clock, User } from "lucide-react";

type Blog = {
  category: string;
  title: string;
  type?: string;
  author?: string;
  date: string;
  readTime: string;
  image: string;
};

const blogs: Blog[] = [
  {
    category: "Technology",
    type: "main",
    title: "Boost your online sales with these top conversion strategies",
    author: "Courtney Henry",
    date: "November 10, 2024",
    readTime: "2 min read",
    image:
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67308a182c39026fe235e8e2_blog-thumb-1-p-800.jpg",
  },
  {
    category: "Lifestyle",
    title: "The ultimate guide to creating a standout portfolio in 2024",
    date: "November 10, 2024",
    readTime: "7 min read",
    image:
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309e63cdf19828e75269ab_blog-thumb-2-p-500.jpg",
  },
  {
    category: "Science",
    title: "How to optimize your website for faster loading times",
    date: "November 10, 2024",
    readTime: "4 min read",
    image:
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ed67742ac6d01e2b35e_blog-thumb-3-p-500.jpg",
  },
  {
    category: "Hobbies",
    title: "5 design trends shaping the future of digital experiences",
    date: "November 10, 2024",
    readTime: "5 min read",
    image:
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ef95d1f44a4dacde997_blog-thumb-4-p-500.jpg",
  },
];

const RecentBlogs: FC = () => {
  const mainBlog = blogs.find((blog) => blog.type === "main");

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-RecoletaRegular text-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Recent Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mainBlog && (
          <div className="">
            <div
              className="relative
            rounded-2xl overflow-hidden"
            >
              <img
                src={mainBlog.image}
                alt={mainBlog.title}
                className="w-full h-72 object-cover rounded-2xl hover:scale-110 transform-all duration-300"
              />
              <span className="absolute top-0 left-4 bg-white text-sm font-medium inline-block mt-4 px-3 py-1 rounded-lg shadow">
                {mainBlog.category}
              </span>
            </div>

            <h3 className="text-lg md:text-xl lg:text-3xl font-semibold mt-3">
              {mainBlog.title}
            </h3>
            <div className="flex items-center gap-4 text-sm mt-2 flex-wrap">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{mainBlog.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                <span>{mainBlog.date}</span>
              </div>
            </div>
            <button className="cursor-pointer mt-2 lg:mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm flex items-center gap-2">
              Read more →
            </button>
          </div>
        )}

        <div className="w-full h-full space-y-6">
          {blogs
            .filter((blog) => blog.type !== "main")
            .map((blog, index) => (
              <div
                key={index}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <div className="col-span-1 relative overflow-hidden rounded-xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full object-fit rounded-xl shrink-0 hover:scale-110 transform-all duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-white text-xs font-medium px-2 py-1 rounded-lg shadow text-gray-800 w-fit mb-2">
                    {blog.category}
                  </span>
                </div>
                <div className="lg:col-span-2 flex flex-col justify-between">
                  <h4 className="text-md md:text-sm lg:text-xl font-semibold max-w-sm">
                    {blog.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs lg:text-sm text-gray-600 mt-2 flex-wrap">
                    <div className="flex items-center gap-1 text-sm">
                      <CalendarDays className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <button className="max-md:hidden cursor-pointer mt-2 px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition flex items-center gap-1 w-fit">
                    Read more →
                  </button>
                </div>
                <button className="md:hidden w-full col-span-2 cursor-pointer px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition flex justify-center items-center gap-1">
                  Read more →
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
