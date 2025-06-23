"use client";
import React from "react";
import { motion } from "motion/react";
import { MoveUpRight } from "lucide-react";

export function ConsultationForm({ className }: { className?: string }) {
  return (
    <section id="contactUs" className="py-12 px-4 sm:px-6 md:px-8">
      <div className="bg-[#F4F8FB] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 rounded-4xl max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 w-full overflow-hidden"
        >
          <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/contact-us.jpg"
              alt="Consultation"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>

        <div className="order-1 lg:order-2 w-full max-sm:overflow-hidden">
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <h3 className="text-[#075fa4] text-sm md:text-md lg:text-lg font-semibold mb-2">
              Free Consultation
            </h3>
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#6e3a5e] leading-tight ${className}`}
            >
              Contact us now for a free consultation
            </h2>
            <p className="text-[#6e3a5e] font-semibold my-4 sm:my-0 text-base sm:text-md">
              MACH Consultants can provide strategic advisory to help you define
              and solidify your project's rationale, ensuring it aligns with
              your overall enterprise potential and performance goals. Leave
              your contact details below, and we'll get back to you within 24
              hours
            </p>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="max-sm:col-span-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="max-sm:col-span-2">
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Organization"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="max-sm:col-span-2">
                <input
                  type="email"
                  placeholder="Email address*"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="max-sm:col-span-2">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="col-span-2">
                <select
                  defaultValue=""
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="" disabled hidden>
                    Inquiry type?
                  </option>
                  <option>Support or consulting</option>
                  <option>Conference or speaking</option>
                  <option>Collaboration or research</option>
                  <option>Information request</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="How can we help you?"
                  rows={2}
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="col-span-2 flex items-start gap-2 cursor-pointer">
                <input
                  id="checkbox"
                  type="checkbox"
                  className="cursor-pointer mt-1.5"
                  required
                />
                <label
                  htmlFor="checkbox"
                  className="text-black font-semibold cursor-pointer"
                >
                  GDPR consent: I authorize Mach to use my data to respond to my
                  request
                </label>
              </div>

              <div className="max-sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-[max-content] px-6 py-3 bg-[#075fa4] hover:opacity-90 text-white font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  Make An Appointment
                  <MoveUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
