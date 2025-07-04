import { TBlogSchema } from "@/actions/blogs/blogs.types";
import * as motion from "motion/react-client";

export function SingleBlogPage({ blog }: { blog: TBlogSchema }) {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-10 md:py-36 font-Inter">
      <div className="text-sm flex items-center gap-4 text-gray-500">
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="text-md md:text-lg overflow-hidden"
        >
          Published on{" "}
          {blog.created_at && new Date(blog?.created_at).toLocaleString()}
        </motion.div>

        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="overflow-hidden"
        >
          📝 Updated:{" "}
          {blog.updated_at && new Date(blog?.updated_at).toLocaleDateString()}
        </motion.div>
      </div>

      <motion.h1
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
          delay: 0.1,
        }}
        className="text-3xl md:text-4xl font-bold my-4 font-PTSerif italic overflow-hidden"
      >
        {blog?.title}
      </motion.h1>

      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
          delay: 0.1,
        }}
        className="max-w-2xl rounded-xl overflow-hidden my-6 border border-gray-200 shadow-sm"
      >
        <img
          src={blog?.featured_image_url}
          alt="Blog Visual"
          className="w-full h-auto object-fit"
        />
      </motion.div>

      {blog?.contentBlocks.map((block, index) => {
        if (block.block_type === "header" && block.headerBlock) {
          return (
            <h2
              key={index}
              className="text-2xl font-semibold mb-2 mt-6 font-PTSerif italic"
            >
              {block.headerBlock.text}
            </h2>
          );
        }

        if (block.block_type === "paragraph" && block.paragraphBlock) {
          const { text, link } = block.paragraphBlock;

          return (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="bg-white text-gray-700 leading-relaxed my-6"
            >
              <p className="mb-2">{text}</p>
              {link && (
                <p>
                  For more detail visit:{" "}
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Source ↗
                  </a>
                </p>
              )}
            </motion.div>
          );
        }
        return null;
      })}
    </div>
  );
}
