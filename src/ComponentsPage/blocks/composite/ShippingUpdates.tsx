import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import imageSrc from "./assets/shipping-update.png";
import timelineThumbnail from "./assets/screenshots/shipping-update-1-delivery-timeline.png";
import summaryThumbnail from "./assets/screenshots/shipping-update-2-delivery-summary.png";

const shippingUpdateBlocks: PrebuiltBlock[] = [
  {
    title: "Delivery Timeline",
    category: "Shipping Update",
    thumbnail: timelineThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F7FAFC",
        "padding-top": "32px",
        "padding-bottom": "32px",
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
                color: "#2563EB",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "10px",
              },
              children: [{ text: "ORDER #1048" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#101828",
                "font-size": "30px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-bottom": "26px",
              },
              children: [{ text: "Your package is on the move" }],
            },
          ],
        },
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
                color: "#101828",
                "background-color": "#FFFFFF",
                "font-size": "16px",
                "font-weight": "bold",
                "line-height": "150%",
                "padding-top": "16px",
                "padding-bottom": "10px",
                "padding-left": "22px",
                "padding-right": "22px",
              },
              children: [{ text: "Done: Confirmed" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#667085",
                "background-color": "#FFFFFF",
                "font-size": "13px",
                "padding-bottom": "16px",
                "padding-left": "22px",
                "padding-right": "22px",
              },
              children: [{ text: "May 08, 9:30 AM" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#101828",
                "background-color": "#FFFFFF",
                "font-size": "16px",
                "font-weight": "bold",
                "line-height": "150%",
                "padding-top": "16px",
                "padding-bottom": "10px",
                "padding-left": "22px",
                "padding-right": "22px",
              },
              children: [{ text: "Done: Packed" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#667085",
                "background-color": "#FFFFFF",
                "font-size": "13px",
                "padding-bottom": "16px",
                "padding-left": "22px",
                "padding-right": "22px",
              },
              children: [{ text: "May 09, 11:15 AM" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#2563EB",
                "background-color": "#FFFFFF",
                "font-size": "16px",
                "font-weight": "bold",
                "line-height": "150%",
                "padding-top": "16px",
                "padding-bottom": "10px",
                "padding-left": "22px",
                "padding-right": "22px",
              },
              children: [{ text: "Current: Out for delivery" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#667085",
                "background-color": "#FFFFFF",
                "font-size": "13px",
                "padding-bottom": "16px",
                "padding-left": "22px",
                "padding-right": "22px",
              },
              children: [{ text: "Arriving tomorrow, 2-6 PM" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    title: "Delivery Summary",
    category: "Shipping Update",
    thumbnail: summaryThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "28px",
        "padding-bottom": "28px",
        "padding-left": "26px",
        "padding-right": "26px",
      },
      children: [
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
                width: "235px",
                "border-radius": "16px",
              },
              children: [{ text: "" }],
            },
          ],
        },
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
                color: "#101828",
                "font-size": "28px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-bottom": "16px",
              },
              children: [{ text: "Delivery summary" }],
            },
            ...["Carrier: Express Ground", "ETA: Friday, 2-6 PM", "Address: ending in 042"].map((text) => ({
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#475467",
                "font-size": "15px",
                "line-height": "150%",
                "padding-bottom": "8px",
              },
              children: [{ text }],
            })),
            {
              type: "standard-button",
              data: { content: "Track package" },
              attributes: {
                align: "left",
                "background-color": "#2563EB",
                color: "#FFFFFF",
                "border-radius": "8px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "22px",
                "inner-padding-right": "22px",
                "padding-top": "10px",
              },
              children: [{ text: "Track package" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];

export const ShippingUpdates = () => {
  return (
    <PrebuiltBlockGallery
      title="Shipping Updates"
      description="Transactional-style shipping modules for delivery timelines, order status, and package summaries."
      blocks={shippingUpdateBlocks}
    />
  );
};
