import React, { useState } from "react";
import {
  Typography,
  Space,
  Button,
  Card,
  Grid,
  Message,
  Link,
} from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import { Element, StandardImageElement } from "easy-email-pro-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDown, IconUp } from "@arco-design/web-react/icon";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const imgList: Array<{ payload: StandardImageElement }> = [
  {
    payload: {
      type: "standard-image",
      data: {},
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/biqsebynmw5lk3tzfybm1_ymztponegfngeef0cbype.png",
        padding: "10px 25px 10px 25px",
        "padding-left": "0px",
        "padding-right": "0px",
        "padding-top": "0px",
        "padding-bottom": "0px",
      },
      children: [{ text: "" }],
      id: "3MhLmoNaMFPcCIwrUfKRy",
    },
  },
  {
    payload: {
      type: "standard-image",
      data: {},
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/iqjhaqfya9drnsmid6hpf_vqp_wxhtulwic189okucr.png",
        padding: "10px 25px 10px 25px",
        "padding-left": "25px",
        "padding-right": "25px",
        "padding-top": "0px",
        "padding-bottom": "0px",
        "border-radius": "15px",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "3MhLmoNaMFPcCIwrUfKRy",
    },
  },
  {
    payload: {
      type: "standard-image",
      data: {},
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/f88wdngiodai49pg8mpce_npr9exwlj4a_tsg0dvl_g.png",
        padding: "10px 25px 10px 25px",
        "padding-left": "25px",
        "padding-right": "25px",
        "padding-top": "0px",
        "padding-bottom": "0px",
        "border-radius": "999px",
        width: "200px",
        height: "200px",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "3MhLmoNaMFPcCIwrUfKRy",
    },
  },
];

export const Images = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getImageCode = (item: Element) => {
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
        <Title heading={2}>Images</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Image components with various styles and layouts. View all available
          MJML image attributes in the{" "}
          <Link
            href="https://documentation.mjml.io/#mj-image"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJML Image documentation
          </Link>
          .
        </Paragraph>
      </div>
      <Card>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div>
            <Title heading={4} style={{ marginBottom: 8 }}>
              Image Variants
            </Title>
            <Paragraph type="secondary" style={{ marginBottom: 24 }}>
              A collection of image styles including standard, rounded, and
              circular variants.
            </Paragraph>
          </div>

          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            {imgList.map((item, index) => {
              return (
                <Card
                  key={index}
                  style={{
                    background: "var(--color-bg-2)",
                  }}
                >
                  {/* Image Preview */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "32px 16px",
                      background: "var(--color-bg-1)",
                      borderRadius: "4px",
                      marginBottom: 16,
                    }}
                  >
                    <img
                      src={item.payload.attributes.src}
                      style={{
                        maxWidth: "100%",
                        height: "200px",
                        borderRadius:
                          item.payload.attributes["border-radius"] || "0px",
                        width: item.payload.attributes.width || "auto",
                      }}
                      alt="Preview"
                    />
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
                            icon={
                              expandedCodes[index] ? <IconUp /> : <IconDown />
                            }
                          >
                            {expandedCodes[index] ? "Hide Code" : "Show Code"}
                          </Button>
                          <Button
                            type="text"
                            size="small"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                getImageCode(item.payload)
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
                          {getImageCode(item.payload)}
                        </SyntaxHighlighter>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </Space>
        </Space>
      </Card>
    </>
  );
};
