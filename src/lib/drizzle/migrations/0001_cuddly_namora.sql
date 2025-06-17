DROP TABLE "image_blocks" CASCADE;--> statement-breakpoint
DROP TABLE "list_blocks" CASCADE;--> statement-breakpoint
DROP TABLE "list_items" CASCADE;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "preference" integer DEFAULT 1 NOT NULL;