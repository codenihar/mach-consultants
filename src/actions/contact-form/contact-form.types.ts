import { z } from "zod";
import { createSearchParamsCache } from "nuqs/server";
import { commonParsers } from "@/lib/table/validations";
import { contactForm } from "@/lib/drizzle/schema";
import { getSortingStateParser } from "@/lib/table/parser";

export type ContactForm = typeof contactForm.$inferSelect;
export type NewContactForm = typeof contactForm.$inferInsert;

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "Name is required").max(100),
  lastName: z.string().max(100),
  organization: z.string().min(1, "Organization is required").max(100),
  email: z
    .string()
    .email("Please enter a valid email")
    .min(1, "Email is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number cannot exceed 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  inquiryType: z.string().min(1, "Inquiry type is required"),
  message: z.string().max(1000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms to proceed" }),
  }),
});
export type TContactFormSchema = z.infer<typeof contactFormSchema>;

export type ContactFormResponse = {
  success: boolean;
  data?: ContactForm;
  error?: string;
};

export type ContactFormsResponse = {
  success: boolean;
  data?: ContactForm[];
  error?: string;
  pageCount: number;
};

export const contactFormSearchParamCache = createSearchParamsCache({
  ...commonParsers,
  sort: getSortingStateParser<ContactForm>().withDefault([]),
});

export type GetContactFormSearchParamsSchema = Awaited<
  ReturnType<typeof contactFormSearchParamCache.parse>
>;
