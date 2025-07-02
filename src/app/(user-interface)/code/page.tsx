import React from "react";
import { PreziEmbedCode } from "@/components/user-interface/code/prezi-embed";

export default function PreziEmbed() {
  return (
    <section className="pt-36 pb-24 max-w-7xl mx-auto">
      <div className="flex justify-center items-center">
        <PreziEmbedCode />
      </div>
    </section>
  );
}
