import { useMemo } from "react";
import { EmailEditorProvider, EmailTemplate } from "easy-email-pro-editor";
import {
  AttributeField,
  IconFont,
  Retro,
  ThemeConfigProps,
  useEditorContext,
  WidgetTypeOptions,
} from "easy-email-pro-theme";
import "easy-email-pro-theme/lib/style.css";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import data from "./template.json";
import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import { Layout } from "@arco-design/web-react";
import React from "react";
import {
  Countdown,
  Shopwindow,
  QRCode,
  Video,
  MarketingType,
  CommonType,
  ImageWithText,
} from "easy-email-pro-kit";
import { ElementType, PluginManager, t } from "easy-email-pro-core";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@arco-design/web-react";
import { Message } from "@arco-design/web-react";
import { Space } from "@arco-design/web-react";
import { ProductPicker } from "./components/ProductPicker";

WidgetTypeOptions.push({
  value: "product_picker",
  label: "Product Picker",
});

const OldFieldItem = AttributeField.FieldItem;
AttributeField.FieldItem = (props) => {
  if (props.type === "product_picker") {
    return <ProductPicker {...props} />;
  }
  return <OldFieldItem {...props} />;
};

PluginManager.registerPlugins([
  Countdown,
  Shopwindow,
  QRCode,
  Video,
  ImageWithText,
]);

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
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/jwbrgf-j9czz8k8qh3f2d_image.png",
    },
    {
      title: "#product 2",
      image:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/3kcq5x39xga7wdbaprvb-_image.png",
    },
  ],
  colors: {
    red: "#ff0000",
    yellow: "#ffff00",
    blue: "#0000ff",
  },
};

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
              "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/zfu_bicaklhcbrj4h7sja_piyfs3ypwezfgc4rkb-of.png",
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
        type: MarketingType.MARKETING_SHOPWINDOW,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-bag"
          />
        ),
      },
      {
        type: MarketingType.MARKETING_COUNTDOWN,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-countdown"
          />
        ),
      },
      {
        type: MarketingType.MARKETING_QR_CODE,
        icon: (
          <div className={"block-list-grid-item-icon"}>
            <IconFont
              className={"block-list-grid-item-icon"}
              iconName="icon-qrcode"
            />
          </div>
        ),
      },
      {
        type: CommonType.COMMON_VIDEO,
        icon: (
          <div className={"block-list-grid-item-icon"}>
            <IconFont
              className={"block-list-grid-item-icon"}
              iconName="icon-video"
            />
          </div>
        ),
      },
      {
        type: CommonType.COMMON_IMAGE_WITH_TEXT,
        icon: (
          <div className={"block-list-grid-item-icon"}>
            <IconFont
              className={"block-list-grid-item-icon"}
              iconName="icon-hero"
            />
          </div>
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

export default function MyEditor() {
  const { upload } = useUpload();
  const [attributesVariables, setAttributesVariables] = useState({});

  const initialValues: EmailTemplate | null = useMemo(() => {
    return {
      subject: data.subject,
      content: data.content as EmailTemplate["content"],
    };
  }, []);

  const onUpload = (file: Blob): Promise<string> => {
    return upload(file);
  };

  const onSubmit = async (values: EmailTemplate) => {
    console.log(values);
  };

  const config = Retro.useCreateConfig({
    clientId: process.env.CLIENT_ID!,
    height: "calc(100vh - 66px)",
    onUpload,
    initialValues: initialValues,
    onSubmit: onSubmit,
    mergetagsData: mergetagsData,
    mergetags: mergetags,
    categories,
    unsplash: {
      clientId: process.env.UNSPLASH_CLIENT_ID!,
    },
    showSourceCode: true,
    showLayer: true,
    showPreviousLevelIcon: true,
    showBlockPaths: true,
    showTextHTMLMode: true,
    showDragMoveIcon: true,
    showInsertTips: true,
    widgetMode: true,
    compact: false,

    attributesVariables,
  });

  return (
    <EmailEditorProvider {...config}>
      <EditorHeader extra={<CopyWidgetButton />} hideExport hideImport />

      <Layout.Content>
        <Retro.Layout></Retro.Layout>
      </Layout.Content>
      <AttributesVariables setAttributesVariables={setAttributesVariables} />
    </EmailEditorProvider>
  );
}

const AttributesVariables = ({
  setAttributesVariables,
}: {
  setAttributesVariables: React.Dispatch<React.SetStateAction<{}>>;
}) => {
  const { values } = useEditorContext();
  const widgetElement = values.widgetElement;

  useEffect(() => {
    setAttributesVariables((old) => {
      return {
        ...old,
        ...widgetElement?.data.input,
      };
    });
  }, [setAttributesVariables, widgetElement?.data.input]);

  return <></>;
};

const CopyWidgetButton = () => {
  const { values } = useEditorContext();

  return (
    <Space>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(
            JSON.stringify({
              ...values.widgetElement,
              children: values.content.children,
            })
          );
          Message.success(`Copied`);
        }}
      >
        <strong>Copy Widget</strong>
      </Button>
    </Space>
  );
};
