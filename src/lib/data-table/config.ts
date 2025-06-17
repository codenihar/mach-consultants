export type DataTableConfig = typeof dataTableConfig;

export const dataTableConfig = {
  sortOrders: [
    { label: "Asc", value: "asc" as const },
    { label: "Desc", value: "desc" as const },
  ],
  columnTypes: [
    "text",
    "number",
    "date",
    "boolean",
    "select",
    "multi-select",
  ] as const,
  globalOperators: [
    "iLike",
    "notILike",
    "eq",
    "ne",
    "isEmpty",
    "isNotEmpty",
    "lt",
    "lte",
    "gt",
    "gte",
    "isBetween",
    "isRelativeToToday",
    "and",
    "or",
  ] as const,
};
