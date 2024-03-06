import {
  Button,
  Divider,
  Grid,
  Input,
  Popover,
  Tooltip,
} from "@arco-design/web-react";
import React, { useRef } from "react";
import { Editor, Node, Transforms } from "slate";
import { useSlate } from "slate-react";
import { ElementType, classnames, t } from "easy-email-pro-core";
import MagicIcon from "./magic.svg";
import { useSelectedNode } from "easy-email-pro-editor";
import { useState } from "react";
import { useEffect } from "react";
import { useEditorContext } from "easy-email-pro-theme";

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

  const onGenerate = async () => {
    const replay = `Easy-email-pro simplifies the creation of responsive email templates by combining the editing capabilities of SlateJS with the compatibility of MJML. With drag-and-drop functionality, inline editing, and keyboard shortcuts, users can easily design visually appealing and feature-rich email templates.\nBuild marketing campaigns, newsletters, or transactional emails effortlessly with Easy-email-pro. Create professional-grade responsive email templates efficiently.`;

    const textList = replay.split("\n");

    const nodes: Node[] = [
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
    ];
    // textList.forEach((text, index) => {
    //   nodes.push({ text, color: "red", bold: true }); // text format example
    //   if (index !== textList.length - 1) {
    //     nodes.push({
    //       type: ElementType.LINE_BREAK,
    //       data: {},
    //       attributes: {},
    //       children: [{ text: "" }],
    //     });
    //   }
    // });

    // // overwrite text content
    // // setFieldValue(selectedNodePath, "children", nodes);

    // // append text content
    // Transforms.insertNodes(editor, nodes);

    const delay = (timeout: number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, timeout);
      });
    };
    const delayTime = 20; // 延迟时间，单位是毫秒
    const chunkSize = 3;
    for (let i = 0; i < textList.length; i++) {
      const currentText = textList[i];
      for (let index = 0; index < currentText.length; index += chunkSize) {
        const chunk = currentText.slice(index, index + chunkSize);
        console.log(chunk);
        await delay(delayTime);
        editor.insertText(chunk);
        // setTimeout(
        //   () => {
        //     // 这里的 `insertText` 是一个SlateJS的方法，用于插入文本
        //     editor.insertText(chunk);
        //   },
        //   i * currentText.length * delayTime + index * delayTime
        // );
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
      }
    }
  };

  return (
    <Popover
      trigger="click"
      triggerProps={{
        style: {
          maxWidth: 500,
        },
        popupStyle: { padding: "0px" },
      }}
      getPopupContainer={(node) => {
        return Array.from(document.querySelectorAll(".RichTextBar")).find(
          (item) => item.contains(node)
        ) as HTMLElement;
      }}
      content={
        <div style={{ minHeight: 200, width: 500, padding: 20 }}>
          <Input.TextArea rows={5} autoFocus value={text} onChange={setText} />
          <Divider />
          <Grid.Row justify="end">
            <Button onClick={onGenerate}>Generate</Button>
          </Grid.Row>
        </div>
      }
    >
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
              borderWidth: "1px",
              borderStyle: "solid",
              overflow: "hidden",
            }}
          >
            <MagicIcon />
          </span>
        </span>
      </Tooltip>
    </Popover>
  );
}
