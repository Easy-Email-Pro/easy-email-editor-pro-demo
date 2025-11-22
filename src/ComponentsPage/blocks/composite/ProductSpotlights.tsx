import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import imageSrc from "./assets/headphones-spotlight.png";
import immersiveProductHeroThumbnail from "./assets/screenshots/product-spotlight-1-immersive-product-hero.png";
import twoColumnProductStoryThumbnail from "./assets/screenshots/product-spotlight-2-two-column-product-story.png";

const productSpotlightBlocks: PrebuiltBlock[] = [
  {
    title: "Immersive Product Hero",
    category: "Product Spotlight",
    thumbnail: immersiveProductHeroThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F7F3ED",
        "padding-top": "0px",
        "padding-bottom": "34px",
        "padding-left": "0px",
        "padding-right": "0px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "100%",
          },
          children: [
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: imageSrc,
                width: "600px",
                "padding-top": "0px",
                "padding-bottom": "28px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [{ text: "" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#1F2933",
                "font-size": "34px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "40px",
                "padding-right": "40px",
              },
              children: [{ text: "Quiet detail. Full sound." }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5F6C72",
                "font-size": "16px",
                "line-height": "160%",
                "padding-top": "0px",
                "padding-bottom": "24px",
                "padding-left": "58px",
                "padding-right": "58px",
              },
              children: [
                {
                  text: "A premium listening experience built for focused work, travel, and quiet everyday rituals.",
                },
              ],
            },
            {
              type: "standard-button",
              data: { content: "Shop the collection" },
              attributes: {
                align: "center",
                "background-color": "#111827",
                color: "#FFFFFF",
                "border-radius": "999px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "14px",
                "inner-padding-bottom": "14px",
                "inner-padding-left": "28px",
                "inner-padding-right": "28px",
                "padding-top": "0px",
                "padding-bottom": "0px",
              },
              children: [{ text: "Shop the collection" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    title: "Two Column Product Story",
    category: "Product Spotlight",
    thumbnail: twoColumnProductStoryThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "34px",
        "padding-bottom": "34px",
        "padding-left": "24px",
        "padding-right": "24px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "52%",
            "vertical-align": "middle",
          },
          children: [
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: imageSrc,
                width: "290px",
                "border-radius": "14px",
                "padding-top": "0px",
                "padding-bottom": "0px",
              },
              children: [{ text: "" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "48%",
            "vertical-align": "middle",
          },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#7C5C38",
                "font-size": "12px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "12px",
              },
              children: [{ text: "NEW ARRIVAL" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#101828",
                "font-size": "28px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-bottom": "14px",
              },
              children: [{ text: "Designed for deeper focus" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#667085",
                "font-size": "15px",
                "line-height": "160%",
                "padding-bottom": "22px",
              },
              children: [
                {
                  text: "Comfortable over-ear fit, adaptive noise control, and a balanced sound profile for long sessions.",
                },
              ],
            },
            {
              type: "standard-button",
              data: { content: "Explore features" },
              attributes: {
                align: "left",
                "background-color": "#FFFFFF",
                color: "#101828",
                "border-enabled": true,
                "border-color": "#101828",
                "border-width": "1px",
                "border-radius": "8px",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "22px",
                "inner-padding-right": "22px",
              },
              children: [{ text: "Explore features" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];

export const ProductSpotlights = () => {
  return (
    <PrebuiltBlockGallery
      title="Product Spotlights"
      description="Polished product-led sections with generated local imagery for ecommerce launches and feature stories."
      blocks={productSpotlightBlocks}
    />
  );
};
