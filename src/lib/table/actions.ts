"use server";
import { revalidateTag, unstable_noStore } from "next/cache";
import { db } from "@/lib/db/index";
import { blogs } from "@/lib/drizzle/schema";
import { inArray } from "drizzle-orm";
import { getErrorMessage } from "@/lib/error";

export async function deleteBlogs(input: { id: string[] }) {
  unstable_noStore();
  try {
    await db.delete(blogs).where(inArray(blogs.id, input.id));
    revalidateTag("blogs");

    return {
      data: null,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}
