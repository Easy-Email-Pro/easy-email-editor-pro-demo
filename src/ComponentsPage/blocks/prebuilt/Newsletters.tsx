import React from "react";
import { newsletterBlocks } from "@/examples/Full/prebuiltBlocks/newsletter";
import { PrebuiltBlockGallery } from "./PrebuiltBlockGallery";

export const Newsletters = () => {
  return (
    <PrebuiltBlockGallery
      title="Newsletters"
      description="Newsletter signup sections for email capture and recurring content subscriptions."
      blocks={newsletterBlocks}
    />
  );
};
