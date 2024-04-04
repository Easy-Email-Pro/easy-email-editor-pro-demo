import React from "react";
import { Alert, Button, Card, Tabs } from "@arco-design/web-react";
import { Layout } from "@arco-design/web-react";
import "@arco-themes/react-easy-email-pro/css/arco.css";
import { Space } from "@arco-design/web-react";
import Logo from "./easy-email-pro.svg";

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
import readonlyImg from "./images/readonly.png";
import "./index.less";
import { IconClose } from "@arco-design/web-react/icon";
import { useLocalStorage } from "react-use";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { PageElement } from "easy-email-pro-core";
import FullScreenLoading from "@/components/FullScreenLoading";

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
    subject: "Markdown",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/tdtfl1cwkpgpyan4jejni_image.png",
    url: "/markdown",
  },
  {
    subject: "Studio",
    thumbnail: studioImg,
    url: "/studio",
  },
  {
    subject: "Responsive view",
    thumbnail: ResponsiveViewImg,
    url: "/responsive-view",
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
    subject: "Dynamic custom block",
    thumbnail: DynamicCustomBlock,
    url: "/dynamic-custom-block",
  },
  {
    subject: "Frozen Header and Footer",
    thumbnail: frozenImg,
    url: "/frozen-block",
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
];

export const Home = () => {
  const [hidden, setHidden] = useLocalStorage("alert-banner", false);

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
        console.log(data);
        setList(data);
      });
  }, []);

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
      {!hidden && (
        <Alert
          closeElement={<Button type="primary" icon={<IconClose />}></Button>}
          showIcon={false}
          closable
          onClose={() => setHidden(true)}
          content={
            <div style={{ fontSize: 16, paddingLeft: 50, paddingRight: 50 }}>
              In our latest edition, we're delighted to inform you that we've
              incorporated the MJML syntax! 😃 There's no need for any
              additional imports. Check out the freshest way to write custom
              blocks right here! 👀👇{" "}
              <Button
                type="secondary"
                href="https://docs.easyemail.pro/docs/advanced/custom-block?utm_source=demo-banner"
                target="_blank"
              >
                Check
              </Button>
            </div>
          }
        ></Alert>
      )}
      <Layout.Content style={{ padding: 20 }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Tabs defaultActiveTab="Feature">
            <Tabs.TabPane key={"Feature"} title={"Feature"}>
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
            </Tabs.TabPane>
            <Tabs.TabPane key={"Templates"} title={"Template"}>
              <Card
                style={{ backgroundColor: "#fff" }}
                title={
                  <div>
                    <span>
                      The following templates are the replica of the Klaviyo
                      email template by Easy Email Pro Editor, please do not use
                      it for commercial purposes.
                    </span>
                  </div>
                }
              >
                <Grid.Row>
                  {list.map((item, index) => {
                    return (
                      <Grid.Col key={index} xs={1} sm={1} md={4} lg={6}>
                        <EmailItem item={item} />
                      </Grid.Col>
                    );
                  })}
                  {list.length === 0 && <FullScreenLoading size={64} />}
                </Grid.Row>
              </Card>
            </Tabs.TabPane>
          </Tabs>
        </Space>
      </Layout.Content>
    </div>
  );
};
