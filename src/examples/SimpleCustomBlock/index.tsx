import { useMemo } from "react";
import {
  EmailEditorProvider,
  EmailEditorProps,
  EmailTemplate,
} from "easy-email-pro-editor";
import { BlockManager, ElementType, NodeUtils, t } from "easy-email-pro-core";
import {
  ConfigPanelsMap,
  IconFont,
  Retro,
  ThemeConfigProps,
} from "easy-email-pro-theme";
import "easy-email-pro-theme/lib/style.css";
import "@arco-themes/react-easy-email-pro/css/arco.css";
import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import { Layout, Message } from "@arco-design/web-react";
import { CustomLogoPanel } from "./custom/Panel";
import { CustomTextPanel } from "./customText/Panel";
import data from "./template.json";
import React from "react";
import { SimpleCustomBlock } from "./custom";
import { SimpleTextCustomBlock } from "./customText";
import { CustomBlockType } from "../constant";
import { useCompactMode } from "@/hooks/useCompactMode";
import { SimpleButtonCustomBlock } from "./customButton";
import { CustomButtonPanel } from "./customButton/Panel";

BlockManager.registerBlocks([
  SimpleCustomBlock,
  SimpleTextCustomBlock,
  SimpleButtonCustomBlock,
]);

ConfigPanelsMap[CustomBlockType.SIMPLE_CUSTOM_BLOCK] = CustomLogoPanel;
ConfigPanelsMap[CustomBlockType.SIMPLE_TEXT_CUSTOM_BLOCK] = CustomTextPanel;
ConfigPanelsMap[CustomBlockType.SIMPLE_BUTTON_CUSTOM_BLOCK] = CustomButtonPanel;

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
        type: CustomBlockType.SIMPLE_CUSTOM_BLOCK,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-bag"
          />
        ),
      },
      {
        type: CustomBlockType.SIMPLE_TEXT_CUSTOM_BLOCK,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-number"
          />
        ),
      },
      {
        type: CustomBlockType.SIMPLE_BUTTON_CUSTOM_BLOCK,
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

  const quantityLimitCheck: EmailEditorProps["quantityLimitCheck"] = (
    params
  ) => {
    if (params.element.type === CustomBlockType.SIMPLE_CUSTOM_BLOCK) {
      const quantify = params.pageData.children.filter(
        (item) =>
          NodeUtils.isElement(item) &&
          item.type === CustomBlockType.SIMPLE_CUSTOM_BLOCK
      ).length;
      if (quantify >= 1) {
        Message.warning("Only one this block is allowed");
      }
      return false;
    }
    return true;
  };

  const compact = useCompactMode();
  const config = Retro.useCreateConfig({
    clientId: process.env.CLIENT_ID!,
    height: "calc(100vh - 66px)",
    onUpload,
    initialValues: initialValues,
    onSubmit: onSubmit,
    categories,
    quantityLimitCheck: quantityLimitCheck,
    unsplash: {
      clientId: process.env.UNSPLASH_CLIENT_ID!,
    },
    compact,
    showLayer: true,
    showSourceCode: true,
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
