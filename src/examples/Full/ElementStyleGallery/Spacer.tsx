import { Space } from "@arco-design/web-react";
import React from "react";
import { BlockManager, ElementType } from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";

const spacerList = [10, 15, 20, 30, 50];

export function Spacer() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {spacerList.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          ElementType.STANDARD_SPACER
        );

        const element = blockDefinition?.create({
          attributes: {
            height: item + "px",
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
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#efeeea",
                    position: "relative",
                    height: item,
                    boxShadow: " 3px 3px 3px rgb(0 0 0 / 0.2)",
                    marginRight: "10px",
                    flex: 1,
                  }}
                />
                <div>{item} px</div>
              </div>
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
