import { Space } from "@arco-design/web-react";
import React from "react";
import { BlockManager } from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";
import { AmpAccordionElement, KitElementType } from "easy-email-pro-kit";

type AccordionVariant = {
  label: string;
  payload: AmpAccordionElement;
};

const list: AccordionVariant[] = [
  {
    label: "FAQ — Shipping & returns",
    payload: {
      type: KitElementType.AMP_ACCORDION,
      data: {
        sections: [
          {
            header: "How long does shipping take?",
            content:
              "Standard delivery takes 5–7 business days. Express shipping (2–3 days) is available at checkout. You'll receive a tracking number once your order ships.",
            expanded: true,
          },
          {
            header: "What is your return policy?",
            content:
              "We offer a 30-day hassle-free return policy. Items must be unused and in original packaging. Contact our support team to initiate a return.",
            expanded: false,
          },
          {
            header: "How can I track my order?",
            content:
              "After your order ships, you'll get an email with a tracking link. You can also log into your account and view order status under \"My Orders\".",
            expanded: false,
          },
        ],
      },
      attributes: {
        animate: true,
        "expand-single-section": false,
        "disable-session-states": false,
        "background-color": "#ffffff",
        "header-background-color": "#f5f6f8",
        "header-color": "#1a1a2e",
        "content-background-color": "#ffffff",
        "content-color": "#4a4a4a",
      },
      children: [{ text: "" }],
    },
  },
  {
    label: "Compact — Single expand",
    payload: {
      type: KitElementType.AMP_ACCORDION,
      data: {
        sections: [
          {
            header: "How do I use this?",
            content: "Quick steps: 1) Open the app. 2) Sign in. 3) Start creating. Replace this with your own copy.",
            expanded: false,
          },
          {
            header: "Where is my data stored?",
            content: "Your data is stored securely and only you can access it. Replace this with your own copy.",
            expanded: false,
          },
        ],
      },
      attributes: {
        animate: true,
        "expand-single-section": true,
        "disable-session-states": false,
        "background-color": "#f8fafc",
        "header-background-color": "#e2e8f0",
        "header-color": "#0f172a",
        "content-background-color": "#ffffff",
        "content-color": "#475569",
      },
      children: [{ text: "" }],
    },
  },
  {
    label: "Dark — Minimal",
    payload: {
      type: KitElementType.AMP_ACCORDION,
      data: {
        sections: [
          {
            header: "Question one",
            content: "Short answer or description. Keep it concise.",
            expanded: true,
          },
          {
            header: "Question two",
            content: "Another short answer. Edit in the panel after adding.",
            expanded: false,
          },
          {
            header: "Question three",
            content: "Third item. You can add more sections in the editor.",
            expanded: false,
          },
        ],
      },
      attributes: {
        animate: true,
        "expand-single-section": true,
        "disable-session-states": false,
        "background-color": "#1e293b",
        "header-background-color": "#334155",
        "header-color": "#f1f5f9",
        "content-background-color": "#0f172a",
        "content-color": "#cbd5e1",
      },
      children: [{ text: "" }],
    },
  },
];

function AccordionPreview({ item }: { item: AccordionVariant }) {
  const { payload } = item;
  const sections = payload.data?.sections ?? [];
  const headerBg = payload.attributes?.["header-background-color"] ?? "#f5f6f8";
  const headerColor = payload.attributes?.["header-color"] ?? "#1a1a2e";
  const contentBg = payload.attributes?.["content-background-color"] ?? "#ffffff";
  const contentColor = payload.attributes?.["content-color"] ?? "#4a4a4a";
  const expandedIndex = sections.findIndex((s) => s?.expanded);
  const openIndex = expandedIndex >= 0 ? expandedIndex : 0;

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {sections.slice(0, 4).map((section, i) => (
        <div key={i}>
          <div
            style={{
              padding: "8px 12px",
              fontSize: 11,
              fontWeight: 600,
              backgroundColor: headerBg,
              color: headerColor,
              borderBottom: i < sections.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
            }}
          >
            {(section?.header ?? "").slice(0, 28)}
            {(section?.header?.length ?? 0) > 28 ? "…" : ""}
          </div>
          {i === openIndex && (
            <div
              style={{
                padding: "6px 12px 10px",
                fontSize: 10,
                lineHeight: 1.4,
                backgroundColor: contentBg,
                color: contentColor,
                borderBottom: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              {(section?.content ?? "").slice(0, 52)}…
            </div>
          )}
        </div>
      ))}
      <div
        style={{
          padding: "4px 12px",
          fontSize: 9,
          color: "#94a3b8",
          backgroundColor: payload.attributes?.["background-color"] ?? "#fff",
        }}
      >
        {item.label}
      </div>
    </div>
  );
}

export function AmpAccordion() {
  return (
    <Space direction="vertical" style={{ width: "100%", gap: 12 }}>
      {list.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          KitElementType.AMP_ACCORDION
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
                <AccordionPreview item={item} />
              </div>
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
