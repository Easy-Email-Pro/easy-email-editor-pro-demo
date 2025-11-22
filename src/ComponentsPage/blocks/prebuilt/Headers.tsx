import React from "react";
import { header } from "@/examples/Full/prebuiltBlocks/header";
import { PrebuiltBlockGallery } from "./PrebuiltBlockGallery";

export const Headers = () => {
  return (
    <PrebuiltBlockGallery
      title="Headers"
      description="Complete email header sections with brand, navigation, and announcement layouts."
      blocks={header}
    />
  );
};
