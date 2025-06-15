import React from "react";
import { Facebook, Mail, MoveUpRight, Phone, Twitter } from "lucide-react";
import { NavItems, policies } from "@/lib/constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f1f5fd] text-gray-800 font-Inter">
      {/* Top CTA Section */}
      <div className="bg-blue-100/50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto py-12 md:py-16 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4 font-PTSerif italic">
              Get started with us today.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-md">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 bg-white p-1 sm:p-2 rounded-lg shadow-sm">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            />
            <a
              href="/#contactUs"
              className="cursor-pointer font-semibold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Us
              <MoveUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 xl:px-0 pb-8 pt-12 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10">
          {/* Logo and About */}
          <div className="md:col-span-3 lg:col-span-1 xl:col-span-2">
            <div className="text-blue-700 font-bold text-xl lg:text-2xl mb-3 font-PTSerif italic">
              Mach Consultants
            </div>
            <p className="text-gray-600 text-lg leading-relaxed lg:max-w-xs">
              At Avenues Financial, we are a team of knowledgeable & experienced
              accounting and business professionals that provide solutions to
              your accounting needs.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 md:mb-6 text-lg font-PTSerif italic">
              Pages
            </h4>
            <ul className="space-y-3 md:space-y-4 text-gray-600 text-base">
              {NavItems &&
                NavItems.length > 0 &&
                NavItems.map((nav, index) => (
                  <li key={`nav-${index}`}>
                    <a
                      key={`nav-${index}`}
                      href={nav.route}
                      className="cursor-pointer hover:text-black text-sm lg:text-lg"
                    >
                      {nav.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 md:mb-6 text-lg font-PTSerif italic">
              Our Company
            </h4>
            <ul className="space-y-3 md:space-y-4 text-gray-600 text-base">
              {policies &&
                policies.length > 0 &&
                policies.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.route}
                      className="hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-lg"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 md:mb-6 text-lg font-PTSerif italic">
              Get in touch
            </h4>

            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start gap-3 text-gray-600 text-sm md:text-lg">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="transition-colors w-[max-content]">
                    142, rue de Rivoli 75001
                  </p>
                  <p className="transition-colors w-[max-content]">
                    Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600 text-sm md:text-lg">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="hover:text-blue-600 transition-colors">
                  info@mach-consultants.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full border-t text-center border-gray-200 mt-12 md:mt-16 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p className="w-full text-sm md:text-md text-center">
            Copyright © {new Date().getFullYear()} MACH-Consultants | Powered by
            Streamline Consultancy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
