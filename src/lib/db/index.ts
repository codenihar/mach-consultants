import { drizzle } from "drizzle-orm/node-postgres";
import { schema } from "../drizzle/schema";
import { Pool } from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment variables.");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
export const db = drizzle(pool, { schema, logger: true });
