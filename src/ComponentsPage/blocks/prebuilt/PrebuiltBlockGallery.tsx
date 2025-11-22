import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Message,
  Space,
  Typography,
} from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import { IconDown, IconUp } from "@arco-design/web-react/icon";
import { BlockManager, Element } from "easy-email-pro-core";
import type { PrebuiltBlock } from "easy-email-pro-theme";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

interface PrebuiltBlockGalleryProps {
  title: string;
  description: string;
  blocks: PrebuiltBlock[];
}

export const PrebuiltBlockGallery = ({
  title,
  description,
  blocks,
}: PrebuiltBlockGalleryProps) => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {},
  );

  const createElement = (block: PrebuiltBlock): Element => {
    const blockDefinition = BlockManager.getBlockByType(block.payload.type);
    return ((blockDefinition as any)?.create(block.payload) ||
      block.payload) as Element;
  };

  const getBlockCode = (block: PrebuiltBlock) => {
    return JSON.stringify(createElement(block), null, 2);
  };

  const toggleCode = (index: number) => {
    setExpandedCodes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePreview = (block: PrebuiltBlock) => {
    localStorage.setItem("preview_block_json", getBlockCode(block));
    window.open("/template?block_preview=true", "_blank");
  };

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Title heading={2}>{title}</Title>
        <Paragraph style={{ marginBottom: 0 }}>{description}</Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {blocks.map((block, index) => (
          <Card
            title={block.title}
            key={`${block.title}-${index}`}
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
                  src={block.thumbnail}
                  alt={block.title}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    display: "block",
                  }}
                  onClick={() => handlePreview(block)}
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
                        navigator.clipboard.writeText(getBlockCode(block));
                        Message.success("Code copied to clipboard");
                      }}
                    >
                      Copy Code
                    </Button>
                    <Button
                      type="text"
                      size="small"
                      onClick={() => handlePreview(block)}
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
                    {getBlockCode(block)}
                  </SyntaxHighlighter>
                </div>
              )}
            </div>
          </Card>
        ))}
      </Space>
    </>
  );
};
