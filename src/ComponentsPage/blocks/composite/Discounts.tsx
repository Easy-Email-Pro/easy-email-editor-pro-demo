import React, { useState } from "react";
import {
  Typography,
  Space,
  Button,
  Card,
  Grid,
  Message,
} from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import {
  BlockManager,
  Element,
  StandardWrapperElement,
} from "easy-email-pro-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDown, IconUp } from "@arco-design/web-react/icon";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const discountList: Array<{
  thumbnail: string;
  payload: StandardWrapperElement;
}> = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/nonxw9lbrhq_vxdds3kqi_image.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "padding-bottom": "0px",
        "padding-top": "0px",
        "border-enabled": true,
        "border-width": "1px",
        "border-color": "#e5e7eb",
        "border-radius": "8px",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-bottom": "0px",
            "background-color": "#f9fafb",
          },
          children: [
            {
              type: "standard-column",
              attributes: { width: "100%" },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {},
                  children: [{ text: "✂️" }],
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#000000",
                    "font-size": "20px",
                    "font-weight": "bold",
                    "padding-bottom": "8px",
                  },
                  children: [{ text: "Your Discount Code" }],
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#6b7280",
                    "font-size": "14px",
                    "padding-bottom": "20px",
                  },
                  children: [
                    {
                      text: "Use this code at checkout to receive your discount",
                    },
                  ],
                },
                {
                  type: "standard-button",
                  data: { content: "SAVE15NOW" },
                  attributes: {
                    "border-enabled": true,
                    "border-color": "#d1d5db",
                    "border-width": "2px",
                    "background-color": "#FFFFFF",
                    color: "#000000",
                    "border-style": "dashed",
                    width: "100%",
                    "font-size": "24px",
                    "font-weight": "bold",
                    "letter-spacing": "4px",
                    href: "https://www.easyemail.pro/",
                  },
                  children: [{ text: "SAVE15NOW" }],
                },
              ],
            },
          ],
        },
        {
          type: "standard-section",
          data: {},
          attributes: {
            "background-repeat": "no-repeat",
            "background-color": "#f9fafb",
          },
          children: [
            {
              type: "standard-column",
              attributes: { width: "33.33%" },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#6b7280",
                    "font-size": "14px",
                  },
                  children: [{ text: "Discount" }],
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#000000",
                    "font-size": "14px",
                  },
                  children: [{ text: "15% OFF" }],
                },
              ],
            },
            {
              type: "standard-column",
              attributes: { width: "33.33%" },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#6b7280",
                    "font-size": "14px",
                  },
                  children: [{ text: "Minimum Order" }],
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#000000",
                    "font-size": "14px",
                  },
                  children: [{ text: "$50" }],
                },
              ],
            },
            {
              type: "standard-column",
              attributes: { width: "33.33%" },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#6b7280",
                    "font-size": "14px",
                  },
                  children: [{ text: "Expires" }],
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#000000",
                    "font-size": "14px",
                  },
                  children: [{ text: "Dec 31, 2025" }],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/f88a1or4mbd-4dfup-hnh_image.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "padding-bottom": "0px",
        "padding-top": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {
            "background-repeat": "no-repeat",
            "background-color": "#4f46e5",
            "padding-top": "0px",
            "padding-bottom": "0px",
            "border-radius": "8px",
            "padding-left": "0px",
            "padding-right": "0px",
            "border-enabled": false,
            "border-color": "#e4e4e7",
          },
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "60%",
                "padding-top": "0px",
                "padding-bottom": "0px",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    color: "#c7d2fe",
                    "padding-top": "25px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "LIMITED TIME OFFER",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "8m7H5-cNUAQ3vMWuTmJ6Z",
                    },
                  ],
                  id: "vK-0994Gbft7VX-_TqQNY",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    color: "#FFFFFF",
                    "font-size": "26px",
                    "font-weight": "700",
                    "letter-spacing": "0px",
                    "padding-top": "20px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "Summer Special",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "-EtFnN-79B7PMI7SaCuYt",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "0Qbbn_FTurygtCx_phENS",
                    },
                  ],
                  id: "dXhqsAQphI5P7mFOgikl1",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    color: "#FFFFFF",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "Get a discount on our summer collection. Perfect for your vacation needs!",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "vE5_xWk99ybs6_YK2W2Ga",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "CUNHLH4dgpZjtAZNXDw6t",
                    },
                  ],
                  id: "pPljqUYJoMhMQnCyPd-8O",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    color: "#c7d2fe",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "Valid until August 31, 2024",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "8srnP-Q1gOSEikzK2U3B_",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "E2yh6TVVkFvQU7ITmBEY0",
                    },
                  ],
                  id: "bgFaiOQ_fi3DaA95GT5Qp",
                },
              ],
              id: "shGjXKg2J-aCN6vU74gEy",
            },
            {
              type: "standard-column",
              attributes: {
                width: "40%",
                "background-color": "#eff6ff",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "center",
                    color: "#4f46e5",
                    "font-size": "36px",
                    "font-weight": "bold",
                    "padding-top": "40px",
                    "padding-left": "45px",
                    "padding-right": "45px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "25% OFF",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "85AY5OhtzXpksMLa0vW8B",
                    },
                  ],
                  id: "FgryUwKQaAS0QTNUTj6UY",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#4f46e5",
                    width: "100%",
                    "font-weight": "bold",
                    "padding-top": "20px",
                    "padding-bottom": "20px",
                    "inner-padding-top": "15px",
                    "inner-padding-bottom": "15px",
                  },
                  children: [
                    {
                      text: "Claim Now",
                    },
                  ],
                  id: "FEK7rpnTs4HN3kG9A80Uf",
                },
              ],
              id: "f5ZsSc3xdJzI-snrehZKI",
            },
          ],
          id: "srCuw4eipEdlJFkWDDqAK",
        },
      ],
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/8vhj1fv2d3jprqgzcnuo1_image.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "padding-bottom": "0px",
        "padding-top": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {
            "background-repeat": "no-repeat",
            "background-color": "#f43f5e",
            "border-radius": "8px",
          },
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "100%",
              },
              data: {},
              children: [
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    align: "left",
                    "border-radius": "20px",
                    "background-color": "#f56b86",
                    "padding-top": "0px",
                    "padding-bottom": "0px",
                  },
                  children: [
                    {
                      text: "FLASH SALE",
                    },
                  ],
                  id: "LbirxR4QFjYbppD9sUTzI",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    color: "#ffffff",
                    "font-size": "32px",
                    "font-weight": "bold",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      text: "50% OFF TODAY ONLY",
                    },
                  ],
                  id: "BOKFueqKaqsX_A_EN3T_r",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    color: "#ffffff",
                    "font-size": "16px",
                    "font-weight": "bold",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "24-hour sale on all summer items. Don't miss out!",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "bzAuFEmyIz9nJC6O8dqpH",
                    },
                  ],
                  id: "eK-V0fab29hQGOfubO-jI",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    align: "left",
                    "background-color": "#ffffff",
                    color: "#ff0015",
                    "font-weight": "bold",
                    "font-size": "16px",
                    "border-radius": "4px",
                    "padding-top": "20px",
                    "padding-bottom": "0px",
                  },
                  children: [
                    {
                      text: "Shop the Sale",
                    },
                  ],
                  id: "2eB7ciBv4Tzpqd7oG6zrn",
                },
              ],
              id: "i5ukD3iuDErTvN_UsxGg-",
            },
          ],
          id: "W2zlpsGcbADSXyOiSCSqK",
        },
      ],
    },
  },
];

export const Discounts = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getDiscountCode = (item: Element) => {
    return JSON.stringify(item, null, 2);
  };

  const toggleCode = (index: number) => {
    setExpandedCodes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Title heading={2}>Discount Coupons</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Customizable discount coupon components for email campaigns. Each
          coupon includes a code, discount details, minimum order, and
          expiration date.
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {discountList.map((item, index) => {
          const blockDefinition =
            BlockManager.getBlockByType("standard-wrapper");
          const element = blockDefinition?.create(item.payload);

          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              <div
                style={{
                  padding: "32px 16px",
                  background: "var(--color-bg-1)",
                  borderRadius: "4px",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: 600,
                    margin: "0 auto",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.thumbnail}
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>

              <div>
                <Row
                  justify="space-between"
                  align="center"
                  style={{ marginBottom: expandedCodes[index] ? 12 : 0 }}
                >
                  <Col>
                    <Space>
                      <Button
                        type="text"
                        size="small"
                        onClick={() => toggleCode(index)}
                        style={{ padding: 0 }}
                        icon={expandedCodes[index] ? <IconUp /> : <IconDown />}
                      >
                        {expandedCodes[index] ? "Hide Code" : "Show Code"}
                      </Button>
                      <Button
                        type="text"
                        size="small"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            getDiscountCode(element!)
                          );
                          Message.success("Code copied to clipboard");
                        }}
                      >
                        Copy Code
                      </Button>
                    </Space>
                  </Col>
                </Row>
                {expandedCodes[index] && (
                  <div style={{ marginTop: 16 }}>
                    <SyntaxHighlighter
                      language="json"
                      style={vscDarkPlus}
                      customStyle={{
                        margin: 0,
                        borderRadius: 4,
                        fontSize: "13px",
                        maxHeight: 300,
                      }}
                    >
                      {getDiscountCode(element!)}
                    </SyntaxHighlighter>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </Space>
    </>
  );
};
