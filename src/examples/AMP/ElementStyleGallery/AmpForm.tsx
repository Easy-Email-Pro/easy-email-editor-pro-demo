import { Space } from "@arco-design/web-react";
import React from "react";
import { BlockManager } from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";
import { AmpFormElement, KitElementType } from "easy-email-pro-kit";

const list: Array<{ thumbnail: string; payload: AmpFormElement; }> = [
  {
    thumbnail: 'https://cdn.shopify.com/s/files/1/0863/8971/9346/files/jlw9d02q99tcr_enc8sav_image.png',
    payload: {
      type: KitElementType.AMP_FORM,
      data: {
        fields: [
          { name: "name", type: "text", label: "Name", required: true, placeholder: "Your name" },
          { name: "email", type: "email", label: "Email", required: true, placeholder: "your@email.com" },
          { name: "submit", type: "submit", value: "Subscribe" },
        ],
        successMessage: "Thanks for subscribing!",
        errorMessage: "Subscription failed. Please try again.",
      },
      attributes: {
        "background-color": "#ffffff",
        "button-background-color": "#635bff",
        "button-text-color": "#ffffff",
        "border-radius": "8px",
        "field-border-radius": "6px",
        "label-color": "#32325d",
        "input-color": "#32325d",
        "input-background-color": "#ffffff",
        "item-spacing": "12px",
      },
      children: [{ text: "" }],
    },
  },
  {
    thumbnail: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/ovgq8hdagvwpvjs3ccufx_image.png",
    payload: {
      type: KitElementType.AMP_FORM,
      data: {
        fields: [
          { name: "email", type: "email", label: "Email", required: true, placeholder: "you@example.com" },
          { name: "message", type: "textarea", label: "Message", required: true, placeholder: "Your message..." },
          { name: "submit", type: "submit", value: "Send" },
        ],
        successMessage: "Message sent.",
        errorMessage: "Failed to send.",
      },
      attributes: {
        "background-color": "#f9fafb",
        "button-background-color": "#111827",
        "button-text-color": "#ffffff",
        "border-radius": "6px",
        "field-border-radius": "4px",
        "label-color": "#374151",
        "input-color": "#111827",
        "input-background-color": "#ffffff",
        "item-spacing": "12px",
      },
      children: [{ text: "" }],
    },
  },
  {
    thumbnail: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/2empq_ryniusfwqv318vg_image.png",
    payload: {
      type: KitElementType.AMP_FORM,
      data: {
        fields: [
          { name: "email", type: "email", label: "Email", required: true, placeholder: "Enter email" },
          { name: "submit", type: "submit", value: "Join" },
        ],
        successMessage: "You're on the list.",
        errorMessage: "Please try again.",
      },
      attributes: {
        "background-color": "#1f2937",
        "button-background-color": "#f59e0b",
        "button-text-color": "#111827",
        "border-radius": "4px",
        "field-border-radius": "4px",
        "label-color": "#e5e7eb",
        "input-color": "#111827",
        "input-background-color": "#ffffff",
        "item-spacing": "10px",
      },
      children: [{ text: "" }],
    },
  },
  {
    thumbnail: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/j5sh_tmhtuf0654mu2qri_image.png",
    payload: {
      type: KitElementType.AMP_FORM,
      data: {
        successMessage: "Thank you! Your feedback helps us improve your shopping experience.",
        errorMessage: "Submission failed. Please try again.",
        fields: [
          {
            name: "shop_frequency",
            type: "select",
            label: "How often do you shop online?",
            required: true,
            options: [
              { value: "weekly", label: "Weekly" },
              { value: "monthly", label: "Monthly" },
              { value: "quarterly", label: "A few times a year" },
              { value: "rarely", label: "Rarely" },
            ],
          },
          {
            name: "categories",
            type: "checkbox",
            label: "Which categories do you prefer? (multiple choice)",
            options: [
              { value: "fashion", label: "Fashion & Apparel" },
              { value: "electronics", label: "Electronics" },
              { value: "home", label: "Home & Living" },
              { value: "beauty", label: "Beauty & Personal Care" },
              { value: "food", label: "Food & Beverage" },
            ],
          },
          {
            name: "satisfaction",
            type: "radio",
            label: "How satisfied are you with your last purchase?",
            required: true,
            options: [
              { value: "5", label: "Very satisfied" },
              { value: "4", label: "Satisfied" },
              { value: "3", label: "Neutral" },
              { value: "2", label: "Dissatisfied" },
              { value: "1", label: "Very dissatisfied" },
            ],
          },
          {
            name: "suggestions",
            type: "textarea",
            label: "Any suggestions to improve our service?",
            required: false,
            placeholder: "Share your thoughts...",
          },
          {
            name: "email",
            type: "email",
            label: "Email (optional, for follow-up)",
            required: false,
            placeholder: "your@email.com",
          },
          { name: "submit", type: "submit", value: "Submit Survey" },
        ],
      },
      attributes: {
        "background-color": "#ffffff",
        "button-background-color": "#2563eb",
        "button-text-color": "#ffffff",
        "border-radius": "8px",
        "field-border-radius": "6px",
        "label-color": "#1f2937",
        "input-color": "#374151",
        "input-background-color": "#ffffff",
        "padding-top": "24px",
        "padding-bottom": "24px",
        "padding-left": "24px",
        "padding-right": "24px",
        "item-spacing": "24px",
      },
      children: [{ text: "" }],
    },
  },
];

export function AmpForm() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {list.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          KitElementType.AMP_FORM
        );
        const element = blockDefinition?.create(item.payload);
        return (
          <SharedComponents.DragItem key={index} element={element}>
            <div
              className="block-list-menu-popover-item"
              style={{
                width: "100%",
                padding: "10px 25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={item.thumbnail}
                alt="AMP Form"
                style={{ width: "100%", }}
              />
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
