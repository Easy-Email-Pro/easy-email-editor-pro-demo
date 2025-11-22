import React from "react";
import { pricingBlocks } from "@/examples/Full/prebuiltBlocks/pricing";
import { PrebuiltBlockGallery } from "./PrebuiltBlockGallery";

export const Pricings = () => {
  return (
    <PrebuiltBlockGallery
      title="Pricing"
      description="Pricing table sections for plan comparison, offers, and purchase decisions."
      blocks={pricingBlocks}
    />
  );
};
