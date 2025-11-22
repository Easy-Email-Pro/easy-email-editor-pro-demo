import React from "react";
import { featureBlocks } from "@/examples/Full/prebuiltBlocks/feature";
import { PrebuiltBlockGallery } from "./PrebuiltBlockGallery";

export const Features = () => {
  return (
    <PrebuiltBlockGallery
      title="Features"
      description="Feature showcase sections for product benefits, highlights, and supporting imagery."
      blocks={featureBlocks}
    />
  );
};
