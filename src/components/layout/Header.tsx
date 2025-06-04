"use client";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
        hasScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto p-5 md:p-3 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 z-30">
            <img src="/logo.png" alt="Logo" className="w-6 h-6" />
            <span className="text-md lg:text-lg font-bold text-gray-700">
              Consultia Insurance
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-10 font-bold text-gray-700">
            <a
              href="#"
              className="cursor-pointer hover:text-black text-sm lg:text-md"
            >
              About Us
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-black text-sm lg:text-md"
            >
              Coverages
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-black text-sm lg:text-md"
            >
              File a Claim
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-black text-sm lg:text-md"
            >
              Blog
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-black text-sm lg:text-md"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Hotline */}
          <div className="hidden md:flex items-center gap-3 rounded-full px-4 py-1">
            <div className="bg-blue-600 p-2 rounded-full text-white cursor-pointer">
              <PhoneCall className="w-3 h-3 lg:w-6 lg:h-6" />
            </div>
            <div className="text-sm text-gray-700">
              <div className="lg:text-md text-gray-600">Hotline 24/7</div>
              <div className="font-bold text-gray-700 text-md lg:text-lg">
                +49 30 9233255
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="absolute right-2 z-50 md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
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
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="lg:hidden w-full absolute top-0 left-0 right-0 z-40 bg-white shadow-lg rounded-b-lg py-4 px-6 overflow-hidden"
            >
              <div className="flex items-center gap-2 pt-1 pb-5">
                <img src="/logo.png" alt="Logo" className="w-6 h-6" />
                <span className="text-md lg:text-lg font-bold text-gray-700">
                  Consultia Insurance
                </span>
              </div>

              <nav className="flex flex-col space-y-4 font-bold text-gray-700">
                <a
                  href="#"
                  className="cursor-pointer hover:text-black text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="cursor-pointer hover:text-black text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Coverages
                </a>
                <a
                  href="#"
                  className="cursor-pointer hover:text-black text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  File a Claim
                </a>
                <a
                  href="#"
                  className="cursor-pointer hover:text-black text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="cursor-pointer hover:text-black text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Hotline */}
              <div className="flex items-center gap-3 mt-3 py-3 border-t border-gray-100">
                <div className="bg-blue-600 p-2 rounded-full text-white cursor-pointer">
                  <PhoneCall className="w-3 h-3 md:w-6 md:h-6" />
                </div>
                <div className="text-sm text-gray-700">
                  <div className="text-sm text-gray-600">Hotline 24/7</div>
                  <div className="font-bold text-gray-700 text-md">
                    +49 30 9233255
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
