import React from "react";
import * as motion from "motion/react-client";
import { ContactForm } from "@/components/admin/table/contact-requests/contact-form";
import { NewContactForm } from "@/actions/contact-form/contact-form.types";
import { ContactFormService } from "@/actions/contact-form/contact-form.service";
import { revalidateTag } from "next/cache";

export function ConsultationForm({ className }: { className?: string }) {
  return (
    <section id="contactUs" className="py-12 px-4 sm:px-6 md:px- font-Inter">
      <div className="bg-[#075fa4] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 rounded-4xl max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12">
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
            <h3 className="text-white text-sm md:text-md lg:text-lg font-semibold mb-2">
              Free Consultation
            </h3>

            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white leading-tight ${className}`}
            >
              Contact us now for a free consultation
            </h2>

            <p className="text-gray-300 font-semibold my-4 sm:my-0 text-base sm:text-md">
              MACH Consultants can provide strategic advisory to help you define
              and solidify your project's rationale, ensuring it aligns with
              your overall enterprise potential and performance goals. Leave
              your contact details below, and we'll get back to you within 24
              hours
            </p>

            <ContactForm
              onSubmit={async (
                data: NewContactForm
              ): Promise<{ success: boolean; message: string }> => {
                "use server";
                const response = await ContactFormService.createContact(data);
                if (response.success) {
                  revalidateTag("contactForms");
                  return {
                    success: true,
                    message:
                      "Thank you for reaching out. We'll respond shortly.",
                  };
                }

                return {
                  success: false,
                  message: response?.error as string,
                };
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
