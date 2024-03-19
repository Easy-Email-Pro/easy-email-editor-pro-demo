import React, { Suspense, useEffect, useMemo, useState } from "react";

import {
  Button,
  Drawer,
  Grid,
  Space,
  Typography,
} from "@arco-design/web-react";
import { EditorCore, PageElement, PluginManager, t } from "easy-email-pro-core";
import { markdownToMjml } from "@/utils/markdownToMjml";
import mjml from "mjml-browser";
import { SharedComponents, useEditorContext } from "easy-email-pro-theme";
const MarkdownEditorContent = React.lazy(
  () => import("./MarkdownEditorContent")
);

export const MarkdownEditor = ({
  initialValue,
  children,
}: {
  initialValue: string;
  children: React.ReactNode;
}) => {
  const [value, setValue] = useState(initialValue);
  const [visible, setVisible] = useState(false);
  const [json, setJson] = useState<PageElement | null>(null);
  const { reset, values } = useEditorContext();

  const onSave = () => {
    if (!json) return;
    reset({
      subject: values.subject,
      content: json,
    });
    setVisible(false);
  };

  const mjmlString = useMemo(() => {
    if (!json) return "";
    return EditorCore.toMJML({
      element: json,
      mode: "production",
    });
  }, [json]);

  const html = useMemo(() => {
    if (!mjmlString) return "";
    const skeletonHtml = mjml(mjmlString, {
      fonts: {},
    }).html;
    const finalHtml = PluginManager.renderWithData(skeletonHtml, {});

    return finalHtml;
  }, [mjmlString]);

  useEffect(() => {
    const timer = setTimeout(() => {
      markdownToMjml(value).then((json) => {
        setJson(json);
      });
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [reset, value]);

  return (
    <>
      <Drawer
        placement="left"
        headerStyle={{ display: "block", lineHeight: "48px" }}
        title={
          <Grid.Row
            style={{ width: "100%" }}
            justify="space-between"
            align="center"
          >
            <Typography.Text>
              <span style={{ fontSize: 20, fontWeight: "bold" }}>
                {t("Markdown")}
              </span>
            </Typography.Text>
            <Space>
              <Button type="primary" onClick={onSave}>
                {t("Save")}
              </Button>
            </Space>
          </Grid.Row>
        }
        closable={false}
        escToExit={false}
        width="100vw"
        visible={visible}
        footer={null}
        bodyStyle={{ padding: 0, overflow: "hidden" }}
      >
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flex: 1, height: "100%" }}>
            <Suspense
              fallback={
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#263238",
                    justifyContent: "center",
                    fontSize: 24,
                    color: "#fff",
                  }}
                >
                  {t("Editor Loading...")}
                </div>
              }
            >
              <MarkdownEditorContent
                initialValue={initialValue}
                onChange={setValue}
              />
            </Suspense>
          </div>
          <div
            style={{
              flex: 1,
              height: "100%",
              overflow: "hidden",
              marginRight: 10,
            }}
          >
            <SharedComponents.DesktopEmailPreview
              isActive
              html={html}
            ></SharedComponents.DesktopEmailPreview>
          </div>
        </div>
      </Drawer>
      <div onClick={() => setVisible(true)}>{children}</div>
    </>
  );
};
