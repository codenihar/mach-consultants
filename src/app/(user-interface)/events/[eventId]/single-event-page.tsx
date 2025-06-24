import { Events } from "@/lib/types";
import * as motion from "motion/react-client";

export function SingleEventPage({ event }: { event: (typeof Events)[0] }) {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-12 md:pt-36 font-Inter">
      <div className="text-sm flex items-center gap-4 text-gray-500">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-md md:text-lg overflow-hidden"
        >
          🗓️ Event Date: {new Date(event.dateOfEvent).toLocaleDateString()} at{" "}
          {event.timeOfEvent}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          📍 Location: {event.placeOfEvent}
        </motion.div>
      </div>

      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold my-4 font-PTSerif italic overflow-hidden"
      >
        {event.title}
      </motion.h1>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        className="max-w-2xl rounded-xl overflow-hidden my-6 border border-gray-200 shadow-sm"
      >
        <img
          src={event.featured_image_url}
          alt="Event Visual"
          className="border border-gray-400 rounded-xl w-full h-auto object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white text-gray-700 leading-relaxed my-6"
      >
        <p className="mb-2">{event.description}</p>
      </motion.div>

      {event.contentBlocks.map((block, index) => {
        if (block.block_type === "header" && block.headerBlock) {
          return (
            <motion.h2
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="text-2xl font-semibold mb-2 mt-6 font-PTSerif"
            >
              {block.headerBlock.text}
            </motion.h2>
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

      {event.sponsors && (
        <div className={`py-4 md:py-10 lg:py-12`}>
          <div className="max-w-7xl mx-auto bg-[#F4F8FB] border border-gray-200 rounded-3xl max-md:px-4 md:px-8 lg:px-0 py-8">
            <motion.h2
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
              className={`text-2xl lg:text-3xl text-black text-center font-semibold pb-10 font-PTSerif italic`}
            >
              Our Sponsers
            </motion.h2>

            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8 py-2">
              {event.sponsors &&
                event.sponsors.map((event, idx) => (
                  <motion.div
                    key={idx}
                    className="flex justify-center items-center cursor-pointer text-center transition-all duration-300"
                  >
                    <motion.img
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
                        delay: idx * 0.1,
                      }}
                      src={event}
                      alt="partner-image"
                      className="border border-gray-400 h-40 w-40 object-fit rounded-xl overflow-hidden shadow-md"
                    />
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
