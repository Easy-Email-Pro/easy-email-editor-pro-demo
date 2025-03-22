import { Space } from "@arco-design/web-react";
import React from "react";
import {
  BlockManager,
  ElementType,
  StandardButtonElement,
} from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";

const buttonList: Array<{ payload: StandardButtonElement }> = [
  {
    payload: {
      type: "standard-button",
      data: {
        content: "Button",
      },
      attributes: {
        color: "#ffffff",
        "inner-padding-top": "8px",
        "inner-padding-bottom": "8px",
        "background-color": "#000000",
        "border-enabled": true,
        "border-width": "6px",
        "border-color": "#000000",
        "inner-padding-left": "16px",
        "inner-padding-right": "16px",
        "border-radius": "6px",
        "font-weight": "bold",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "padding-left": "25px",
        "padding-right": "25px",
      },
      children: [
        {
          text: "Learn More",
        },
      ],
      id: "yWitECXNJHbw5jKVtCyUP",
    },
  },
  {
    payload: {
      type: "standard-button",
      data: {
        content: "Button",
      },
      attributes: {
        "inner-padding-top": "12px",
        "inner-padding-bottom": "12px",
        "background-color": "#FFFFFF",
        "border-enabled": true,
        "border-width": "1px",
        "border-color": "#000000",
        "inner-padding-left": "20px",
        "inner-padding-right": "20px",
        "border-radius": "6px",
        color: "#000000",
        "line-height": "140%",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "padding-left": "25px",
        "padding-right": "25px",
      },
      children: [
        {
          text: "View Details",
        },
      ],
      id: "yWitECXNJHbw5jKVtCyUP",
    },
  },
  {
    payload: {
      type: "standard-button",
      data: {
        content: "Button",
      },
      attributes: {
        color: "#ffffff",
        "inner-padding-top": "8px",
        "inner-padding-bottom": "8px",
        "background-color": "#000000",
        "border-enabled": true,
        "border-width": "6px",
        "border-color": "#000000",
        "inner-padding-left": "20px",
        "inner-padding-right": "20px",
        "border-radius": "999px",
        "font-weight": "bold",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "padding-left": "25px",
        "padding-right": "25px",
      },
      children: [
        {
          text: "Shop Now",
        },
      ],
      id: "yWitECXNJHbw5jKVtCyUP",
    },
  },
  {
    payload: {
      type: "standard-button",
      data: {
        content: "Button",
      },
      attributes: {
        color: "#000000",
        "inner-padding-top": "10px",
        "inner-padding-bottom": "10px",
        "background-color": "transparent",
        "border-enabled": true,
        "border-width": "1px",
        "border-color": "#000000",
        "inner-padding-left": "20px",
        "inner-padding-right": "20px",
        "border-radius": "0px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "padding-left": "25px",
        "padding-right": "25px",
      },
      children: [
        {
          text: "Get Started",
        },
      ],
      id: "xui1STkHwteb5GWnVlSkD",
    },
  },
];

export function Button() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {buttonList.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          ElementType.STANDARD_BUTTON
        );

        const element = blockDefinition?.create(item.payload);

        return (
          <SharedComponents.DragItem key={index} element={element}>
            <div
              className="block-list-menu-popover-item"
              style={{
                width: "100%",
                minHeight: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 25px 10px 25px",
              }}
            >
              <div style={{}}>
                <div
                  style={{
                    ...item.payload.attributes,
                    boxSizing: "content-box",
                    paddingTop: item.payload.attributes["inner-padding-top"],
                    paddingBottom:
                      item.payload.attributes["inner-padding-bottom"],
                    paddingLeft: item.payload.attributes["inner-padding-left"],
                    paddingRight:
                      item.payload.attributes["inner-padding-right"],
                  }}
                >
                  {(item.payload.children[0] as any)?.text}
                </div>
              </div>
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
