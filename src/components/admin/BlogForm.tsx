"use client";
import { Blog, ContentBlock } from "@/lib/types";
import { CircleX } from "lucide-react";
import React, { useState } from "react";

interface BlogFormProps {
  initialData?: Blog | null;
  onCancel: () => void;
  onSubmit: (blog: Omit<Blog, "id" | "published">) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({
  onSubmit,
  initialData,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Omit<Blog, "id" | "published">>({
    title: initialData?.title || "",
    featured_image_url: initialData?.featured_image_url || "",
    content: initialData?.content || [
      { type: "header", data: { text: "Introduction", level: 2 } },
      { type: "paragraph", data: { text: "" } },
    ],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (index: number, newBlock: ContentBlock) => {
    const newContent = [...formData.content];
    newContent[index] = newBlock;
    setFormData((prev) => ({ ...prev, content: newContent }));
  };

  const addContentBlock = (type: ContentBlock["type"]) => {
    let newBlock: ContentBlock;

    switch (type) {
      case "header":
        newBlock = { type: "header", data: { text: "", level: 2 } };
        break;
      case "paragraph":
        newBlock = { type: "paragraph", data: { text: "" } };
        break;
      case "list":
        newBlock = { type: "list", data: { style: "unordered", items: [""] } };
        break;
      case "quote":
        newBlock = { type: "quote", data: { text: "", caption: "" } };
        break;
      case "image":
        newBlock = { type: "image", data: { file: { url: "" }, caption: "" } };
        break;
      default:
        return;
    }

    setFormData((prev) => ({
      ...prev,
      content: [...prev.content, newBlock],
    }));
  };

  const removeContentBlock = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      content: prev.content.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target?.result) {
          const url = e.target.result.toString();

          if (typeof index === "number") {
            const newContent = [...formData.content];
            if (newContent[index].type === "image") {
              (newContent[index] as any).data.file.url = url;
              setFormData((prev) => ({ ...prev, content: newContent }));
            }
          } else {
            setFormData((prev) => ({ ...prev, featured_image_url: url }));
          }
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-300"
    >
      <div className="mb-6">
        <label
          className="block text-gray-700 text-md font-bold mb-2"
          htmlFor="title"
        >
          Blog Title
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
        <label className="block text-gray-700 text-md font-bold mb-2">
          Featured Image
        </label>
        {formData.featured_image_url ? (
          <div className="mb-2">
            <img
              src={formData.featured_image_url}
              alt="Featured"
              className="max-h-48 rounded-md border border-gray-200"
            />
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, featured_image_url: "" }))
              }
              className="cursor-pointer mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 border border-gray-400 text-black rounded-3xl transition text-sm"
            >
              Remove Image
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="featuredImageUpload"
            />
            <label
              htmlFor="featuredImageUpload"
              className="px-4 py-2 border border-gray-300 bg-blue-100 text-gray-700 rounded-2xl hover:bg-blue-200 transition cursor-pointer"
            >
              Upload Featured Image
            </label>
          </div>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-md font-bold mb-2">
          Content Blocks
        </label>

        <div className="space-y-4">
          {formData.content.map((block, index) => (
            <div key={index} className="border border-gray-200 rounded-md p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  {block.type}
                </span>

                <button
                  type="button"
                  onClick={() => removeContentBlock(index)}
                  className="cursor-pointer text-red-400 hover:text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>

              {block.type === "header" && (
                <div>
                  <select
                    value={block.data.level}
                    onChange={(e) =>
                      handleContentChange(index, {
                        ...block,
                        data: {
                          ...block.data,
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
                    value={block.data.text}
                    onChange={(e) =>
                      handleContentChange(index, {
                        ...block,
                        data: { ...block.data, text: e.target.value },
                      })
                    }
                    className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-400"
                    placeholder="Header text"
                  />
                </div>
              )}

              {block.type === "paragraph" && (
                <textarea
                  value={block.data.text}
                  onChange={(e) =>
                    handleContentChange(index, {
                      ...block,
                      data: { ...block.data, text: e.target.value },
                    })
                  }
                  rows={4}
                  className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-400"
                  placeholder="Paragraph text"
                />
              )}

              {block.type === "list" && (
                <div>
                  <select
                    value={block.data.style}
                    onChange={(e) =>
                      handleContentChange(index, {
                        ...block,
                        data: {
                          ...block.data,
                          style: e.target.value as "ordered" | "unordered",
                        },
                      })
                    }
                    className="p-2 text-gray-600 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  >
                    <option value="unordered">Bullet List</option>
                    <option value="ordered">Numbered List</option>
                  </select>

                  {block.data.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex mb-1">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newItems = [...block.data.items];
                          newItems[itemIndex] = e.target.value;
                          handleContentChange(index, {
                            ...block,
                            data: { ...block.data, items: newItems },
                          });
                        }}
                        className="text-gray-500 flex-1 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-400"
                        placeholder="List item"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newItems = block.data.items.filter(
                            (_, i) => i !== itemIndex
                          );
                          handleContentChange(index, {
                            ...block,
                            data: { ...block.data, items: newItems },
                          });
                        }}
                        className="ml-2 px-2 text-red-500 hover:text-red-700"
                      >
                        <CircleX className="cursor-pointer w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => {
                      const newItems = [...block.data.items, ""];
                      handleContentChange(index, {
                        ...block,
                        data: { ...block.data, items: newItems },
                      });
                    }}
                    className="cursor-pointer mt-2 px-4 py-1 bg-gray-200 text-gray-700 rounded-3xl hover:bg-gray-300 transition text-sm"
                  >
                    Add Item
                  </button>
                </div>
              )}

              {block.type === "image" && (
                <div>
                  {block.data.file.url ? (
                    <div>
                      <img
                        src={block.data.file.url}
                        alt={block.data.caption || ""}
                        className={`max-h-48 rounded-md ${
                          block.data.withBorder ? "border border-gray-300" : ""
                        }`}
                      />

                      <div className="mt-2 space-y-2">
                        <input
                          type="text"
                          value={block.data.caption || ""}
                          onChange={(e) =>
                            handleContentChange(index, {
                              ...block,
                              data: { ...block.data, caption: e.target.value },
                            })
                          }
                          className="text-gray-500 w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-400"
                          placeholder="Image caption (optional)"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            handleContentChange(index, {
                              ...block,
                              data: {
                                ...block.data,
                                file: { url: "" },
                                caption: "",
                              },
                            })
                          }
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                        >
                          Remove Image
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, index)}
                        className="hidden"
                        id={`imageUpload-${index}`}
                      />
                      <label
                        htmlFor={`imageUpload-${index}`}
                        className="px-4 py-2 bg-blue-100 border border-gray-300 text-gray-700 rounded-3xl hover:bg-blue-200 transition cursor-pointer"
                      >
                        Upload Image
                      </label>
                    </div>
                  )}
                </div>
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
          <button
            type="button"
            onClick={() => addContentBlock("list")}
            className="cursor-pointer px-3 py-1 bg-gray-200 border border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-300 transition text-sm"
          >
            Add List
          </button>
          <button
            type="button"
            onClick={() => addContentBlock("image")}
            className="cursor-pointer px-3 py-1 bg-gray-200 border border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-300 transition text-sm"
          >
            Add Image
          </button>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-700 rounded-3xl hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="cursor-pointer px-4 py-2 bg-blue-400 text-white rounded-3xl hover:bg-blue-500 transition"
        >
          {initialData ? "Update" : "Create"} Blog
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
