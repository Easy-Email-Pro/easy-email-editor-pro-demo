import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import imageSrc from "./assets/wellness-editorial.png";
import editorialFeatureThumbnail from "./assets/screenshots/editorial-story-1-editorial-feature.png";
import quoteAndImageStoryThumbnail from "./assets/screenshots/editorial-story-2-quote-and-image-story.png";

const editorialStoryBlocks: PrebuiltBlock[] = [
  {
    title: "Editorial Feature",
    category: "Editorial Story",
    thumbnail: editorialFeatureThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "36px",
        "padding-bottom": "36px",
        "padding-left": "28px",
        "padding-right": "28px",
      },
      children: [
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
                width: "544px",
                "border-radius": "18px",
                "padding-bottom": "28px",
              },
              children: [{ text: "" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#47624F",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "12px",
              },
              children: [{ text: "THE EDIT" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#101828",
                "font-size": "30px",
                "font-weight": "bold",
                "line-height": "125%",
                "padding-left": "36px",
                "padding-right": "36px",
                "padding-bottom": "14px",
              },
              children: [
                { text: "Small rituals that make the day feel softer" },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#667085",
                "font-size": "16px",
                "line-height": "165%",
                "padding-left": "48px",
                "padding-right": "48px",
                "padding-bottom": "24px",
              },
              children: [
                {
                  text: "A curated story section for launches that need atmosphere, editorial rhythm, and a clear next step.",
                },
              ],
            },
            {
              type: "standard-button",
              data: { content: "Read the story" },
              attributes: {
                align: "center",
                "background-color": "#47624F",
                color: "#FFFFFF",
                "border-radius": "8px",
                "font-weight": "bold",
                "inner-padding-top": "13px",
                "inner-padding-bottom": "13px",
                "inner-padding-left": "26px",
                "inner-padding-right": "26px",
              },
              children: [{ text: "Read the story" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    title: "Quote and Image Story",
    category: "Editorial Story",
    thumbnail: quoteAndImageStoryThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F2F6F1",
        "padding-top": "34px",
        "padding-bottom": "34px",
        "padding-left": "24px",
        "padding-right": "24px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: { width: "50%", "vertical-align": "middle" },
          children: [
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: imageSrc,
                width: "282px",
                "border-radius": "14px",
              },
              children: [{ text: "" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "50%", "vertical-align": "middle" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#101828",
                "font-size": "27px",
                "font-weight": "bold",
                "line-height": "130%",
                "padding-bottom": "16px",
              },
              children: [
                {
                  text: "A thoughtful way to introduce a collection",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#667085",
                "font-size": "15px",
                "line-height": "165%",
                "padding-bottom": "20px",
              },
              children: [
                {
                  text: "Pair a quiet product image with a concise editorial note, then guide readers into the next section.",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#47624F",
                "font-size": "14px",
                "font-weight": "bold",
              },
              children: [{ text: "Explore the collection ->" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];

export const EditorialStories = () => {
  return (
    <PrebuiltBlockGallery
      title="Editorial Stories"
      description="Editorial image-led sections for lifestyle product launches, brand storytelling, and curated collections."
      blocks={editorialStoryBlocks}
    />
  );
};
