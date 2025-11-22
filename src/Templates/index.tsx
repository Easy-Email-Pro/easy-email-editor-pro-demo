import React from "react";
import { Card, Grid } from "@arco-design/web-react";
import { Layout } from "@arco-design/web-react";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import { PageLayout } from "@/components/PageLayout";
import { EmailItem } from "@/components/EmailList/EmailItem";
import { emailListTemplates } from "@/components/EmailList/templates";

export const Templates = () => {
  return (
    <PageLayout>
      <div style={{ padding: "24px", background: "#f5f5f5" }}>
        <Layout.Content style={{ padding: 20 }}>
          <Card style={{ backgroundColor: "#fff" }}>
            <Grid.Row>
              {emailListTemplates.map((item, index) => {
                return (
                  <Grid.Col key={index} xs={1} sm={1} md={4} lg={6}>
                    <EmailItem item={item} />
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
