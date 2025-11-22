import { Space } from "@arco-design/web-react";
import React from "react";
import { BlockManager } from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";
import { AmpReviewsElement, KitElementType } from "easy-email-pro-kit";

type ReviewsVariant = {
  label: string;
  payload: AmpReviewsElement;
};

const list: ReviewsVariant[] = [
  {
    label: "Classic — Yellow stars",
    payload: {
      type: KitElementType.AMP_REVIEWS,
      data: {
        titleText: "Share your feedback with us.",
        titleColor: "#111827",
        subtitleText:
          "Rate us on the basis of previous purchases and interactions with us!",
        subtitleColor: "#6b7280",
        actionXhr: "https://example.com/api/form",
        submitButtonText: "Send Feedback",
        successMessage: "Thank you! Your feedback has been submitted.",
        errorMessage: "Submission failed. Please try again.",
        ratingFieldName: "rating",
        starColorFilled: "#ffc107",
        starColorUnfilled: "#e0e0e0",
        textareaPlaceholder: "Please enter your feedback here...",
        textareaName: "feedback",
        textareaRequired: true,
        buttonBackgroundColor: "#000000",
        buttonTextColor: "#ffffff",
        buttonBorderRadius: 8,
        successMessageBackgroundColor: "#d4edda",
        successMessageTextColor: "#155724",
        errorMessageBackgroundColor: "#f8d7da",
        errorMessageTextColor: "#721c24",
        loadingText: "Submitting your feedback...",
        ratingRequiredMessage: "Please select a star rating before submitting.",
        loadingBackgroundColor: "#cce5ff",
        loadingTextColor: "#004085",
      },
      attributes: {
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "20px",
        "padding-right": "20px",
        "background-color": "#ffffff",
      },
      children: [{ text: "" }],
    },
  },
  {
    label: "Purple — Soft theme",
    payload: {
      type: KitElementType.AMP_REVIEWS,
      data: {
        titleText: "Rate your experience",
        titleColor: "#5b21b6",
        subtitleText: "Your opinion helps us improve.",
        subtitleColor: "#6b7280",
        actionXhr: "https://example.com/api/review",
        submitButtonText: "Submit",
        successMessage: "Thanks for your review!",
        errorMessage: "Something went wrong.",
        ratingFieldName: "stars",
        starColorFilled: "#7c3aed",
        starColorUnfilled: "#e5e7eb",
        textareaPlaceholder: "Tell us more (optional)...",
        textareaName: "comment",
        textareaRequired: false,
        buttonBackgroundColor: "#7c3aed",
        buttonTextColor: "#ffffff",
        buttonBorderRadius: 12,
        successMessageBackgroundColor: "#ede9fe",
        successMessageTextColor: "#5b21b6",
        errorMessageBackgroundColor: "#fee2e2",
        errorMessageTextColor: "#991b1b",
        loadingText: "Submitting...",
        ratingRequiredMessage: "Please select a rating.",
        loadingBackgroundColor: "#ede9fe",
        loadingTextColor: "#5b21b6",
      },
      attributes: {
        "padding-top": "24px",
        "padding-bottom": "24px",
        "padding-left": "24px",
        "padding-right": "24px",
        "background-color": "#faf5ff",
      },
      children: [{ text: "" }],
    },
  },
  {
    label: "Dark — Minimal",
    payload: {
      type: KitElementType.AMP_REVIEWS,
      data: {
        titleText: "How did we do?",
        titleColor: "#f3f4f6",
        subtitleText: "One quick question.",
        subtitleColor: "#9ca3af",
        actionXhr: "https://example.com/api/form",
        submitButtonText: "Send",
        successMessage: "Received. Thank you.",
        errorMessage: "Please try again.",
        ratingFieldName: "rating",
        starColorFilled: "#f59e0b",
        starColorUnfilled: "#4b5563",
        textareaPlaceholder: "Comments (optional)",
        textareaName: "feedback",
        textareaRequired: false,
        buttonBackgroundColor: "#374151",
        buttonTextColor: "#ffffff",
        buttonBorderRadius: 0,
        successMessageBackgroundColor: "#1f2937",
        successMessageTextColor: "#d1d5db",
        errorMessageBackgroundColor: "#450a0a",
        errorMessageTextColor: "#fca5a5",
        loadingText: "Sending...",
        ratingRequiredMessage: "Select a rating.",
        loadingBackgroundColor: "#374151",
        loadingTextColor: "#d1d5db",
      },
      attributes: {
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "20px",
        "padding-right": "20px",
        "background-color": "#111827",
      },
      children: [{ text: "" }],
    },
  },
];

const TOTAL_STARS = 5;

function ReviewsPreview({ item }: { item: ReviewsVariant }) {
  const { payload } = item;
  const d = payload.data;
  const bg = payload.attributes?.["background-color"] ?? "#ffffff";
  const title = d?.titleText?.trim() ?? "Title";
  const subtitle = d?.subtitleText?.trim() ?? "Subtitle";
  const titleColorPreview = d?.titleColor?.trim() || (bg === "#111827" || bg === "#1e293b" ? "#f3f4f6" : "#111827");
  const subtitleColorPreview = d?.subtitleColor?.trim() || (bg === "#111827" || bg === "#1e293b" ? "#9ca3af" : "#6b7280");
  const starFilled = d?.starColorFilled ?? "#ffc107";
  const starUnfilled = d?.starColorUnfilled ?? "#e0e0e0";
  const placeholder = d?.textareaPlaceholder?.trim() ?? "Feedback...";
  const btnBg = d?.buttonBackgroundColor ?? "#000000";
  const btnColor = d?.buttonTextColor ?? "#ffffff";
  const btnRadius = Math.min(24, Math.max(0, Number(d?.buttonBorderRadius) ?? 8));
  const btnText = d?.submitButtonText?.trim() ?? "Submit";

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
        backgroundColor: bg,
        padding: "14px 16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: titleColorPreview,
          marginBottom: 4,
        }}
      >
        {title.slice(0, 32)}
        {title.length > 32 ? "…" : ""}
      </div>
      <div
        style={{
          fontSize: 10,
          color: subtitleColorPreview,
          marginBottom: 10,
          lineHeight: 1.3,
        }}
      >
        {subtitle.slice(0, 42)}
        {subtitle.length > 42 ? "…" : ""}
      </div>
      <div
        style={{
          display: "flex",
          gap: 2,
          marginBottom: 8,
        }}
      >
        {Array.from({ length: TOTAL_STARS }, (_, i) => (
          <span
            key={i}
            style={{
              fontSize: 14,
              color: i < 3 ? starFilled : starUnfilled,
            }}
          >
            ★
          </span>
        ))}
      </div>
      <div
        style={{
          height: 36,
          border: "1px solid #e0e0e0",
          backgroundColor: "#ffffff",
          marginBottom: 8,
          fontSize: 9,
          color: "#6b7280",
          padding: "6px 8px",
          boxSizing: "border-box",
        }}
      >
        {placeholder.slice(0, 36)}…
      </div>
      <div
        style={{
          padding: "6px 14px",
          fontSize: 10,
          fontWeight: 600,
          backgroundColor: btnBg,
          color: btnColor,
          borderRadius: btnRadius,
          display: "block",
          width: "100%",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        {btnText}
      </div>
      <div
        style={{
          marginTop: 8,
          fontSize: 9,
          color: "#94a3b8",
        }}
      >
        {item.label}
      </div>
    </div>
  );
}

export function AmpReviews() {
  return (
    <Space direction="vertical" style={{ width: "100%", gap: 12 }}>
      {list.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          KitElementType.AMP_REVIEWS
        );
        const element = blockDefinition?.create(item.payload);
        return (
          <SharedComponents.DragItem key={index} element={element}>
            <div
              className="block-list-menu-popover-item"
              style={{
                width: "100%",
                padding: "12px 16px",
                display: "flex",
                alignItems: "stretch",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100%", maxWidth: 260 }}>
                <ReviewsPreview item={item} />
              </div>
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
