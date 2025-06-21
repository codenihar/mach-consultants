"use client";
import { TBlogSchema, TContentBlockSchema } from "@/actions/blogs/blogs.types";
import React, { useState } from "react";
import { SubmitButton } from "@/components/admin/submit-button";

interface BlogFormProps {
  type: "update" | "create";
  onSubmit: (formData: FormData) => Promise<void> | void;
  initialData: TBlogSchema | null;
}

export function BlogForm({ type, onSubmit, initialData }: BlogFormProps) {
  const [formData, setFormData] = useState<
    Omit<TBlogSchema, "id" | "created_at" | "updated_at" | "block_order">
  >({
    title: initialData?.title ?? "",
    featured_image_url: initialData?.featured_image_url ?? "",
    contentBlocks: initialData?.contentBlocks ?? [
      {
        block_order: 1,
        block_type: "header",
        headerBlock: { text: "", level: 1 },
      },
      { block_order: 2, block_type: "paragraph", paragraphBlock: { text: "" } },
    ],
    preference: initialData?.preference ?? parseInt("0"),
    type: initialData?.type ?? "blog",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (
    index: number,
    newBlock: TContentBlockSchema
  ) => {
    const newContent = [...formData.contentBlocks];
    newContent[index] = newBlock;
    setFormData((prev) => ({ ...prev, contentBlocks: newContent }));
  };

  const addContentBlock = (type: TContentBlockSchema["block_type"]) => {
    setFormData((prev) => {
      const newOrder = prev.contentBlocks.length + 1;
      let newBlock: TContentBlockSchema;

      switch (type) {
        case "header":
          newBlock = {
            block_order: newOrder,
            block_type: "header",
            headerBlock: { text: "", level: 2 },
          };
          break;
        case "paragraph":
          newBlock = {
            block_order: newOrder,
            block_type: "paragraph",
            paragraphBlock: { text: "" },
          };
          break;
        default:
          return prev;
      }

      return {
        ...prev,
        contentBlocks: [...prev.contentBlocks, newBlock],
      };
    });
  };

  const removeContentBlock = (index: number) => {
    setFormData((prev) => {
      const newBlock = prev.contentBlocks
        .filter((_, i) => i !== index)
        .map((block, i) => ({
          ...block,
          block_order: i + 1,
        }));

      return {
        ...prev,
        contentBlocks: newBlock,
      };
    });
  };

  return (
    <form
      action={onSubmit}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-300"
    >
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Article Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-400"
          placeholder="title"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Featured Image
        </label>
        <input
          type="text"
          id="featured_image_url"
          name="featured_image_url"
          value={formData.featured_image_url}
          onChange={handleChange}
          className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-400"
          placeholder="Image URL"
          required
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="type"
        >
          Article Type
        </label>

        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          className="p-2 text-gray-600 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
          required
        >
          <option value={"blog"}>Blog</option>
          <option value={"publication"}>Publication</option>
        </select>
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="preference"
        >
          Article Preference
        </label>

        <select
          id="preference"
          name="preference"
          value={formData.preference}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          className="p-2 text-gray-600 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
          required
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
        </select>
      </div>

      <div className="mb-6">
        {formData.contentBlocks.length > 0 && (
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content Blocks
          </label>
        )}

        <div className="space-y-4">
          {formData.contentBlocks.map((block, index) => (
            <div key={index} className="rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  {block.block_type}
                </span>

                <button
                  type="button"
                  onClick={() => removeContentBlock(index)}
                  className="cursor-pointer text-red-400 hover:text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>

              {block.block_type === "header" && (
                <div>
                  <select
                    value={block.headerBlock.level}
                    onChange={(e) =>
                      handleContentChange(index, {
                        ...block,
                        headerBlock: {
                          ...block.headerBlock,
                          level: parseInt(e.target.value),
                        },
                      })
                    }
                    className="p-2 text-gray-600 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  >
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                  </select>

                  <input
                    type="text"
                    value={block.headerBlock.text}
                    onChange={(e) =>
                      handleContentChange(index, {
                        ...block,
                        headerBlock: {
                          ...block.headerBlock,
                          text: e.target.value,
                        },
                      })
                    }
                    className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-400"
                    placeholder="Header text"
                  />
                </div>
              )}

              {block.block_type === "paragraph" && (
                <textarea
                  value={block.paragraphBlock.text}
                  onChange={(e) =>
                    handleContentChange(index, {
                      ...block,
                      paragraphBlock: {
                        ...block.paragraphBlock,
                        text: e.target.value,
                      },
                    })
                  }
                  rows={4}
                  className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-400"
                  placeholder="Paragraph text"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex space-x-2 flex-wrap">
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
      </div>

      <input
        type="hidden"
        name="contentBlocks"
        value={JSON.stringify(formData.contentBlocks)}
      />

      <div className="flex justify-end space-x-3">
        <a
          href="/a/dashboard"
          className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-700 rounded-3xl hover:bg-gray-300 transition"
        >
          Cancel
        </a>

        <SubmitButton type={type} />
      </div>
    </form>
  );
}

export default BlogForm;
