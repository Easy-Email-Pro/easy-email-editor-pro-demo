import { Space } from "@arco-design/web-react";
import React from "react";
import { BlockManager } from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";
import { MarketingCountdownElementV2, MarketingType } from "easy-email-pro-kit";

const imgList: Array<{ payload: MarketingCountdownElementV2 }> = [
  {
    payload: {
      type: "marketing-countdown-v2",
      attributes: {
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#8b5cf6",
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/nvs2cot4-jcesfc8f0lt8_countdown.gif",
        "text-color": "#FFFFFF",
        "background-color-gradient-enabled": true,
        "background-color-gradient-end-color": "#3B82F6",
        "background-color-gradient-direction": "to right",
      },
      data: {
        remainingTime: 24,
        unit: "hour",
        style: "minimal",
        styleOptions: {
          minimal: {
            labelSize: "12px",
            numberSize: "20px",
            numberBackgroundColor: "transparent",
            numberBorderColor: "#FFFFFF",
          },
        },
      },
      children: [
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            color: "#FFFFFF",
            "font-size": "24px",
            align: "center",
            "line-height": "1.2",
            "padding-bottom": "20px",
            "padding-top": "10px",
          },
          children: [
            {
              text: "Limited Time Offer",
            },
          ],
          id: "9zhAfBp_CnXUKJgK-L_Sp",
        },
      ],
      id: "A72KUpVlRETeke-2QLE1a",
    },
  },
  {
    payload: {
      type: "marketing-countdown-v2",
      attributes: {
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#1A1F25",
        "text-color": "#ffffff",
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/gay5xdwduzfwjzugjivre_countdown.gif",
      },
      data: {
        remainingTime: 24,
        unit: "hour",
        style: "dark",
        styleOptions: {
          dark: {
            "grid-color": "#1f2937",
            "shadow-color": "#000000",
          },
        },
      },
      children: [
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            color: "#ffffff",
            "font-size": "32px",
            align: "center",
            "line-height": "1.2",
            "padding-top": "10px",
            "padding-bottom": "20px",
          },
          children: [
            {
              text: "FLASH SALE ENDS IN",
            },
          ],
          id: "-_3-fh5Bbv7ixFPNuaFRJ",
        },
      ],
      id: "wvHanIyId43S65GRA4ppH",
    },
  },
  {
    payload: {
      type: "marketing-countdown-v2",
      attributes: {
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#ffffff",
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/yc9uqwuhmxpn734uw6m2i_countdown.gif",
        "text-color": "#000000",
      },
      data: {
        remainingTime: 24,
        unit: "hour",
        style: "circular",
        styleOptions: {
          circular: {
            borderColor: "#14b8a6",
            borderWidth: "4px",
          },
        },
      },
      children: [
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            color: "#333333",
            "font-size": "26px",
            align: "center",
            "line-height": "1.2",
            "padding-top": "10px",
            "padding-bottom": "20px",
          },
          children: [
            {
              text: "Sale Closing Soon",
            },
          ],
          id: "cfnc_DK6-XZ8hhlHjNawA",
        },
      ],
      id: "BqlwM-d2T5nnOlJcvsPop",
    },
  },
  {
    payload: {
      type: "marketing-countdown-v2",
      attributes: {
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#ffffff",
        "text-color": "#000000",
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/jwkyrwricghnewx0c5qx4_countdown.gif",
      },
      data: {
        remainingTime: 24,
        unit: "hour",
        style: "colorful",
        styleOptions: {
          colorful: {
            colors: {
              day: "#ec4899",
              hour: "#8b5cf6",
              minute: "#3b82f6",
              second: "#14b8a6",
            },
          },
        },
      },
      children: [
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            color: "#6b21a8",
            "font-size": "28px",
            align: "center",
            "font-weight": "bold",
            "line-height": "1.2",
          },
          children: [
            {
              text: "SUMMER SALE",
            },
          ],
          id: "OaPYkAfoIMzK4z4Ag9gto",
        },
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            color: "#6b21a8",
            "font-size": "40px",
            align: "center",
          },
          children: [
            {
              text: "50% OFF",
              italic: true,
            },
          ],
          id: "Gok46x9t1PfjpEhZLaEFn",
        },
      ],
      id: "uqc2GRdwPhGLcqYPkv40K",
    },
  },
  {
    payload: {
      type: "marketing-countdown-v2",
      attributes: {
        "padding-top": "30px",
        "padding-bottom": "30px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#ffffff",
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/3htszcdk1ivruejgz6vjl_countdown.gif",
        "text-color": "#000000",
      },
      data: {
        remainingTime: 24,
        unit: "hour",
        style: "elegant",
        styleOptions: {
          elegant: {
            borderColor: "black",
          },
        },
      },
      children: [
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            color: "#333333",
            "font-size": "24px",
            "font-family": "serif",
            align: "center",
            "line-height": "1.2",
          },
          children: [
            {
              text: "Black Friday Event",
            },
          ],
          id: "d3FeFDioJEVf_cOWvO8QO",
        },
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            color: "#666666",
            "font-size": "16px",
            align: "center",
          },
          children: [
            {
              text: "Exclusive offers available for a limited time only",
            },
          ],
          id: "cxbIpbfLTu5D5QaLVwPbP",
        },
      ],
      id: "tUAiyFJ7zFZPsauEEf3Vo",
    },
  },
  {
    payload: {
      type: "marketing-countdown-v2",
      attributes: {
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "20px",
        "padding-right": "20px",
        "background-color": "#fee2e2",
        "text-color": "#dc2626",
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/gypuki1xodlhfbd7jql-e_countdown.gif",
      },
      data: {
        remainingTime: 24,
        unit: "hour",
        style: "promotional",
        styleOptions: {
          promotional: {
            buttonText: "Shop Now",
            buttonColor: "#dc2626",
            backgroundColor: "#fee2e2",
            borderColor: "#fca5a5",
          },
        },
      },
      children: [
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            color: "#dc2626",
            "font-size": "20px",
            "font-weight": "bold",
            align: "center",
          },
          children: [
            {
              text: "HOLIDAY SALE",
            },
          ],
          id: "UN6uH6CoPxduCKdmmd3Ei",
        },
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            color: "#333333",
            "font-size": "32px",
            "font-weight": "bold",
            align: "center",
          },
          children: [
            {
              text: "40% OFF",
            },
          ],
          id: "TSx3paHb6QAgqX4D6pQfc",
        },
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            color: "#4b5563",
            "font-size": "16px",
            "padding-top": "10px",
            "padding-bottom": "10px",
            align: "center",
          },
          children: [
            {
              text: "Limited time offer. Don't miss out!",
            },
          ],
          id: "bJWxPAug2tiO0Wi9uTRb6",
        },
      ],
      id: "lbOtQz925K54g_ez_8yR6",
    },
  },
  {
    payload: {
      type: "marketing-countdown-v2",
      attributes: {
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#111827",
        "text-color": "#ffffff",
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/c0x-tvnmo0crhjnefykrf_countdown.gif",
      },
      data: {
        remainingTime: 24,
        unit: "hour",
        style: "modern",
        styleOptions: {
          modern: {
            numberContainerColor: "rgba(0, 0, 0, 0.5)",
            numberTopGradientStart: "#4b5563",
            numberTopGradientEnd: "#1f2937",
          },
        },
      },
      children: [
        {
          type: "standard-paragraph",
          data: {},
          attributes: {
            color: "#ffffff",
            "font-size": "16px",
            align: "center",
            "padding-top": "10px",
            "padding-bottom": "20px",
          },
          children: [
            {
              text: "NEW COLLECTION DROPS IN",
            },
          ],
          id: "4TGCy2APVNoZBierHvoDR",
        },
      ],
      id: "vqwhNEn5OGr43a0VZ3ssY",
    },
  },
];

export function Countdown() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {imgList.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          MarketingType.MARKETING_COUNTDOWN_V2
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
                  width: "100%",
                }}
              />
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
