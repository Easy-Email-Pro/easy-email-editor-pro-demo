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
  StandardSocialElement,
} from "easy-email-pro-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDown, IconUp } from "@arco-design/web-react/icon";
import { Link } from "@arco-design/web-react";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const socialList: Array<{ thumbnail: string; payload: StandardSocialElement }> =
  [
    {
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/u4tdcpjjfvsu7fdmey5nu_image.png",
      payload: {
        type: "standard-social",
        data: {},
        attributes: {
          spacing: "8px",
          "icon-size": "30px",
          mode: "horizontal",
        },
        children: [
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/psyz-f1z-ryy95lv2rh7g_image.png",
              href: "",
              "padding-left": "0px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "72iACN5oun1tqwJh_wdr3",
          },
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/rxxjzpus7vy2cxi0vp6hr_image.png",
              href: "",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "_XEjONnH-I29IPqkeqkmm",
          },
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/obdwqmxv5cljc16-ebnja_image.png",
              href: "",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "fdtwGIxutAOkWNwZ9Oubz",
          },
        ],
        id: "MoECVNoRBSTk4DrttQPdm",
      },
    },
    {
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/kc4s725rht9y5yitxglkm_image.png",
      payload: {
        type: "standard-social",
        data: {},
        attributes: {
          align: "center",
          "font-size": "15px",
          "icon-size": "30px",
          mode: "horizontal",
          spacing: "8px",
        },
        children: [
          {
            type: "standard-social-element",
            data: {},
            attributes: {
              "background-color": "#B8860B",
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/mfpkmlhg2mva_os9dl4p1_image.png",
              "padding-left": "0px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            children: [
              {
                text: "",
              },
            ],
            id: "IJPUsz6QtPLs-Hh6DA4ql",
          },
          {
            type: "standard-social-element",
            data: {},
            attributes: {
              "background-color": "#B8860B",
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/bc9v51iia1minm3_7hoz_image.png",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            children: [
              {
                text: "",
              },
            ],
            id: "KrTvxeXx_1XqO-484eWw2",
          },
          {
            type: "standard-social-element",
            data: {},
            attributes: {
              "background-color": "#B8860B",
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/yalfxko4tea86assl7rfg_image.png",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            children: [
              {
                text: "",
              },
            ],
            id: "uvOTno_Vh-3erJ01oeYMh",
          },
        ],
        id: "XJYRA6Y03jkFVbFdAbPhc",
      },
    },
    {
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/6eix3qutd1bg4pabveema_image.png",
      payload: {
        type: "standard-social",
        data: {},
        attributes: {
          spacing: "8px",
          "icon-size": "30px",
          mode: "horizontal",
        },
        children: [
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/noqc2te0gdpyphwd6y-k_image.png",
              href: "",
              "padding-left": "0px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "VxcDiXydWB3G4IPKed9zs",
          },
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/subsixm6-khbu4dwsm1nr_image.png",
              href: "",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "K0oiO5snGezfkmbJo-0cy",
          },
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/gbwnp8-q32wsucbyee-0m_image.png",
              href: "",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "JSjtiQmB45KY14rFhrOIz",
          },
        ],
        id: "Lokg1kjEnJ0IFtpXTODlP",
      },
    },
  ];

export const Socials = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getSocialCode = (item: Element) => {
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
        <Title heading={2}>Social Media Icons</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Social media icon components for email footers. View all available
          MJML social attributes in the{" "}
          <Link
            href="https://documentation.mjml.io/#mj-social"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJML Social documentation
          </Link>
          .
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {socialList.map((item, index) => {
          const blockDefinition = BlockManager.getBlockByType(
            ElementType.STANDARD_SOCIAL
          );

          const element = blockDefinition?.create(item.payload);
          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              {/* Social Preview */}
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
                    minHeight: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.thumbnail}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      maxHeight: "100%",
                    }}
                    alt="Social icons preview"
                  />
                </div>
                <div
                  style={{
                    marginTop: 12,
                    textAlign: "center",
                    fontSize: 14,
                    color: "var(--color-text-2)",
                  }}
                >
                  {item.payload.attributes.mode} layout,{" "}
                  {item.payload.attributes["icon-size"]} icons
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
                            getSocialCode(element!)
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
                      {getSocialCode(element!)}
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
