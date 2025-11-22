import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import receiptThumbnail from "./assets/screenshots/order-receipt-1-polished-receipt.png";
import summaryThumbnail from "./assets/screenshots/order-receipt-2-minimal-order-summary.png";

const orderReceiptBlocks: PrebuiltBlock[] = [
  {
    title: "Polished Receipt",
    category: "Order Receipt",
    thumbnail: receiptThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F3F4F6",
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
                align: "left",
                color: "#111827",
                "font-size": "28px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-bottom": "6px",
              },
              children: [{ text: "Thanks, your order is confirmed" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#6B7280",
                "font-size": "14px",
                "padding-bottom": "20px",
              },
              children: [{ text: "Order #1048 · Estimated delivery May 14" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#111827",
                "font-size": "12px",
                "font-weight": "bold",
                "letter-spacing": "1px",
                "padding-bottom": "10px",
              },
              children: [{ text: "ITEMS" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "72%" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: { color: "#111827", "font-size": "15px", "padding-bottom": "8px" },
              children: [{ text: "Ceramic Cup × 1" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: { color: "#111827", "font-size": "15px", "padding-bottom": "8px" },
              children: [{ text: "Canvas Tote × 1" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: { color: "#111827", "font-size": "15px" },
              children: [{ text: "Daily Serum × 1" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "28%" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: { align: "right", color: "#111827", "font-size": "15px", "padding-bottom": "8px" },
              children: [{ text: "$24" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: { align: "right", color: "#111827", "font-size": "15px", "padding-bottom": "8px" },
              children: [{ text: "$38" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: { align: "right", color: "#111827", "font-size": "15px" },
              children: [{ text: "$42" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "100%" },
          children: [
            {
              type: "standard-divider",
              data: {},
              attributes: {
                "border-color": "#D1D5DB",
                "border-style": "solid",
                "border-width": "1px",
                padding: "18px 0px 18px 0px",
              },
              children: [{ text: "" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "72%" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#111827",
                "font-size": "16px",
                "font-weight": "bold",
                "padding-bottom": "8px",
              },
              children: [{ text: "Subtotal" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: { align: "left", color: "#111827", "font-size": "16px", "font-weight": "bold", "padding-bottom": "8px" },
              children: [{ text: "Shipping" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: { align: "left", color: "#111827", "font-size": "18px", "font-weight": "bold" },
              children: [{ text: "Total" }],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "28%" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: { align: "right", color: "#111827", "font-size": "16px", "font-weight": "bold", "padding-bottom": "8px" },
              children: [{ text: "$104" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: { align: "right", color: "#111827", "font-size": "16px", "font-weight": "bold", "padding-bottom": "8px" },
              children: [{ text: "Free" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: { align: "right", color: "#111827", "font-size": "18px", "font-weight": "bold" },
              children: [{ text: "$104" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    title: "Minimal Order Summary",
    category: "Order Receipt",
    thumbnail: summaryThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#111827",
        "padding-top": "30px",
        "padding-bottom": "30px",
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
                color: "#FFFFFF",
                "font-size": "30px",
                "font-weight": "bold",
                "line-height": "116%",
                "padding-bottom": "10px",
              },
              children: [{ text: "Receipt ready" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#CBD5E1",
                "font-size": "14px",
                "line-height": "150%",
                "padding-bottom": "20px",
              },
              children: [{ text: "A compact transactional block for confirmations, renewals, and payment notices." }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "14px",
                "line-height": "180%",
              },
              children: [{ text: "Plan renewal $39  ·  Credit -$10  ·  Tax $2" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "32px",
                "font-weight": "bold",
                "padding-top": "8px",
              },
              children: [{ text: "$31" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];

export const OrderReceipts = () => {
  return (
    <PrebuiltBlockGallery
      title="Order Receipts"
      description="Transactional receipt and order-summary layouts for high-trust confirmation emails."
      blocks={orderReceiptBlocks}
    />
  );
};
