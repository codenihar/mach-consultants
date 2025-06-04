import React from "react";
import { Facebook, Mail, MoveUpRight, Phone, Twitter } from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

type SocialIcon = {
  icon: React.ReactNode;
  label: string;
};

const socialIcons: SocialIcon[] = [
  { icon: <FaTwitter />, label: "Twitter" },
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaLinkedin />, label: "LinkedIn" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f1f5fd] text-gray-800">
      {/* Top CTA Section */}
      <div className="bg-gradient-to-r from-[#b3c7f5] to-[#d6e0fa] px-4 sm:px-6">
        <div className="max-w-6xl mx-auto py-12 md:py-16 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4">
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
            <button className="cursor-pointer font-semibold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition-colors duration-300">
              Subscribe Now
              <MoveUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 pt-12 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <div className="text-blue-700 font-bold text-xl mb-3">
              CONSULTIC
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-xs">
              At Avenues Financial, we are a team of knowledgeable & experienced
              accounting and business professionals that provide solutions to
              your accounting needs.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 md:mb-6 text-lg">
              Learn
            </h4>
            <ul className="space-y-3 md:space-y-4 text-gray-600 text-base">
              {["Product", "Pricing", "Schedule a demo", "Our Blog"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 md:mb-6 text-lg">
              Our Company
            </h4>
            <ul className="space-y-3 md:space-y-4 text-gray-600 text-base">
              {["About us", "Privacy Policy", "User Terms", "Help Centre"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 md:mb-6 text-lg">
              Get in touch
            </h4>

            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start gap-3 text-gray-600 text-base">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="hover:text-blue-600 transition-colors w-[max-content]">
                    USA: +91 02 2585 0556
                  </p>
                  <p className="hover:text-blue-600 transition-colors w-[max-content]">
                    UK: +61 02 2585 0556
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-600 text-base">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="hover:text-blue-600 transition-colors">
                    Contacthelp@Demoui.co
                  </p>
                  <p className="hover:text-blue-600 transition-colors">
                    Info@Demoui.co
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 md:mt-16 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <span className="text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()} Consultic by fleexstudio. All Rights
            Reserved.
          </span>
          <div className="flex gap-3">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="hover:bg-blue-100 hover:text-blue-600 bg-gray-100 text-gray-700 rounded-full p-2 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
