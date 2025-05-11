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

const reviewList: Array<{
  thumbnail: string;
  payload: StandardWrapperElement;
}> = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/xz_wxr5ys0dbvvgbzh9kw_image.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "0px",
        "padding-right": "0px",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {
            "background-repeat": "no-repeat",
            "padding-top": "0px",
            "padding-bottom": "0px",
            "padding-left": "25px",
            "padding-right": "25px",
          },
          children: [
            {
              type: "standard-group",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-column",
                  attributes: {
                    width: "11%",
                  },
                  data: {},
                  children: [
                    {
                      type: "standard-image",
                      data: {},
                      attributes: {
                        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/chyah3omhnozyjuuwau3d_image.png",
                        width: "50px",
                        "padding-left": "0px",
                        "padding-right": "0px",
                        "padding-top": "0px",
                        "padding-bottom": "0px",
                        align: "left",
                        height: "50px",
                      },
                      children: [
                        {
                          text: "",
                        },
                      ],
                      id: "oBGXN7cE9X50pDfB8c4fi",
                    },
                  ],
                  id: "-dlq2-ZRDSIpC0eSjWRHo",
                  mobileAttributes: {
                    width: "19%",
                  },
                },
                {
                  type: "standard-column",
                  attributes: {
                    width: "67%",
                  },
                  data: {},
                  children: [
                    {
                      type: "standard-paragraph",
                      data: {},
                      attributes: {
                        align: "left",
                        "padding-left": "0px",
                        "padding-right": "0px",
                      },
                      children: [
                        {
                          text: "John Doe",
                          bold: true,
                        },
                      ],
                      id: "0e7pQ61zk9MpQOtZh0R7z",
                    },
                    {
                      type: "standard-paragraph",
                      data: {},
                      attributes: {
                        align: "left",
                        "font-size": "12px",
                        color: "#666",
                        "padding-left": "0px",
                        "padding-right": "0px",
                      },
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "August 15, 2024",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "dNMRsjVU2GZQ_Gpjosq3z",
                        },
                      ],
                      id: "mYEO-R9CpQSgRMK6cclMT",
                    },
                  ],
                  id: "pS-L7CLkzYJPpwmr9oIOZ",
                },
              ],
              mobileAttributes: {},
              id: "B0nyiP2SonwDfgMekyvjx",
            },
          ],
          id: "_aqAkeScP0RyANlb2ZIeH",
        },
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-top": "0px",
            "padding-bottom": "0px",
          },
          children: [
            {
              type: "standard-column",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#fbbf24",
                    align: "left",
                    "letter-spacing": "5px",
                    "padding-top": "10px",
                    "padding-bottom": "5px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "★★★★★",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "TYE_ohEFK1gsZR42k1oa0",
                    },
                  ],
                  id: "wyOP-znjiwIu5w6mUuKiB",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                  },
                  children: [
                    {
                      text: "This product exceeded my expectations. The quality is excellent and it arrived earlier than expected. I would definitely recommend it to anyone looking for a reliable solution.",
                    },
                  ],
                  id: "b7cNbjKQVSR0h1Ui4ShBQ",
                },
              ],
              id: "qoNETlmwgYtl_BtBuXOks",
            },
          ],
          id: "vYrfXlkIu8nfaYLjkB2tu",
        },
      ],
      id: "ALU6MQLSgTpdvTYrxrQz3",
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/99w0vjkvmp8gs69fvwd4z_image.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#f9fafb",
        "border-radius": "8px",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-top": "0px",
            "padding-bottom": "0px",
          },
          children: [
            {
              type: "standard-column",
              data: {},
              attributes: {
                width: "500px",
              },
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    color: "#d1d5db",
                    "font-size": "32px",
                    "padding-left": "20px",
                    "padding-right": "20px",
                    "line-height": "1",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: '"',
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "HOgiMAvsx26Dpky1JktaW",
                    },
                  ],
                  id: "b7cNbjKQVSR0h1Ui4ShBQ",
                },
              ],
              id: "qoNETlmwgYtl_BtBuXOks",
            },
          ],
          id: "vYrfXlkIu8nfaYLjkB2tu",
        },
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-top": "0px",
            "padding-bottom": "0px",
          },
          children: [
            {
              type: "standard-column",
              data: {},
              attributes: {
                width: "450px",
              },
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    color: "#777",
                    "padding-left": "30px",
                    "padding-right": "30px",
                    "letter-spacing": "1px",
                    "font-style": "italic",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "eWtkCcvzvK4F-IsbcHFxT",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "This product exceeded my expectations. The quality is excellent and it arrived earlier than expected. I would definitely recommend it to anyone looking for a reliable solution.",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "X1lx9EAAlhL9Tp6o39lqe",
                        },
                      ],
                    },
                  ],
                  id: "26jUVBlDnPXZj7-uWzB56",
                },
              ],
              id: "2DygiJQkqkm4X7KaN2KEU",
            },
          ],
          id: "eMiQpzeG0XWCILSN3Vjfs",
        },
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-top": "0px",
            "padding-bottom": "0px",
          },
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
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/chyah3omhnozyjuuwau3d_image.png",
                    width: "50px",
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                    align: "center",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "KjGHkkONNBlejQ0M9tA02",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {},
                  children: [
                    {
                      text: "John Doe",
                      bold: true,
                    },
                  ],
                  id: "EMthua6DlKv4o-wpmOiQm",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#666",
                    "font-size": "12px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "August 15, 2024",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "3wWdl3DR-gvoCHCb4Xq7k",
                    },
                  ],
                  id: "dQ3urbtnsXGYLQfs83V74",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#fbbf24",
                    align: "center",
                    "letter-spacing": "5px",
                    "font-size": "18px",
                    "padding-top": "5px",
                    "padding-bottom": "5px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "★★★★★",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "YtTj994D6q4DdRSymN4DQ",
                    },
                  ],
                  id: "lKKYk_e8qsxafnUhYmd8m",
                },
              ],
              id: "iXacfMpgfwcAAjA4_ZUms",
            },
          ],
          id: "XqUquxBopiVV27dW128N0",
        },
      ],
      id: "TowiUIVffhkAHy53s1Elf",
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/ys8fjhwjyrzoz_uwl7f_c_image.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#FFFFFF",
        "border-radius": "8px",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {
            "background-repeat": "no-repeat",
            "padding-left": "20px",
            "padding-right": "20px",
          },
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "25%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/q_tgott76cckmf_hzuyyt_image.png",
                    width: "100px",
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "padding-top": "0px",
                    "padding-bottom": "0px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "kkl2e69I9F9G8Lf69uyRQ",
                },
              ],
              id: "z0auNpalXfqSAkUGtP4Ng",
            },
            {
              type: "standard-column",
              attributes: {
                width: "75%",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    "padding-left": "0px",
                    "padding-right": "0px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Wireless Noise-Cancelling Headphones",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "-cUf6Uq4JyYE61b9RhC3u",
                    },
                  ],
                  id: "PC8fPZPdbrfNfUMrdoCWl",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    "padding-left": "0px",
                    "padding-right": "0px",
                    color: "#666",
                    "font-size": "12px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Electronics > Audio > Headphones",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "s0D0IuNwYVP8Nmv3L_YdO",
                    },
                  ],
                  id: "l-Ei-GfJ0xEmWgHOpXowo",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    "padding-left": "0px",
                    "padding-right": "0px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "★ ★ ★ ★ ★",
                          color: "#fbbf24",
                        },
                        {
                          text: "   ",
                        },
                        {
                          text: "4.8",
                          fontSize: "18px",
                        },
                        {
                          text: " ",
                        },
                        {
                          text: "(256 reviews)",
                          fontSize: "14px",
                          color: "#9b9b9b",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "IQPtQjuriv8xs35US9TDM",
                    },
                  ],
                  id: "63NiUUFowzFHOs-smvT6F",
                },
              ],
              id: "SbIaTEBy_5xmihLx7qcML",
            },
          ],
          id: "aY-PFa2hpVbrkOevCtl-z",
        },
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-top": "0px",
            "padding-bottom": "0px",
          },
          children: [
            {
              type: "standard-column",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-divider",
                  data: {},
                  attributes: {
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                    "border-width": "1px",
                    "border-color": "#cdcbcb",
                    "padding-left": "0px",
                    "padding-right": "0px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "bJOzgECriwzgw0_-AFRJU",
                },
              ],
              id: "iXacfMpgfwcAAjA4_ZUms",
            },
          ],
          id: "XqUquxBopiVV27dW128N0",
        },
        {
          type: "standard-section",
          data: {},
          attributes: {
            "background-repeat": "no-repeat",
            "padding-top": "10px",
            "padding-bottom": "10px",
            "padding-left": "25px",
            "padding-right": "25px",
          },
          children: [
            {
              type: "standard-group",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-column",
                  attributes: {
                    width: "11%",
                  },
                  data: {},
                  children: [
                    {
                      type: "standard-image",
                      data: {},
                      attributes: {
                        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/chyah3omhnozyjuuwau3d_image.png",
                        width: "50px",
                        "padding-left": "0px",
                        "padding-right": "0px",
                        "padding-top": "0px",
                        "padding-bottom": "0px",
                        align: "left",
                        height: "50px",
                      },
                      children: [
                        {
                          text: "",
                        },
                      ],
                      id: "oBGXN7cE9X50pDfB8c4fi",
                    },
                  ],
                  id: "-dlq2-ZRDSIpC0eSjWRHo",
                  mobileAttributes: {
                    width: "19%",
                  },
                },
                {
                  type: "standard-column",
                  attributes: {
                    width: "67%",
                  },
                  data: {},
                  children: [
                    {
                      type: "standard-paragraph",
                      data: {},
                      attributes: {
                        align: "left",
                        "padding-left": "0px",
                        "padding-right": "0px",
                      },
                      children: [
                        {
                          text: "John Doe",
                          bold: true,
                        },
                      ],
                      id: "0e7pQ61zk9MpQOtZh0R7z",
                    },
                    {
                      type: "standard-paragraph",
                      data: {},
                      attributes: {
                        align: "left",
                        "font-size": "12px",
                        color: "#666",
                        "padding-left": "0px",
                        "padding-right": "0px",
                      },
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "August 15, 2024",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "dNMRsjVU2GZQ_Gpjosq3z",
                        },
                      ],
                      id: "mYEO-R9CpQSgRMK6cclMT",
                    },
                  ],
                  id: "pS-L7CLkzYJPpwmr9oIOZ",
                },
              ],
              mobileAttributes: {},
              id: "B0nyiP2SonwDfgMekyvjx",
            },
          ],
          id: "_aqAkeScP0RyANlb2ZIeH",
        },
        {
          type: "standard-section",
          data: {},
          attributes: {
            "background-repeat": "no-repeat",
            "padding-top": "0px",
            "padding-bottom": "0px",
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
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                  },
                  children: [
                    {
                      text: "Outstanding sound quality and comfort",
                    },
                  ],
                  id: "p40ZdkOZgzuIvDmF4lPim",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    align: "left",
                    color: "#666",
                  },
                  children: [
                    {
                      text: "After researching several high-end headphones, I decided to purchase these and I couldn't be happier with my decision. The sound quality is exceptional with deep bass and clear highs. The noise cancellation is truly impressive, especially on flights.",
                    },
                  ],
                  id: "3KXbsyf7m6UboOBqvLTCi",
                },
              ],
              id: "_sYwAwictHM-Kaz8EK0ns",
            },
          ],
          id: "hJ_lXstUgZBFIxpn_fkSp",
        },
      ],
      id: "TowiUIVffhkAHy53s1Elf",
    },
  },
];

export const Reviews = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getReviewCode = (item: Element) => {
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
        <Title heading={2}>Customer Reviews</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Showcase customer testimonials and product reviews in your email
          campaigns. These components help build trust and social proof for your
          products.
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {reviewList.map((item, index) => {
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
                      borderRadius: "4px",
                    }}
                    alt="Review preview"
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
                            getReviewCode(element!)
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
                      {getReviewCode(element!)}
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
