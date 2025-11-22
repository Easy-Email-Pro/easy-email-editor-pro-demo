import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import imageSrc from "./assets/app-promo.png";
import launchThumbnail from "./assets/screenshots/app-promo-1-app-launch-hero.png";
import featureThumbnail from "./assets/screenshots/app-promo-2-mobile-feature-card.png";

const appPromoBlocks: PrebuiltBlock[] = [
  {
    title: "App Launch Hero",
    category: "App Promo",
    thumbnail: launchThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#0F172A",
        "padding-top": "34px",
        "padding-bottom": "34px",
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
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#67E8F9",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "12px",
              },
              children: [{ text: "LAUNCH METRICS" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "31px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-left": "34px",
                "padding-right": "34px",
                "padding-bottom": "24px",
              },
              children: [{ text: "Show the outcome before the feature list" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "33.33%" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "36px",
                "font-weight": "bold",
                "padding-bottom": "6px",
              },
              children: [{ text: "4.8x" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#CBD5E1",
                "font-size": "13px",
              },
              children: [{ text: "faster review" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "33.33%" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "36px",
                "font-weight": "bold",
                "padding-bottom": "6px",
              },
              children: [{ text: "12k" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#CBD5E1",
                "font-size": "13px",
              },
              children: [{ text: "tasks synced" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "33.33%" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "36px",
                "font-weight": "bold",
                "padding-bottom": "6px",
              },
              children: [{ text: "98%" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#CBD5E1",
                "font-size": "13px",
              },
              children: [{ text: "uptime" }],
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
              data: { content: "View the release" },
              attributes: {
                align: "center",
                "background-color": "#67E8F9",
                color: "#0F172A",
                "border-radius": "999px",
                "font-weight": "bold",
                "inner-padding-top": "13px",
                "inner-padding-bottom": "13px",
                "inner-padding-left": "26px",
                "inner-padding-right": "26px",
                "padding-top": "28px",
              },
              children: [{ text: "View the release" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    title: "Mobile Feature Card",
    category: "App Promo",
    thumbnail: featureThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#ECF8F8",
        "padding-top": "30px",
        "padding-bottom": "30px",
        "padding-left": "26px",
        "padding-right": "26px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: { width: "44%", "vertical-align": "middle" },
          children: [
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: imageSrc,
                width: "250px",
                "border-radius": "18px",
              },
              children: [{ text: "" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "56%", "vertical-align": "middle" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#087A8B",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "1px",
                "padding-bottom": "12px",
              },
              children: [{ text: "FEATURE CHECKLIST" }],
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
                "padding-bottom": "16px",
              },
              children: [{ text: "What changed in this release" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#475467",
                "font-size": "15px",
                "line-height": "150%",
                "padding-bottom": "8px",
              },
              children: [{ text: "01  Faster dashboard loading" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#475467",
                "font-size": "15px",
                "line-height": "150%",
                "padding-bottom": "8px",
              },
              children: [{ text: "02  Cleaner mobile reports" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#475467",
                "font-size": "15px",
                "line-height": "150%",
                "padding-bottom": "18px",
              },
              children: [{ text: "03  Saved views across devices" }],
            },
            {
              type: "standard-button",
              data: { content: "See details" },
              attributes: {
                align: "left",
                "background-color": "#087A8B",
                color: "#FFFFFF",
                "border-radius": "8px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "22px",
                "inner-padding-right": "22px",
              },
              children: [{ text: "See details" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];

export const AppPromos = () => {
  return (
    <PrebuiltBlockGallery
      title="App Promos"
      description="Clean product-update sections for app launches, SaaS announcements, and mobile feature releases."
      blocks={appPromoBlocks}
    />
  );
};
