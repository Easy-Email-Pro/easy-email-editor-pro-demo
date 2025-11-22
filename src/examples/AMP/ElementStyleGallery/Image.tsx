import { Space } from "@arco-design/web-react";
import React from "react";
import {
  BlockManager,
  ElementType,
  StandardImageElement,
} from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";

const imgList: Array<{ payload: StandardImageElement }> = [
  {
    payload: {
      type: "standard-image",
      data: {},
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/biqsebynmw5lk3tzfybm1_ymztponegfngeef0cbype.png",
        padding: "10px 25px 10px 25px",
        "padding-left": "0px",
        "padding-right": "0px",
        "padding-top": "0px",
        "padding-bottom": "0px",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "3MhLmoNaMFPcCIwrUfKRy",
    },
  },
  {
    payload: {
      type: "standard-image",
      data: {},
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/iqjhaqfya9drnsmid6hpf_vqp_wxhtulwic189okucr.png",
        padding: "10px 25px 10px 25px",
        "padding-left": "25px",
        "padding-right": "25px",
        "padding-top": "0px",
        "padding-bottom": "0px",
        "border-radius": "15px",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "3MhLmoNaMFPcCIwrUfKRy",
    },
  },
  {
    payload: {
      type: "standard-image",
      data: {},
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/f88wdngiodai49pg8mpce_npr9exwlj4a_tsg0dvl_g.png",
        padding: "10px 25px 10px 25px",
        "padding-left": "25px",
        "padding-right": "25px",
        "padding-top": "0px",
        "padding-bottom": "0px",
        "border-radius": "999px",
        width: "200px",
        height: "200px",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "3MhLmoNaMFPcCIwrUfKRy",
    },
  },
];

export function Image() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {imgList.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          ElementType.STANDARD_IMAGE
        );

        const element = blockDefinition?.create(item.payload);

        return (
          <SharedComponents.DragItem key={index} element={element}>
            <div
              className="block-list-menu-popover-item"
              style={{
                width: "100%",
                padding: "10px 25px 10px 25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.payload.attributes.src}
                  style={{
                    height: item.payload.attributes.height,
                    width: item.payload.attributes.width,
                    borderRadius: item.payload.attributes["border-radius"],
                  }}
                />
              </div>
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
