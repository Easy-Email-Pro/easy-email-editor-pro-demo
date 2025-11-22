import React from "react";
import { ctaBlocks } from "@/examples/Full/prebuiltBlocks/cta";
import { PrebuiltBlockGallery } from "./PrebuiltBlockGallery";

export const Ctas = () => {
  return (
    <PrebuiltBlockGallery
      title="CTAs"
      description="Conversion-focused call-to-action sections for promotional and lifecycle emails."
      blocks={ctaBlocks}
    />
  );
};
