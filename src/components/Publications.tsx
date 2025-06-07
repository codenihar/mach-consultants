import { ChevronRight } from "lucide-react";
import React from "react";

type Publication = {
  img: string;
  step: string;
  title: string;
  desc: string;
};

const publications: Publication[] = [
  {
    img: "https://mach-consultants.com/wp-content/uploads/2024/05/odj-logo.jpg",
    step: "01",
    title: "Organization Development Journal",
    desc: "El Haddad, P., Kuran, O. (2022), “Generic Aspects of Performance Improvement: Comparative Case Studies in Lebanon”, Organization Development Journal, in print, International Society for Organizational Development and Change, Colorado, US.",
  },
  {
    img: "https://mach-consultants.com/wp-content/uploads/2024/05/edition-ems-management-and-societe-logo.jpg",
    step: "02",
    title: "EMS Management et Société",
    desc: "El Haddad, P., Barazi, R. (2021), “The Socio-Economic Drive to Transformation from Non- Governmental Organization to Social Enterprise”, in Savall, H, & Zardet, V . (Eds.), Traité du Management Socio-économique, EMS Management et Société: Caen. ISBN: 978-2-37687-470-6.",
  },
  {
    img: "https://mach-consultants.com/wp-content/uploads/2024/05/international-journal-of-islamic-and-middle-eastern-finance-and-management.png",
    step: "03",
    title:
      "International Journal of Islamic and Middle Eastern Finance and Management",
    desc: "El Haddad, P., Bachkirov, A.A., Grishina, O. (2020), “Comparative CSR Decision Making in the Middle East: An Exploratory Study”, International Journal of Islamic and Middle Eastern Finance and Management, in-print. Emerald.",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white px-4 sm:px-6 font-LibreRegular">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-blue-600 font-semibold text-md md:text-lg lg:text-xl mb-2 sm:mb-3">
          Publications
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-10 md:mb-12 leading-tight">
          View our latest publications
        </h2>

        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-3">
          {publications.map((publication, idx) => (
            <div key={idx} className="flex flex-col items-center text-left">
              <div className="relative w-full overflow-hidden rounded-xl aspect-square mb-4 sm:mb-6">
                <img
                  src={publication.img}
                  alt={publication.title}
                  className="w-full h-full object-fit transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between w-full mb-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-1">
                  {publication.title}
                </h3>
                <button className="bg-gray-400 rounded-full p-2 cursor-pointer">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-600 text-sm sm:text-base md:text-md line-clamp-4">
                {publication.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
