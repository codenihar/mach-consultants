import React from "react";

interface PreziEmbedCodeProps {
  width?: number;
  height?: number;
}

export function PreziEmbedCode({
  width = 560,
  height = 315,
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
      className="rounded-xl shadow-2xl overflow-hidden"
    />
  );
}
