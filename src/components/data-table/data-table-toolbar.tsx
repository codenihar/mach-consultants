"use client";

import type { Table } from "@tanstack/react-table";
import * as React from "react";
import { cn } from "@/lib/utils";
import { DataTableFilterField } from "@/lib/data-table/types";

interface DataTableToolbarProps<TData>
  extends React.HTMLAttributes<HTMLDivElement> {
  table: Table<TData>;
  filterFields?: DataTableFilterField<TData>[];
}

export function DataTableToolbar<TData>({
  table,
  filterFields = [],
  children,
  className,
  ...props
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const { searchableColumns, filterableColumns } = React.useMemo(() => {
    return {
      searchableColumns: filterFields.filter((field) => !field.options),
      filterableColumns: filterFields.filter((field) => field.options),
    };
  }, [filterFields]);

  return (
    <div
      role="toolbar"
      aria-orientation="horizontal"
      className={cn(
        "flex w-full items-center justify-between gap-2 overflow-auto",
        className
      )}
      {...props}
    >
      <div className="flex flex-1 items-center gap-2">
        <div className="flex items-center gap-2">{children}</div>
      </div>
    </div>
  );
}
