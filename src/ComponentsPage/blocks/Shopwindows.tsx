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
import { KitElementType, MarketingShopwindowElement } from "easy-email-pro-kit";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const imgList: Array<{ payload: MarketingShopwindowElement }> = [
  {
    payload: {
      type: "marketing-shopwindow",
      data: {
        list: [
          {
            src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/sx9iemawisklnrsn_nx4f_image.png",
          },
          {
            src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/kcb_901pyt2rxsckj52xp_image.png",
          },
          {
            src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/1lfgm24de1_nve5jz8b5e_image.png",
          },
        ],
      },
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/myq4jbifahf4zdbqvgnkt_shopwindow.gif",
      },
      children: [
        {
          text: "",
        },
      ],
    },
  },
  {
    payload: {
      type: "marketing-shopwindow",
      data: {
        list: [
          {
            src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/bxdp5bs6phdm36xxwrwor_image.png",
          },
          {
            src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/qgdx0oyvq-6ykfq-gdu3c_image.png",
          },
          {
            src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/enbthikjvbg5nvvrb0dgj_image.png",
          },
        ],
      },
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/5sdhv5k9ffscb00brd6vd_shopwindow.gif",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "E5oHHvtg_a5JlrkjMBEr4",
    },
  },
];

export const Shopwindows = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getShopwindowCode = (item: Element) => {
    return JSON.stringify(item, null, 2);
  };

  const toggleCode = (index: number) => {
    setExpandedCodes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePreview = (item: Element) => {
    const code = getShopwindowCode(item);
    localStorage.setItem("preview_block_json", code);
    window.open("/template?block_preview=true", "_blank");
  };

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Title heading={2}>Shop Windows</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Shop window components for displaying product galleries.
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {imgList.map((item, index) => {
          const blockDefinition = BlockManager.getBlockByType(
            KitElementType.MARKETING_SHOPWINDOW
          );

          const element = blockDefinition?.create(item.payload);
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
                  cursor: "pointer",
                }}
                onClick={() => handlePreview(element!)}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: 300,
                    margin: "0 auto",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.payload.attributes.src}
                    style={{
                      width: "100%",
                      borderRadius: 4,
                    }}
                    alt="Shop window preview"
                  />
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 14,
                      color: "var(--color-text-2)",
                      textAlign: "center",
                    }}
                  >
                    Gallery with {item.payload.data.list.length} products
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
                            getShopwindowCode(element!)
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
                      {getShopwindowCode(element!)}
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
