import React from "react";
import { Table, TableColumnProps } from "@arco-design/web-react";

const columns: TableColumnProps[] = [
  {
    title: "Shortcut Key",
    dataIndex: "shortcut",
  },
  {
    title: "Function",
    dataIndex: "action",
  },
];
const shortcuts = [
  { action: "Undo", shortcut: "mod+z" },
  { action: "Redo", shortcut: "mod+shift+z / ctrl+y" },
  { action: "Bold", shortcut: "mod+b" },
  { action: "Italic", shortcut: "mod+i" },
  { action: "Underline", shortcut: "mod+u" },
  { action: "Select Block", shortcut: "mod+a" },
  { action: "Save", shortcut: "mod+s" },
  { action: "Align Center", shortcut: "mod+e" },
  { action: "Align Left", shortcut: "mod+l" },
  { action: "Align Right", shortcut: "mod+r" },
];

const HotKeys = () => {
  return <Table columns={columns} data={shortcuts} pagination={false} />;
};

export default HotKeys;
