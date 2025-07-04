import * as motion from "motion/react-client";
import Link from "next/link";
import { Events } from "@/lib/types";

interface EventCardProps {
  event: (typeof Events)[0];
  index: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <motion.section
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      className="max-sm:max-w-[400px] flex flex-col lg:flex-row items-center gap-6 bg-white text-black rounded-3xl shadow-sm py-3 px-2 border"
    >
      <div>
        <img
          src={event.featured_image_url}
          alt={event.title}
          className="w-full h-full lg:max-w-80 object-cover rounded-3xl"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between gap-3">
        <h3 className="text-3xl font-semibold line-clamp-2 sm:line-clamp-1 font-PTSerif italic">
          {event.title}
        </h3>

        <p className="text-md gray-600 font-Inter line-clamp-2">
          {event.description}
        </p>

        <div className="max-w-md flex flex-col gap-1">
          <p className="text-sm flex gap-2">
            <span className="font-semibold text-gray-600 ">Place:</span>{" "}
            <span>{event.placeOfEvent}</span>
          </p>

          <p className="text-sm flex gap-2">
            <span className="font-semibold text-gray-600 ">Date:</span>
            <span>{event.dateOfEvent}</span>
          </p>
        </div>
      </div>

      <div className="max-lg:w-full sm:pr-4 flex flex-col gap-1">
        <Link href={`/events/${event.id}`}>
          <button className="font-bold lg:w-full cursor-pointer text-md bg-[#075fa4] hover:bg-[#075fa4] text-white px-8 py-3 rounded-full text-sm">
            View Details
          </button>
        </Link>
      </div>
    </motion.section>
  );
};
