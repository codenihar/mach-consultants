"use client";

import { BlogsService } from "@/actions/blogs/blogs.service";
import React, { createContext } from "react";

export const BlogDataContext = createContext<Promise<
  [Awaited<ReturnType<typeof BlogsService.getBlogs>>]
> | null>(null);

export const LayoutWrapper = ({
  children,
  promises,
}: {
  children: React.ReactNode;
  promises: Promise<[Awaited<ReturnType<typeof BlogsService.getBlogs>>]>;
}) => {
  return (
    <BlogDataContext.Provider value={promises}>
      {children}
    </BlogDataContext.Provider>
  );
};
