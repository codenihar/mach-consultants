import { blogs } from "@/lib/db/schema";

export type Blog = typeof blogs.$inferSelect;
export type NewBlog = typeof blogs.$inferInsert;

export type ChatResponse = {
  success: boolean;
  data?: Blog;
  error?: string;
};

export type ChatsResponse = {
  success: boolean;
  data?: Blog[];
  error?: string;
};
