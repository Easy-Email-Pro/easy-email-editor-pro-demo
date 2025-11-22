import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import imageSrc from "./assets/product-comparison.png";
import tableThumbnail from "./assets/screenshots/comparison-block-1-plan-comparison.png";
import pickerThumbnail from "./assets/screenshots/comparison-block-2-pick-your-fit.png";

const comparisonBlocks: PrebuiltBlock[] = [
  {
    title: "Plan Comparison",
    category: "Comparison Block",
    thumbnail: tableThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F8FAFC",
        "padding-top": "30px",
        "padding-bottom": "30px",
        "padding-left": "24px",
        "padding-right": "24px",
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
                color: "#334155",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "10px",
              },
              children: [{ text: "QUICK COMPARE" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#0F172A",
                "font-size": "29px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-bottom": "24px",
              },
              children: [{ text: "Choose the setup that fits" }],
            },
          ],
        },
        ...["Light|$19|Core tools", "Pro|$39|Automation", "Studio|$79|Team controls"].map((item) => {
          const [name, price, feature] = item.split("|");
          return {
            type: "standard-column",
            data: {},
            attributes: { width: "33.33%", "vertical-align": "top" },
            children: [
              {
                type: "standard-paragraph",
                data: {},
                attributes: {
                  align: "center",
                  color: "#0F172A",
                  "font-size": "19px",
                  "font-weight": "bold",
                  "padding-bottom": "8px",
                },
                children: [{ text: name }],
              },
              {
                type: "standard-paragraph",
                data: {},
                attributes: {
                  align: "center",
                  color: "#2563EB",
                  "font-size": "30px",
                  "font-weight": "bold",
                  "padding-bottom": "8px",
                },
                children: [{ text: price }],
              },
              {
                type: "standard-paragraph",
                data: {},
                attributes: {
                  align: "center",
                  color: "#64748B",
                  "font-size": "13px",
                  "line-height": "150%",
                },
                children: [{ text: feature }],
              },
            ],
          };
        }),
      ],
    } as StandardSectionElement,
  },
  {
    title: "Pick Your Fit",
    category: "Comparison Block",
    thumbnail: pickerThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "30px",
        "padding-bottom": "30px",
        "padding-left": "26px",
        "padding-right": "26px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: { width: "48%", "vertical-align": "middle" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#0F172A",
                "font-size": "30px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-bottom": "14px",
              },
              children: [{ text: "Three options. One clear pick." }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#64748B",
                "font-size": "15px",
                "line-height": "160%",
                "padding-bottom": "18px",
              },
              children: [
                {
                  text: "Use this guided selector for product families, bundles, plans, or variants.",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#2563EB",
                "font-size": "15px",
                "font-weight": "bold",
              },
              children: [{ text: "Recommended: Pro" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "52%", "vertical-align": "middle" },
          children: [
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: imageSrc,
                width: "290px",
                "border-radius": "16px",
              },
              children: [{ text: "" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];

export const ComparisonBlocks = () => {
  return (
    <PrebuiltBlockGallery
      title="Comparison Blocks"
      description="Decision-support modules for plan tables, product comparisons, and guided selection emails."
      blocks={comparisonBlocks}
    />
  );
};
