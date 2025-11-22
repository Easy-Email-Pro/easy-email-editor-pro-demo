import { StandardSectionElement } from "easy-email-pro-core";
import { PrebuiltBlock } from "easy-email-pro-theme";

export const ctaBlocks: PrebuiltBlock[] = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/r1cuza9ngqa7zsr4jhefv_2px2rfczhxljdgfnrvsyn.png",
    title: "CTA Promotional",
    category: "CTA",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FF6B6B",
        "padding-top": "60px",
        "padding-bottom": "60px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "100%",
          },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "36px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Limited Time Offer",
                },
              ],
              id: "27Rcz6t58OWrOaCUNHx0x",
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "18px",
                "padding-top": "0px",
                "padding-bottom": "30px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Get 50% off your first month. Offer ends soon!",
                },
              ],
              id: "MWR8k-DPiCwnZZRO6Ymie",
            },
            {
              type: "standard-button",
              data: {
                content: "Claim Your Discount",
              },
              attributes: {
                align: "center",
                "background-color": "#FFFFFF",
                color: "#FF6B6B",
                "border-radius": "8px",
                "padding-top": "18px",
                "padding-bottom": "18px",
                "padding-right": "25px",
                "font-size": "18px",
                "font-weight": "bold",
                "inner-padding-top": "18px",
                "inner-padding-bottom": "18px",
                "inner-padding-left": "40px",
                "inner-padding-right": "40px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Claim Your Discount",
                },
              ],
              id: "bmQr5vZ6wsNt-LIzk_EEy",
            },
          ],
          id: "EFok5lTp2QMjCqpbjKGP-",
        },
      ],
      id: "3GIsjscuLuRdxZTvsGb7k",
    } as StandardSectionElement,
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/wgoo7yo_obkjtim059tc0_ruqpiumbncerx8k0dqkkj.png",
    title: "CTA Two Column",
    category: "CTA",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F5F5F5",
        "padding-top": "40px",
        "padding-bottom": "40px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "60%",
            "vertical-align": "middle",
          },
          children: [
            {
              type: "standard-h2",
              data: {},
              attributes: {
                align: "left",
                color: "#333333",
                "font-size": "28px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Ready to Transform Your Business?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#666666",
                "font-size": "16px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Join thousands of satisfied customers today.",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "40%",
            "vertical-align": "middle",
          },
          children: [
            {
              type: "standard-button",
              data: {
                content: "Get Started",
              },
              attributes: {
                align: "center",
                "background-color": "#1890ff",
                color: "#ffffff",
                "border-radius": "6px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                "padding-left": "30px",
                "padding-right": "30px",
                "font-size": "16px",
                "font-weight": "bold",
                "inner-padding-top": "15px",
                "inner-padding-bottom": "15px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Get Started",
                },
              ],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];
