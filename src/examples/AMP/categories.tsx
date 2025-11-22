import { IconFont, ThemeConfigProps } from 'easy-email-pro-theme';
import { t } from 'easy-email-pro-core';
import { ElementType } from 'easy-email-pro-core';

import React from 'react';
import {
  MarketingType,
  CommonType,
  KitElementType,
} from "easy-email-pro-kit";
import { Space } from '@arco-design/web-react';
import { IconQuestionCircle } from '@arco-design/web-react/icon';
import { Tooltip } from '@arco-design/web-react';

export const categories: ThemeConfigProps["categories"] = [
  {
    get label() {
      return t("Content");
    },
    active: true,
    displayType: "grid",
    blocks: [
      {
        type: ElementType.STANDARD_PARAGRAPH,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-text"
          />
        ),
        payload: {
          type: "standard-paragraph",
          data: {},
          attributes: {
            "padding-top": "10px",
            "padding-bottom": "10px",
            "padding-left": "10px",
            "padding-right": "10px",
          },
        },
      },
      {
        type: ElementType.STANDARD_IMAGE,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-img"
          />
        ),
        payload: {
          type: "standard-image",
          data: {},
          attributes: {
            "padding-top": "0px",
            "padding-bottom": "0px",
            "padding-left": "0px",
            "padding-right": "0px",
          },
        },
      },
      {
        type: ElementType.STANDARD_BUTTON,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-button"
          />
        ),
        payload: {
          type: "standard-button",
          data: {},
          attributes: {
            "padding-top": "10px",
            "padding-bottom": "10px",
            "padding-left": "0px",
            "padding-right": "0px",
          },
        },
      },
      {
        type: ElementType.STANDARD_DIVIDER,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-divider"
          />
        ),
        payload: {
          type: "standard-divider",
          data: {},
          attributes: {
            "padding-top": "10px",
            "padding-bottom": "10px",
            "padding-left": "0px",
            "padding-right": "0px",
          },
        },
      },
      {
        type: ElementType.STANDARD_SPACER,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-spacing"
          />
        ),
        payload: {
          type: "standard-spacer",
          data: {},
          attributes: {
            "padding-top": "10px",
            "padding-bottom": "10px",
            "padding-left": "0px",
            "padding-right": "0px",
          },
        },
      },
      {
        type: ElementType.STANDARD_NAVBAR,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-navbar"
          />
        ),
        payload: {
          type: "standard-navbar",
          data: {},
          attributes: {
            "padding-top": "0px",
            "padding-bottom": "0px",
            "padding-left": "0px",
            "padding-right": "0px",
          },
        },
      },
      {
        type: ElementType.STANDARD_SOCIAL,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-social"
          />
        ),
        payload: {
          type: "standard-social",
          data: {},
          attributes: {
            spacing: "8px",
            "icon-size": "30px",
            mode: "horizontal",
          },
          children: [
            {
              data: {},
              type: "standard-social-element",
              children: [
                {
                  text: "",
                },
              ],
              attributes: {
                src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/psyz-f1z-ryy95lv2rh7g_image.png",
                href: "",
                "padding-left": "0px",
                "padding-right": "0px",
                "padding-top": "0px",
                "padding-bottom": "0px",
              },
            },
            {
              data: {},
              type: "standard-social-element",
              children: [
                {
                  text: "",
                },
              ],
              attributes: {
                src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/rxxjzpus7vy2cxi0vp6hr_image.png",
                href: "",
                "padding-left": "8px",
                "padding-right": "0px",
                "padding-top": "0px",
                "padding-bottom": "0px",
              },
            },
            {
              data: {},
              type: "standard-social-element",
              children: [
                {
                  text: "",
                },
              ],
              attributes: {
                src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/obdwqmxv5cljc16-ebnja_image.png",
                href: "",
                "padding-left": "8px",
                "padding-right": "0px",
                "padding-top": "0px",
                "padding-bottom": "0px",
              },
            },
          ],
        },
      },
      {
        type: ElementType.STANDARD_HERO,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-hero"
          />
        ),
        payload: {
          type: "standard-hero",
          data: {},
          attributes: {
            "background-width": "1080px",
            "background-height": "721px",
            "padding-top": "100px",
            "padding-bottom": "50px",
            "background-image-enabled": true,
            "background-url":
              "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/zfu_bicaklhcbrj4h7sja_piyfs3ypwezfgc4rkb-of.png",
            "background-position": "center center",
            mode: "fluid-height",
          },
          children: [
            {
              type: "standard-h1",
              data: {},
              attributes: {
                color: "#FFFFFF",
              },
              children: [
                {
                  text: "We Serve Healthy & Delicious Foods",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                color: "#FFFFFF",
              },
              children: [
                {
                  text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Button",
              },
              attributes: {
                "padding-top": "30px",
                "padding-bottom": "30px",
                "background-color": "#8b2a36",
              },
              children: [
                {
                  text: "Get Your Order Here!",
                },
              ],
            },
          ],
        },
      },
      {
        type: ElementType.STANDARD_TABLE2,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-table"
          />
        ),
        payload: {
          type: "standard-table2",
          data: {},
          attributes: {
            cellpadding: "20px",
            "container-background-color": "#FFFFFF",
          },
          children: [
            {
              type: "standard-table2-tr",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "standard-table2-tr",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "standard-table2-tr",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        type: MarketingType.MARKETING_SHOPWINDOW,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-bag"
          />
        ),
      },
      {
        type: MarketingType.MARKETING_COUNTDOWN_V2,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-countdown"
          />
        ),
      },
      {
        type: MarketingType.MARKETING_QR_CODE,
        icon: (
          <div className={"block-list-grid-item-icon"}>
            <IconFont
              className={"block-list-grid-item-icon"}
              iconName="icon-qrcode"
            />
          </div>
        ),
      },

      {
        type: CommonType.COMMON_VIDEO,
        icon: (
          <div className={"block-list-grid-item-icon"}>
            <IconFont
              className={"block-list-grid-item-icon"}
              iconName="icon-video"
            />
          </div>
        ),
      },
      {
        type: ElementType.WRAPPER_WIDGET,
        icon: (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0863/8971/9346/files/eqoutgspgtgzyuuyvvibr_image.png"
              alt=""
            />
          </div>
        ),
        payload: {
          type: "wrapper_widget",
          title: "Test Widget",
          data: {
            description: "Your custom widget",
            contentEditable: true,
            config: [
              {
                label: "Primary color",
                name: "primary-color",
                helpText: "",
                type: "color",
                description: "Primary color",
              },
              {
                label: "Font Size",
                name: "font-size",
                helpText: "",
                type: "pixel",
              },
            ],
            input: {
              "background-color": "red",
              "primary-color": "#d3943c",
              "font-size": "18px",
            },
          },
          attributes: {},
          children: [
            {
              type: "standard-section",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-column",
                  data: {},
                  attributes: {},
                  children: [
                    {
                      type: "standard-image",
                      data: {},
                      attributes: {
                        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/itnjxrifbm1pdhztt7i2p_j4o0hgsbub-dyr4ibqa8t.png",
                        "border-radius": "50px",
                        "border-enabled": true,
                        "border-style": "solid",
                        "border-width": "5px",
                        "border-color": "$var(primary-color)",
                      },
                      children: [{ text: "" }],
                    },
                    {
                      type: "standard-button",
                      data: { content: "Button" },
                      attributes: {
                        width: "100%",
                        "background-color": "$var(primary-color)",
                        "font-size": "$var(font-size)",
                      },
                      children: [{ text: "Click" }],
                    },
                  ],
                },
              ],
            },
          ],
          name: "Image with text",
        },
      },
      // {
      //   type: CommonType.COMMON_IMAGE_WITH_TEXT,
      //   icon: (
      //     <div className={"block-list-grid-item-icon"}>
      //       <IconFont
      //         className={"block-list-grid-item-icon"}
      //         iconName="icon-hero"
      //       />
      //     </div>
      //   ),
      // },
    ],
  },
  {
    get label() {
      return (
        <Space>
          {t("AMP")}
          <Tooltip
            content={
              <>
                <span>
                  {t("Adds interactive content (carousels, forms, etc.) to emails. Only Gmail, Yahoo, Mail.ru and a few others support it; elsewhere these blocks won't show.")}
                </span>
                <a
                  href="https://amp.dev/about/email"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#165dff", textDecoration: "underline", marginLeft: '0.5em' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {t("Learn more")}
                </a>
              </>
            }
          >
            <IconQuestionCircle />
          </Tooltip>
        </Space>
      ) as unknown as string;
    },
    active: true,
    displayType: "grid",
    blocks: [

      {
        type: KitElementType.AMP_CAROUSEL,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-carousel"
          />
        ),
      },
      {
        type: KitElementType.AMP_PRODUCT,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-bag"
          />
        ),
      },
      {
        type: KitElementType.AMP_FORM,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-form"
          />
        ),
      },
      {
        type: KitElementType.AMP_REVIEWS,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-star"
          />
        ),
      },
      {
        type: KitElementType.AMP_LUCKY_WHEEL,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-lucky-wheel"
          />
        ),
      },
      {
        type: KitElementType.AMP_ACCORDION,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-list-ul"
          />
        ),
      },
    ],
  },
  {
    get label() {
      return t("Layout");
    },
    active: true,
    displayType: "section",
    blocks: [
      {
        get title() {
          return t("1 column");
        },
        variants: [
          {
            sections: [{ columns: ["100%"] }],
          },
        ],
      },
      {
        get title() {
          return t("2 column");
        },
        variants: [
          {
            sections: [{ columns: ["50%", "50%"] }],
          },
          {
            sections: [{ columns: ["33%", "67%"] }],
          },
          {
            sections: [{ columns: ["67%", "33%"] }],
          },
          {
            sections: [{ columns: ["25%", "75%"] }],
          },
          {
            sections: [{ columns: ["75%", "25%"] }],
          },
        ],
      },
      {
        get title() {
          return t("3 column");
        },

        variants: [
          {
            sections: [{ columns: ["33.33%", "33.33%", "33.33%"] }],
          },
          {
            sections: [{ columns: ["25%", "50%", "25%"] }],
          },
          {
            sections: [{ columns: ["25%", "25%", "50%"] }],
          },
          {
            sections: [{ columns: ["50%", "25%", "25%"] }],
          },
        ],
      },
      {
        get title() {
          return t("4 column");
        },

        variants: [
          {
            sections: [{ columns: ["25%", "25%", "25%", "25%"] }],
          },
        ],
      },
      {
        get title() {
          return t("Multiple Sections");
        },
        variants: [
          {
            sections: [
              {
                columns: ["100%"],
              },
              {
                columns: ["50%", "50%"],
              },
            ],
          },
          {
            sections: [
              {
                columns: ["50%", "50%"],
              },
              {
                columns: ["50%", "50%"],
              },
            ],
          },
        ],
      },
    ],
  },
];
