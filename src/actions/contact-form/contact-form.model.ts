import { db } from "@/lib/db";
import { contactForm } from "@/lib/drizzle/schema";
import { unstable_cache } from "next/cache";
import { asc, count, desc, eq } from "drizzle-orm";
import {
  ContactForm,
  GetContactFormSearchParamsSchema,
  NewContactForm,
} from "@/actions/contact-form/contact-form.types";

export class ContactFormModel {
  static async createContact(data: NewContactForm): Promise<ContactForm> {
    const [newContact] = await db.insert(contactForm).values(data).returning();
    return newContact;
  }

  static async getContactFormById(id: string): Promise<ContactForm> {
    const cachedBlog = unstable_cache(
      async () => {
        const data = await db.query.contactForm.findFirst({
          where: eq(contactForm.id, id),
          columns: {
            id: true,
            firstName: true,
            lastName: true,
            organization: true,
            email: true,
            phone: true,
            inquiryType: true,
            message: true,
            consent: true,
            created_at: true,
          },
        });
        return data as ContactForm;
      },
      [`contactForm-${id}`],
      {
        tags: [`contactForm-${id}`],
        revalidate: 3600,
      }
    );

    return await cachedBlog();
  }

  static async getContactForms(input: GetContactFormSearchParamsSchema) {
    const cachedBlogs = unstable_cache(
      async () => {
        try {
          const offset = (input.page - 1) * input.perPage;

          const orderBy =
            input.sort.length > 0
              ? input.sort.map((item) => {
                  return item.desc
                    ? desc(contactForm[item.id])
                    : asc(contactForm[item.id]);
                })
              : [desc(contactForm.created_at)];

          const { data, total } = await db.transaction(async (tx) => {
            const data = await tx
              .select({
                id: contactForm.id,
                firstName: contactForm.firstName,
                lastName: contactForm.lastName,
                organization: contactForm.organization,
                email: contactForm.email,
                phone: contactForm.phone,
                inquiryType: contactForm.inquiryType,
                message: contactForm.message,
                consent: contactForm.consent,
                created_at: contactForm.created_at,
              })
              .from(contactForm)
              .limit(input.perPage)
              .offset(offset)
              .orderBy(...orderBy);

            const total = await tx
              .select({
                count: count(),
              })
              .from(contactForm)
              .execute()
              .then((res) => res[0]?.count ?? 0);

            return { data, total };
          });

          const pageCount = Math.ceil(total / input.perPage);
          return { data, pageCount };
        } catch (error) {
          return { data: [], pageCount: 0 };
        }
      },
      [JSON.stringify(input)],
      {
        revalidate: 3600,
        tags: ["contactForms"],
      }
    );
    return await cachedBlogs();
  }

  static async deleteContactForm(id: string): Promise<boolean> {
    const result = await db
      .delete(contactForm)
      .where(eq(contactForm.id, id))
      .returning({ id: contactForm.id });

    return result.length > 0;
  }
}
