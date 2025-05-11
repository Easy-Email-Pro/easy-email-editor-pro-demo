import React, { useEffect, useState } from "react";
import { Typography, Space, Layout, Menu } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import { Buttons } from "./blocks/Buttons";
import { Images } from "./blocks/Images";
import { Texts } from "./blocks/Texts";
import { Dividers } from "./blocks/Dividers";
import { Spacers } from "./blocks/Spacers";
import { Navbars } from "./blocks/Navbars";
import { Socials } from "./blocks/Socials";
import { Heros } from "./blocks/Heros";
import { Tables } from "./blocks/Tables";
import { Shopwindows } from "./blocks/Shopwindows";
import { EditorCore, PluginManager } from "easy-email-pro-core";
import FullScreenLoading from "@/components/FullScreenLoading";
const { Sider, Content } = Layout;
const MenuItem = Menu.Item;
import {
  Shopwindow,
  QRCode,
  Video,
  ImageWithText,
  CountdownV2,
  Countdown,
} from "easy-email-pro-kit";
import { Countdowns } from "./blocks/Countdowns";
import { QrCodes } from "./blocks/QrCodes";
import { Videos } from "./blocks/Videos";
import { Discounts } from "./blocks/composite/Discounts";
import { TrustBadges } from "./blocks/composite/TrustBadges";
import { Reviews } from "./blocks/composite/Reviews";
import { PageLayout } from "@/components/PageLayout";
import { pushEvent } from "@/utils/pushEvent";

PluginManager.registerPlugins([
  CountdownV2,
  Countdown,
  Shopwindow,
  QRCode,
  Video,
  ImageWithText,
]);

// 定义组件分组和内容映射
const ComponentGroups = {
  standard: {
    title: "Standard",
    items: {
      text: { label: "Text", component: <Texts /> },
      button: { label: "Button", component: <Buttons /> },
      image: { label: "Image", component: <Images /> },
      divider: { label: "Divider", component: <Dividers /> },
      spacer: { label: "Spacer", component: <Spacers /> },
      navbar: { label: "Navbar", component: <Navbars /> },
      social: { label: "Social", component: <Socials /> },
      hero: { label: "Hero", component: <Heros /> },
      table: { label: "Table", component: <Tables /> },
    },
  },
  marketing: {
    title: "Marketing",
    items: {
      shopwindow: { label: "Shopwindow", component: <Shopwindows /> },
      countdown: { label: "Countdown", component: <Countdowns /> },
      qrcode: { label: "QR Code", component: <QrCodes /> },
      video: { label: "Video", component: <Videos /> },
    },
  },
  composite: {
    title: "Composite",
    items: {
      discount: { label: "Discount", component: <Discounts /> },
      review: { label: "Review", component: <Reviews /> },
      trustBadge: { label: "Trust Badge", component: <TrustBadges /> },
    },
  },
};

export default function ComponentsPage() {
  const [init, setInit] = useState(false);

  const [selectedKey, setSelectedKey] = useState("button");

  useEffect(() => {
    EditorCore.auth(process.env.CLIENT_ID as string).then(() => {
      setInit(true);
    });
  }, []);

  const handleMenuClick = (key: string) => {
    pushEvent({
      event: "components_item_click",
      payload: {
        key,
      },
    });
    setSelectedKey(key);
  };

  const findSelectedComponent = () => {
    for (const groupKey in ComponentGroups) {
      const group = ComponentGroups[groupKey as keyof typeof ComponentGroups];
      if (group.items[selectedKey as keyof typeof group.items]) {
        return (group.items[selectedKey as keyof typeof group.items] as any)
          .component;
      }
    }
    return null;
  };

  if (!init) {
    return <FullScreenLoading isFullScreen />;
  }

  return (
    <PageLayout>
      <Layout
        style={{
          height: `calc(100vh - 80px)`,
        }}
      >
        <Sider
          style={{
            width: 250,
            height: "100%",
            background: "var(--color-bg-2)",
          }}
        >
          <div
            style={{
              padding: "20px 16px",
              borderBottom: "1px solid var(--color-border)",
              marginBottom: 8,
            }}
          >
            <Typography.Title
              heading={5}
              style={{ margin: 0, textAlign: "center" }}
            >
              Blocks
            </Typography.Title>
          </div>
          <Menu
            selectedKeys={[selectedKey]}
            defaultOpenKeys={["standard", "marketing", "composite"]}
            style={{ width: "100%" }}
            onClickMenuItem={handleMenuClick}
          >
            {Object.entries(ComponentGroups).map(([groupKey, group]) => (
              <Menu.SubMenu key={groupKey} title={group.title}>
                {Object.entries(group.items).map(([key, item]) => (
                  <MenuItem key={key}>{item.label}</MenuItem>
                ))}
              </Menu.SubMenu>
            ))}
          </Menu>
        </Sider>
        <Content>
          <div
            style={{
              overflow: "auto",
              background: "#f5f5f5",
            }}
          >
            <div className="container" style={{ padding: 24 }}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                {findSelectedComponent()}
              </Space>
            </div>
          </div>
        </Content>
      </Layout>
    </PageLayout>
  );
}
