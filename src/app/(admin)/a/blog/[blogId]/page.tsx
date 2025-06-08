import React from "react";
import { EditBlog } from "./EditBlog";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

const UpdateBlog = async () => {
  const session = await auth();
  if (!session) redirect("/signin");

  return <EditBlog />;
};

export default UpdateBlog;
