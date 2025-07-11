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
  StandardSectionElement,
  StandardWrapperElement,
} from "easy-email-pro-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDown, IconUp } from "@arco-design/web-react/icon";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const trustBadgeList: Array<{
  thumbnail: string;
  payload: StandardWrapperElement | StandardSectionElement;
}> = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/je9f6md2b2bp6ppwgresg_image.png",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-repeat": "no-repeat",
      },
      children: [
        {
          type: "standard-column",
          attributes: {
            width: "33.33%",
          },
          data: {},
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                "font-size": "30px",
              },
              children: [
                {
                  text: "⭐",
                },
              ],
              id: "N7neTGilrhtaJj69IxgF6",
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                "font-weight": "bold",
              },
              children: [
                {
                  text: "5-Star Rated",
                },
              ],
              id: "htEbbh4BaJnc6EyznS1xi",
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                "font-size": "14px",
                color: "rgb(75,85,99)",
              },
              children: [
                {
                  type: "html-block-node",
                  children: [
                    {
                      text: "10,000+ reviews",
                    },
                  ],
                  attributes: {},
                  data: {
                    tagName: "div",
                  },
                  id: "HKJvDZ4L0E_Q6Q5lR_pCO",
                },
              ],
              id: "j-6ExVy_Yg4Ezniz45Js4",
            },
          ],
          id: "izhSd6-5yzkvzwSyvd40N",
        },
        {
          type: "standard-column",
          attributes: {
            width: "33.33%",
          },
          data: {},
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                "font-size": "30px",
              },
              children: [
                {
                  type: "html-block-node",
                  children: [
                    {
                      text: "🚚",
                    },
                  ],
                  attributes: {},
                  data: {
                    tagName: "div",
                  },
                  id: "PyiI3DSXRgxhZ5zht3uT-",
                },
              ],
              id: "M030-rgC5pDJ0lcqA64_C",
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                "font-weight": "bold",
              },
              children: [
                {
                  text: "Free Shipping",
                },
              ],
              id: "5ciIm1MQH4Vy8s2dwQfJT",
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                "font-size": "14px",
                color: "rgb(75,85,99)",
              },
              children: [
                {
                  type: "html-block-node",
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Orders over $50",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "qbYYQJE6wrYnhGlLUmI6b",
                    },
                  ],
                  attributes: {},
                  data: {
                    tagName: "div",
                  },
                  id: "LdLCgpD_AYQkwbmQUY-UA",
                },
              ],
              id: "fgMUtjoTP7_nWKhTaSCPM",
            },
          ],
          id: "CumoKSij5v_7CstrOxNN1",
        },
        {
          type: "standard-column",
          attributes: {
            width: "33.33%",
          },
          data: {},
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                "font-size": "30px",
              },
              children: [
                {
                  text: "↩️",
                },
              ],
              id: "i7Lh9LQ4JciQOYWYcHnvB",
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                "font-weight": "bold",
              },
              children: [
                {
                  type: "html-block-node",
                  children: [
                    {
                      text: "30-Day Returns",
                    },
                  ],
                  attributes: {},
                  data: {
                    tagName: "div",
                  },
                  id: "4-Nxv7zNdl4iJoCusTl73",
                },
              ],
              id: "8SYC4jUQwTv2DcR2yGvT1",
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                "font-size": "14px",
                color: "rgb(75,85,99)",
              },
              children: [
                {
                  type: "html-block-node",
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Money back guarantee",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "vWqDIhoK5drE-SeF9wBIr",
                    },
                  ],
                  attributes: {},
                  data: {
                    tagName: "div",
                  },
                  id: "uxfGmpy8kJVJyUe-gXMbu",
                },
              ],
              id: "0u9_J9TtU1tJFg5QD9wth",
            },
          ],
          id: "x4DIZCW0D9G-iv-Wdimks",
        },
      ],
      id: "LAizfFgCEQ272lKlOwvhL",
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/h47dkjf4qritlmjdrio8s_image.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#22c55e",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {
            "background-repeat": "no-repeat",
            "background-color": "#22c55e",
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
                    "font-size": "30px",
                    color: "#FFFFFF",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Our Impact",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "NJUBII-mdGmjLLvZYHWxM",
                    },
                  ],
                  id: "9lpmVdHusPvd3VKajpJ-O",
                },
              ],
              id: "Jx9fr-UruoQNL5FzUiug6",
            },
          ],
          id: "SR-3WquZsPvS-vad9GVZG",
        },
        {
          type: "standard-section",
          data: {},
          attributes: {
            "background-repeat": "no-repeat",
            "background-color": "#22c55e",
          },
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "30px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "⚡",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "PyiI3DSXRgxhZ5zht3uT-",
                    },
                  ],
                  id: "N7neTGilrhtaJj69IxgF6",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-weight": "bold",
                    "font-size": "36px",
                    color: "#FFFFFF",
                  },
                  children: [
                    {
                      text: "99.9%",
                    },
                  ],
                  id: "htEbbh4BaJnc6EyznS1xi",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "14px",
                    color: "#FFFFFF",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "Uptime Guarantee",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "O_yPmLfkcWOD4U6qn5E7Z",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "HKJvDZ4L0E_Q6Q5lR_pCO",
                    },
                  ],
                  id: "j-6ExVy_Yg4Ezniz45Js4",
                },
              ],
              id: "izhSd6-5yzkvzwSyvd40N",
            },
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "30px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "🎧",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "PyiI3DSXRgxhZ5zht3uT-",
                    },
                  ],
                  id: "M030-rgC5pDJ0lcqA64_C",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-weight": "bold",
                    "font-size": "36px",
                    color: "#FFFFFF",
                  },
                  children: [
                    {
                      text: "24/7",
                    },
                  ],
                  id: "5ciIm1MQH4Vy8s2dwQfJT",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "14px",
                    color: "#FFFFFF",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              type: "html-block-node",
                              children: [
                                {
                                  text: "Customer Support",
                                },
                              ],
                              attributes: {},
                              data: {
                                tagName: "div",
                              },
                              id: "F2FpgeFk0M0RjR7WnWbWn",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "qbYYQJE6wrYnhGlLUmI6b",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "LdLCgpD_AYQkwbmQUY-UA",
                    },
                  ],
                  id: "fgMUtjoTP7_nWKhTaSCPM",
                },
              ],
              id: "CumoKSij5v_7CstrOxNN1",
            },
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "30px",
                  },
                  children: [
                    {
                      text: "🌍",
                    },
                  ],
                  id: "i7Lh9LQ4JciQOYWYcHnvB",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-weight": "bold",
                    "font-size": "36px",
                    color: "#FFFFFF",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "150+",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "4-Nxv7zNdl4iJoCusTl73",
                    },
                  ],
                  id: "8SYC4jUQwTv2DcR2yGvT1",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "14px",
                    color: "#FFFFFF",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              type: "html-block-node",
                              children: [
                                {
                                  text: "Countries Served",
                                },
                              ],
                              attributes: {},
                              data: {
                                tagName: "div",
                              },
                              id: "0Rjdjsa1ePXLwQiSouV_C",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "vWqDIhoK5drE-SeF9wBIr",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "uxfGmpy8kJVJyUe-gXMbu",
                    },
                  ],
                  id: "0u9_J9TtU1tJFg5QD9wth",
                },
              ],
              id: "x4DIZCW0D9G-iv-Wdimks",
            },
          ],
          id: "LAizfFgCEQ272lKlOwvhL",
        },
      ],
      id: "ALU6MQLSgTpdvTYrxrQz3",
    },
  },
];

export const TrustBadges = () => {
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
        <Title heading={2}>Trust Badges</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Customizable trust badge components for email campaigns. Each badge
          includes a rating, shipping, and return policy.
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {trustBadgeList.map((item, index) => {
          const blockDefinition = BlockManager.getBlockByType(
            item.payload.type
          );
          const element = blockDefinition?.create(item.payload as any);

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
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      localStorage.setItem(
                        "preview_block_json",
                        getDiscountCode(element!)
                      );
                      window.open("/template?block_preview=true");
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
                      <Button
                        type="text"
                        size="small"
                        onClick={() => {
                          localStorage.setItem(
                            "preview_block_json",
                            getDiscountCode(element!)
                          );
                          window.open("/template?block_preview=true");
                        }}
                      >
                        Preview
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
