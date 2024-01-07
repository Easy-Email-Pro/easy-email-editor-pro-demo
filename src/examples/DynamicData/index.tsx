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
        "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116371/easy-email-pro/as41p2ahhff377y8c9s8.png",
    },
    {
      title: "#product 2",
      image:
        "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116331/easy-email-pro/mrzhiom54uhmxu5fqfs8.png",
    },
  ],
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
