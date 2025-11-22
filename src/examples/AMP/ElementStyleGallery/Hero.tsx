import { Space } from "@arco-design/web-react";
import React from "react";
import { SharedComponents } from "easy-email-pro-theme";
import {
  BlockManager,
  ElementType,
  StandardHeroElement,
} from "easy-email-pro-core";

const heroList: Array<{ thumbnail: string; payload: StandardHeroElement }> = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/vj3xfzs79yhnkdfzodk5b_image.png",
    payload: {
      type: "standard-hero",
      data: {},
      attributes: {
        "background-color": "#ffffff",
        "background-position": "center center",
        mode: "fluid-height",
        "padding-top": "100px",
        "padding-bottom": "100px",
        "padding-left": "0px",
        "padding-right": "0px",
        "vertical-align": "top",
        "background-image-enabled": true,
        "background-url":
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/yecylq1z0ztxepvg7cvjt_image.png",
      },
      children: [
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            "font-size": "45px",
            padding: "10px 25px 10px 25px",
            "line-height": "45px",
            align: "center",
            color: "#ffffff",
          },
          children: [{ text: "We Serve Healthy &amp; Delicious Foods" }],
        },
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            "font-size": "14px",
            padding: "10px 25px 10px 25px",
            "line-height": "1.5",
            align: "center",
            color: "#ffffff",
          },
          children: [
            {
              text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            },
          ],
        },
        {
          type: "standard-button",
          data: {},
          attributes: {
            align: "center",
            "background-color": "#f3a333",
            color: "#ffffff",
            "font-size": "13px",
            "font-weight": "normal",
            "border-radius": "30px",
            "padding-top": "10px",
            "padding-bottom": "10px",
            "padding-left": "25px",
            "padding-right": "25px",
            "inner-padding-top": "10px",
            "inner-padding-bottom": "10px",
            "inner-padding-left": "25px",
            "inner-padding-right": "25px",
            "line-height": "120%",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            href: "",
          },
          children: [{ text: "Get Your Order Here!" }],
        },
      ],
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/sniz6lkv11emjq05ez6yt_image.png",
    payload: {
      type: "standard-hero",
      data: {},
      attributes: {
        "background-color": "#ffffff",
        "background-position": "center center",
        mode: "fluid-height",
        "padding-top": "0px",
        "padding-bottom": "100px",
        "padding-left": "0px",
        "padding-right": "0px",
        "vertical-align": "top",
        "background-image-enabled": true,
        "background-url":
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/obzuzrensqjsv7fyp7bwg_image.png",
      },
      children: [
        {
          type: "standard-button",
          data: {},
          attributes: {
            "font-size": "24px",
            padding: "10px 25px 10px 25px",
            "line-height": "45px",
            align: "center",
            color: "#ffffff",
            "border-enabled": true,
            "border-width": "2px",
            "border-style": "solid",
            "border-color": "#ffffff",
            "font-weight": "500",
            "background-color": "transparent",
            "inner-padding-top": "10px",
            "inner-padding-bottom": "4px",
            "inner-padding-left": "15px",
            "inner-padding-right": "15px",
            "border-radius": "0px",
          },
          children: [{ text: "WINTER" }],
        },
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            align: "center",
            color: "#ffffff",
            "font-size": "30px",
            "font-weight": "normal",
            "padding-top": "10px",
            "padding-bottom": "10px",
            "padding-left": "15px",
            "padding-right": "15px",
          },
          children: [{ text: "WINTER IS COMING" }],
        },
        {
          type: "standard-paragraph",
          attributes: {
            "font-size": "16px",
            padding: "10px 25px 10px 25px",
            "line-height": "1.5",
            align: "center",
            color: "#ffffff",
          },
          data: {},
          children: [
            {
              text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            },
          ],
        },
        {
          type: "standard-button",
          attributes: {
            "border-radius": "30px",
            "font-weight": "500",
            "background-color": "#448ef6",
            "padding-top": "30px",
            "padding-bottom": "10px",
            "padding-left": "25px",
            "padding-right": "25px",
          },
          data: {},
          children: [{ text: "Read more" }],
        },
      ],
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/bitwcxrojoqlwhvvmc9xj_image.png",
    payload: {
      type: "standard-hero",
      data: {},
      attributes: {
        "background-color": "#ffffff",
        "background-position": "center center",
        mode: "fluid-height",
        "padding-top": "0px",
        "padding-bottom": "100px",
        "background-image-enabled": true,
        "padding-left": "0px",
        "padding-right": "0px",
        "vertical-align": "top",
        "background-url":
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/jrrwhfkftmmkxhbcgeznd_image.png",
      },
      children: [
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            align: "center",
            color: "#ffffff",
            "font-size": "30px",
            "font-weight": "normal",
            "padding-top": "80px",
            "padding-bottom": "10px",
            "padding-left": "25px",
            "padding-right": "25px",
          },
          children: [
            {
              type: "html-block-node",
              children: [
                {
                  text: "Up to 50% off ",
                },
              ],
              data: {
                tagName: "div",
              },
              attributes: {},
              id: "YbaqtT6bSkB89a6XFvAme",
            },
            {
              type: "html-block-node",
              data: {
                tagName: "div",
              },
              attributes: {},
              children: [
                {
                  text: "Selected Womens Items",
                },
              ],
            },
          ],
        },
        {
          type: "standard-paragraph",
          attributes: {
            "font-size": "16px",
            padding: "10px 25px 10px 25px",
            "line-height": "1.5",
            align: "center",
            color: "#ffffff",
          },
          data: {},
          children: [
            {
              text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            },
          ],
        },
        {
          type: "standard-button",
          attributes: {
            "border-radius": "5px",
            "font-weight": "500",
            "background-color": "#ffc0d0",
            padding: "30px 25px 10px 25px",
          },
          data: {},
          children: [{ text: "Start Shopping" }],
        },
      ],
    },
  },
];

export function Hero() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {heroList.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          ElementType.STANDARD_HERO
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
                style={{ width: "100%", maxHeight: "100%" }}
              />
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
