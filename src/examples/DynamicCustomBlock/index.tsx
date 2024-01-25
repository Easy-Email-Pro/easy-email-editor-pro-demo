import { useEffect, useMemo, useState } from "react";
import { EmailEditorProvider, EmailTemplate } from "easy-email-pro-editor";
import { BlockManager, ElementType, NodeUtils, t } from "easy-email-pro-core";
import {
  ConfigPanelsMap,
  IconFont,
  Retro,
  ThemeConfigProps,
  useEditorContext,
} from "easy-email-pro-theme";

import "easy-email-pro-theme/lib/style.css";
import "@arco-themes/react-easy-email-pro/css/arco.css";
import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import { Layout } from "@arco-design/web-react";
import { Panel } from "./custom/Panel";
import data from "./template.json";
import React from "react";
import { CustomBlockType } from "../constant";
import { DynamicCustomBlock, ProductItem } from "./custom";
import { DynamicCustomElement } from "@/custom-types";
import { fetchProducts } from "./mergetagData";
import { useCompactMode } from "@/hooks/useCompactMode";

BlockManager.registerBlocks([DynamicCustomBlock]);
ConfigPanelsMap[CustomBlockType.DYNAMIC_CUSTOM_BLOCK] = Panel;

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

const categories: ThemeConfigProps["categories"] = [
  {
    get label() {
      return t("Content");
    },
    active: true,
    displayType: "grid",
    blocks: [
      {
        type: ElementType.STANDARD_PARAGRAPH,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-text"
          />
        ),
      },
      {
        type: ElementType.STANDARD_IMAGE,
        payload: {},
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-img"
          />
        ),
      },
      {
        type: ElementType.STANDARD_BUTTON,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-button"
          />
        ),
      },
      {
        type: ElementType.STANDARD_DIVIDER,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-divider"
          />
        ),
      },
      {
        type: ElementType.STANDARD_SPACER,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-spacing"
          />
        ),
      },
      {
        type: ElementType.STANDARD_NAVBAR,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-navbar"
          />
        ),
      },
      {
        type: ElementType.STANDARD_SOCIAL,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-social"
          />
        ),
      },
      {
        type: ElementType.STANDARD_HERO,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-hero"
          />
        ),
        payload: {
          type: "standard-hero",
          data: {},
          attributes: {
            "background-width": "1080px",
            "background-height": "721px",
            "padding-top": "100px",
            "padding-bottom": "50px",
            "background-image-enabled": true,
            "background-url":
              "http://res.cloudinary.com/djnkpbshx/image/upload/v1698677931/easy-email-pro-test/t75ucncjgmm5vwp6r2s4.jpg",
            "background-position": "center center",
            mode: "fluid-height",
          },
          children: [
            {
              type: "standard-h1",
              data: {},
              attributes: {
                color: "#FFFFFF",
              },
              children: [
                {
                  text: "We Serve Healthy & Delicious Foods",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                color: "#FFFFFF",
              },
              children: [
                {
                  text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Button",
              },
              attributes: {
                "padding-top": "30px",
                "padding-bottom": "30px",
                "background-color": "#8b2a36",
              },
              children: [
                {
                  text: "Get Your Order Here!",
                },
              ],
            },
          ],
        },
      },

      {
        type: CustomBlockType.DYNAMIC_CUSTOM_BLOCK,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-number"
          />
        ),
      },
    ],
  },
  {
    get label() {
      return t("Layout");
    },
    active: true,
    displayType: "column",
    blocks: [
      {
        get title() {
          return t("1 column");
        },
        payload: [["100%"]],
      },
      {
        get title() {
          return t("2 column");
        },
        payload: [
          ["50%", "50%"],
          ["33%", "67%"],
          ["67%", "33%"],
          ["25%", "75%"],
          ["75%", "25%"],
        ],
      },
      {
        get title() {
          return t("3 column");
        },
        payload: [
          ["33.33%", "33.33%", "33.33%"],
          ["25%", "50%", "25%"],
          ["25%", "25%", "50%"],
          ["50%", "25%", "25%"],
        ],
      },
      {
        get title() {
          return t("4 column");
        },
        payload: [["25%", "25%", "25%", "25%"]],
      },
    ],
  },
];

interface DynamicServerData {
  order: {
    number: string;
    total: string;
  };
  customer: {
    name: string;
    email: string;
  };
  products: ProductItem[];
}

export default function MyEditor() {
  const [mergetagsData, setMergetagsData] = useState<DynamicServerData>({
    order: {
      number: "Shopify#1001",
      total: "$100.00",
    },
    customer: {
      name: "Ryan",
      email: "easy-email-pro@example.com",
    },
    products: [],
  });

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
  console.log("mergetagsData", mergetagsData);

  const compact = useCompactMode();
  const config = Retro.useCreateConfig({
    clientId: process.env.CLIENT_ID!,
    height: "calc(100vh - 66px)",
    onUpload,
    initialValues: initialValues,
    onSubmit: onSubmit,
    mergetagsData: mergetagsData,
    mergetags,
    categories,

    unsplash: {
      clientId: process.env.UNSPLASH_CLIENT_ID!,
    },
    showLayer: true,
    compact,
    showDragMoveIcon: true,
    showInsertTips: true,
  });

  return (
    <EmailEditorProvider {...config}>
      <DataFetcher setMergetagsData={setMergetagsData} />
      <EditorHeader />

      <Layout.Content>
        <Retro.Layout></Retro.Layout>
      </Layout.Content>
    </EmailEditorProvider>
  );
}

const DataFetcher = ({
  setMergetagsData,
}: {
  setMergetagsData: React.Dispatch<React.SetStateAction<DynamicServerData>>;
}) => {
  const { values } = useEditorContext();

  const dynamicCustomBlock = values.content.children.find((item) => {
    if (!NodeUtils.isElement(item)) return false;
    return item.type === CustomBlockType.DYNAMIC_CUSTOM_BLOCK;
  }) as DynamicCustomElement | undefined;

  const selectedIds = dynamicCustomBlock?.data.productIds;

  useEffect(() => {
    if (!selectedIds?.length) return;

    fetchProducts({ productIds: selectedIds }).then((list) => {
      setMergetagsData((old) => {
        return {
          ...old,
          products: list,
        };
      });
    });
  }, [selectedIds, setMergetagsData]);

  return <></>;
};
