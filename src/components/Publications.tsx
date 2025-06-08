"use client";
import { Blog } from "@/lib/types";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const HowItWorksSection: React.FC = () => {
  const [publications, setPublications] = useState<Blog[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchPublications = async () => {
        const response = await fetch("/api/blog");
        const { data } = await response.json();
        setPublications(data);
      };

      fetchPublications();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section className="py-12 md:py-16 bg-white px-4 sm:px-6 font-RecoletaRegular">
      {loading ? (
        <div>
          <p className="text-black text-center">loading...</p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-md md:text-lg lg:text-xl mb-2 sm:mb-3">
            Publications
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-10 md:mb-12 leading-tight">
            View our latest publications
          </h2>

          <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-3">
            {publications &&
              publications.length > 0 &&
              publications.slice(3, 6).map((publication, idx) => (
                <div key={idx} className="flex flex-col items-center text-left">
                  <div className="relative max-h-56 w-full overflow-hidden rounded-xl aspect-square mb-4 sm:mb-6">
                    <img
                      src={publication.featured_image_url}
                      alt={publication.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-1">
                      {publication.title}
                    </h3>
                    <a
                      href={`/blogs/${publication.id}`}
                      className="bg-gray-300 rounded-full p-2 cursor-pointer"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </a>
                  </div>
                  {publication.contentBlocks &&
                    publication.contentBlocks.find(
                      (block) => block.block_type === "paragraph"
                    )?.paragraphBlock?.text && (
                      <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-4">
                        {
                          publication.contentBlocks.find(
                            (block) => block.block_type === "paragraph"
                          )!.paragraphBlock!.text
                        }
                      </p>
                    )}
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorksSection;
