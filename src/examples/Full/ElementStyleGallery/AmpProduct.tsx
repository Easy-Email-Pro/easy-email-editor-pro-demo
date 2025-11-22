import { Space } from "@arco-design/web-react";
import React from "react";
import { BlockManager } from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";
import { AmpProductElement, KitElementType } from "easy-email-pro-kit";

const PLACEHOLDER_IMAGE =
  "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/nauku9wpvzwhhzsb-pbwb_image.png";

type ProductVariant = {
  label: string;
  payload: AmpProductElement;
};

const list: ProductVariant[] = [
  {
    label: "Two variants — Red & Blue",
    payload: {
      type: KitElementType.AMP_PRODUCT,
      data: {
        list: [
          {
            src: PLACEHOLDER_IMAGE,
            color: "#d21e1d",
            alt: "Classic Running Sneakers — Red",
            href: "",
            productName: "Classic Running Sneakers",
            description: "Lightweight, breathable. Red.",
            price: "$99.00",
          },
          {
            src: PLACEHOLDER_IMAGE,
            color: "#1978f6",
            alt: "Classic Running Sneakers — Blue",
            href: "",
            productName: "Classic Running Sneakers",
            description: "Lightweight, breathable. Blue.",
            price: "$109.00",
          },
        ],
        buttonText: "Shop now",
      },
      attributes: {
        layout: "responsive",
        "background-color": "#ffffff",
        width: "600px",
        height: "400px",
        "container-border-radius": 12,
        "button-color": "#ffffff",
        "button-width": 100,
        "padding-top": "0px",
        "padding-right": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
      },
      children: [{ text: "" }],
    },
  },
  {
    label: "Single variant — Green",
    payload: {
      "type": "amp-product",
      "data": {
        "list": [
          {
            "src": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/rmfdnt6m3iukrwyrzbggf_image.png",
            "color": "#e45808",
            "alt": "Minimal Canvas Backpack",
            "href": "https://example.com/product",
            "productName": "Minimal Canvas Backpack",
            "description": "Everyday carry, durable fabric.",
            "price": "$79.00"
          },
          {
            "src": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/kn_27ukvspvrs0fth_698_image.png",
            "color": "#2541a1",
            "alt": "Minimal Canvas Backpack",
            "href": "https://example.com/product",
            "productName": "Minimal Canvas Backpack",
            "description": "Everyday carry, durable fabric.",
            "price": "$79.00"
          },
          {
            "src": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/3u3bicpwyzd1m4mmqoix-_image.png",
            "color": "#3eb54b",
            "alt": "Minimal Canvas Backpack",
            "href": "https://example.com/product",
            "productName": "Minimal Canvas Backpack",
            "description": "Everyday carry, durable fabric.",
            "price": "$79.00"
          }
        ],
        "buttonText": "Buy now"
      },
      "attributes": {
        "layout": "responsive",
        "background-color": "#fafafa",
        "width": "400px",
        "height": "300px",
        "container-border-radius": 10,
        "button-color": "#ffffff",
        "button-width": 100,
        "padding-top": "0px",
        "padding-right": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px"
      },
      "children": [
        {
          "text": ""
        }
      ],
      "id": "sF1_UVbNUpQNW--0b-xJy"
    }
  },
  {
    label: "Three variants — Dark theme",
    payload: {
      "type": "amp-product",
      "data": {
        "list": [
          {
            "src": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/nys0l-wtfmiddyk9gck9n_image.png",
            "color": "#7c3aed",
            "alt": "Wireless Earbuds — Lavender",
            "href": "",
            "productName": "Wireless Earbuds",
            "description": "Lavender · 24h battery.",
            "price": "$89.00"
          },
          {
            "src": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/nauku9wpvzwhhzsb-pbwb_image.png",
            "color": "#d21e1d",
            "alt": "Wireless Earbuds — Terracotta",
            "href": "",
            "productName": "Wireless Earbuds",
            "description": "Terracotta · 24h battery.",
            "price": "$94.00"
          },
          {
            "src": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/d6nsa-7ykzlwt3tbgunk_image.png",
            "color": "#27ac41",
            "alt": "Wireless Earbuds — Teal",
            "href": "",
            "productName": "Wireless Earbuds",
            "description": "Teal · 24h battery.",
            "price": "$99.00"
          }
        ],
        "buttonText": "View product"
      },
      "attributes": {
        "layout": "responsive",
        "background-color": "#1f2937",
        "width": "500px",
        "height": "350px",
        "container-border-radius": 10,
        "button-color": "#ffffff",
        "button-width": 100,
        "product-name-color": "#f9fafb",
        "product-description-color": "#9ca3af",
        "product-price-color": "#d1d5db",
        "padding-top": "0px",
        "padding-right": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px"
      },
      "children": [
        {
          "text": ""
        }
      ],
      "id": "1_cYW3O9uMcifTgZpfdNi"
    }
  },
];

function ProductPreview({ item }: { item: ProductVariant; }) {
  const { payload } = item;
  const list = payload.data?.list ?? [];
  const bg = payload.attributes?.["background-color"] ?? "#ffffff";
  const btnTextColor = payload.attributes?.["button-color"] ?? "#ffffff";
  const radius = Number(payload.attributes?.["container-border-radius"]) ?? 10;
  const first = list[0];
  const buttonText = (payload.data?.buttonText ?? "Shop now").slice(0, 20);
  const isDark = bg === "#1f2937" || (bg?.length === 7 && bg.startsWith("#") && parseInt(bg.slice(1), 16) < 0x333333);

  if (list.length === 0) {
    return (
      <div style={{ padding: 20, textAlign: "center", fontSize: 11, color: "#94a3b8" }}>
        No products
      </div>
    );
  }

  const attrs = payload.attributes as Record<string, string | undefined> | undefined;
  const titleColor = attrs?.["product-name-color"] ?? (isDark ? "#f9fafb" : "#111827");
  const descColor = attrs?.["product-description-color"] ?? (isDark ? "#9ca3af" : "#6b7280");
  const priceColor = attrs?.["product-price-color"] ?? (isDark ? "#d1d5db" : "#374151");
  const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  const imageBg = isDark ? "#374151" : "#f3f4f6";

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        boxShadow: isDark ? "0 4px 12px rgba(0,0,0,0.25)" : "0 2px 8px rgba(0,0,0,0.06)",
        border: `1px solid ${borderColor}`,
        backgroundColor: bg,
        borderRadius: radius,
        boxSizing: "border-box",
      }}
    >
      {/* Image: rounded top only, product-photo feel */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4/3",
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
          backgroundColor: imageBg,
          overflow: "hidden",
        }}
      >
        <img
          src={first?.src ?? PLACEHOLDER_IMAGE}
          alt={first?.alt ?? ""}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      <div style={{ padding: "10px 12px 12px", boxSizing: "border-box" }}>
        {/* Color swatches */}
        {list.length > 0 && (
          <div style={{ marginBottom: 8 }}>
            {list.length > 1 && (
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 500,
                  color: descColor,
                  marginBottom: 4,
                  letterSpacing: "0.02em",
                }}
              >
                Color
              </div>
            )}
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap", alignItems: "center" }}>
              {list.map((p, i) => (
                <div
                  key={i}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: p?.color ?? "#9ca3af",
                    border: `2px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.08)"}`,
                    boxSizing: "border-box",
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: titleColor,
            lineHeight: 1.3,
            marginBottom: 2,
            letterSpacing: "-0.01em",
          }}
        >
          {(first?.productName ?? "Product").slice(0, 32)}
          {(first?.productName?.length ?? 0) > 32 ? "…" : ""}
        </div>

        {/* Description */}
        {first?.description && (
          <div
            style={{
              fontSize: 10,
              color: descColor,
              lineHeight: 1.35,
              marginBottom: 6,
            }}
          >
            {(first.description ?? "").slice(0, 36)}
            {(first.description?.length ?? 0) > 36 ? "…" : ""}
          </div>
        )}

        {/* Price */}
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: priceColor,
            marginBottom: 10,
            letterSpacing: "-0.02em",
          }}
        >
          {first?.price ?? "—"}
        </div>

        {/* CTA button: full width, pill style */}
        <div
          style={{
            padding: "8px 14px",
            fontSize: 11,
            fontWeight: 600,
            color: btnTextColor,
            backgroundColor: first?.color ?? "#374151",
            borderRadius: Math.min(radius, 8),
            textAlign: "center",
            width: "100%",
            boxSizing: "border-box",
            letterSpacing: "0.02em",
          }}
        >
          {buttonText}
        </div>
      </div>

      <div
        style={{
          padding: "6px 12px 10px",
          fontSize: 9,
          color: "#94a3b8",
          borderTop: `1px solid ${borderColor}`,
        }}
      >
        {item.label}
      </div>
    </div>
  );
}

export function AmpProduct() {
  return (
    <Space direction="vertical" style={{ width: "100%", gap: 12 }}>
      {list.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          KitElementType.AMP_PRODUCT
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
                <ProductPreview item={item} />
              </div>
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
