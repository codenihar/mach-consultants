"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function CreateBlogSheet() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center ">
      <Button
        variant="outline"
        size="sm"
        onClick={() => router.push("/a/articles/new")}
      >
        <Plus />
        New Blog
      </Button>
    </div>
  );
}
