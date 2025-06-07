import { FC } from "react";
import { CalendarDays, Clock, User } from "lucide-react";

type Blog = {
  category: string;
  title: string;
  author?: string;
  date: string;
  readTime: string;
  image: string;
};

const blogs: Blog[] = [
  {
    category: "Technology",
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
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-RecoletaRegular text-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Recent Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              className="w-full h-72 object-cover rounded-2xl"
            />
          </div>
          <span className="bg-white text-sm font-medium inline-block mt-4 px-3 py-1 rounded-full shadow">
            {blogs[0].category}
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold mt-3">
            {blogs[0].title}
          </h3>
          <div className="flex items-center gap-4 text-sm mt-2 flex-wrap">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{blogs[0].author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{blogs[0].date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{blogs[0].readTime}</span>
            </div>
          </div>
          <button className="mt-5 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm flex items-center gap-2">
            Read more →
          </button>
        </div>

        <div className="space-y-6">
          {blogs.slice(1).map((blog, index) => (
            <div key={index} className="flex gap-4">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-32 h-28 object-cover rounded-xl shrink-0"
              />
              <div className="flex flex-col justify-between">
                <span className="bg-white text-xs font-medium px-2 py-1 rounded shadow text-gray-800 w-fit mb-2">
                  {blog.category}
                </span>
                <h4 className="text-lg font-semibold">{blog.title}</h4>
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-2 flex-wrap">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <button className="mt-2 px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition flex items-center gap-1 w-fit">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
