import React from "react";
import { NewBlog } from "./NewBlog";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

const AddBlog = async () => {
  const session = await auth();
  if (!session) redirect("/signin");

  return <NewBlog />;
};

export default AddBlog;
