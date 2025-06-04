import React from "react";
import { MoveUpRight } from "lucide-react";

const ConsultationForm: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#eaf0fb] px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12">
        {/* Image Section */}
        <div className="order-2 lg:order-1 w-full">
          <div className="relative w-full aspect-[4/5] lg:aspect-[9/10] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/consulting_image.png"
              alt="Consultation"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="order-1 lg:order-2 w-full">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h3 className="text-blue-600 text-sm sm:text-base font-semibold mb-2">
              Free Consultation
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
              Contact us now for a free consultation
            </h2>
            <p className="text-gray-700 my-4 sm:my-6 text-base sm:text-lg">
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
                  type="email"
                  placeholder="Email address*"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="col-span-2">
                <select className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                  <option>Are you a new client?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="max-sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-[max-content] px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
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
