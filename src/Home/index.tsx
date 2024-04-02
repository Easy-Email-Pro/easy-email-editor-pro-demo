import React from "react";
import { Button, Card } from "@arco-design/web-react";
import { Layout } from "@arco-design/web-react";
import "@arco-themes/react-easy-email-pro/css/arco.css";
import { Space } from "@arco-design/web-react";
import Logo from "./easy-email-pro.svg";

import template1 from "./templates/template1.json";
import template2 from "./templates/template2.json";
import template3 from "./templates/template3.json";
import template4 from "./templates/template4.json";
import template5 from "./templates/template5.json";
import template6 from "./templates/template6.json";
import template7 from "./templates/template7.json";
import template8 from "./templates/template8.json";
import template9 from "./templates/template9.json";
import { EmailItem } from "./EmailItem";
import { Grid } from "@arco-design/web-react";

import SimpleImg from "./images/simple.png";
import UniversalImg from "./images/universal.png";
import LocalizationImg from "./images/localization.png";
import DynamicDataImg from "./images/dynamic-data.png";
import ResponsiveViewImg from "./images/responsive.png";
import DynamicCustomBlock from "./images/dynamic-block.png";
import NotionBlockImg from "./images/notion-like.png";
import CustomizeImage from "./images/customize.png";
import frozenImg from "./images/frozen.png";
import studioImg from "./images/studio.png";
import nextjsImg from "./images/nextjs.png";
import readonlyImg from "./images/readonly.png";
import "./index.less";

const features = [
  {
    subject: "Notion",
    thumbnail: NotionBlockImg,
    url: "/notion-like",
  },
  {
    subject: "Full",
    thumbnail: SimpleImg,
    url: "/full",
  },
  {
    subject: "Simple",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/xhqkdj1da7ssf7m-z8rbj_simple.png",
    url: "/simple",
  },

  {
    subject: "Customize",
    thumbnail: CustomizeImage,
    url: "/customize",
  },
  {
    subject: "Nextjs integration example",
    thumbnail: nextjsImg,
    url: "https://admin.easyemail.pro?utm_souce=demo",
  },
  {
    subject: "Studio",
    thumbnail: studioImg,
    url: "/studio",
  },
  {
    subject: "Localization",
    thumbnail: LocalizationImg,
    url: "/localization",
  },
  {
    subject: "Dynamic data",
    thumbnail: DynamicDataImg,
    url: "/dynamic-data",
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
    subject: "Single side bar / Double side bar",
    thumbnail: SimpleImg,
    url: "/side-bar",
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
    subject: "Global variables",
    thumbnail:
      "https://res.cloudinary.com/djnkpbshx/image/upload/v1688961440/easy-email-pro-test/ttvxbjvkr1x06bxyz1a5.png",
    url: "/global-variables",
  },
  {
    subject: "ReadOnly Mode",
    thumbnail: readonlyImg,
    url: "/read-only",
  },
  {
    subject: "Frozen Header and Footer",
    thumbnail: frozenImg,
    url: "/frozen-block",
  },
];

export const list = [
  template1,
  template2,
  template3,
  template4,
  template5,
  template6,
  template7,
  template8,
  template9,
].map((item) => {
  return {
    id: item.id,
    subject: item.subject,
    thumbnail: item.thumbnail,
    content: item.content,
    url: "/template?id=" + item.id,
  };
});

export const Home = () => {
  return (
    <div>
      <div className="header border-solid border-b border-b-slate-200">
        <div className="px-10 m-auto py-5 flex justify-between">
          <h1>
            <a href="/">
              <Logo className="logo" height={36} width={175} />
            </a>
          </h1>
          <Space>
            <Button
              type="primary"
              target="_blank"
              href="https://www.easyemail.pro/?utm_source=demo"
            >
              <strong>View Website</strong>
            </Button>
            <Button
              type="primary"
              target="_blank"
              href="https://admin.easyemail.pro/?utm_souce=demo"
            >
              <strong>Write Email</strong>
            </Button>
          </Space>
        </div>
      </div>
      <Layout.Content style={{ padding: 20 }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Card style={{ backgroundColor: "#fff" }} title="Features">
            <Grid.Row>
              {features.map((item, index) => {
                return (
                  <Grid.Col xs={1} sm={1} md={4} lg={6}>
                    <EmailItem item={item} />
                  </Grid.Col>
                );
              })}
            </Grid.Row>
          </Card>

          <Card style={{ backgroundColor: "#fff" }} title="Templates">
            <Grid.Row>
              {list.map((item, index) => {
                return (
                  <Grid.Col key={index} xs={1} sm={1} md={4} lg={6}>
                    <EmailItem item={item} />
                  </Grid.Col>
                );
              })}
            </Grid.Row>
          </Card>
        </Space>
      </Layout.Content>
    </div>
  );
};
