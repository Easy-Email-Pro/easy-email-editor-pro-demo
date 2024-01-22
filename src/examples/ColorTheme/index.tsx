import { useMemo } from "react";
import { EmailEditorProvider, EmailTemplate } from "easy-email-pro-editor";
import { Retro } from "easy-email-pro-theme";
import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import { Layout, Select, Space } from "@arco-design/web-react";
import React from "react";
import "easy-email-pro-theme/lib/style.css";
import data from "./template.json";

import retroStyle from "@arco-themes/react-easy-email-pro/css/arco.css?inline";
import colorPurpleStyle from "@arco-themes/react-easy-email-pro-purple/css/arco.css?inline";
import colorRedStyle from "@arco-themes/react-easy-email-pro-red/css/arco.css?inline";
import colorBlueStyle from "@arco-themes/react-easy-email-pro-blue/css/arco.css?inline";
import colorGreenStyle from "@arco-themes/react-easy-email-pro-green/css/arco.css?inline";
import { useCompactMode } from "@/hooks/useCompactMode";

export default function MyEditor() {
  const [theme, setTheme] = React.useState<string>("red");
  const { upload } = useUpload();

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

  const matchThemeStyle = useMemo(() => {
    if (theme === "retro") {
      return retroStyle;
    }
    if (theme === "purple") {
      return colorPurpleStyle;
    }
    if (theme === "green") {
      return colorGreenStyle;
    }
    if (theme === "blue") {
      return colorBlueStyle;
    }
    if (theme === "red") {
      return colorRedStyle;
    }
    return "";
  }, [theme]);

  const compact = useCompactMode();
  const config = Retro.useCreateConfig({
    clientId: process.env.CLIENT_ID!,
    onUpload,
    initialValues: initialValues,
    onSubmit: onSubmit,
    height: "calc(100vh - 66px)",
    unsplash: {
      clientId: process.env.UNSPLASH_CLIENT_ID!,
    },
    showLayer: true,
    compact,
  });

  return (
    <EmailEditorProvider {...config}>
      <EditorHeader
        extra={
          <Space>
            <Select
              style={{ width: 120 }}
              value={theme}
              onChange={setTheme}
              options={[
                { label: "Retro", value: "retro" },
                { label: "Purple", value: "purple" },
                { label: "Blue", value: "blue" },
                { label: "Green", value: "green" },
                { label: "Red", value: "red" },
              ]}
            ></Select>
          </Space>
        }
      />

      <Layout.Content>
        <Retro.Layout></Retro.Layout>
      </Layout.Content>
      <style>{matchThemeStyle}</style>
    </EmailEditorProvider>
  );
}
