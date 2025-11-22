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
import { BlockManager, Element } from "easy-email-pro-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDown, IconUp } from "@arco-design/web-react/icon";
import { KitElementType, CommonVideoElement } from "easy-email-pro-kit";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const list: Array<{ payload: CommonVideoElement }> = [
  {
    payload: {
      type: "common-video",
      data: {
        "video-link": "",
        "button-image":
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/nr-q0iibjzieaviueuxlc_image.png",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/fhticdcdcs5a4w6jqvzgh_image.png",
        "button-image-width": 100,
        "video-mask-opacity": 40,
      },
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/fjvaij47ts0v_c0e03tot_image.png",
        "padding-top": "0px",
        "padding-right": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "L5zAfXuoy9UHeKTnutLSU",
    },
  },
  {
    payload: {
      type: "common-video",
      data: {
        "video-link": "",
        "button-image":
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/cwagoopt4brv9bieu9rpr_image.png",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/fhticdcdcs5a4w6jqvzgh_image.png",
        "button-image-width": 100,
        "video-mask-opacity": 40,
      },
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/cmzdycuucugo7emma3kjj_video.png",
        "padding-top": "0px",
        "padding-right": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "L5zAfXuoy9UHeKTnutLSU",
    },
  },
];

export const Videos = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getVideoCode = (item: Element) => {
    return JSON.stringify(item, null, 2);
  };

  const toggleCode = (index: number) => {
    setExpandedCodes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePreview = (item: Element) => {
    const code = getVideoCode(item);
    localStorage.setItem("preview_block_json", code);
    window.open("/template?block_preview=true", "_blank");
  };

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Title heading={2}>Videos</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Video components for email campaigns with customizable thumbnails and
          play buttons. Each video can be styled with different thumbnails and
          overlay options.
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {list.map((item, index) => {
          const blockDefinition = BlockManager.getBlockByType(
            KitElementType.COMMON_VIDEO
          );

          const element = blockDefinition?.create(item.payload);
          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              {/* Video Preview */}
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
                  <div style={{ position: "relative" }}>
                    <img
                      src={item.payload.attributes.src}
                      style={{
                        width: "100%",
                        borderRadius: 4,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 14,
                      color: "var(--color-text-2)",
                      textAlign: "center",
                    }}
                  >
                    Video with {item.payload.data["video-mask-opacity"]}%
                    overlay opacity
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
                          navigator.clipboard.writeText(getVideoCode(element!));
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
                      {getVideoCode(element!)}
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
