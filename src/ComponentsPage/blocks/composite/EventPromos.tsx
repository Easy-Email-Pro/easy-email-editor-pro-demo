import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import imageSrc from "./assets/event-workshop.png";
import eventDetailCardThumbnail from "./assets/screenshots/event-promo-2-event-detail-card.png";
import workshopInviteThumbnail from "./assets/screenshots/event-promo-1-workshop-invite.png";

const eventPromoBlocks: PrebuiltBlock[] = [
  {
    title: "Workshop Invite",
    category: "Event Promo",
    thumbnail: workshopInviteThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#1F2933",
        "padding-top": "0px",
        "padding-bottom": "36px",
        "padding-left": "0px",
        "padding-right": "0px",
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
                width: "600px",
                "padding-bottom": "30px",
              },
              children: [{ text: "" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#D8B98B",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "12px",
              },
              children: [{ text: "LIVE WORKSHOP" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "32px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-left": "48px",
                "padding-right": "48px",
                "padding-bottom": "14px",
              },
              children: [{ text: "Design a calmer launch calendar" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#D0D5DD",
                "font-size": "16px",
                "line-height": "160%",
                "padding-left": "54px",
                "padding-right": "54px",
                "padding-bottom": "24px",
              },
              children: [
                {
                  text: "Join a practical session on planning campaigns, product stories, and reusable email sections.",
                },
              ],
            },
            {
              type: "standard-button",
              data: { content: "Reserve your seat" },
              attributes: {
                align: "center",
                "background-color": "#D8B98B",
                color: "#111827",
                "border-radius": "999px",
                "font-weight": "bold",
                "inner-padding-top": "14px",
                "inner-padding-bottom": "14px",
                "inner-padding-left": "28px",
                "inner-padding-right": "28px",
              },
              children: [{ text: "Reserve your seat" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    title: "Event Detail Card",
    category: "Event Promo",
    thumbnail: eventDetailCardThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F5F7F6",
        "padding-top": "34px",
        "padding-bottom": "34px",
        "padding-left": "26px",
        "padding-right": "26px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: { width: "46%", "vertical-align": "middle" },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#344054",
                "font-size": "13px",
                "font-weight": "bold",
                "padding-bottom": "10px",
              },
              children: [{ text: "APR 24 / ONLINE" }],
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
              children: [{ text: "A focused hour for better campaigns" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#667085",
                "font-size": "15px",
                "line-height": "160%",
              },
              children: [
                {
                  text: "Walk away with a reusable brief, section checklist, and a cleaner launch sequence.",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: { width: "54%", "vertical-align": "middle" },
          children: [
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: imageSrc,
                width: "300px",
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

export const EventPromos = () => {
  return (
    <PrebuiltBlockGallery
      title="Event Promos"
      description="Generated-image event sections for workshops, webinars, launches, and community announcements."
      blocks={eventPromoBlocks}
    />
  );
};
