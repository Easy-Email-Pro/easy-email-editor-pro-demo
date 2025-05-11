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
  StandardNavbarElement,
} from "easy-email-pro-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDown, IconUp } from "@arco-design/web-react/icon";
import { Link } from "@arco-design/web-react";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const navbarList: Array<{ thumbnail: string; payload: StandardNavbarElement }> =
  [
    {
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/snf-wzi_7j-4zhd1hsy7x_image.png",
      payload: {
        type: "standard-navbar",
        data: {},
        attributes: {},
        children: [
          {
            data: {},
            type: "standard-navbar-link",
            children: [
              {
                text: "About",
              },
            ],
            attributes: {
              href: "",
            },
            id: "zF2CErqYOdSoWie2HkVQG",
          },
          {
            data: {},
            type: "standard-navbar-link",
            children: [
              {
                text: "Shop",
              },
            ],
            attributes: {
              href: "",
            },
            id: "xDSwKFocxAKhpwlMFdw-F",
          },
          {
            data: {},
            type: "standard-navbar-link",
            children: [
              {
                text: "Contact",
              },
            ],
            attributes: {
              href: "",
            },
            id: "mzpDcMZ-Pw1S1u6ED0qWl",
          },
          {
            data: {},
            type: "standard-navbar-link",
            children: [
              {
                text: "Blog",
              },
            ],
            attributes: {
              href: "",
            },
            id: "MvaRiCXyjwinH2m6nb30u",
          },
        ],
        id: "DkixzoL-7JcEGkTwTD7AI",
      },
    },
  ];

export const Navbars = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getNavbarCode = (item: Element) => {
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
        <Title heading={2}>Navigation Bars</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Navigation bar components for email headers. View all available MJML
          navbar attributes in the{" "}
          <Link
            href="https://documentation.mjml.io/#mj-navbar"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJML Navbar documentation
          </Link>
          .
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {navbarList.map((item, index) => {
          const blockDefinition = BlockManager.getBlockByType(
            ElementType.STANDARD_NAVBAR
          );

          const element = blockDefinition?.create(item.payload);
          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              {/* Navbar Preview */}
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
                        icon={expandedCodes[index] ? <IconUp /> : <IconDown />}
                      >
                        {expandedCodes[index] ? "Hide Code" : "Show Code"}
                      </Button>
                      <Button
                        type="text"
                        size="small"
                        onClick={() => {
                          navigator.clipboard.writeText(getNavbarCode(element));
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
                      {getNavbarCode(element)}
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
