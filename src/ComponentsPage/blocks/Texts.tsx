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

const fontList = [48, 32, 27, 24, 18, 16, 14];

export const Texts = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getTextCode = (item: Element) => {
    return JSON.stringify(item, null, 2);
  };

  const toggleCode = (index: number) => {
    setExpandedCodes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePreview = (item: Element) => {
    const code = getTextCode(item);
    localStorage.setItem("preview_block_json", code);
    window.open("/template?block_preview=true", "_blank");
  };

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Title heading={2}>Text</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Text components with various font sizes. View all available MJML text
          attributes in the{" "}
          <Link
            href="https://documentation.mjml.io/#mj-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJML Text documentation
          </Link>
          .
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {fontList.map((item, index) => {
          const blockDefinition = BlockManager.getBlockByType(
            ElementType.STANDARD_PARAGRAPH
          );

          const element = blockDefinition?.create({
            attributes: {
              "font-size": item + "px",
              padding: "10px 25px 10px 25px",
            },
            children: [{ text: "The quick brown fox jumps over the lazy dog" }],
          });

          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              {/* Text Preview */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
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
                    fontSize: item,
                    width: "100%",
                    padding: "10px 25px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>The quick brown fox jumps over the lazy dog</span>
                  <span
                    style={{
                      marginLeft: 16,
                      fontSize: 14,
                      opacity: 0.5,
                    }}
                  >
                    {item}px
                  </span>
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
                          navigator.clipboard.writeText(getTextCode(element!));
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
                      {getTextCode(element!)}
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
