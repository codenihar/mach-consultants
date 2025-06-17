"use client";

import React from "react";
import {
  DataTableFilterField,
  DataTableRowAction,
} from "@/lib/data-table/types";
import { DataTable } from "@/components/data-table/data-table";
import { BlogsService } from "@/actions/blogs/blogs.service";
import { getBlogsColumns } from "@/components/admin/table/blogs/blogs-table-columns";
import { useDataTable } from "@/lib/hooks/use-data-table";
import { Blog } from "@/actions/blogs/blogs.types";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";
import { DeleteBlogDialog } from "@/components/admin/table/blogs/delete-blog-dialog";
import { BlogsTableToolbarActions } from "@/components/admin/table/blogs/blogs-table-toobar-actions";

interface BlogsTableProps {
  promises: Promise<[Awaited<ReturnType<typeof BlogsService.getAdminBlogs>>]>;
}

export function BlogsTable({ promises }: BlogsTableProps) {
  const [{ data, pageCount }] = React.use(promises);

  const [rowAction, setRowAction] =
    React.useState<DataTableRowAction<Blog> | null>(null);

  const columns = React.useMemo(() => getBlogsColumns({ setRowAction }), []);

  const filterFields: DataTableFilterField<Blog>[] = [
    {
      id: "id",
      label: "id ",
      placeholder: "Filter Id...",
    },
    {
      id: "title",
      label: "title",
      placeholder: "Filter title ...",
    },
  ];

  const { table } = useDataTable<Blog>({
    data: data || [],
    columns,
    pageCount,
    initialState: {
      columnPinning: { right: ["actions"] },
    },
    getRowId: (originalRow) => originalRow.id,
    shallow: false,
    clearOnDefault: true,
  });

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table} filterFields={filterFields}>
        <BlogsTableToolbarActions table={table} />
      </DataTableToolbar>

      <DeleteBlogDialog
        open={rowAction?.type === "delete"}
        onOpenChange={() => setRowAction(null)}
        blogs={rowAction?.row.original ? [rowAction?.row.original] : []}
        showTrigger={false}
        onSuccess={() => rowAction?.row.toggleSelected(false)}
      />
    </DataTable>
  );
}
