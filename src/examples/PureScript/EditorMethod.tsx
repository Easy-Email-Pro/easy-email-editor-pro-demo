/* eslint-disable no-async-promise-executor */

import React from "react";
import { useEditorProps } from "easy-email-pro-editor";
import { useEditorContext } from "easy-email-pro-theme";
import { EditorCore, PageElement, PluginManager } from "easy-email-pro-core";
import mjml from "mjml-browser";
import { pick } from "lodash";
import { EasyEmailPro } from "@/iife";

export const EditorMethod = () => {
  const context = useEditorContext();
  const { values, submit, setFieldValue, mergetagsData, reset, dirty } =
    context;

  const onChangeSubject = (text: string) => {
    setFieldValue(null, "subject", text);
  };

  const { universalElementSetting } = useEditorProps();

  const getJSON = () => {
    return pick(values, ["subject", "content"]);
  };

  const getMJML = () => {
    const mjmlStr = EditorCore.toMJML({
      element: values.content,
      mode: "production",
      universalElements: universalElementSetting,
      beautify: true,
    });

    return mjmlStr;
  };

  const getHTML = () => {
    const mjmlStr = EditorCore.toMJML({
      element: values.content,
      mode: "production",
      universalElements: universalElementSetting,
      beautify: true,
    });

    const html = mjml(mjmlStr).html;
    return html;
  };

  const getHTMLWithDynamicData = () => {
    const mjmlStr = EditorCore.toMJML({
      element: values.content,
      mode: "production",
      universalElements: universalElementSetting,
      beautify: true,
    });

    const html = mjml(mjmlStr).html;
    const finalMergeTag = PluginManager.renderWithData(html, mergetagsData);
    return finalMergeTag;
  };

  const switchTemplate = (item: { subject: string; content: PageElement }) => {
    reset({
      content: item.content,
      subject: item.subject,
    });
  };

  EasyEmailPro.switchTemplate = switchTemplate;
  EasyEmailPro.onChangeSubject = onChangeSubject;
  EasyEmailPro.getJSON = getJSON;
  EasyEmailPro.getMJML = getMJML;
  EasyEmailPro.getHTML = getHTML;
  EasyEmailPro.getHTMLWithDynamicData = getHTMLWithDynamicData;
  EasyEmailPro.getContext = () => context;
  return <></>;
};
