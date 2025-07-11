import React from "react";
import ReactDOM from "react-dom/client";
import { PureScriptEditor, PureScriptEditorProps } from "./examples/PureScript";

export const EasyEmailPro: any = {};

export function initEditor(containerId: string, props: PureScriptEditorProps) {
  const container = document.getElementById(containerId);
  if (!container) {
    throw new Error(`Container with id ${containerId} not found`);
  }
  ReactDOM.createRoot(container).render(
    <PureScriptEditor {...props} instance={EasyEmailPro} />
  );

  return EasyEmailPro;
}
