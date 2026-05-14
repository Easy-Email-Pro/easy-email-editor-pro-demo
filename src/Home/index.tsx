import React from "react";
import { Card, Grid } from "@arco-design/web-react";
import { Layout } from "@arco-design/web-react";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import { PageLayout } from "@/components/PageLayout";
import { EmailItem } from "@/components/EmailList/EmailItem";
import SimpleImg from "./images/simple.png";
import ResponsiveViewImg from "./images/responsive.png";
import DynamicCustomBlock from "./images/dynamic-block.png";
import studioImg from "./images/studio.png";
import readonlyImg from "./images/readonly.png";

const features = [
  {
    subject: "Full feature",
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
    subject: "Modern ",
    thumbnail: 'https://cdn.shopify.com/s/files/1/0863/8971/9346/files/jjsa1t-wcev70i95tpqmy_image.png',
    url: "/modern",
  },
  {
    subject: "ReadOnly Mode",
    thumbnail: readonlyImg,
    url: "/read-only",
  },
  {
    subject: "AMP",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/ovzn5deibk9sbcxsipxbs_vertical-version.jpg",
    url: "/amp-email",
  },
];

export const Home = () => {
  return (
    <PageLayout>
      <div style={{ padding: "24px", background: "#f5f5f5" }}>
        <Layout.Content style={{ padding: 20 }}>
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
        </Layout.Content>
      </div>
    </PageLayout>
  );
};
