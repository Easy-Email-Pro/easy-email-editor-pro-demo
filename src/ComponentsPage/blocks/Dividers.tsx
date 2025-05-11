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
import { BlockManager, Element, ElementType } from "easy-email-pro-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDown, IconUp } from "@arco-design/web-react/icon";
import { Link } from "@arco-design/web-react";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const dividerList = [
  {
    "border-width": "2px",
    "border-style": "solid",
    "border-color": "lightgrey",
  },
  {
    "border-width": "2px",
    "border-style": "dashed",
    "border-color": "lightgrey",
  },
  {
    "border-width": "2px",
    "border-style": "dotted",
    "border-color": "lightgrey",
  },
];

export const Dividers = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getDividerCode = (item: Element) => {
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
        <Title heading={2}>Dividers</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Divider components with various styles. View all available MJML
          divider attributes in the{" "}
          <Link
            href="https://documentation.mjml.io/#mj-divider"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJML Divider documentation
          </Link>
          .
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {dividerList.map((item, index) => {
          const blockDefinition = BlockManager.getBlockByType(
            ElementType.STANDARD_DIVIDER
          );

          const element = blockDefinition?.create({
            attributes: {
              padding: "10px 25px 10px 25px",
              "border-width": item["border-width"],
              "border-style": item["border-style"],
              "border-color": item["border-color"],
            },
          });

          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              {/* Divider Preview */}
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
                    padding: "10px 25px",
                  }}
                >
                  <div
                    style={{
                      borderTopWidth: item["border-width"],
                      borderTopStyle: item["border-style"] as any,
                      borderTopColor: item["border-color"],
                    }}
                  />
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 14,
                      opacity: 0.5,
                      textAlign: "center",
                    }}
                  >
                    {item["border-style"]} {item["border-width"]}
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
                          navigator.clipboard.writeText(
                            getDividerCode(element!)
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
                      {getDividerCode(element!)}
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
