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
  StandardHeroElement,
} from "easy-email-pro-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDown, IconUp } from "@arco-design/web-react/icon";
import { Link } from "@arco-design/web-react";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

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

export const Heros = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getHeroCode = (item: Element) => {
    return JSON.stringify(item, null, 2);
  };

  const toggleCode = (index: number) => {
    setExpandedCodes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePreview = (item: Element) => {
    const code = getHeroCode(item);
    localStorage.setItem("preview_block_json", code);
    window.open("/template?block_preview=true", "_blank");
  };

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Title heading={2}>Hero Sections</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Hero section components for email headers. View all available MJML
          hero attributes in the{" "}
          <Link
            href="https://documentation.mjml.io/#mj-hero"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJML Hero documentation
          </Link>
          .
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {heroList.map((item, index) => {
          const blockDefinition = BlockManager.getBlockByType(
            ElementType.STANDARD_HERO
          );

          const element = blockDefinition?.create(item.payload);
          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              {/* Hero Preview */}
              <div
                style={{
                  padding: "32px 16px",
                  background: "var(--color-bg-1)",
                  borderRadius: "4px",
                  marginBottom: 16,
                  cursor: "pointer",
                }}
                onClick={() => handlePreview(element!)}
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
                    alt="Hero section preview"
                  />
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 14,
                      color: "var(--color-text-2)",
                      textAlign: "center",
                    }}
                  >
                    {item.payload.attributes.mode} mode,{" "}
                    {item.payload.attributes["background-image-enabled"]
                      ? "with background image"
                      : "no background image"}
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
                          navigator.clipboard.writeText(getHeroCode(element!));
                          Message.success("Code copied to clipboard");
                        }}
                      >
                        Copy Code
                      </Button>
                      <Button
                        type="text"
                        size="small"
                        onClick={() => handlePreview(element!)}
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
                      {getHeroCode(element!)}
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
