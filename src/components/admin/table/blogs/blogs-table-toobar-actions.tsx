"use client";

import { Blog } from "@/actions/blogs/blogs.types";
import type { Table } from "@tanstack/react-table";
import { DeleteBlogDialog } from "@/components/admin/table/blogs/delete-blog-dialog";
import { CreateBlogSheet } from "@/components/admin/table/blogs/create-blog-sheet";

interface BlogsTableToolbarActionsProps {
  table: Table<Blog>;
}

export function BlogsTableToolbarActions({
  table,
}: BlogsTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {table.getFilteredSelectedRowModel().rows.length > 0 ? (
        <DeleteBlogDialog
          blogs={table
            .getFilteredSelectedRowModel()
            .rows.map((row) => row.original)}
          onSuccess={() => table.toggleAllRowsSelected(false)}
        />
      ) : null}
      <CreateBlogSheet />
    </div>
  );
}
