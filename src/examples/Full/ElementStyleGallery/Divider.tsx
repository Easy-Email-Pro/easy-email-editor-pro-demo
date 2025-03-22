import { Space } from "@arco-design/web-react";
import React from "react";
import { BlockManager, ElementType } from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";

const dividerList = [
  {
    "border-width": "2px",
    "border-style": "solid",
    "border-color": "lightgrey",
  },
  {
    "border-width": "2px",
    "border-style": "dashed",
    "border-color": "lightgrey",
  },
  {
    "border-width": "2px",
    "border-style": "dotted",
    "border-color": "lightgrey",
  },
];

export function Divider() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {dividerList.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          ElementType.STANDARD_DIVIDER
        );

        const element = blockDefinition?.create({
          attributes: {
            "border-color": item["border-color"],
            "border-width": item["border-width"],
            "border-style": item["border-style"],
            padding: "10px 25px 10px 25px",
          },
          children: [{ text: "" }],
        });

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
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px 0px 10px 0px",
                  width: "100%",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    borderTopWidth: item["border-width"],
                    borderTopStyle: item["border-style"] as any,
                    borderTopColor: item["border-color"],

                    boxSizing: "content-box",
                    height: item["border-width"],
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    height: "100%",
                    backgroundColor: "#fff",
                    padding: "0px 10px",
                  }}
                >
                  {item["border-style"]}
                </div>
              </div>
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
