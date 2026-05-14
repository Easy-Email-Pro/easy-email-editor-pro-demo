import { useMemo } from "react";
import { EmailEditorProvider, EmailTemplate } from "easy-email-pro-editor";
import { Retro } from "easy-email-pro-theme";
import "easy-email-pro-theme/lib/style.css";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import data from "./template.json";
import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import { Layout } from "@arco-design/web-react";
import React from "react";
import { useState } from "react";
import { Switch } from "@arco-design/web-react";
import { Space } from "@arco-design/web-react";
import { Button } from "@arco-design/web-react";

export default function MyEditor() {
  const { upload } = useUpload();
  const [compact, setCompact] = useState(false);

  const initialValues: EmailTemplate | null = useMemo(() => {
    return {
      subject: data.subject,
      content: data.content as EmailTemplate["content"],
    };
  }, []);

  const onUpload = (file: Blob): Promise<string> => {
    return upload(file);
  };

  const onSubmit = async (values: EmailTemplate) => {
    console.log(values);
  };

  const config = Retro.useCreateConfig({
    clientId: process.env.CLIENT_ID!,
    height: "calc(100vh - 66px)",
    onUpload,
    initialValues: initialValues,
    onSubmit: onSubmit,
    showSourceCode: true,
    unsplash: {
      clientId: process.env.UNSPLASH_CLIENT_ID!,
    },
    compact,
    showLayer: true,
    showDragMoveIcon: true,
    showInsertTips: true,
  });

  return (
    <EmailEditorProvider {...config}>
      <EditorHeader
        extra={
          <Button onClick={() => setCompact((v) => !v)}>
            <div
              style={{ width: 150, display: "flex", justifyContent: "center" }}
            >
              <Space>
                <strong>Compact</strong>
                <Switch
                  checkedText="True"
                  uncheckedText="False"
                  checked={compact}
                />
              </Space>
            </div>
          </Button>
        }
      />

      <Layout.Content>
        <Retro.Layout></Retro.Layout>
      </Layout.Content>
    </EmailEditorProvider>
  );
}
