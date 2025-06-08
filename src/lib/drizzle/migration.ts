import * as dotenv from "dotenv";
dotenv.config();

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment variables.");
}

const migrationClient = postgres(process.env.DATABASE_URL as string, {
  max: 1,
});

async function main() {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "./src/lib/drizzle/migrations",
  });

  migrationClient.end();
}

main();
