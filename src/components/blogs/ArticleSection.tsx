import { ArrowRight } from "lucide-react";

type Article = {
  type: string;
  title: string;
  category: string;
  date: string;
  image: string;
  desc: string;
};

const articles: Article[] = [
  {
    type: "wide",
    title:
      "Meet the new Stack: The documentation platform you know, made effortless with AI.",
    category: "Product Update",
    date: "June 1, 2025",
    image: "/images/wideArticle.png",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam eos itaque, voluptate aspernatur ullam!",
  },
  {
    type: "wide",
    title: "Using heatmaps to improve your website's UX: 5 ways to get started",
    category: "Knowledge",
    date: "June 1, 2025",
    image: "/images/wideArticle.png",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam eos itaque, voluptate aspernatur ullam!",
  },
  {
    type: "short",
    title:
      "How to create a cohesive omnichannel experience in the buying process",
    category: "Example",
    date: "May 29, 2025",
    image: "/images/shortArticle.png",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam eos itaque, voluptate aspernatur ullam!",
  },
  {
    type: "short",
    title: "The power and business value of visual communication",
    category: "Knowledge",
    date: "May 28, 2025",
    image: "/images/shortArticle.png",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam eos itaque, voluptate aspernatur ullam!",
  },
  {
    type: "short",
    title: "The Rise of AI in Everyday Life: Transforming the Norm",
    category: "Example",
    date: "May 27, 2025",
    image: "/images/shortArticle.png",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam eos itaque, voluptate aspernatur ullam!",
  },
  {
    type: "wide",
    title: "The Future of Work: Navigating the Remote Revolution",
    category: "Example",
    date: "May 26, 2025",
    image: "/images/wideArticle.png",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam eos itaque, voluptate aspernatur ullam!",
  },
  {
    type: "wide",
    title: "Demystifying Blockchain: Beyond Cryptocurrency",
    category: "Knowledge",
    date: "May 25, 2025",
    image: "/images/wideArticle.png",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam eos itaque, voluptate aspernatur ullam!",
  },
];

const categories: string[] = [
  "All articles",
  "Spotlight",
  "Product update",
  "Example",
  "Knowledge",
];

const ArticlesSection = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            All Articles
          </h2>
          <p className="text-gray-600 mt-2 text-sm max-w-xl">
            Find practical ideas that help designers build to last. Simplify
            design with our comprehensive and carefully written library from the
            start.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories &&
              categories.map((tag, idx) => (
                <button
                  key={idx}
                  className="px-4 py-1.5 text-sm rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                >
                  {tag}
                </button>
              ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className={`${
                article.type === "wide"
                  ? "md:col-span-3 col-span-1"
                  : "md:col-span-2 col-span-1"
              } bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex gap-2">
                  <p className="text-xs lg:text-sm text-orange-600 font-medium">
                    {article.category}
                  </p>
                  <p className="text-xs lg:text-sm text-gray-500 border-l px-2">
                    {article.date}
                  </p>
                </div>
                <h3 className="text-base font-semibold text-gray-900 max-sm:leading-tight line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 line-clamp-5 leading-tight text-sm py-2">
                  {article.desc}
                </p>
                <button className="cursor-pointer inline-flex items-center text-sm text-orange-600 font-medium mt-2 hover:underline">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="w-full mt-12 text-center">
          <button className="cursor-pointer w-full px-6 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
