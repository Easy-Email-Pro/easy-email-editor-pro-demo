import { Select, Tooltip } from "@arco-design/web-react";
import React, { useRef } from "react";
import { Editor, Transforms } from "slate";
import { useSlate } from "slate-react";
import { ElementType, classnames, t } from "easy-email-pro-core";
import { useSelectedNode } from "easy-email-pro-editor";
import { useState } from "react";
import { useEffect } from "react";
import { useEditorContext } from "easy-email-pro-theme";
import MagicIcon from "./magic.svg";

const optionsList = [
  {
    label: "Summarize content",
    value: "Summarize content",
  },
  {
    label: "Improve writing",
    value: "Improve writing",
  },
  {
    label: "Simplify language",
    value: "Simplify language",
  },
  {
    label: "Expand upon",
    value: "Expand upon",
  },
  {
    label: "Trim content",
    value: "Trim content",
  },
];

export function AIAssistantPlugin({ isCollapsed }: { isCollapsed?: boolean }) {
  const editor = useSlate();

  const { selectedNode, selectedNodePath } = useSelectedNode();
  const { setFieldValue } = useEditorContext();

  const selectText =
    !isCollapsed && editor.selection
      ? Editor.string(editor, editor.selection)
      : Editor.string(editor, selectedNodePath!);

  const [text, setText] = useState("");

  useEffect(() => {
    if (selectText) {
      setText(selectText);
    }
  }, [selectText]);

  const ref = useRef<HTMLElement | null>(null);

  const onGenerate = async (value: string) => {
    console.log(`Prompt:`, value);
    console.log(`Selected Text:`, text);
    const replay = `Effortless Email Template Creation with EasyEmailPro\nEasy-email-pro simplifies the creation of responsive email templates by combining the editing capabilities of SlateJS with the compatibility of MJML. With drag-and-drop functionality, inline editing, and keyboard shortcuts, users can easily design visually appealing and feature-rich email templates.\nBuild marketing campaigns, newsletters, or transactional emails effortlessly with Easy-email-pro. Create professional-grade responsive email templates efficiently.`;

    const textList = replay.split("\n");

    const delay = (timeout: number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, timeout);
      });
    };
    const delayTime = 20;
    const chunkSize = 4;

    // insert blank line
    Transforms.insertNodes(editor, [
      {
        type: ElementType.LINE_BREAK,
        data: {},
        attributes: {},
        children: [{ text: "" }],
      },
    ]);
    for (let i = 0; i < textList.length; i++) {
      const currentText = textList[i];
      for (let index = 0; index < currentText.length; index += chunkSize) {
        const chunk = currentText.slice(index, index + chunkSize);
        console.log(chunk);
        await delay(delayTime);
        // first line as title
        if (i === 0) {
          editor.insertNode({ text: chunk, bold: true });
        } else {
          editor.insertText(chunk);
        }
      }

      if (i !== textList.length - 1) {
        Transforms.insertNodes(editor, [
          {
            type: ElementType.LINE_BREAK,
            data: {},
            attributes: {},
            children: [{ text: "" }],
          },
          {
            type: ElementType.LINE_BREAK,
            data: {},
            attributes: {},
            children: [{ text: "" }],
          },
        ]);
      } else {
        Transforms.insertNodes(editor, [
          {
            type: ElementType.LINE_BREAK,
            data: {},
            attributes: {},
            children: [{ text: "" }],
          },
        ]);
      }
    }
  };

  return (
    <>
      <Select
        triggerElement={
          <Tooltip content={t("AI Assistant")}>
            <span ref={ref} className={classnames("formatButton")}>
              <span
                className={classnames("iconfont")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "16px",
                  textAlign: "center",
                  fontSize: "16px",
                  borderRadius: "2px",
                  width: "16px",
                  boxSizing: "border-box",
                  fontWeight: "500",
                  overflow: "hidden",
                }}
              >
                <MagicIcon />
              </span>
            </span>
          </Tooltip>
        }
        className="easy-email-pro-ai-assistant"
        value={""}
        triggerProps={{
          autoAlignPopupWidth: false,
          autoAlignPopupMinWidth: true,
        }}
        onChange={onGenerate}
      >
        {optionsList.map((option, index) => {
          return (
            <Select.Option key={index} value={option.value}>
              {option.label}
            </Select.Option>
          );
        })}
      </Select>
      <style>{`.easy-email-pro-ai-assistant .arco-select-view { border: none !important; }`}</style>
    </>
  );
}
