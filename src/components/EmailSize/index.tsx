import { Tag } from "@arco-design/web-react";
import { IconEmail } from "@arco-design/web-react/icon";
import { EditorCore, PageElement, PluginManager, t } from "easy-email-pro-core";
import React, { useCallback, useEffect, useState } from "react";
import { useEditorContext } from "easy-email-pro-theme";
import { useEditorProps } from "easy-email-pro-editor";
import { cloneDeep, debounce } from "lodash";
import mjml from "mjml-browser";
import { minify } from "@/utils/minify";

const EmailSize = () => {
  const { values, pageDataVariables } = useEditorContext();
  const {
    universalElementSetting,
    mergetagsData,
    headerElement,
    footerElement,
  } = useEditorProps();

  const [html, setHtml] = useState("");
  const content = values.content;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const processedHtml = useCallback(
    debounce(() => {
      try {
        const mjmlString = EditorCore.toMJML({
          element: content as PageElement,
          mode: "production",
          universalElements: universalElementSetting,
          mergetagsData: cloneDeep(mergetagsData),
          attributesVariables: pageDataVariables,
          headerElement,
          footerElement,
        });
        if (!mjmlString) return;

        const skeletonHtml = mjml(mjmlString, {
          fonts: {},
        }).html;

        const finalHtml = PluginManager.renderWithData(
          skeletonHtml,
          cloneDeep({ ...mergetagsData })
        );

        minify(finalHtml).then((html) => {
          setHtml(html);
        });
      } catch (error) {
        setHtml(``);
      }
    }, 100),
    [
      content,
      footerElement,
      headerElement,
      mergetagsData,
      pageDataVariables,
      universalElementSetting,
    ]
  );

  useEffect(() => {
    processedHtml();
  }, [processedHtml]);

  if (!html.length) return null;

  const size = (html.length / 1024).toFixed(1);

  return (
    <Tag
      style={{ fontSize: 12, borderRadius: 999 }}
      bordered
      size="medium"
      icon={<IconEmail />}
    >
      <span>
        {t("Email Size")}: {size} KB
      </span>
    </Tag>
  );
};

export default EmailSize;
