import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import imageSrc from "./assets/lookbook-grid.png";
import mosaicThumbnail from "./assets/screenshots/lookbook-grid-1-editorial-mosaic.png";
import stripThumbnail from "./assets/screenshots/lookbook-grid-2-collection-strip.png";

const lookbookGridBlocks: PrebuiltBlock[] = [
  {
    title: "Editorial Mosaic",
    category: "Lookbook Grid",
    thumbnail: mosaicThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F6F1EA",
        "padding-top": "28px",
        "padding-bottom": "28px",
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
                color: "#7A4F2A",
                "font-size": "12px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "8px",
              },
              children: [{ text: "CURATED DROP" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#1F2933",
                "font-size": "31px",
                "font-weight": "bold",
                "line-height": "116%",
                "padding-bottom": "18px",
              },
              children: [{ text: "Four quiet favorites for the week" }],
            },
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: imageSrc,
                width: "520px",
                "border-radius": "18px",
                "padding-bottom": "20px",
              },
              children: [{ text: "" }],
            },
            {
              type: "standard-button",
              data: { content: "Shop the edit" },
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "background-color": "#1F2933",
                "border-enabled": true,
                "border-color": "#1F2933",
                "border-width": "1px",
                "border-radius": "999px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "24px",
                "inner-padding-right": "24px",
              },
              children: [{ text: "Shop the edit" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    title: "Collection Strip",
    category: "Lookbook Grid",
    thumbnail: stripThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "28px",
        "padding-bottom": "28px",
        "padding-left": "22px",
        "padding-right": "22px",
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
                align: "left",
                color: "#111827",
                "font-size": "28px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-bottom": "4px",
              },
              children: [{ text: "The desk reset" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#6B7280",
                "font-size": "14px",
                "line-height": "150%",
                "padding-bottom": "18px",
              },
              children: [{ text: "A compact product strip for edits, recommendations, and weekly arrivals." }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "24%", "vertical-align": "top" },
          children: [
            {
              type: "standard-button",
              data: { content: "1" },
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "background-color": "#7C8B6F",
                "border-enabled": true,
                "border-color": "#7C8B6F",
                "border-width": "1px",
                "border-radius": "18px",
                "font-size": "34px",
                "font-weight": "bold",
                "inner-padding-top": "28px",
                "inner-padding-bottom": "28px",
                "inner-padding-left": "24px",
                "inner-padding-right": "24px",
              },
              children: [{ text: "1" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#111827",
                "font-size": "14px",
                "font-weight": "bold",
                "padding-top": "10px",
              },
              children: [{ text: "Ceramic Cup" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "24%", "vertical-align": "top" },
          children: [
            {
              type: "standard-button",
              data: { content: "2" },
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "background-color": "#B58B62",
                "border-enabled": true,
                "border-color": "#B58B62",
                "border-width": "1px",
                "border-radius": "18px",
                "font-size": "34px",
                "font-weight": "bold",
                "inner-padding-top": "28px",
                "inner-padding-bottom": "28px",
                "inner-padding-left": "24px",
                "inner-padding-right": "24px",
              },
              children: [{ text: "2" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#111827",
                "font-size": "14px",
                "font-weight": "bold",
                "padding-top": "10px",
              },
              children: [{ text: "Canvas Tote" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "24%", "vertical-align": "top" },
          children: [
            {
              type: "standard-button",
              data: { content: "3" },
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "background-color": "#A7B8C8",
                "border-enabled": true,
                "border-color": "#A7B8C8",
                "border-width": "1px",
                "border-radius": "18px",
                "font-size": "34px",
                "font-weight": "bold",
                "inner-padding-top": "28px",
                "inner-padding-bottom": "28px",
                "inner-padding-left": "24px",
                "inner-padding-right": "24px",
              },
              children: [{ text: "3" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#111827",
                "font-size": "14px",
                "font-weight": "bold",
                "padding-top": "10px",
              },
              children: [{ text: "Daily Serum" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "24%", "vertical-align": "top" },
          children: [
            {
              type: "standard-button",
              data: { content: "4" },
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "background-color": "#394150",
                "border-enabled": true,
                "border-color": "#394150",
                "border-width": "1px",
                "border-radius": "18px",
                "font-size": "34px",
                "font-weight": "bold",
                "inner-padding-top": "28px",
                "inner-padding-bottom": "28px",
                "inner-padding-left": "24px",
                "inner-padding-right": "24px",
              },
              children: [{ text: "4" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#111827",
                "font-size": "14px",
                "font-weight": "bold",
                "padding-top": "10px",
              },
              children: [{ text: "Task Lamp" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];

export const LookbookGrids = () => {
  return (
    <PrebuiltBlockGallery
      title="Lookbook Grids"
      description="Mosaic and collection-strip layouts for product edits, gift guides, and recommendation emails."
      blocks={lookbookGridBlocks}
    />
  );
};
