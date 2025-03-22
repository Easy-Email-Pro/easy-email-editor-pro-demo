import React from "react";
import { Button, Card, Tabs } from "@arco-design/web-react";
import { Layout } from "@arco-design/web-react";
import "@arco-themes/react-easy-email-pro/css/arco.css";
import { Space } from "@arco-design/web-react";
import Logo from "./easy-email-pro.svg";

import { EmailList } from "@/components/EmailList";

export const Home = () => {
  return (
    <div>
      <div className="header border-solid border-b border-b-slate-200">
        <div className="px-10 m-auto py-5 flex justify-between">
          <h1>
            <a href="https://www.easyemail.pro/">
              <Logo className="logo" height={36} width={175} />
            </a>
          </h1>

          <Space>
            <Button
              type="primary"
              target="_blank"
              href="https://www.easyemail.pro/?#trial?utm_source=demo"
            >
              <strong>Start Trial</strong>
            </Button>
            <Button
              type="primary"
              target="_blank"
              href="https://admin.easyemail.pro/?utm_souce=demo"
            >
              <strong>Write Email</strong>
            </Button>
            <Button
              type="primary"
              target="_blank"
              href="https://docs.easyemail.pro/docs/intro/?utm_souce=demo"
            >
              <strong>Docs</strong>
            </Button>
          </Space>
        </div>
      </div>
      <Layout.Content style={{ padding: 20 }}>
        <EmailList />
      </Layout.Content>
    </div>
  );
};
