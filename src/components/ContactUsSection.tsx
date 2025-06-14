import React from "react";
import { MoveUpRight } from "lucide-react";

const ConsultationForm: React.FC = () => {
  return (
    <section
      id="contactUs"
      className="py-12 md:py-16 lg:py-20 bg-pink-50/40 px-4 sm:px-6 md:px-8 font-Inter"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12">
        {/* Image Section */}
        <div className="order-2 lg:order-1 w-full">
          <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://mach-consultants.com/wp-content/uploads/elementor/thumbs/woman-hand-desk-office-qnsnja20favr40urk8g0mnordansyzd26g8act02wc.jpg"
              alt="Consultation"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="order-1 lg:order-2 w-full">
          <div className="max-w-lg">
            <h3 className="text-pink-600 text-sm md:text-md lg:text-lg font-semibold mb-2">
              Free Consultation
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight font-PTSerif italic">
              Contact us now for a free consultation
            </h2>
            <p className="text-gray-700 my-4 sm:my-0 text-base sm:text-md">
              Consultic can handle tech advisory help decide upon the project
              rationale. Leave your contacts below and we'll get back to you
              within 24 hours.
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
              <div>
                <input
                  type="email"
                  placeholder="Email address*"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
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
                <label htmlFor="checkbox" className="text-black">
                  GDPR consent: I authorize MACH to use my data to respond to my
                  request
                </label>
              </div>

              <div className="max-sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-[max-content] px-6 py-3 bg-pink-500 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  Make An Appointment
                  <MoveUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
