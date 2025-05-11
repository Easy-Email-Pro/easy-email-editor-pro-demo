import { useEditorContext } from "easy-email-pro-theme";
import "easy-email-pro-theme/lib/style.css";

import { Button, Message, Modal, Select } from "@arco-design/web-react";
import React from "react";

import { EditorCore } from "easy-email-pro-core";
import { useRef } from "react";

import localsData from "easy-email-pro-localization/locales/locales.json";
import axios from "axios";

export const TranslationSelect = ({ lang }: { lang: string }) => {
  const langRef = useRef(lang);
  const { values, reset } = useEditorContext();
  const onTranslate = async (targetLang: string) => {
    Message.loading(`Translating...`);
    const modal = Modal.info({
      style: {
        backgroundColor: "transparent",
      },
      maskClosable: false,
      maskStyle: {
        backgroundColor: "transparent",
      },
      content: <div></div>,
      closable: false,
      footer: null,
      focusLock: true,
      icon: null,
    });
    const newTemplate = await EditorCore.translate({
      template: {
        subject: values.subject,
        content: values.content,
      },
      async translate(words) {
        try {
          const { data } = await axios.post<Record<string, string>>(
            `https://admin.easyemail.pro/api/translate`,
            {
              source: langRef.current,
              target: targetLang,
              words,
            }
          );
          console.log(data);
          return data;
        } catch (error) {
          Message.clear();
          Message.error("Failed to translate template");
          return {};
        }
      },
    });

    reset(newTemplate);
    langRef.current = targetLang;
    Message.clear();
    modal.close();
  };

  return (
    <Select
      style={{ width: 150 }}
      value={lang}
      onChange={onTranslate}
      triggerElement={
        <Button>
          <strong>Translate template</strong>
        </Button>
      }
      options={Object.keys(localsData).map((item) => {
        return {
          label: `${item}`,
          value: item,
        };
      })}
    ></Select>
  );
};
