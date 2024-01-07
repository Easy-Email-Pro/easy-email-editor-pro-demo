import { useMemo } from "react";
import {
  EmailEditorProvider,
  EmailTemplate,
  TextFormat,
} from "easy-email-pro-editor";
import { IconFont, Retro, ThemeConfigProps } from "easy-email-pro-theme";
import "easy-email-pro-theme/lib/style.css";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import data from "./template.json";
import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import { Layout, Select } from "@arco-design/web-react";
import React from "react";
import { useCompactMode } from "@/hooks/useCompactMode";
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
import { useState } from "react";
import { AssetManagerModal } from "./AssetManagerModal";
import { useRef } from "react";

import localsData from "easy-email-pro-localization/locales/locales.json";
import { get } from "lodash";
import { EmojiPlugin } from "easy-email-pro-plugins";

console.log(localsData);

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
        type: ElementType.SECTION_WIDGET,
        icon: (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="http://res.cloudinary.com/djnkpbshx/image/upload/v1701771089/easy-email-pro-test/dhl5nofsm0jbptap31fq.png"
              alt=""
            />
          </div>
        ),
        payload: {
          type: "section_widget",
          title: "New widget",
          data: {
            name: "New widget",
            description: "Your custom widget",
            contentEditable: true,
            config: [
              {
                label: "Primary color",
                name: "primary-color",
                helpText: "",
                type: "color",
                description: "Primary color",
              },
              {
                label: "Font Size",
                name: "font-size",
                helpText: "",
                type: "pixel",
              },
            ],
            input: {
              "background-color": "red",
              "primary-color": "#d3943c",
              "font-size": "18px",
            },
          },
          attributes: {},
          children: [
            {
              type: "standard-section",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-column",
                  data: {},
                  attributes: {},
                  children: [
                    {
                      type: "standard-image",
                      data: {},
                      attributes: {
                        src: "https://res.cloudinary.com/djnkpbshx/image/upload/v1696845725/easy-email-pro-test/bjnjpwmqdunbwhgs6jdf.jpg",
                        "border-radius": "50px",
                        "border-enabled": true,
                        "border-style": "solid",
                        "border-width": "5px",
                        "border-color": "$var(primary-color)",
                      },
                      children: [{ text: "" }],
                    },
                    {
                      type: "standard-button",
                      data: { content: "Button" },
                      attributes: {
                        width: "100%",
                        "background-color": "$var(primary-color)",
                        "font-size": "$var(font-size)",
                      },
                      children: [{ text: "Click" }],
                    },
                  ],
                },
              ],
            },
          ],
          name: "Image with text",
        },
      },
      // {
      //   type: CommonType.COMMON_IMAGE_WITH_TEXT,
      //   icon: (
      //     <div className={"block-list-grid-item-icon"}>
      //       <IconFont
      //         className={"block-list-grid-item-icon"}
      //         iconName="icon-hero"
      //       />
      //     </div>
      //   ),
      // },
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

const hoveringToolbar: ThemeConfigProps["hoveringToolbar"] = {
  list({ isCollapsed, selection }) {
    return [
      TextFormat.FONT_FAMILY,
      TextFormat.FONT_SIZE,
      TextFormat.BOLD,
      TextFormat.ITALIC,
      TextFormat.UNDERLINE,
      TextFormat.STRIKETHROUGH,
      TextFormat.TEXT_COLOR,
      TextFormat.BACKGROUND_COLOR,
      TextFormat.ALIGN,
      TextFormat.LINK,
      () => <EmojiPlugin />,
      TextFormat.MERGETAG,
      TextFormat.REMOVE_FORMAT,
    ];
  },
};

export default function MyEditor() {
  const { upload } = useUpload();
  const [lang, setLang] = useState<string>("en");
  const [accept, setAccept] = useState<string | undefined>(undefined);
  const [visible, setVisible] = useState(false);
  const changeRef = useRef<(url: string) => void>(() => {
    //
  });

  const initialValues: EmailTemplate | null = useMemo(() => {
    return {
      subject: data.subject,
      content: data.content as EmailTemplate["content"],
    };
  }, []);

  const handleUploadClick: ThemeConfigProps["handleUploadClick"] = ({
    onChange,
    accept,
  }) => {
    changeRef.current = onChange;
    setAccept(accept);
    setVisible(true);
  };

  const onUpload = (file: Blob): Promise<string> => {
    return upload(file);
  };

  const onSubmit = async (values: EmailTemplate) => {
    console.log(values);
  };

  const compact = useCompactMode();

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
    hoveringToolbar: hoveringToolbar,
    showSourceCode: true,
    showLayer: false,
    showPreview: true,
    showSidebar: true,
    showSelectFileButton: true,
    compact: compact,
    handleUploadClick,
    localeData: get(localsData, lang),
    // emptyPageElement: data2.content,
  });

  return (
    <EmailEditorProvider {...config}>
      <EditorHeader
        extra={
          <Select
            style={{ width: 120 }}
            value={lang}
            onChange={setLang}
            options={Object.keys(localsData).map((item) => {
              return {
                label: item,
                value: item,
              };
            })}
          ></Select>
        }
      />

      <Layout.Content>
        <Retro.Layout></Retro.Layout>
      </Layout.Content>
      <AssetManagerModal
        key={lang}
        accept={accept}
        visible={visible}
        setVisible={setVisible}
        onSelect={changeRef.current}
      />
    </EmailEditorProvider>
  );
}
