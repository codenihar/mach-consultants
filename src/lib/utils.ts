import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateTime } from "luxon";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatTimestamp(isoDateString: string): string {
  return DateTime.fromISO(isoDateString, { zone: "utc" })
    .setZone("Asia/Kolkata")
    .toFormat("M/d/yyyy, h:mm:ss a");
}
