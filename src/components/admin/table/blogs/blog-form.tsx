"use client";

import React from "react";
import {
  blogSchema,
  TBlogSchema,
  TContentBlockSchema,
} from "@/actions/blogs/blogs.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface BlogFormProps {
  type: "update" | "create";
  onSubmit: (data: any) => Promise<void> | void;
  initialData: TBlogSchema | null;
}

function sanitizeInitialData(
  initialData: TBlogSchema | null | undefined
): TBlogSchema | undefined {
  if (!initialData) return undefined;

  return {
    ...initialData,
    contentBlocks: (initialData.contentBlocks ?? []).map((block) => {
      if (block.block_type === "paragraph") {
        return {
          ...block,
          paragraphBlock: {
            ...block.paragraphBlock,
            link: block.paragraphBlock.link ?? "",
          },
        };
      }
      return block;
    }),
  };
}

export function BlogForm({ type, onSubmit, initialData }: BlogFormProps) {
  const form = useForm<TBlogSchema>({
    resolver: zodResolver(blogSchema),
    defaultValues: sanitizeInitialData(initialData) ?? {
      title: "",
      featured_image_url: "",
      type: "blog",
      preference: 0,
      contentBlocks: [
        {
          block_order: 1,
          block_type: "header",
          headerBlock: { text: "", level: 1 },
        },
        {
          block_order: 2,
          block_type: "paragraph",
          paragraphBlock: { text: "", link: "" },
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "contentBlocks",
  });

  const addContentBlock = (block_type: TContentBlockSchema["block_type"]) => {
    const block_order = fields.length + 1;

    switch (block_type) {
      case "header":
        append({
          block_type: "header",
          block_order,
          headerBlock: { text: "", level: 1 },
        });
        break;
      case "paragraph":
        append({
          block_type: "paragraph",
          block_order,
          paragraphBlock: { text: "", link: "" },
        });
        break;
    }
  };

  const handleFinalSubmit = (data: any) => onSubmit(data);
  const handleFormError = (errors: any) => {
    return { error: "Form Errors:", errors };
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(handleFinalSubmit, handleFormError)(e);
        }}
        className="bg-white p-6 rounded-lg shadow-sm border border-gray-300"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="text-gray-600 text-sm my-4">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter blog title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="featured_image_url"
          render={({ field }) => (
            <FormItem className="text-gray-600 text-sm my-4">
              <FormLabel>Featured Image URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="w-full block text-gray-600 text-sm my-4">
              <FormLabel>Article Type</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full my-2">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blog">Blog</SelectItem>
                    <SelectItem value="publication">Publication</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preference"
          render={({ field }) => (
            <FormItem className="w-full block text-gray-500 text-sm my-4">
              <FormLabel>Preference</FormLabel>
              <FormControl>
                <Select
                  value={String(field.value)}
                  onValueChange={(val) => field.onChange(Number(val))}
                >
                  <SelectTrigger className="w-full my-2">
                    <SelectValue placeholder="Select preference">
                      {field.value === 0
                        ? "0"
                        : field.value
                        ? String(field.value)
                        : "Select preference"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }).map((_, i) => (
                      <SelectItem key={i} value={String(i)}>
                        {i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          {fields.map((block, index) => {
            const name = `contentBlocks.${index}` as const;
            return (
              <div key={block.id} className="border rounded p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="uppercase text-xs font-medium text-gray-600">
                    {block.block_type}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                </div>

                {block.block_type === "header" && (
                  <>
                    <FormField
                      control={form.control}
                      name={`${name}.headerBlock.level`}
                      render={({ field }) => (
                        <FormItem className="w-full block text-gray-600 text-sm my-4">
                          <FormLabel>Level</FormLabel>
                          <Select
                            value={String(field.value)}
                            onValueChange={(val) => field.onChange(Number(val))}
                          >
                            <SelectTrigger className="w-full my-2">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">H1</SelectItem>
                              <SelectItem value="2">H2</SelectItem>
                              <SelectItem value="3">H3</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`${name}.headerBlock.text`}
                      render={({ field }) => (
                        <FormItem className="text-gray-600 text-sm my-4">
                          <FormLabel>Text</FormLabel>
                          <FormControl>
                            <Input placeholder="Header text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {block.block_type === "paragraph" && (
                  <>
                    <FormField
                      control={form.control}
                      name={`${name}.paragraphBlock.text`}
                      render={({ field }) => (
                        <FormItem className="text-gray-600 text-sm my-2">
                          <FormControl>
                            <Textarea
                              placeholder="Enter paragraph text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`${name}.paragraphBlock.link`}
                      render={({ field }) => (
                        <FormItem className="text-gray-600 text-sm my-4">
                          <FormLabel>Reference Page Link</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="my-4 flex space-x-2 flex-wrap">
          <button
            type="button"
            onClick={() => addContentBlock("header")}
            className="cursor-pointer px-3 py-1 bg-gray-200 border border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-300 transition text-sm"
          >
            Add Header
          </button>
          <button
            type="button"
            onClick={() => addContentBlock("paragraph")}
            className="cursor-pointer px-3 py-1 bg-gray-200 border border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-300 transition text-sm"
          >
            Add Paragraph
          </button>
        </div>

        <div className="flex justify-end space-x-3">
          <a
            href="/a/dashboard"
            className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-700 rounded-3xl hover:bg-gray-300 transition"
          >
            Cancel
          </a>

          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className={`cursor-pointer px-4 py-2 bg-gray-900 text-white rounded-3xl hover:bg-gray-700 transition ${
              form.formState.isSubmitting && "opacity-70"
            }`}
          >
            {form.formState.isSubmitting ? (
              <>{type === "update" ? "Updating..." : "Creating..."}</>
            ) : (
              <>{type === "update" ? "Update" : "Create"} Blog</>
            )}
          </button>
        </div>
      </form>
    </Form>
  );
}

export default BlogForm;
