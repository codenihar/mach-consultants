import type { ColumnSort, Row } from "@tanstack/react-table";
import type { SQL } from "drizzle-orm";
import type { z } from "zod";

import type { DataTableConfig } from "@/lib/data-table/config";

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type StringKeyOf<TData> = Extract<keyof TData, string>;

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  count?: number;
}

export interface ExtendedColumnSort<TData> extends Omit<ColumnSort, "id"> {
  id: StringKeyOf<TData>;
}

export type ExtendedSortingState<TData> = ExtendedColumnSort<TData>[];

export type ColumnType = DataTableConfig["columnTypes"][number];

export type FilterOperator = DataTableConfig["globalOperators"][number];

export interface DataTableFilterField<TData> {
  id: StringKeyOf<TData>;
  label: string;
  placeholder?: string;
  options?: Option[];
}

export interface DataTableAdvancedFilterField<TData>
  extends DataTableFilterField<TData> {
  type: ColumnType;
}

export interface DataTableRowAction<TData> {
  row: Row<TData>;
  type: "update" | "delete";
}

export interface QueryBuilderOpts {
  where?: SQL;
  orderBy?: SQL;
  distinct?: boolean;
  nullish?: boolean;
}
