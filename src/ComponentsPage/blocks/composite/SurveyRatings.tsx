import React from "react";
import type { StandardSectionElement } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { PrebuiltBlockGallery } from "../prebuilt/PrebuiltBlockGallery";
import npsThumbnail from "./assets/screenshots/survey-rating-1-nps-score-row.png";
import emojiThumbnail from "./assets/screenshots/survey-rating-2-emoji-feedback.png";

const surveyRatingBlocks: PrebuiltBlock[] = [
  {
    title: "NPS Score Row",
    category: "Survey Rating",
    thumbnail: npsThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#EEF6FF",
        "padding-top": "30px",
        "padding-bottom": "30px",
        "padding-left": "20px",
        "padding-right": "20px",
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
                color: "#0F172A",
                "font-size": "28px",
                "font-weight": "bold",
                "line-height": "120%",
                "padding-bottom": "10px",
              },
              children: [{ text: "How likely are you to recommend us?" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#64748B",
                "font-size": "14px",
                "padding-bottom": "20px",
              },
              children: [{ text: "Tap a score to share quick feedback." }],
            },
          ],
        },
        ...["1", "2", "3", "4", "5"].map((score) => ({
          type: "standard-column",
          data: {},
          attributes: { width: "20%" },
          children: [
            {
              type: "standard-button",
              data: { content: score },
              attributes: {
                align: "center",
                color: "#1D4ED8",
                "background-color": "#FFFFFF",
                "border-enabled": true,
                "border-color": "#BFDBFE",
                "border-width": "1px",
                "border-radius": "999px",
                "font-size": "17px",
                "font-weight": "bold",
                "inner-padding-top": "10px",
                "inner-padding-bottom": "10px",
                "inner-padding-left": "16px",
                "inner-padding-right": "16px",
              },
              children: [{ text: score }],
            },
          ],
        })),
      ],
    } as StandardSectionElement,
  },
  {
    title: "Emoji Feedback",
    category: "Survey Rating",
    thumbnail: emojiThumbnail,
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFF7ED",
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
                color: "#7C2D12",
                "font-size": "12px",
                "font-weight": "bold",
                "letter-spacing": "2px",
                "padding-bottom": "8px",
              },
              children: [{ text: "ONE-TAP SURVEY" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#111827",
                "font-size": "30px",
                "font-weight": "bold",
                "line-height": "116%",
                "padding-bottom": "20px",
              },
              children: [{ text: "How did this feel?" }],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#9A3412",
                "font-size": "14px",
                "padding-bottom": "16px",
              },
              children: [{ text: "Choose the label that matches your experience." }],
            },
          ],
        },
        ...["Bad", "OK", "Good", "Great", "Love"].map((label) => ({
          type: "standard-column",
          data: {},
          attributes: { width: "20%" },
          children: [
            {
              type: "standard-button",
              data: { content: label },
              attributes: {
                align: "center",
                color: "#7C2D12",
                "background-color": "#FFFFFF",
                "border-enabled": true,
                "border-color": "#FED7AA",
                "border-width": "1px",
                "border-radius": "999px",
                "font-size": "13px",
                "font-weight": "bold",
                "inner-padding-top": "10px",
                "inner-padding-bottom": "10px",
                "inner-padding-left": "8px",
                "inner-padding-right": "8px",
              },
              children: [{ text: label }],
            },
          ],
        })),
      ],
    } as StandardSectionElement,
  },
];

export const SurveyRatings = () => {
  return (
    <PrebuiltBlockGallery
      title="Survey Ratings"
      description="Feedback modules for NPS, post-purchase surveys, churn prevention, and onboarding checks."
      blocks={surveyRatingBlocks}
    />
  );
};
