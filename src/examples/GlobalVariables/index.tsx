import { useMemo } from "react";
import { EmailEditorProvider, EmailTemplate } from "easy-email-pro-editor";
import { AttributeField, Retro } from "easy-email-pro-theme";
import "easy-email-pro-theme/lib/style.css";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import data from "./template.json";
import data2 from "./template2.json";
import { useUpload } from "../../hooks/useUpload";
import { Card, Divider, Form, Grid, Layout } from "@arco-design/web-react";
import React from "react";

const attributesColors = {
  "content-background-color": "#eeeff2",
  "background-color": "#8C9A80",
};

export default function MyEditor() {
  const [form] = Form.useForm();
  return (
    <div>
      <div>
        <Form form={form} initialValues={{ variables: attributesColors }}>
          <Templates />
        </Form>
      </div>
    </div>
  );
}

const Templates = () => {
  const { upload } = useUpload();
  const variables = Form.useWatch("variables");

  const initialValues: EmailTemplate | null = useMemo(() => {
    return {
      subject: data.subject,
      content: data.content as EmailTemplate["content"],
    };
  }, []);
  const initialValues2: EmailTemplate | null = useMemo(() => {
    return {
      subject: data2.subject,
      content: data2.content as EmailTemplate["content"],
    };
  }, []);

  const onUpload = (file: Blob): Promise<string> => {
    return upload(file);
  };

  const onSubmit = async (values: EmailTemplate) => {
    console.log(values);
  };

  const config = Retro.useCreateConfig({
    onUpload,
    clientId: process.env.CLIENT_ID!,
    initialValues: initialValues,
    onSubmit: onSubmit,
    showSourceCode: true,
    showSidebar: false,
    // showPreview: false,
    controller: false,
    unsplash: {
      clientId: "Sdnm6Q2u2pM3HdGvg4aIlbpYm3wobOjVpBqOqX6e7MA",
    },
    height: "calc(50vh - 60px)",
    attributesVariables: variables,
  });
  const config2 = Retro.useCreateConfig({
    onUpload,
    clientId: process.env.CLIENT_ID!,
    initialValues: initialValues2,
    onSubmit: onSubmit,
    showSourceCode: true,
    showSidebar: false,
    // showPreview: false,
    controller: false,
    unsplash: {
      clientId: "Sdnm6Q2u2pM3HdGvg4aIlbpYm3wobOjVpBqOqX6e7MA",
    },
    height: "calc(50vh - 60px)",
    attributesVariables: variables,
    showLayer: true,
  });
  return (
    <Grid.Row>
      <Grid.Col span={8}>
        <Card
          title="Global variables"
          style={{ height: "calc(100vh - 20px)" }}
          bodyStyle={{
            paddingTop: 100,
          }}
        >
          <AttributeField.ColorPickerField
            path={null}
            name="variables.content-background-color"
            label="Content background color"
          />
          <AttributeField.ColorPickerField
            path={null}
            name="variables.background-color"
            label="Background color"
          />
        </Card>
      </Grid.Col>
      <Grid.Col span={15} offset={1}>
        <Card>
          <EmailEditorProvider {...config}>
            <Layout.Content>
              <Retro.Layout></Retro.Layout>
            </Layout.Content>
          </EmailEditorProvider>
        </Card>
        <Divider />
        <Card>
          <EmailEditorProvider {...config2}>
            <Layout.Content>
              <Retro.Layout></Retro.Layout>
            </Layout.Content>
          </EmailEditorProvider>
        </Card>
      </Grid.Col>
    </Grid.Row>
  );
};
