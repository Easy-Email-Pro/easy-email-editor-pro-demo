import { Space } from "@arco-design/web-react";
import React from "react";
import { BlockManager } from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";
import { AmpCarouselElement, KitElementType } from "easy-email-pro-kit";

const PLACEHOLDER_IMAGE =
  "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/nauku9wpvzwhhzsb-pbwb_image.png";

const list: Array<{ thumbnail: string; payload: AmpCarouselElement }> = [
  {
    thumbnail: PLACEHOLDER_IMAGE,
    payload: {
      type: KitElementType.AMP_CAROUSEL,
      data: {
        list: [
          { src: PLACEHOLDER_IMAGE },
          { src: PLACEHOLDER_IMAGE },
          { src: PLACEHOLDER_IMAGE },
        ],
        showPreview: true,
        previewThumbBorderColor: "#ffae00",
        previewThumbBorderWidth: 3,
      },
      attributes: {
        width: "600",
        height: "400",
        layout: "responsive",
        autoplay: true,
        delay: 5000,
        loop: true,
        "background-color": "",
        "caption-enabled": false,
        "padding-top": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
      },
      children: [{ text: "" }],
    },
  },
  {
    thumbnail: PLACEHOLDER_IMAGE,
    payload: {
      type: KitElementType.AMP_CAROUSEL,
      data: {
        list: [{ src: PLACEHOLDER_IMAGE }, { src: PLACEHOLDER_IMAGE }],
        showPreview: false,
      },
      attributes: {
        width: "400",
        height: "300",
        layout: "responsive",
        autoplay: false,
        loop: true,
        "background-color": "#f5f5f5",
        "padding-top": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
      },
      children: [{ text: "" }],
    },
  },
];

export function AmpCarousel() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {list.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          KitElementType.AMP_CAROUSEL
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
                alt="AMP Carousel"
                style={{ width: "100%", maxHeight: 120, objectFit: "cover" }}
              />
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
