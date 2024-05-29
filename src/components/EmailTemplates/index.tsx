import React from "react";
import { Card, Drawer } from "@arco-design/web-react";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import { Grid } from "@arco-design/web-react";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { PageElement } from "easy-email-pro-core";
import FullScreenLoading from "@/components/FullScreenLoading";
import { EmailItem } from "@/Home/EmailItem";
import { useEditorContext } from "easy-email-pro-theme";

export const EmailTemplates = ({ children }: { children: React.ReactNode }) => {
  const { reset } = useEditorContext();
  const [visible, setVisible] = useState(false);
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

  const onSwitchTemplate = (item: {
    id: string;
    subject: string;
    thumbnail: string;
    content: PageElement;
    url?: string | undefined;
  }) => {
    reset({
      content: item.content,
      subject: item.subject,
    });
    setVisible(false);
  };

  return (
    <>
      <Drawer
        visible={visible}
        width={"80vw"}
        placement="left"
        onCancel={() => setVisible(false)}
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
          <Grid.Row gutter={10}>
            {list.map((item, index) => {
              return (
                <Grid.Col key={index} xs={1} sm={1} md={4} lg={6}>
                  <EmailItem item={item} onClick={onSwitchTemplate} />
                </Grid.Col>
              );
            })}
            {list.length === 0 && <FullScreenLoading size={64} />}
          </Grid.Row>
        </Card>
      </Drawer>
      <div onClick={() => setVisible(true)}>{children}</div>
    </>
  );
};
