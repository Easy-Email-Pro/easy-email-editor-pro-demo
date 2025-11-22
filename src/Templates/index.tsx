import React, { useEffect, useState } from "react";
import { Card, Grid } from "@arco-design/web-react";
import { Layout } from "@arco-design/web-react";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import { PageLayout } from "@/components/PageLayout";
import { EmailItem } from "@/components/EmailList/EmailItem";
import axios from "axios";
import { PageElement } from "easy-email-pro-core";
import FullScreenLoading from "@/components/FullScreenLoading";

export const Templates = () => {
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
    <PageLayout>
      <div style={{ padding: "24px", background: "#f5f5f5" }}>
        <Layout.Content style={{ padding: 20 }}>
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
                    <EmailItem item={item} />
                  </Grid.Col>
                );
              })}
              {list.length === 0 && <FullScreenLoading size={64} />}
            </Grid.Row>
          </Card>
        </Layout.Content>
      </div>
    </PageLayout>
  );
};
