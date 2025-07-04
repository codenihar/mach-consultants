import { cn } from "@/lib/utils";
import React from "react";

interface PreziEmbedCodeProps {
  width?: number;
  height?: number;
}

export function PreziEmbedCode({
  width = 1140,
  height = 630,
}: PreziEmbedCodeProps) {
  return (
    <iframe
      src="https://prezi.com/p/embed/kyrtydzhg_fq/"
      id="iframe_container"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
      width={width}
      height={height}
      style={{ border: "none" }}
      className={cn(
        "rounded-xl shadow-2xl overflow-hidden",
        "w-full h-[300px]",
        "sm:h-[300px]",
        `md:w-[1140px] md:h-[630px]`
      )}
    />
  );
}
