"use client";
import { NavItems } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UserRoundCheck, PhoneIncoming } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  });

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 py-2 w-full transition-all duration-300 font-inter ${
        hasScrolled ? "bg-gray-100 shadow-lg" : "bg-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto p-5 md:p-3 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 z-30">
            <img
              src="https://mach-consultants.com/wp-content/uploads/2022/03/MACH-LOGO-FINAL-01.png"
              alt="Logo"
              className="w-auto h-12 md:h-15"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 md:space-x-5 xl:space-x-6 font-bold text-[#ae2333]">
            {NavItems &&
              NavItems.length > 0 &&
              NavItems.map((nav, index) => (
                <a
                  key={`nav-${index}`}
                  href={nav.route}
                  className="cursor-pointer hover:opacity-80 text-sm xl:text-[1rem]"
                >
                  {nav.name}
                </a>
              ))}
          </nav>

          <a
            href="/#contactUs"
            className="font-bold hidden lg:flex items-center justify-center gap-2 bg-[#075fa4] opacity-95 hover:opacity-100 text-white px-6 py-2 rounded-md transition cursor-pointer w-[max-content] text-md"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden absolute right-3 z-50 p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden w-full absolute top-0 left-0 right-0 z-40 bg-white shadow-lg rounded-b-lg py-4 px-6 overflow-hidden"
            >
              <div className="flex items-center gap-2 pt-3 pb-5">
                <img
                  src="https://mach-consultants.com/wp-content/uploads/2022/03/MACH-LOGO-FINAL-01.png"
                  alt="Logo"
                  className="w-auto h-12 md:h-15"
                />
              </div>

              <nav className="flex flex-col space-y-4 font-bold text-gray-700">
                {NavItems &&
                  NavItems.length > 0 &&
                  NavItems.map((nav) => (
                    <a
                      key={`nav-${nav.name}`}
                      href={nav.route}
                      className="cursor-pointer hover:text-black text-sm py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {nav.name}
                    </a>
                  ))}
              </nav>

              {/* Mobile Hotline */}
              <button className="font-bold hidden lg:flex items-center justify-center gap-2 bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer w-[max-content] text-lg">
                Contact Us
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
