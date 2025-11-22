import React from "react";
import { Button, Card, Tabs } from "@arco-design/web-react";

import "@arco-themes/react-easy-email-pro/css/arco.css";
import { Space } from "@arco-design/web-react";

import { EmailItem } from "./EmailItem";
import { Grid } from "@arco-design/web-react";

import SimpleImg from "./images/simple.png";
import UniversalImg from "./images/universal.png";
import LocalizationImg from "./images/localization.png";
import DynamicDataImg from "./images/dynamic-data.png";
import ResponsiveViewImg from "./images/responsive.png";
import DynamicCustomBlock from "./images/dynamic-block.png";
import CustomizeImage from "./images/customize.png";
import frozenImg from "./images/frozen.png";
import studioImg from "./images/studio.png";
import readonlyImg from "./images/readonly.png";
import "./index.less";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { PageElement } from "easy-email-pro-core";
import FullScreenLoading from "@/components/FullScreenLoading";

const features = [
  {
    subject: "Full",
    thumbnail: SimpleImg,
    url: "/full",
  },

  {
    subject: (
      <div style={{ display: "flex", alignItems: "center" }}>
        Block Studio
        <span
          style={{
            marginLeft: 8,
            padding: "2px 8px",
            fontSize: 12,
            fontWeight: 500,
            backgroundColor: "#FFF3E8",
            color: "#FF7D00",
            borderRadius: 4,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Recommended ⭐
        </span>
      </div>
    ),
    thumbnail: studioImg,
    url: "/studio",
  },
  {
    subject: "Responsive view",
    thumbnail: ResponsiveViewImg,
    url: "/responsive-view",
  },

  {
    subject: "Dynamic custom block",
    thumbnail: DynamicCustomBlock,
    url: "/dynamic-custom-block",
  },
  {
    subject: "Universal elements",
    thumbnail: SimpleImg,
    url: "/universal-element",
  },
  {
    subject: "Universal elements 2",
    thumbnail: UniversalImg,
    url: "/universal-element2",
  },
  {
    subject: "ReadOnly Mode",
    thumbnail: readonlyImg,
    url: "/read-only",
  },
  {
    subject: "Simple",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/xhqkdj1da7ssf7m-z8rbj_simple.png",
    url: "/simple",
  },
];

export const EmailList = ({
  onClick,
}: {
  onClick?: (item: {
    id: string;
    subject: string;
    thumbnail: string;
    content: PageElement;
    url?: string;
  }) => void;
}) => {
  const [list, setList] = useState<
    Array<{
      id: string;
      createdAt: string;
      updatedAt: string;
      thumbnail: string;
      subject: string;
      content: PageElement;
    }>
  >([]);

  useEffect(() => {
    axios
      .get("https://admin.easyemail.pro/api/email-template", {
        params: {
          user_id: "clnl5a07900065zltiqvalojp",
        },
      })
      .then(({ data }) => {
        setList(data);
      });
  }, []);

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Tabs defaultActiveTab="Feature">
        <Tabs.TabPane
          key={"Feature"}
          title={
            <span style={{ fontSize: 20, fontWeight: "bold" }}>Feature</span>
          }
        >
          <Card style={{ backgroundColor: "#fff" }}>
            <Grid.Row>
              {features.map((item, index) => {
                return (
                  <Grid.Col key={index} xs={1} sm={1} md={4} lg={6}>
                    <EmailItem item={item as any} />
                  </Grid.Col>
                );
              })}
            </Grid.Row>
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane
          key={"Templates"}
          title={
            <span style={{ fontSize: 20, fontWeight: "bold" }}>Template</span>
          }
        >
          <Card
            style={{ backgroundColor: "#fff" }}
            title={
              <div>
                <span>
                  The following templates are the replica of the Klaviyo email
                  template by Easy Email Pro Editor, please do not use it for
                  commercial purposes.
                </span>
              </div>
            }
          >
            <Grid.Row>
              {list.map((item, index) => {
                return (
                  <Grid.Col key={index} xs={1} sm={1} md={4} lg={6}>
                    <EmailItem item={item} onClick={onClick} />
                  </Grid.Col>
                );
              })}
              {list.length === 0 && <FullScreenLoading size={64} />}
            </Grid.Row>
          </Card>
        </Tabs.TabPane>
      </Tabs>
    </Space>
  );
};
