import React from "react";
import { footer } from "@/examples/Full/prebuiltBlocks/footer";
import { PrebuiltBlockGallery } from "./PrebuiltBlockGallery";

export const Footers = () => {
  return (
    <PrebuiltBlockGallery
      title="Footers"
      description="Complete footer sections with links, social proof, and brand closing content."
      blocks={footer}
    />
  );
};
