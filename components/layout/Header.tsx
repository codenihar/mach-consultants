"use client";
import { ChevronDown, PhoneCall, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full bg-white shadow-sm lg:bg-transparent lg:shadow-none">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 z-50">
            <img src="/logo.png" alt="Logo" className="w-6 h-6" />
            <span className="text-lg font-bold text-gray-700">
              Consultia Insurance
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 font-bold text-gray-700">
            <a href="#" className="cursor-pointer hover:text-black text-md">
              About Us
            </a>
            <a href="#" className="cursor-pointer hover:text-black text-md">
              Coverages
            </a>
            <a href="#" className="cursor-pointer hover:text-black text-md">
              File a Claim
            </a>
            <a href="#" className="cursor-pointer hover:text-black text-md">
              Blog
            </a>
            <a href="#" className="cursor-pointer hover:text-black text-md">
              Contact
            </a>
          </nav>

          {/* Desktop Hotline */}
          <div className="hidden lg:flex items-center gap-3 rounded-full px-4 py-1">
            <div className="bg-blue-600 p-2 rounded-full text-white cursor-pointer">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div className="text-sm text-gray-700">
              <div className="text-md text-gray-600">Hotline 24/7</div>
              <div className="font-bold text-gray-700 text-lg">
                +49 30 9233255
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
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
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 px-6 z-40">
            <nav className="flex flex-col space-y-4 font-bold text-gray-700">
              <a
                href="#"
                className="cursor-pointer hover:text-black text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-black text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Coverages
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-black text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                File a Claim
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-black text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-black text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>

            {/* Mobile Hotline */}
            <div className="flex items-center gap-3 mt-6 px-2 py-3 border-t border-gray-100">
              <div className="bg-blue-600 p-2 rounded-full text-white cursor-pointer">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="text-md text-gray-700">
                <div className="text-md text-gray-600">Hotline 24/7</div>
                <div className="font-bold text-gray-700 text-xl">
                  +49 30 9233255
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
