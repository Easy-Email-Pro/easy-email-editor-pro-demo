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
import { KitElementType, MarketingQRCodeElement } from "easy-email-pro-kit";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const imgList: Array<{ payload: MarketingQRCodeElement }> = [
  {
    payload: {
      type: "marketing-qr-code",
      data: {
        text: "https://www.easyemail.pro/",
        logo: "",
      },
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/prsqz23dcsd4s2ojwfqmu_srlyykco0edosjnigj_mo.png",
        "dot-color": "#FF6B6B",
        "dot-color-2": "#4ECDC4",
        "dot-color-rotation": 45,
        "dot-color-type": "gradient",
        "dot-gradient-type": "linear",
        "dot-type": "dots",
        "corner-dot-color": "#FF6B6B",
        "corner-dot-color-2": "#4ECDC4",
        "corner-square-color": "#FF6B6B",
        "corner-square-color-2": "#4ECDC4",
        "corner-dot-color-rotation": 45,
        "corner-dot-color-type": "gradient",
        "corner-dot-gradient-type": "linear",
        "corner-dot-type": "dot",
        "corner-square-color-rotation": 45,
        "corner-square-color-type": "gradient",
        "corner-square-gradient-type": "linear",
        "corner-square-type": "extra-rounded",
        "image-margin": 5,
        "background-color": "#ffffff",
        margin: 10,
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "15px",
        "padding-right": "15px",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "YmI3iBNZc1HlksIrH3dYu",
    },
  },
  {
    payload: {
      type: "marketing-qr-code",
      data: {
        text: "https://www.easyemail.pro",
        logo: "",
      },
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/yvqwwuzgmwg0q1val5v93_qrp5e9xexcihzfzne5gcs.png",
        "dot-color": "#292F36",
        "dot-color-rotation": 0,
        "dot-color-type": "single",
        "dot-gradient-type": "linear",
        "dot-type": "rounded",
        "corner-dot-color": "#FF6B6B",
        "corner-square-color": "#4ECDC4",
        "corner-dot-color-rotation": 0,
        "corner-dot-color-type": "single",
        "corner-dot-gradient-type": "linear",
        "corner-dot-type": "dot",
        "corner-square-color-rotation": 0,
        "corner-square-color-type": "single",
        "corner-square-gradient-type": "linear",
        "corner-square-type": "extra-rounded",
        "image-margin": 8,
        "background-color": "#F7FFF7",
        margin: 8,
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "LIjUjfSM53z89pc-k4vpE",
    },
  },
  {
    payload: {
      type: "marketing-qr-code",
      data: {
        text: "https://www.easyemail.pro",
        logo: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/hwm526rq8_e9s0ynhimam_image.png",
      },
      attributes: {
        "dot-color": "#6A0DAD",
        "dot-color-2": "#9A48D0",
        "dot-color-rotation": 90,
        "dot-color-type": "gradient",
        "dot-gradient-type": "radial",
        "dot-type": "classy-rounded",
        "corner-dot-color": "#6A0DAD",
        "corner-dot-color-2": "#9A48D0",
        "corner-square-color": "#6A0DAD",
        "corner-square-color-2": "#9A48D0",
        "corner-dot-color-rotation": 0,
        "corner-dot-color-type": "gradient",
        "corner-dot-gradient-type": "radial",
        "corner-dot-type": "dot",
        "corner-square-color-rotation": 0,
        "corner-square-color-type": "gradient",
        "corner-square-gradient-type": "radial",
        "corner-square-type": "square",
        "image-margin": 12,
        "background-color": "#FFFFFF",
        margin: 5,
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "15px",
        "padding-right": "15px",
        src: "",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "n7dveM3wh0pqUvM9XX290",
    },
  },
  {
    payload: {
      type: "marketing-qr-code",
      data: {
        text: "https://www.easyemail.pro",
        logo: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/hwm526rq8_e9s0ynhimam_image.png",
      },
      attributes: {
        "dot-color": "#6A0DAD",
        "dot-color-rotation": 90,
        "dot-color-type": "gradient",
        "dot-gradient-type": "radial",
        "dot-type": "classy-rounded",
        "corner-dot-color": "#6A0DAD",
        "corner-square-color": "#6A0DAD",
        "corner-dot-color-rotation": 0,
        "corner-dot-color-type": "gradient",
        "corner-dot-gradient-type": "radial",
        "corner-dot-type": "dot",
        "corner-square-color-rotation": 0,
        "corner-square-color-type": "gradient",
        "corner-square-gradient-type": "radial",
        "corner-square-type": "square",
        "image-margin": 12,
        "background-color": "#FFFFFF",
        margin: 5,
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "15px",
        "padding-right": "15px",
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/gzo0a-3_ma65pr_7gwvor_tuygdrqbbn8ajauxalia8.png",
        "dot-color-2": "#9A48D0",
        "corner-dot-color-2": "#9A48D0",
        "corner-square-color-2": "#9A48D0",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "K0aGaxmRXBDrpDk8vB5Jp",
    },
  },
  {
    payload: {
      type: "marketing-qr-code",
      data: {
        text: "https://www.easyemail.pro/",
        logo: "",
      },
      attributes: {
        "dot-color": "#ff0015",
        "dot-color-rotation": 120,
        "dot-color-type": "gradient",
        "dot-gradient-type": "linear",
        "dot-type": "extra-rounded",
        "corner-dot-color": "#c73d3d",
        "corner-square-color": "#E2F0CB",
        "corner-dot-color-rotation": 30,
        "corner-dot-color-type": "gradient",
        "corner-dot-gradient-type": "linear",
        "corner-dot-type": "extra-rounded",
        "corner-square-color-rotation": 60,
        "corner-square-color-type": "gradient",
        "corner-square-gradient-type": "linear",
        "corner-square-type": "extra-rounded",
        "image-margin": 15,
        "background-color": "#FFFFFF",
        margin: 10,
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "15px",
        "padding-right": "15px",
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/kxievacuffjjtdmf06jqc__oic3tflhbyxmpfs-rmgt.png",
        "dot-color-2": "#8262f6",
        "corner-dot-color-2": "#B5EAD7",
        "corner-square-color-2": "#FFCBC1",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "sqtozRkdCgmckhlDXNSX1",
    },
  },
];

export const QrCodes = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getQRCodeCode = (item: Element) => {
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
        <Title heading={2}>QR Codes</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Customizable QR code components with various styles and options for
          your email campaigns. Each QR code can be customized with different
          dot styles, colors, and gradients.
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {imgList.map((item, index) => {
          const blockDefinition = BlockManager.getBlockByType(
            KitElementType.MARKETING_QR_CODE
          );

          const element = blockDefinition?.create(item.payload);
          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              {/* QR Code Preview */}
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
                    maxWidth: 150,
                    margin: "0 auto",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.payload.attributes.src || ""}
                    style={{
                      width: "100%",
                      borderRadius: 4,
                      backgroundColor:
                        item.payload.attributes["background-color"],
                      padding: "15px",
                    }}
                    alt="QR code preview"
                  />
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 14,
                      color: "var(--color-text-2)",
                      textAlign: "center",
                    }}
                  >
                    {item.payload.attributes["dot-type"]} style
                    {item.payload.data.logo && " with logo"}
                    {item.payload.attributes["dot-color-type"] === "gradient" &&
                      ", gradient colors"}
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
                            getQRCodeCode(element!)
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
                      {getQRCodeCode(element!)}
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
