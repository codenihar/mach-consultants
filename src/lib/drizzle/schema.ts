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

export const blogs = pgTable(
  "blogs",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    published: date("published").defaultNow().notNull(),
    featured_image_url: text("featured_image_url"),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
  },
  (blogs) => ({
    publishedIndex: index("idx_blogs_published").on(blogs.published),
  })
);

export const contentBlocks = pgTable(
  "content_blocks",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    blog_id: uuid("blog_id")
      .notNull()
      .references(() => blogs.id, { onDelete: "cascade" }),
    block_type: varchar("block_type", { length: 20 })
      .notNull()
      .$type<"header" | "paragraph" | "list" | "image">(),
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

export const listBlocks = pgTable("list_blocks", {
  block_id: uuid("block_id")
    .primaryKey()
    .references(() => contentBlocks.id, { onDelete: "cascade" }),
  list_style: varchar("list_style", { length: 10 })
    .notNull()
    .$type<"ordered" | "unordered">(),
});

export const listItems = pgTable(
  "list_items",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    list_block_id: uuid("list_block_id")
      .notNull()
      .references(() => listBlocks.block_id, { onDelete: "cascade" }),
    text: text("text").notNull(),
    item_order: integer("item_order").notNull(),
  },
  (listItems) => ({
    listItemOrderIndex: index("idx_list_items_order").on(
      listItems.list_block_id,
      listItems.item_order
    ),
  })
);

export const imageBlocks = pgTable("image_blocks", {
  block_id: uuid("block_id")
    .primaryKey()
    .references(() => contentBlocks.id, { onDelete: "cascade" }),
  image_url: text("image_url").notNull(),
  caption: text("caption"),
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

  listBlock: one(listBlocks, {
    fields: [contentBlocks.id],
    references: [listBlocks.block_id],
  }),

  imageBlock: one(imageBlocks, {
    fields: [contentBlocks.id],
    references: [imageBlocks.block_id],
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

export const listBlockRelations = relations(listBlocks, ({ one, many }) => ({
  contentBlock: one(contentBlocks, {
    fields: [listBlocks.block_id],
    references: [contentBlocks.id],
  }),
  listItems: many(listItems),
}));

export const listItemRelations = relations(listItems, ({ one }) => ({
  listBlock: one(listBlocks, {
    fields: [listItems.list_block_id],
    references: [listBlocks.block_id],
  }),
}));

export const imageBlockRelations = relations(imageBlocks, ({ one }) => ({
  contentBlock: one(contentBlocks, {
    fields: [imageBlocks.block_id],
    references: [contentBlocks.id],
  }),
}));
