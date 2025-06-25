import { ContactFormModel } from "@/actions/contact-form/contact-form.model";
import {
  ContactFormResponse,
  contactFormSchema,
  ContactFormsResponse,
  GetContactFormSearchParamsSchema,
  NewContactForm,
} from "@/actions/contact-form/contact-form.types";
import { db } from "@/lib/db";
import { contactForm } from "@/lib/drizzle/schema";
import { eq, or } from "drizzle-orm";

export class ContactFormService {
  static async createContact(
    data: NewContactForm
  ): Promise<ContactFormResponse> {
    try {
      const validatedData = contactFormSchema.parse(data);

      const existing = await db.query.contactForm.findFirst({
        where: or(
          eq(contactForm.email, validatedData.email),
          eq(contactForm.phone, validatedData.phone)
        ),
      });

      if (existing) {
        return {
          success: false,
          error: "A submission with this email or phone number already exists.",
        };
      }

      const newForm = await ContactFormModel.createContact(validatedData);
      return {
        success: true,
        data: newForm,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to create contact form",
      };
    }
  }

  static async getContactFormById(id: string): Promise<ContactFormResponse> {
    try {
      const data = await ContactFormModel.getContactFormById(id);
      if (!data) {
        return {
          success: false,
          error: "Contact not found",
        };
      }
      return {
        success: true,
        data: data,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to get contactForm",
      };
    }
  }

  static async getContactForms(
    input: GetContactFormSearchParamsSchema
  ): Promise<ContactFormsResponse> {
    try {
      const contactForms = await ContactFormModel.getContactForms(input);
      return {
        success: true,
        data: contactForms.data,
        pageCount: contactForms.pageCount,
      };
    } catch (error) {
      return { success: false, data: [], pageCount: 0 };
    }
  }

  static async deleteContactForm(id: string): Promise<ContactFormResponse> {
    try {
      const success = await ContactFormModel.deleteContactForm(id);
      if (!success) {
        return {
          success: false,
          error: "ContactForm not found",
        };
      }
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to delete contactForm",
      };
    }
  }
}
