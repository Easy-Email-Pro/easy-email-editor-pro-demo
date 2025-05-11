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
  ElementType,
  StandardTable2Element,
} from "easy-email-pro-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDown, IconUp } from "@arco-design/web-react/icon";
import { Link } from "@arco-design/web-react";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const list: Array<{ thumbnail: string; payload: StandardTable2Element }> = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/3f0uhmldm-vzqb3tgo7yb_image.png",
    payload: {
      type: "standard-table2",
      data: {},
      attributes: {
        cellpadding: "10px",
        "text-align": "center",
        "container-background-color": "#FFFFFF",
        "table-layout": "fixed",
        "padding-left": "5px",
        "padding-right": "5px",
        align: "left",
        "font-size": "14px",
      },
      children: [
        {
          type: "standard-table2-tr",
          data: {},
          attributes: {
            "background-color": "#7daa55",
          },
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
                  text: "Item",
                  bold: true,
                  fontSize: "18px",
                },
              ],
              id: "HVaEKr8PNu-A3s3z3Ti_q",
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
                  text: "Description",
                  fontSize: "18px",
                  bold: true,
                },
              ],
              id: "nRtOvynwJDo2n_ZZzKxAt",
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
                  text: "Price",
                  bold: true,
                  fontSize: "18px",
                },
                {
                  bold: true,
                  fontSize: "16px",
                  text: "   ",
                },
              ],
              id: "1gtNteye4DjeLDOfN31ho",
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
                  text: "Action",
                  bold: true,
                  fontSize: "18px",
                },
              ],
              id: "G7N4yEUxoZ5G2bQ6zBHzu",
            },
          ],
          id: "fGFwjWgXjdQznohjAZyE_",
        },
        {
          type: "standard-table2-tr",
          data: {},
          attributes: {
            "background-color": "#e4efda",
          },
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
                  text: "Nike Dunk Low ",
                },
              ],
              id: "tPdNicS0zTnU0HrGz_8_J",
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
                  type: "html-block-node",
                  attributes: {
                    style: "text-align:left;",
                  },
                  data: {
                    tagName: "div",
                  },
                  children: [
                    {
                      text: "",
                    },
                    {
                      type: "html-node",
                      data: {
                        tagName: "img",
                      },
                      attributes: {
                        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/sx9iemawisklnrsn_nx4f_image.png",
                        width: "120px",
                        height: "120px",
                        style: "max-width:100%;display:inline-block;",
                      },
                      children: [
                        {
                          text: "",
                        },
                      ],
                      id: "SO9OSX-B8RKXqKsvg3GHn",
                    },
                    {
                      text: "",
                    },
                  ],
                  id: "XwdEvfLdYKCAdeaU28IfQ",
                },
              ],
              id: "QUH_eN8xzAQNqLL07BZls",
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
                  type: "html-block-node",
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  children: [
                    {
                      text: "HK$999",
                    },
                  ],
                  id: "HzlKGQju5405nvYONteNE",
                },
              ],
              id: "voX4QAhHtU3OPw4TV6ks9",
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
                  type: "html-block-node",
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Buy",
                          link: {
                            href: "https://www.nike.com.hk/product/HQ4345-300/detail.htm",
                            blank: true,
                          },
                        },
                      ],
                      data: {
                        tagName: "div",
                      },
                      attributes: {
                        style: "text-align:center;",
                      },
                      id: "QkqVzbKav83eoJduEvW3v",
                    },
                  ],
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  id: "jY03RvPhp3MRXv40ZAg13",
                },
              ],
              id: "zNQGhiPWngaXItiheXjo8",
            },
          ],
          id: "ktErIV0DafEuNS_OdYmXL",
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
                  text: "Sabrina 2 EP",
                },
              ],
              id: "F1rRfghPu3eGLsZ4-Rwjc",
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
                  type: "html-block-node",
                  children: [
                    {
                      text: "",
                    },
                    {
                      type: "html-node",
                      data: {
                        tagName: "img",
                      },
                      attributes: {
                        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/1lfgm24de1_nve5jz8b5e_image.png",
                        width: "120px",
                        height: "120px",
                        style: "max-width:100%;display:inline-block;",
                      },
                      children: [
                        {
                          text: "",
                        },
                      ],
                      id: "ApL2_FIu_kYORkjWDj-er",
                    },
                    {
                      text: "",
                    },
                  ],
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:left;",
                  },
                  id: "D_1pBvBrl4Y9LNVn4Cjq5",
                },
              ],
              id: "y2IpHGdtJyLl_jgaNJpF3",
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
                  type: "html-block-node",
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  children: [
                    {
                      text: "HK$899",
                    },
                  ],
                  id: "UzcqLSDvLJ4p4Qbv7DO4b",
                },
              ],
              id: "GicXvIP0TKWUh9YbvjA-W",
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
                  type: "html-block-node",
                  children: [
                    {
                      text: "Buy",
                      link: {
                        href: "https://www.nike.com.hk/product/HQ4345-300/detail.htm",
                        blank: true,
                      },
                    },
                  ],
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  id: "A4Z0Z5cDE5v3rtB-9smI1",
                },
              ],
              id: "fpP6bVN2wIguHeronfNwv",
            },
          ],
          id: "qa6dsB5YrosiDhW1NhHr6",
        },
        {
          type: "standard-table2-tr",
          data: {},
          attributes: {
            "background-color": "#e4efda",
          },
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
                  text: "Nike Vaporfly 3",
                },
              ],
              id: "bEayzhJtrnEKHyYYutAkG",
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
                  type: "html-block-node",
                  children: [
                    {
                      text: "",
                    },
                    {
                      type: "html-node",
                      data: {
                        tagName: "img",
                      },
                      attributes: {
                        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/kcb_901pyt2rxsckj52xp_image.png",
                        width: "120px",
                        height: "120px",
                        style: "max-width:100%;display:inline-block;",
                      },
                      children: [
                        {
                          text: "",
                        },
                      ],
                      id: "eFLb918p1bH0-C-NISfYL",
                    },
                    {
                      text: "",
                    },
                  ],
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:left;",
                  },
                  id: "YhI-ryLrMdxFeoM7UVk5n",
                },
              ],
              id: "phf_ts9AhvbD-9wFtkAVr",
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
                  type: "html-block-node",
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  children: [
                    {
                      text: "HK$1,699",
                    },
                  ],
                  id: "2Hvp4-xauKJiD4XNl6eiJ",
                },
              ],
              id: "pOsITrMTVQrbsQ-ha9H2C",
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
                  type: "html-block-node",
                  children: [
                    {
                      text: "Buy",
                      link: {
                        href: "https://www.nike.com.hk/product/HJ7040-300/detail.htm",
                        blank: true,
                      },
                    },
                  ],
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  id: "563d-4so-Gt7X-MzcczOF",
                },
              ],
              id: "ULkyZVzuCc_HsYOh_s0lZ",
            },
          ],
          id: "BpZiJ7BT57AphYDUj8ENs",
        },
      ],
      id: "0MrAhVbZYRksKB8-7or0t",
    } as StandardTable2Element,
  },
];
export const Tables = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getTableCode = (item: Element) => {
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
        <Title heading={2}>Tables</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Table components for displaying data in a structured format. View all
          available MJML table attributes in the{" "}
          <Link
            href="https://documentation.mjml.io/#mj-table"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJML Table documentation
          </Link>
          .
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {list.map((item, index) => {
          const blockDefinition = BlockManager.getBlockByType(
            ElementType.STANDARD_TABLE2
          );

          const element = blockDefinition?.create(item.payload);
          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              {/* Table Preview */}
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
                      borderRadius: 4,
                    }}
                    alt="Table preview"
                  />
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 14,
                      color: "var(--color-text-2)",
                      textAlign: "center",
                    }}
                  >
                    With header row layout
                  </div>
                </div>
              </div>

              {/* Code Display */}
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
                          navigator.clipboard.writeText(getTableCode(element!));
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
                      {getTableCode(element!)}
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
