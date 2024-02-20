import { useMemo } from "react";
import { EmailEditorProvider, EmailTemplate } from "easy-email-pro-editor";
import { Retro } from "easy-email-pro-theme";
import "easy-email-pro-theme/lib/style.css";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import data from "./template.json";
import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import { Layout } from "@arco-design/web-react";
import React from "react";
import { useCompactMode } from "@/hooks/useCompactMode";

const mergetags = [
  {
    label: "Color",
    value: "",
    children: [
      {
        label: "Red",
        value: "colors.red",
      },
      {
        label: "Yellow",
        value: "colors.yellow",
      },
      {
        label: "Blue",
        value: "colors.blue",
      },
    ],
  },
  {
    label: "Order",
    value: "",
    children: [
      {
        label: "Order number",
        value: "order.number",
      },
      {
        label: "Order total",
        value: "order.total",
      },
    ],
  },
  {
    label: "Customer",
    value: "",
    children: [
      {
        label: "Customer name",
        value: "customer.name",
      },
      {
        label: "Customer email",
        value: "customer.email",
      },
    ],
  },
  {
    label: "Common",
    value: "",
    children: [
      {
        label: "Unsubscribe link",
        value: "common.unsubscribe",
        type: "link",
      },
      {
        label: "Company logo",
        value: "common.logo",
        type: "image",
      },
    ],
  },
];

const mergetagsData = {
  order: {
    number: "Shopify#1001",
    total: "$100.00",
  },
  customer: {
    name: "Ryan",
    email: "easy-email-pro@example.com",
  },
  products: [
    {
      title: "#product 1",
      image:
        "https://res.cloudinary.com/dwkp0e1yo/image/upload/v1683815715/nqqreectuzi3lxv7dxsp.png",
    },
    {
      title: "#product 2",
      image:
        "https://res.cloudinary.com/dwkp0e1yo/image/upload/v1683815875/mevpkdxft8z6cyjicnd6.png",
    },
  ],
  colors: {
    red: "#ff0000",
    yellow: "#ffff00",
    blue: "#0000ff",
  },
  common: {
    unsubscribe: "http://www.easyemail.pro",
    logo: "http://res.cloudinary.com/djnkpbshx/image/upload/v1708400352/easy-email-pro-test/ty7rqkcktrwdvs5v39wv.png",
  },
};
export default function MyEditor() {
  const { upload } = useUpload();

  const initialValues: EmailTemplate | null = useMemo(() => {
    return {
      subject: data.subject,
      content: data.content as EmailTemplate["content"],
    };
  }, []);

  const onUpload = (file: Blob): Promise<string> => {
    return upload(file);
  };

  const onSubmit = (values: EmailTemplate) => {
    console.log(values);
  };

  const compact = useCompactMode();
  const config = Retro.useCreateConfig({
    clientId: process.env.CLIENT_ID!,
    onUpload,
    height: "calc(100vh - 66px)",
    initialValues: initialValues,
    onSubmit: onSubmit,
    mergetagsData: mergetagsData,
    mergetags: mergetags,

    unsplash: {
      clientId: process.env.UNSPLASH_CLIENT_ID!,
    },
    compact,
    showLayer: true,
    showDragMoveIcon: true,
    showInsertTips: true,
  });

  return (
    <EmailEditorProvider {...config}>
      <EditorHeader />

      <Layout.Content>
        <Retro.Layout></Retro.Layout>
      </Layout.Content>
    </EmailEditorProvider>
  );
}
