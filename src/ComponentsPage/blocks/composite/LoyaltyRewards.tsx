import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import imageSrc from "./assets/loyalty-rewards.png";
import balanceThumbnail from "./assets/screenshots/loyalty-rewards-1-points-balance.png";
import tiersThumbnail from "./assets/screenshots/loyalty-rewards-2-tier-benefits.png";

const loyaltyRewardsBlocks: PrebuiltBlock[] = [
  {
    title: "Points Balance",
    category: "Loyalty Rewards",
    thumbnail: balanceThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#10251D",
        "padding-top": "30px",
        "padding-bottom": "30px",
        "padding-left": "30px",
        "padding-right": "30px",
      },
      children: [
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
                color: "#D9B66F",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "12px",
              },
              children: [{ text: "REWARDS BALANCE" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#FFFFFF",
                "font-size": "48px",
                "font-weight": "bold",
                "line-height": "105%",
                "padding-bottom": "10px",
              },
              children: [{ text: "840 pts" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#D8E3DA",
                "font-size": "15px",
                "line-height": "155%",
                "padding-bottom": "18px",
              },
              children: [{ text: "160 points until your next reward unlocks." }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#10251D",
                "background-color": "#D9B66F",
                "font-size": "12px",
                "line-height": "100%",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "120px",
                "padding-right": "0px",
              },
              children: [{ text: " " }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#9EB3A8",
                "font-size": "12px",
                "padding-top": "8px",
              },
              children: [{ text: "84% complete" }],
            },
          ],
        },
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
                width: "270px",
                "border-radius": "18px",
              },
              children: [{ text: "" }],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    title: "Tier Benefits",
    category: "Loyalty Rewards",
    thumbnail: tiersThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F6F1E8",
        "padding-top": "32px",
        "padding-bottom": "32px",
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
                color: "#7B613A",
                "font-size": "13px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "10px",
              },
              children: [{ text: "MEMBER TIERS" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#101828",
                "font-size": "28px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-bottom": "24px",
              },
              children: [{ text: "Compare what unlocks next" }],
            },
          ],
        },
        ...["Insider|Free samples|1x points", "Select|Early access|1.5x points", "Studio|Private drops|2x points"].map((item) => {
          const [tier, perk, points] = item.split("|");
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
                  color: "#101828",
                  "font-size": "19px",
                  "font-weight": "bold",
                  "padding-bottom": "10px",
                },
                children: [{ text: tier }],
              },
              {
                type: "standard-paragraph",
                data: {},
                attributes: {
                  align: "center",
                  color: "#667085",
                  "font-size": "13px",
                  "line-height": "160%",
                },
                children: [{ text: `${perk}\n${points}` }],
              },
            ],
          };
        }),
      ],
    } as StandardSectionElement,
  },
];

export const LoyaltyRewards = () => {
  return (
    <PrebuiltBlockGallery
      title="Loyalty Rewards"
      description="Rewards modules for points balances, member tiers, and retention-focused lifecycle emails."
      blocks={loyaltyRewardsBlocks}
    />
  );
};
