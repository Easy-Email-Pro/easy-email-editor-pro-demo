import React from "react";
import { faqBlocks } from "@/examples/Full/prebuiltBlocks/faq";
import { PrebuiltBlockGallery } from "./PrebuiltBlockGallery";

export const Faqs = () => {
  return (
    <PrebuiltBlockGallery
      title="FAQs"
      description="Frequently asked question sections for explaining policies, setup, and product details."
      blocks={faqBlocks}
    />
  );
};
