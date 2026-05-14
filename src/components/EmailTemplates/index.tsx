import React from "react";
import { Card } from "@arco-design/web-react";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import { Grid } from "@arco-design/web-react";

import { PageElement } from "easy-email-pro-core";
import { useEditorContext } from "easy-email-pro-theme";
import { EmailItem } from "@/components/EmailList/EmailItem";
import { emailListTemplates } from "@/components/EmailList/templates";

export const EmailTemplates = () => {
  const { reset } = useEditorContext();
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
  };

  return (
    <>
      <Card style={{ backgroundColor: "#fff" }}>
        <Grid.Row gutter={10}>
          {emailListTemplates.map((item, index) => {
            return (
              <Grid.Col key={index} xs={1} sm={1} md={4} lg={6}>
                <EmailItem item={item} onClick={onSwitchTemplate} />
              </Grid.Col>
            );
          })}
        </Grid.Row>
      </Card>
    </>
  );
};
