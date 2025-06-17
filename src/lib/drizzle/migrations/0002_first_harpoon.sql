ALTER TABLE "blogs" RENAME COLUMN "published" TO "type";--> statement-breakpoint
DROP INDEX "idx_blogs_published";