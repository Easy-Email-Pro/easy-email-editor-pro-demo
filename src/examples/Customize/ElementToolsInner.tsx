import React from "react";
import { IconFont, useElementInteract } from "easy-email-pro-theme";
import { useEventCallback, EmailEditorProps } from "easy-email-pro-editor";
import { useSlate } from "slate-react";

export const ElementToolsInner: EmailEditorProps["ElementToolsInner"] = ({
  element,
  path,
}) => {
  const editor = useSlate();
  const { copyBlock, deleteBlock, moveDown, moveUp } = useElementInteract();

  const onMoveDown: React.DOMAttributes<HTMLDivElement>["onPointerDown"] =
    useEventCallback((ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const next = moveDown(path);
      // if (next) {
      //   const node = Node.get(editor, next);
      //   const domNode = ReactEditor.toDOMNode(editor, node);
      //   if (domNode) {
      //     domNode.scrollIntoView({
      //       block: "center",
      //     });
      //   }
      // }
    });

  const onMoveUp: React.DOMAttributes<HTMLDivElement>["onPointerDown"] =
    useEventCallback((ev) => {
      ev.preventDefault();
      ev.stopPropagation();

      const next = moveUp(path);
      // if (next) {
      //   const node = Node.get(editor, next);
      //   const domNode = ReactEditor.toDOMNode(editor, node);
      //   if (domNode) {
      //     domNode.scrollIntoView({
      //       block: "center",
      //     });
      //   }
      // }
    });

  const onCopy: React.DOMAttributes<HTMLDivElement>["onPointerDown"] =
    useEventCallback((ev) => {
      ev.preventDefault();
      ev.stopPropagation();

      copyBlock(path);
    });

  const onDelete: React.DOMAttributes<HTMLDivElement>["onPointerDown"] =
    useEventCallback((ev) => {
      ev.preventDefault();
      ev.stopPropagation();

      deleteBlock(path);
    });

  return (
    <>
      <div className="element-tools-item" onPointerDown={onMoveUp}>
        <IconFont iconName="icon-top" />
      </div>
      <div className="element-tools-item" onPointerDown={onMoveDown}>
        <IconFont iconName="icon-bottom" />
      </div>
      <div className="element-tools-item" onPointerDown={onCopy}>
        <IconFont iconName="icon-copy" />
      </div>
      <div className="element-tools-item" onPointerDown={onDelete}>
        <IconFont iconName="icon-delete" />
      </div>
    </>
  );
};
