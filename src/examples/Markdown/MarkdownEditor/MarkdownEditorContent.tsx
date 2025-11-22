import React, { Suspense, useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import "monaco-editor/esm/vs/language/html/html.worker?worker";
import { t } from "easy-email-pro-core";

const MarkdownEditorContent: React.FC<{
  initialValue: string;
  onChange: (val: string) => void;
}> = (props) => {
  const { onChange } = props;
  const valueRef = useRef(props.initialValue);

  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef(null);

  useEffect(() => {
    if (monacoEl) {
      setEditor((editor) => {
        if (editor) return editor;

        const monEditor = monaco.editor.create(monacoEl.current!, {
          value: valueRef.current,
          language: "markdown",
          automaticLayout: true,
          minimap: { enabled: false },
          theme: "vs-dark",
        });
        monEditor.onDidChangeModelContent(() => {
          onChange(monEditor.getValue());
        });
        return monEditor;
      });
    }

    return () => editor?.dispose();
  }, [editor, onChange]);

  return (
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
          {t(`Editor Loading...`)}
        </div>
      }
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
        }}
        ref={monacoEl}
      ></div>
    </Suspense>
  );
};

export default MarkdownEditorContent;
