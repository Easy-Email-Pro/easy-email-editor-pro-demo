import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import imageSrc from "./assets/seasonal-sale.png";
import heroThumbnail from "./assets/screenshots/seasonal-sale-1-warm-seasonal-offer.png";
import splitThumbnail from "./assets/screenshots/seasonal-sale-2-gift-guide-feature.png";

const seasonalSaleBlocks: PrebuiltBlock[] = [
  {
    title: "Warm Seasonal Offer",
    category: "Seasonal Sale",
    thumbnail: heroThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#2B2118",
        "padding-top": "34px",
        "padding-bottom": "34px",
        "padding-left": "30px",
        "padding-right": "30px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: { width: "58%", "vertical-align": "middle" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#E9C58D",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "12px",
              },
              children: [{ text: "MEMBER WEEKEND" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#FFFFFF",
                "font-size": "54px",
                "font-weight": "bold",
                "line-height": "100%",
                "padding-bottom": "8px",
              },
              children: [{ text: "25% OFF" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#F5E8D3",
                "font-size": "16px",
                "line-height": "155%",
                "padding-bottom": "22px",
              },
              children: [
                {
                  text: "A coupon-style block for limited drops, early access, and warm seasonal offers.",
                },
              ],
            },
            {
              type: "standard-button",
              data: { content: "CODE WARM25" },
              attributes: {
                align: "left",
                "background-color": "#FFF8EF",
                color: "#2B2118",
                "border-radius": "0px",
                "font-size": "16px",
                "font-weight": "bold",
                "inner-padding-top": "13px",
                "inner-padding-bottom": "13px",
                "inner-padding-left": "24px",
                "inner-padding-right": "24px",
              },
              children: [{ text: "CODE WARM25" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "42%", "vertical-align": "middle" },
          children: [
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: imageSrc,
                width: "230px",
                "border-radius": "18px",
                "padding-bottom": "18px",
              },
              children: [{ text: "" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#F5E8D3",
                "font-size": "13px",
                "line-height": "150%",
              },
              children: [{ text: "Ends Sunday at midnight" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    title: "Gift Guide Feature",
    category: "Seasonal Sale",
    thumbnail: splitThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFF8EF",
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
                color: "#9A5B2F",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "10px",
              },
              children: [{ text: "THREE QUICK PICKS" }],
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
              children: [{ text: "Build a gift guide in one section" }],
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
                color: "#9A5B2F",
                "font-size": "34px",
                "font-weight": "bold",
                "padding-bottom": "8px",
              },
              children: [{ text: "01" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#101828",
                "font-size": "17px",
                "font-weight": "bold",
                "padding-bottom": "8px",
              },
              children: [{ text: "Cozy set" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#667085",
                "font-size": "13px",
                "line-height": "150%",
                "padding-left": "6px",
                "padding-right": "6px",
              },
              children: [{ text: "Texture-led bundles for home rituals." }],
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
                color: "#9A5B2F",
                "font-size": "34px",
                "font-weight": "bold",
                "padding-bottom": "8px",
              },
              children: [{ text: "02" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#101828",
                "font-size": "17px",
                "font-weight": "bold",
                "padding-bottom": "8px",
              },
              children: [{ text: "Bright notes" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#667085",
                "font-size": "13px",
                "line-height": "150%",
                "padding-left": "6px",
                "padding-right": "6px",
              },
              children: [{ text: "Small citrus-inspired add-ons." }],
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
                color: "#9A5B2F",
                "font-size": "34px",
                "font-weight": "bold",
                "padding-bottom": "8px",
              },
              children: [{ text: "03" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#101828",
                "font-size": "17px",
                "font-weight": "bold",
                "padding-bottom": "8px",
              },
              children: [{ text: "Ready wrap" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#667085",
                "font-size": "13px",
                "line-height": "150%",
                "padding-left": "6px",
                "padding-right": "6px",
              },
              children: [{ text: "Gift-ready finishing touches." }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "100%" },
          children: [
            {
              type: "standard-button",
              data: { content: "Open the gift guide" },
              attributes: {
                align: "center",
                "background-color": "#9A5B2F",
                color: "#FFFFFF",
                "border-radius": "8px",
                "font-weight": "bold",
                "inner-padding-top": "13px",
                "inner-padding-bottom": "13px",
                "inner-padding-left": "26px",
                "inner-padding-right": "26px",
                "padding-top": "26px",
              },
              children: [{ text: "Open the gift guide" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];

export const SeasonalSales = () => {
  return (
    <PrebuiltBlockGallery
      title="Seasonal Sales"
      description="Warm promotional sections for holiday edits, gift guides, and limited seasonal collections."
      blocks={seasonalSaleBlocks}
    />
  );
};
