import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { ProductCard } from "./blocks/composite/ProductCard";
import { Headers } from "./blocks/prebuilt/Headers";
import { Footers } from "./blocks/prebuilt/Footers";
import { Ctas } from "./blocks/prebuilt/Ctas";
import { Newsletters } from "./blocks/prebuilt/Newsletters";
import { Features } from "./blocks/prebuilt/Features";
import { Pricings } from "./blocks/prebuilt/Pricings";
import { Faqs } from "./blocks/prebuilt/Faqs";
import { Announcements } from "./blocks/prebuilt/Announcements";
import { ProductSpotlights } from "./blocks/composite/ProductSpotlights";
import { EventPromos } from "./blocks/composite/EventPromos";
import { EditorialStories } from "./blocks/composite/EditorialStories";
import { SeasonalSales } from "./blocks/composite/SeasonalSales";
import { BrandStories } from "./blocks/composite/BrandStories";
import { AppPromos } from "./blocks/composite/AppPromos";
import { LoyaltyRewards } from "./blocks/composite/LoyaltyRewards";
import { ShippingUpdates } from "./blocks/composite/ShippingUpdates";
import { ComparisonBlocks } from "./blocks/composite/ComparisonBlocks";
import { LookbookGrids } from "./blocks/composite/LookbookGrids";
import { OrderReceipts } from "./blocks/composite/OrderReceipts";
import { SurveyRatings } from "./blocks/composite/SurveyRatings";

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
      productCard: { label: "Product Card", component: <ProductCard /> },
      discount: { label: "Discount", component: <Discounts /> },
      review: { label: "Review", component: <Reviews /> },
      trustBadge: { label: "Trust Badge", component: <TrustBadges /> },
      header: { label: "Header", component: <Headers /> },
      footer: { label: "Footer", component: <Footers /> },
      cta: { label: "CTA", component: <Ctas /> },
      newsletter: { label: "Newsletter", component: <Newsletters /> },
      announcement: { label: "Announcement", component: <Announcements /> },
      feature: { label: "Feature", component: <Features /> },
      pricing: { label: "Pricing", component: <Pricings /> },
      faq: { label: "FAQ", component: <Faqs /> },
      productSpotlight: {
        label: "Product Spotlight",
        component: <ProductSpotlights />,
      },
      eventPromo: { label: "Event Promo", component: <EventPromos /> },
      editorialStory: {
        label: "Editorial Story",
        component: <EditorialStories />,
      },
      seasonalSale: {
        label: "Seasonal Sale",
        component: <SeasonalSales />,
      },
      brandStory: { label: "Brand Story", component: <BrandStories /> },
      appPromo: { label: "App Promo", component: <AppPromos /> },
      loyaltyRewards: {
        label: "Loyalty Rewards",
        component: <LoyaltyRewards />,
      },
      shippingUpdate: {
        label: "Shipping Update",
        component: <ShippingUpdates />,
      },
      comparisonBlock: {
        label: "Comparison Block",
        component: <ComparisonBlocks />,
      },
      lookbookGrid: {
        label: "Lookbook Grid",
        component: <LookbookGrids />,
      },
      orderReceipt: {
        label: "Order Receipt",
        component: <OrderReceipts />,
      },
      surveyRating: {
        label: "Survey Rating",
        component: <SurveyRatings />,
      },
    },
  },
};

export default function ComponentsPage() {
  const [init, setInit] = useState(false);

  const [selectedKey, setSelectedKey] = useState("text");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const componentItems = useMemo(
    () =>
      Object.entries(ComponentGroups).flatMap(([groupKey, group]) =>
        Object.entries(group.items).map(([key, item]) => ({
          groupKey,
          key,
          label: item.label,
          component: item.component,
        })),
      ),
    [],
  );

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

    sectionRefs.current[key]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (!init) return;

    const scrollContainer = contentRef.current;
    if (!scrollContainer) return;

    let animationFrame = 0;

    const updateSelectedKey = () => {
      animationFrame = 0;
      const containerTop = scrollContainer.getBoundingClientRect().top;
      const activationOffset = 96;
      let nextKey = componentItems[0]?.key ?? "text";
      let closestDistance = Number.POSITIVE_INFINITY;

      componentItems.forEach((item) => {
        const section = sectionRefs.current[item.key];
        if (!section) return;

        const distance = section.getBoundingClientRect().top - containerTop;
        if (distance <= activationOffset) {
          nextKey = item.key;
          closestDistance = 0;
          return;
        }

        if (closestDistance !== 0 && distance < closestDistance) {
          closestDistance = distance;
          nextKey = item.key;
        }
      });

      setSelectedKey((currentKey) =>
        currentKey === nextKey ? currentKey : nextKey,
      );
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateSelectedKey);
    };

    updateSelectedKey();
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [componentItems, init]);

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
            ref={contentRef}
            style={{
              overflow: "auto",
              background: "#f5f5f5",
              height: "100%",
              scrollBehavior: "smooth",
            }}
          >
            <div className="container" style={{ padding: 24 }}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                {componentItems.map((item) => (
                  <div
                    key={`${item.groupKey}-${item.key}`}
                    ref={(element) => {
                      sectionRefs.current[item.key] = element;
                    }}
                    style={{
                      scrollMarginTop: 24,
                    }}
                  >
                    {item.component}
                  </div>
                ))}
              </Space>
            </div>
          </div>
        </Content>
      </Layout>
    </PageLayout>
  );
}
