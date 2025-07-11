import { EventCard } from "@/components/user-interface/events/event-card";
import { Events } from "@/lib/types";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

const EventsPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 pt-36 space-y-6 sm:space-y-8 lg:space-y-12 font-Inter">
      <div className="flex flex-col gap-4 text-center">
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
          className="px-2 md:px-0 max-w-[80%] sm:max-w-4xl sm:mx-auto text-left sm:text-center text-4xl md:text-5xl lg:text-6xl leading-tight font-PTSerif font-semibold italic"
        >
          RISE: Research with Impact for Society and Enterprise
        </motion.h1>

        <motion.p
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
          className="text-left font-Inter md:text-center max-w-3xl w-fit sm:mx-auto px-2 md:px-6 py-2 border-black rounded-lg md:rounded-3xl font-medium"
        >
          RISE is an annual hybrid conference in Beirut that bridges management
          research and practice by bringing together international scholars,
          practitioners, and business leaders to collaborate on impactful,
          enterprise-relevant research.
        </motion.p>
      </div>

      <div className="px-2 sm:px-4 lg:px-0 flex justify-center items-center">
        <iframe
          width={1140}
          height={630}
          src="https://www.youtube.com/embed/fQ6CMBvDsUg?si=xR_Zfb5cGsS7qumr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={cn(
            "rounded-xl shadow-2xl overflow-hidden",
            "w-full h-[300px]",
            "sm:h-[630px]",
            "md:w-[1140px] md:h-[630px]"
          )}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {Events.slice()
          .reverse()
          .map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
      </div>
    </section>
  );
};

export default EventsPage;
