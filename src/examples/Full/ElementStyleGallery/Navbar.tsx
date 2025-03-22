import { Space } from "@arco-design/web-react";
import React from "react";
import { SharedComponents } from "easy-email-pro-theme";
import {
  BlockManager,
  ElementType,
  NavbarElement,
  StandardNavbarElement,
} from "easy-email-pro-core";

const navbarList: Array<{ thumbnail: string; payload: StandardNavbarElement }> =
  [
    {
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/snf-wzi_7j-4zhd1hsy7x_image.png",
      payload: {
        type: "standard-navbar",
        data: {},
        attributes: {},
        children: [
          {
            data: {},
            type: "standard-navbar-link",
            children: [
              {
                text: "About",
              },
            ],
            attributes: {
              href: "",
            },
            id: "zF2CErqYOdSoWie2HkVQG",
          },
          {
            data: {},
            type: "standard-navbar-link",
            children: [
              {
                text: "Shop",
              },
            ],
            attributes: {
              href: "",
            },
            id: "xDSwKFocxAKhpwlMFdw-F",
          },
          {
            data: {},
            type: "standard-navbar-link",
            children: [
              {
                text: "Contact",
              },
            ],
            attributes: {
              href: "",
            },
            id: "mzpDcMZ-Pw1S1u6ED0qWl",
          },
          {
            data: {},
            type: "standard-navbar-link",
            children: [
              {
                text: "Blog",
              },
            ],
            attributes: {
              href: "",
            },
            id: "MvaRiCXyjwinH2m6nb30u",
          },
        ],
        id: "DkixzoL-7JcEGkTwTD7AI",
      },
    },
  ];

export function Navbar() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {navbarList.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          ElementType.STANDARD_NAVBAR
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
              }}
            >
              <img
                src={item.thumbnail}
                style={{ objectFit: "cover", width: "100%", maxHeight: "100%" }}
              />
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
