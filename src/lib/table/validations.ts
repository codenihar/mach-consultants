import { parseAsInteger } from "nuqs/server";

export const commonParsers = {
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(10),
};
