import { Service } from "@/app/services/page";
import { ArrowUpRight } from "lucide-react";

const ContentSection = ({ service }: Service) => {
  return (
    <section
      className={`w-full ${service.bgColor} ${
        service.textColor === "white" ? "text-white" : "text-black"
      } py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
            {service.title}
          </h2>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
            <p
              className={`flex-1 text-sm sm:text-base md:text-lg ${
                service.textColor === "white"
                  ? "text-white/90"
                  : "text-black/90"
              } max-w-xl leading-relaxed`}
            >
              {service.desc}
            </p>

            {service.lists && service.lists.length > 0 && (
              <div className="flex-1 flex lg:justify-end">
                <ul
                  className={`text-xs sm:text-sm ${
                    service.textColor === "white"
                      ? "text-white/80"
                      : "text-black/80"
                  } space-y-1.5 sm:space-y-2 leading-relaxed sm:leading-snug`}
                >
                  {service.lists.map((list, index) => (
                    <li key={`list-${index}`} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            className={`mt-6 sm:mt-8 cursor-pointer ${
              service.textColor === "white"
                ? "bg-white text-black"
                : "bg-black text-white"
            } font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-flex items-center gap-1 sm:gap-2 hover:brightness-95 transition-all duration-200`}
          >
            {service.buttonText}
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
