import { Space } from "@arco-design/web-react";
import React from "react";
import { BlockManager } from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";
import { MarketingShopwindowElement, MarketingType } from "easy-email-pro-kit";

const imgList: Array<{ payload: MarketingShopwindowElement }> = [
  {
    payload: {
      type: "marketing-shopwindow",
      data: {
        list: [
          {
            src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/sx9iemawisklnrsn_nx4f_image.png",
          },
          {
            src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/kcb_901pyt2rxsckj52xp_image.png",
          },
          {
            src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/1lfgm24de1_nve5jz8b5e_image.png",
          },
        ],
      },
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/myq4jbifahf4zdbqvgnkt_shopwindow.gif",
      },
      children: [
        {
          text: "",
        },
      ],
    },
  },
];

export function Shopwindow() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {imgList.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          MarketingType.MARKETING_SHOPWINDOW
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
              <img
                src={item.payload.attributes.src}
                style={{
                  width: "50%",
                  borderRadius: item.payload.attributes["border-radius"],
                }}
              />
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
