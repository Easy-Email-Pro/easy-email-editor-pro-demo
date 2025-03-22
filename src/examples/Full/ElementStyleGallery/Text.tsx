import { Space } from "@arco-design/web-react";
import React from "react";
import { SharedComponents } from "easy-email-pro-theme";
import { BlockManager, ElementType } from "easy-email-pro-core";

const fontList = [48, 32, 27, 24, 18, 16, 14];

export function Text() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {fontList.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          ElementType.STANDARD_PARAGRAPH
        );

        const element = blockDefinition?.create({
          attributes: {
            "font-size": item + "px",
            padding: "10px 25px 10px 25px",
          },
          children: [{ text: item + "px" }],
        });

        return (
          <SharedComponents.DragItem
            key={index}
            element={element}
            style={{ fontSize: item }}
          >
            <div
              className="block-list-menu-popover-item"
              style={{
                fontSize: item,
                width: "100%",
                paddingLeft: 20,
                minHeight: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item}px
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
