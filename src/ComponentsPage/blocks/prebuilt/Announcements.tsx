import React from "react";
import { announcementBlocks } from "@/examples/Full/prebuiltBlocks/announcement";
import { PrebuiltBlockGallery } from "./PrebuiltBlockGallery";

export const Announcements = () => {
  return (
    <PrebuiltBlockGallery
      title="Announcements"
      description="Announcement sections for launches, updates, maintenance notices, and limited offers."
      blocks={announcementBlocks}
    />
  );
};
