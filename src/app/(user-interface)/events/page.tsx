import {
  Event,
  EventCard,
} from "@/components/user-interface/events/event-card";
import * as motion from "motion/react-client";

const events: Event[] = [
  {
    id: 1,
    title: "Kedatangan Makhluk Bekasi, Aww & Pican di Sidang",
    description:
      "To provide flexible, inspiring workspaces that foster creativity, collaboration, and professional growth.",
    organizer: "Podcast Seminggu",
    date: "Wed, 18 September 2024 at 9PM",
    category: "Startup Comedy",
    imageUrl: "/images/blog_1.png",
  },
  {
    id: 2,
    title: "Kedatangan Makhluk Bekasi, Aww & Pican di Sidang",
    description:
      "To provide flexible, inspiring workspaces that foster creativity, collaboration, and professional growth.",
    organizer: "Podcast Seminggu",
    date: "Wed, 18 September 2024 at 9PM",
    category: "Startup Comedy",
    imageUrl: "/images/blog_2.png",
  },
  {
    id: 3,
    title: "Kedatangan Makhluk Bekasi, Aww & Pican di Sidang",
    description:
      "To provide flexible, inspiring workspaces that foster creativity, collaboration, and professional growth.",
    organizer: "Podcast Seminggu",
    date: "Wed, 18 September 2024 at 9PM",
    category: "Startup Comedy",
    imageUrl: "/images/blog_3.png",
  },
];

const EventsPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 pt-36 space-y-6 sm:space-y-8 font-Inter">
      <div className="flex flex-col-reverse sm:flex-col gap-4 text-center">
        <motion.h1
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
          className="max-w-[80%] sm:max-w-4xl sm:mx-auto text-left sm:text-center text-4xl sm:text-6xl lg:text-7xl leading-tight"
        >
          Grow Your Network & Skills with Our Events
        </motion.h1>

        <motion.button
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
          className="w-fit sm:mx-auto px-6 py-2 bg-gray-200 border-black rounded-full font-medium"
        >
          Events
        </motion.button>
      </div>

      <div className="w-full flex justify-start flex-wrap gap-2">
        <motion.button
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
            delay: 0.2,
          }}
          className="cursor-pointer px-6 py-2 border border-black rounded-full hover:bg-gray-100"
        >
          All Events
        </motion.button>
        <motion.button
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
            delay: 0.2,
          }}
          className="cursor-pointer px-4 py-2 border border-black rounded-full hover:bg-gray-100"
        >
          Lastest Events
        </motion.button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

export default EventsPage;
