"use client";
import { Blog, ContentBlock } from "@/lib/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface BlogFormProps {
  initialData?: Blog | null;
  onCancel: () => void;
  onSubmit: (blog: Omit<Blog, "id" | "published" | "updated_at">) => void;
  loading: boolean;
}

const BlogForm: React.FC<BlogFormProps> = ({
  onSubmit,
  initialData,
  onCancel,
  loading,
}) => {
  const [fetching, setFetching] = useState(false);
  const { blogId } = useParams();

  useEffect(() => {
    try {
      setFetching(true);
      const fetchBlog = async () => {
        const response = await fetch(`/api/blog?blogId=${blogId}`);
        if (response.ok) {
          const { data } = await response.json();
          setFormData(data);
        }
      };

      if (blogId) {
        fetchBlog();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  }, [blogId]);

  const [formData, setFormData] = useState<
    Omit<Blog, "id" | "published" | "updated_at">
  >({
    title: initialData?.title || "",
    featured_image_url: initialData?.featured_image_url || "",
    contentBlocks: initialData?.contentBlocks || [
      { block_type: "header", headerBlock: { text: "", level: 1 } },
      { block_type: "paragraph", paragraphBlock: { text: "" } },
    ],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (index: number, newBlock: ContentBlock) => {
    const newContent = [...formData.contentBlocks];
    newContent[index] = newBlock;
    setFormData((prev) => ({ ...prev, contentBlocks: newContent }));
  };

  const addContentBlock = (type: ContentBlock["block_type"]) => {
    let newBlock: ContentBlock;

    switch (type) {
      case "header":
        newBlock = {
          block_type: "header",
          headerBlock: { text: "", level: 2 },
        };
        break;
      case "paragraph":
        newBlock = { block_type: "paragraph", paragraphBlock: { text: "" } };
        break;
      default:
        return;
    }

    setFormData((prev) => ({
      ...prev,
      contentBlocks: [...prev.contentBlocks, newBlock],
    }));
  };

  const removeContentBlock = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      contentBlocks: prev.contentBlocks.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (fetching) {
    return <p className="text-black">loading...</p>;
  }

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
        <label className="block text-gray-700 text-md font-bold mb-2">
          Content Blocks
        </label>

        <div className="space-y-4">
          {formData.contentBlocks.map((block, index) => (
            <div key={index} className="border border-gray-200 rounded-md p-4">
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

      <div className="flex justify-end space-x-3">
        <a
          href="/a/dashboard"
          className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-700 rounded-3xl hover:bg-gray-300 transition"
        >
          Cancel
        </a>
        <button
          type="submit"
          className={`cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition ${
            loading && "opacity-70"
          }`}
        >
          {loading ? (
            <>creating...</>
          ) : (
            <>{blogId ? "Update" : "Create"} Blog</>
          )}
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
