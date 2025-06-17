CREATE TABLE "blogs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"featured_image_url" text,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "content_blocks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"blog_id" uuid NOT NULL,
	"block_type" varchar(20) NOT NULL,
	"block_order" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "header_blocks" (
	"block_id" uuid PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"level" smallint NOT NULL
);
--> statement-breakpoint
CREATE TABLE "image_blocks" (
	"block_id" uuid PRIMARY KEY NOT NULL,
	"image_url" text NOT NULL,
	"caption" text
);
--> statement-breakpoint
CREATE TABLE "list_blocks" (
	"block_id" uuid PRIMARY KEY NOT NULL,
	"list_style" varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "list_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"list_block_id" uuid NOT NULL,
	"text" text NOT NULL,
	"item_order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "paragraph_blocks" (
	"block_id" uuid PRIMARY KEY NOT NULL,
	"text" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "content_blocks" ADD CONSTRAINT "content_blocks_blog_id_blogs_id_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "header_blocks" ADD CONSTRAINT "header_blocks_block_id_content_blocks_id_fk" FOREIGN KEY ("block_id") REFERENCES "public"."content_blocks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "image_blocks" ADD CONSTRAINT "image_blocks_block_id_content_blocks_id_fk" FOREIGN KEY ("block_id") REFERENCES "public"."content_blocks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_blocks" ADD CONSTRAINT "list_blocks_block_id_content_blocks_id_fk" FOREIGN KEY ("block_id") REFERENCES "public"."content_blocks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items" ADD CONSTRAINT "list_items_list_block_id_list_blocks_block_id_fk" FOREIGN KEY ("list_block_id") REFERENCES "public"."list_blocks"("block_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "paragraph_blocks" ADD CONSTRAINT "paragraph_blocks_block_id_content_blocks_id_fk" FOREIGN KEY ("block_id") REFERENCES "public"."content_blocks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_blogs_published" ON "blogs" USING btree ("published");--> statement-breakpoint
CREATE INDEX "idx_content_blocks_blog_id" ON "content_blocks" USING btree ("blog_id");--> statement-breakpoint
CREATE INDEX "idx_content_blocks_order" ON "content_blocks" USING btree ("blog_id","block_order");--> statement-breakpoint
CREATE INDEX "idx_list_items_order" ON "list_items" USING btree ("list_block_id","item_order");