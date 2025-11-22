import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import imageSrc from "./assets/brand-story.png";
import atelierThumbnail from "./assets/screenshots/brand-story-1-atelier-note.png";
import processThumbnail from "./assets/screenshots/brand-story-2-process-highlight.png";

const brandStoryBlocks: PrebuiltBlock[] = [
  {
    title: "Atelier Note",
    category: "Brand Story",
    thumbnail: atelierThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F4F1EA",
        "padding-top": "36px",
        "padding-bottom": "36px",
        "padding-left": "28px",
        "padding-right": "28px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: { width: "32%", "vertical-align": "top" },
          children: [
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: imageSrc,
                width: "168px",
                "border-radius": "999px",
              },
              children: [{ text: "" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "68%", "vertical-align": "top" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#5D4935",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "12px",
              },
              children: [{ text: "FOUNDER LETTER" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#101828",
                "font-size": "30px",
                "font-weight": "bold",
                "line-height": "125%",
                "padding-bottom": "16px",
              },
              children: [{ text: "Why we keep choosing slower materials" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#667085",
                "font-size": "15px",
                "line-height": "165%",
                "padding-bottom": "18px",
              },
              children: [
                {
                  text: "A letter-style block for founders, makers, and teams who need a more personal editorial rhythm.",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#5D4935",
                "font-size": "15px",
                "font-weight": "bold",
              },
              children: [{ text: "Mara, Creative Director" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    title: "Process Highlight",
    category: "Brand Story",
    thumbnail: processThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "34px",
        "padding-bottom": "34px",
        "padding-left": "26px",
        "padding-right": "26px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: { width: "100%" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D4935",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "10px",
              },
              children: [{ text: "OUR PROCESS" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#101828",
                "font-size": "29px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-bottom": "24px",
              },
              children: [{ text: "Three checkpoints before anything ships" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "33.33%", "vertical-align": "top" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D4935",
                "font-size": "16px",
                "font-weight": "bold",
                "letter-spacing": "1px",
                "padding-bottom": "8px",
              },
              children: [{ text: "01 SOURCE" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#667085",
                "font-size": "13px",
                "line-height": "150%",
                "padding-top": "12px",
                "padding-left": "8px",
                "padding-right": "8px",
              },
              children: [{ text: "Choose tactile materials with a clear role." }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "33.33%", "vertical-align": "top" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7A644C",
                "font-size": "16px",
                "font-weight": "bold",
                "letter-spacing": "1px",
                "padding-bottom": "8px",
              },
              children: [{ text: "02 TEST" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#667085",
                "font-size": "13px",
                "line-height": "150%",
                "padding-top": "12px",
                "padding-left": "8px",
                "padding-right": "8px",
              },
              children: [{ text: "Prototype against real daily routines." }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "33.33%", "vertical-align": "top" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#A88A66",
                "font-size": "16px",
                "font-weight": "bold",
                "letter-spacing": "1px",
                "padding-bottom": "8px",
              },
              children: [{ text: "03 FINISH" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#667085",
                "font-size": "13px",
                "line-height": "150%",
                "padding-top": "12px",
                "padding-left": "8px",
                "padding-right": "8px",
              },
              children: [{ text: "Refine details until the edit feels quiet." }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "100%" },
          children: [
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: imageSrc,
                width: "520px",
                "border-radius": "16px",
                "padding-top": "28px",
              },
              children: [{ text: "" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];

export const BrandStories = () => {
  return (
    <PrebuiltBlockGallery
      title="Brand Stories"
      description="Editorial brand sections for craft notes, material stories, and founder-led narratives."
      blocks={brandStoryBlocks}
    />
  );
};
