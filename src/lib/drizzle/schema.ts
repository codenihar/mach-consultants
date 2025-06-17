import { relations } from "drizzle-orm";
import {
  date,
  index,
  integer,
  pgTable,
  smallint,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  type: varchar("type", { length: 20 })
    .notNull()
    .$type<"publication" | "blog">()
    .default("blog"),
  featured_image_url: text("featured_image_url"),
  preference: integer("preference").notNull().default(1),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const contentBlocks = pgTable(
  "content_blocks",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    blog_id: uuid("blog_id")
      .notNull()
      .references(() => blogs.id, { onDelete: "cascade" }),
    block_type: varchar("block_type", { length: 20 })
      .notNull()
      .$type<"header" | "paragraph">(),
    block_order: integer("block_order").notNull(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (contentBlocks) => ({
    blogIdIndex: index("idx_content_blocks_blog_id").on(contentBlocks.blog_id),
    blogOrderIndex: index("idx_content_blocks_order").on(
      contentBlocks.blog_id,
      contentBlocks.block_order
    ),
  })
);

export const headerBlocks = pgTable("header_blocks", {
  block_id: uuid("block_id")
    .primaryKey()
    .references(() => contentBlocks.id, { onDelete: "cascade" }),
  text: text("text").notNull(),
  level: smallint("level").notNull(),
});

export const paragraphBlocks = pgTable("paragraph_blocks", {
  block_id: uuid("block_id")
    .primaryKey()
    .references(() => contentBlocks.id, { onDelete: "cascade" }),
  text: text("text").notNull(),
});

export const blogRelations = relations(blogs, ({ many }) => ({
  contentBlocks: many(contentBlocks),
}));

export const contentBlockRelations = relations(contentBlocks, ({ one }) => ({
  blog: one(blogs, {
    fields: [contentBlocks.blog_id],
    references: [blogs.id],
  }),

  headerBlock: one(headerBlocks, {
    fields: [contentBlocks.id],
    references: [headerBlocks.block_id],
  }),

  paragraphBlock: one(paragraphBlocks, {
    fields: [contentBlocks.id],
    references: [paragraphBlocks.block_id],
  }),
}));

export const headerBlockRelations = relations(headerBlocks, ({ one }) => ({
  contentBlock: one(contentBlocks, {
    fields: [headerBlocks.block_id],
    references: [contentBlocks.id],
  }),
}));

export const paragraphBlockRelations = relations(
  paragraphBlocks,
  ({ one }) => ({
    contentBlock: one(contentBlocks, {
      fields: [paragraphBlocks.block_id],
      references: [contentBlocks.id],
    }),
  })
);
