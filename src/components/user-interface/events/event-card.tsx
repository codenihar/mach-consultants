import * as motion from "motion/react-client";
import Link from "next/link";

export interface Event {
  id: number;
  title: string;
  description: string;
  organizer: string;
  date: string;
  category: string;
  imageUrl: string;
}

interface EventCardProps {
  event: Event;
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
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full lg:max-w-80 object-cover rounded-3xl"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between gap-3">
        <span className="w-fit text-xs text-black border border-black bg-gray-100 px-4 py-2 rounded-full">
          {event.category}
        </span>
        <h3 className="text-3xl font-semibold line-clamp-2 sm:line-clamp-1">
          {event.title}
        </h3>
        <p className="text-md gray-600 line-clamp-2">{event.description}</p>
        <div className="max-w-xl flex flex-col gap-3 lg:gap-1">
          <p className="text-sm grid grid-cols-1 lg:grid-cols-2 max-lg:gap-1">
            <span className="font-semibold text-gray-600 ">Penyelenggara:</span>{" "}
            <span>{event.organizer}</span>
          </p>
          <p className="text-sm grid grid-cols-1 lg:grid-cols-2 max-lg:gap-1">
            <span className="font-semibold text-gray-600 ">
              Tanggal pelaksanaan:
            </span>
            <span>{event.date}</span>
          </p>
        </div>
      </div>

      <div className="max-lg:w-full sm:pr-4 flex flex-col gap-1">
        <Link href={`/events/${event.id}`}>
          <button className="max-lg:w-full cursor-pointer text-md bg-black text-white px-8 py-3 rounded-full text-sm">
            View Details
          </button>
        </Link>
      </div>
    </motion.section>
  );
};
