import { useMemo, useState } from "react";
import { EmailEditorProvider, EmailTemplate } from "easy-email-pro-editor";
import { Retro } from "easy-email-pro-theme";
import { get } from "lodash";
import "easy-email-pro-theme/lib/style.css";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import localsData from "easy-email-pro-localization/locales/locales.json";

console.log(localsData);

import data from "./template.json";
import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import { Layout, Select } from "@arco-design/web-react";
import React from "react";
import { useCompactMode } from "@/hooks/useCompactMode";

export default function MyEditor() {
  const [lang, setLang] = useState<string>("en");

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

  const onSubmit = (values: EmailTemplate) => {
    console.log(values);
  };

  const compact = useCompactMode();
  const config = Retro.useCreateConfig({
    clientId: process.env.CLIENT_ID!,
    height: "calc(100vh - 66px)",
    onUpload,
    initialValues: initialValues,
    onSubmit: onSubmit,
    localeData: get(localsData, lang),
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
          <Select
            value={lang}
            onChange={setLang}
            options={[
              {
                label: "English",
                value: "en",
              },
              {
                label: "中文简体",
                value: "zh-Hans",
              },
            ]}
          ></Select>
        }
      />

      <Layout.Content>
        <Retro.Layout key={lang}></Retro.Layout>
      </Layout.Content>
    </EmailEditorProvider>
  );
}
