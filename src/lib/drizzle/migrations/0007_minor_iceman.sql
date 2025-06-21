CREATE TABLE "link_blocks" (
	"block_id" uuid PRIMARY KEY NOT NULL,
	"link" text NOT NULL,
	"text" text
);
--> statement-breakpoint
ALTER TABLE "link_blocks" ADD CONSTRAINT "link_blocks_block_id_content_blocks_id_fk" FOREIGN KEY ("block_id") REFERENCES "public"."content_blocks"("id") ON DELETE cascade ON UPDATE no action;