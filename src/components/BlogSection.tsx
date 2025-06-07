import { ChevronRight } from "lucide-react";
import React from "react";

type Blog = {
  category?: string;
  img: string;
  title: string;
  description: string;
};

const Blogs: Blog[] = [
  {
    category: "Insurance",
    img: "/images/blog_1.png",
    title: "Organization Development Journal",
    description:
      "El Haddad, P., Kuran, O. (2022), “Generic Aspects of Performance Improvement: Comparative Case Studies in Lebanon”, Organization Development Journal, in print, International Society for Organizational Development and Change, Colorado, US.",
  },
  {
    category: "Insurance",
    img: "/images/blog_2.png",
    title: "EMS Management at Society",
    description:
      "El Haddad, P., Barazi, R. (2021), “The Socio-Economic Drive to Transformation from Non- Governmental Organization to Social Enterprise”, in Savall, H, & Zardet, V . (Eds.), Traité du Management Socio-économique, EMS Management et Société: Caen. ISBN: 978-2-37687-470-6",
  },
  {
    category: "Insurance",
    img: "/images/blog_3.png",
    title:
      "International Journal of Islamic and Middle Eastern Finance and Management.",
    description:
      "El Haddad, P., Bachkirov, A.A., Grishina, O. (2020), “Comparative CSR Decision Making in the Middle East: An Exploratory Study”, International Journal of Islamic and Middle Eastern Finance and Management, in-print. Emerald.",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white font-LibreRegular">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <p className="text-blue-600 font-semibold text-md md:text-lg lg:text-xl mb-2">
            Our Blogs
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Take a look at the latest blogs from Mach Consultants
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Blogs.map((blog, index) => (
            <article
              key={`blog-${index}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                {/* <p className="text-xs sm:text-sm text-blue-600 font-semibold mb-2">
                  Insurance
                </p> */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-4">
                  {blog.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium text-sm sm:text-base hover:underline mt-auto"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button (optional) */}
        <div className="text-center mt-10 md:mt-14">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
            View All Articles
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
