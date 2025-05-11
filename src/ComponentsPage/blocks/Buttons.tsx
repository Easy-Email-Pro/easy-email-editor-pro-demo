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
import { Element, StandardButtonElement } from "easy-email-pro-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDown, IconUp } from "@arco-design/web-react/icon";
import { Link } from "@arco-design/web-react";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const buttonList: Array<{ payload: StandardButtonElement }> = [
  {
    payload: {
      type: "standard-button",
      data: {
        content: "Button",
      },
      attributes: {
        color: "#ffffff",
        "inner-padding-top": "8px",
        "inner-padding-bottom": "8px",
        "background-color": "#000000",
        "border-enabled": true,
        "border-width": "6px",
        "border-color": "#000000",
        "inner-padding-left": "16px",
        "inner-padding-right": "16px",
        "border-radius": "6px",
        "font-weight": "bold",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "padding-left": "25px",
        "padding-right": "25px",
      },
      children: [
        {
          text: "Learn More",
        },
      ],
      id: "yWitECXNJHbw5jKVtCyUP",
    },
  },
  {
    payload: {
      type: "standard-button",
      data: {
        content: "Button",
      },
      attributes: {
        "inner-padding-top": "12px",
        "inner-padding-bottom": "12px",
        "background-color": "#FFFFFF",
        "border-enabled": true,
        "border-width": "1px",
        "border-color": "#000000",
        "inner-padding-left": "20px",
        "inner-padding-right": "20px",
        "border-radius": "6px",
        color: "#000000",
        "line-height": "140%",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "padding-left": "25px",
        "padding-right": "25px",
      },
      children: [
        {
          text: "View Details",
        },
      ],
      id: "yWitECXNJHbw5jKVtCyUP",
    },
  },
  {
    payload: {
      type: "standard-button",
      data: {
        content: "Button",
      },
      attributes: {
        color: "#ffffff",
        "inner-padding-top": "8px",
        "inner-padding-bottom": "8px",
        "background-color": "#000000",
        "border-enabled": true,
        "border-width": "6px",
        "border-color": "#000000",
        "inner-padding-left": "20px",
        "inner-padding-right": "20px",
        "border-radius": "999px",
        "font-weight": "bold",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "padding-left": "25px",
        "padding-right": "25px",
      },
      children: [
        {
          text: "Shop Now",
        },
      ],
      id: "yWitECXNJHbw5jKVtCyUP",
    },
  },
  {
    payload: {
      type: "standard-button",
      data: {
        content: "Button",
      },
      attributes: {
        color: "#000000",
        "inner-padding-top": "10px",
        "inner-padding-bottom": "10px",
        "background-color": "transparent",
        "border-enabled": true,
        "border-width": "1px",
        "border-color": "#000000",
        "inner-padding-left": "20px",
        "inner-padding-right": "20px",
        "border-radius": "0px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "padding-left": "25px",
        "padding-right": "25px",
      },
      children: [
        {
          text: "Get Started",
        },
      ],
      id: "xui1STkHwteb5GWnVlSkD",
    },
  },
];

export const Buttons = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getButtonCode = (item: Element) => {
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
        <Title heading={2}>Buttons</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Button components for various use cases. View all available MJML
          button attributes in the{" "}
          <Link
            href="https://documentation.mjml.io/#mj-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJML Button documentation
          </Link>
          .
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {buttonList.map((item, index) => {
          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              {/* Button Preview */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  padding: "32px 16px",
                  background: "var(--color-bg-1)",
                  borderRadius: "4px",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    ...item.payload.attributes,
                    boxSizing: "content-box",
                    paddingTop: item.payload.attributes["inner-padding-top"],
                    paddingBottom:
                      item.payload.attributes["inner-padding-bottom"],
                    paddingLeft: item.payload.attributes["inner-padding-left"],
                    paddingRight:
                      item.payload.attributes["inner-padding-right"],
                  }}
                >
                  <a href="#" style={{ textDecoration: "none" }}>
                    {(item.payload.children[0] as any)?.text}
                  </a>
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
                          navigator.clipboard.writeText(
                            getButtonCode(item.payload)
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
                      {getButtonCode(item.payload)}
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
