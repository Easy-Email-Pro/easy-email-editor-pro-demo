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

const spacerList = [10, 15, 20, 30, 50];

export const Spacers = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getSpacerCode = (item: Element) => {
    return JSON.stringify(item, null, 2);
  };

  const toggleCode = (index: number) => {
    setExpandedCodes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePreview = (item: Element) => {
    const code = getSpacerCode(item);
    localStorage.setItem("preview_block_json", code);
    window.open("/template?block_preview=true", "_blank");
  };

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Title heading={2}>Spacers</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Spacer components for controlling vertical spacing. View all available
          MJML spacer attributes in the{" "}
          <Link
            href="https://documentation.mjml.io/#mj-spacer"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJML Spacer documentation
          </Link>
          .
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {spacerList.map((height, index) => {
          const blockDefinition = BlockManager.getBlockByType(
            ElementType.STANDARD_SPACER
          );

          const element = blockDefinition?.create({
            attributes: {
              height: height + "px",
            },
          });

          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              {/* Spacer Preview */}
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
                <div style={{ padding: "0 25px" }}>
                  <div style={{ background: "#f1f2f3", padding: "16px" }}>
                    Content before spacer
                  </div>
                  <div
                    style={{
                      height: height,
                      position: "relative",
                      background: "rgba(var(--primary-6), 0.1)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: 14,
                        color: "rgb(var(--primary-6))",
                      }}
                    >
                      {height}px
                    </div>
                  </div>
                  <div style={{ background: "#f1f2f3", padding: "16px" }}>
                    Content after spacer
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
                            getSpacerCode(element!)
                          );
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
                      {getSpacerCode(element!)}
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
