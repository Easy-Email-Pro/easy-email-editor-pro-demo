import { useEffect, useMemo } from "react";
import {
  EmailEditorProvider,
  EmailTemplate,
  TextFormat,
} from "easy-email-pro-editor";
import { Modern } from "easy-email-pro-modern";
import {
  ConfigPanelsMap,
  EditorContextProps,
  IconFont,
  ThemeConfigProps,
} from "easy-email-pro-theme";
import "easy-email-pro-modern/lib/style.css";

import retroStyle from "@arco-themes/react-easy-email-pro/css/arco.css?inline";
import data from "./template.json";
import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import { Layout, Space, Tooltip } from "@arco-design/web-react";
import React from "react";
import {
  Shopwindow,
  QRCode,
  Video,
  ImageWithText,
  CountdownV2,
  Countdown,
  AmpAccordionPlugin,
  AmpCarouselPlugin,
  AmpFormPlugin,
  AmpProductPlugin,
  AmpReviewsPlugin,
  AmpLuckyWheelPlugin,
  CommonType,
  MarketingType,
  KitElementType,
} from "easy-email-pro-kit";
import {
  EditorCore,
  ElementType,
  PageElement,
  PluginManager,
  StandardImageElement,
  t,
} from "easy-email-pro-core";
import { useState } from "react";
import { useRef } from "react";

import localsData from "easy-email-pro-localization/locales/locales.json";
import { get } from "lodash";
import { AssetManagerModal } from "../Full/AssetManagerModal";
import { useUniversalElement } from "@/hooks/useUniversalElement";
import FullScreenLoading from "@/components/FullScreenLoading";
import axios from "axios";
import { useEditorConfigStore } from "../../store/editorConfigStore";

import { footerElement } from "../FrozenBlock";
import { headerElement } from "../FrozenBlock";
import emptyPageElement from "./empty.json";


PluginManager.registerPlugins([
  CountdownV2,
  Countdown,
  Shopwindow,
  QRCode,
  Video,
  ImageWithText,
  AmpAccordionPlugin,
  AmpCarouselPlugin,
  AmpFormPlugin,
  AmpProductPlugin,
  AmpReviewsPlugin,
  AmpLuckyWheelPlugin,
]);
// register elements styles
import "../Full/ElementStyleGallery";
import { TranslationSelect } from "@/components/TranslationSelect";
import { PageFooter } from "./panles/PageFooter";
import { PageHeader } from "./panles/PageHeader";
import { prebuiltBlocks } from '../Full/prebuiltBlocks';
import { IconQuestionCircle } from '@arco-design/web-react/icon';

ConfigPanelsMap[ElementType.PAGE_FOOTER] = PageFooter;
ConfigPanelsMap[ElementType.PAGE_HEADER] = PageHeader;

const EmailSize = React.lazy(() => import("@/components/EmailSize"));

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
        payload: {
          type: "standard-paragraph",
          data: {},
          attributes: {
            "padding-top": "10px",
            "padding-bottom": "10px",
            "padding-left": "10px",
            "padding-right": "10px",
          },
        },
      },
      {
        type: ElementType.STANDARD_IMAGE,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-img"
          />
        ),
        payload: {
          type: "standard-image",
          data: {},
          attributes: {
            "padding-top": "0px",
            "padding-bottom": "0px",
            "padding-left": "0px",
            "padding-right": "0px",
          },
          children: [{ text: "" }],
        } as StandardImageElement,
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
        payload: {
          type: "standard-social",
          data: {},
          attributes: {
            spacing: "8px",
            "icon-size": "30px",
            mode: "horizontal",
          },
          children: [
            {
              data: {},
              type: "standard-social-element",
              children: [
                {
                  text: "",
                },
              ],
              attributes: {
                src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/psyz-f1z-ryy95lv2rh7g_image.png",
                href: "",
                "padding-left": "0px",
                "padding-right": "0px",
                "padding-top": "0px",
                "padding-bottom": "0px",
              },
            },
            {
              data: {},
              type: "standard-social-element",
              children: [
                {
                  text: "",
                },
              ],
              attributes: {
                src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/rxxjzpus7vy2cxi0vp6hr_image.png",
                href: "",
                "padding-left": "8px",
                "padding-right": "0px",
                "padding-top": "0px",
                "padding-bottom": "0px",
              },
            },
            {
              data: {},
              type: "standard-social-element",
              children: [
                {
                  text: "",
                },
              ],
              attributes: {
                src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/obdwqmxv5cljc16-ebnja_image.png",
                href: "",
                "padding-left": "8px",
                "padding-right": "0px",
                "padding-top": "0px",
                "padding-bottom": "0px",
              },
            },
          ],
        },
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
    ],
  },
  {
    get label() {
      return t("Marketings");
    },
    active: true,
    displayType: "grid",
    blocks: [
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
        type: MarketingType.MARKETING_COUNTDOWN_V2,
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
        type: ElementType.WRAPPER_WIDGET,
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
              src="https://cdn.shopify.com/s/files/1/0863/8971/9346/files/eqoutgspgtgzyuuyvvibr_image.png"
              alt=""
            />
          </div>
        ),
        payload: {
          type: "wrapper_widget",
          title: "Test Widget",
          data: {
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
                        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/itnjxrifbm1pdhztt7i2p_j4o0hgsbub-dyr4ibqa8t.png",
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
    ],
  },
  {
    get label() {
      return (
        <Space>
          {t("AMP")}
          <Tooltip
            content={
              <>
                <span>
                  {t("Adds interactive content (carousels, forms, etc.) to emails. Only Gmail, Yahoo, Mail.ru and a few others support it; elsewhere these blocks won't show.")}
                </span>
                <a
                  href="https://amp.dev/about/email"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#165dff", textDecoration: "underline", marginLeft: '0.5em' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {t("Learn more")}
                </a>
              </>
            }
          >
            <IconQuestionCircle />
          </Tooltip>
        </Space>
      ) as unknown as string;
    },
    active: true,
    displayType: "grid",
    blocks: [

      {
        type: KitElementType.AMP_CAROUSEL,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-carousel"
          />
        ),
      },
      {
        type: KitElementType.AMP_PRODUCT,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-bag"
          />
        ),
      },
      {
        type: KitElementType.AMP_FORM,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-form"
          />
        ),
      },
      {
        type: KitElementType.AMP_REVIEWS,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-star"
          />
        ),
      },
      {
        type: KitElementType.AMP_LUCKY_WHEEL,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-lucky-wheel"
          />
        ),
      },
      {
        type: KitElementType.AMP_ACCORDION,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-list-ul"
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
    displayType: "section",
    blocks: [
      {
        get title() {
          return t("1 column");
        },
        variants: [
          {
            sections: [{ columns: ["100%"] }],
          },
        ],
      },
      {
        get title() {
          return t("2 column");
        },
        variants: [
          {
            sections: [{ columns: ["50%", "50%"] }],
          },
          {
            sections: [{ columns: ["33%", "67%"] }],
          },
          {
            sections: [{ columns: ["67%", "33%"] }],
          },
          {
            sections: [{ columns: ["25%", "75%"] }],
          },
          {
            sections: [{ columns: ["75%", "25%"] }],
          },
        ],
      },
      {
        get title() {
          return t("3 column");
        },

        variants: [
          {
            sections: [{ columns: ["33.33%", "33.33%", "33.33%"] }],
          },
          {
            sections: [{ columns: ["25%", "50%", "25%"] }],
          },
          {
            sections: [{ columns: ["25%", "25%", "50%"] }],
          },
          {
            sections: [{ columns: ["50%", "25%", "25%"] }],
          },
        ],
      },
      {
        get title() {
          return t("4 column");
        },

        variants: [
          {
            sections: [{ columns: ["25%", "25%", "25%", "25%"] }],
          },
        ],
      },
      {
        get title() {
          return t("Multiple Sections");
        },
        variants: [
          {
            sections: [
              {
                columns: ["100%"],
              },
              {
                columns: ["50%", "50%"],
              },
            ],
          },
          {
            sections: [
              {
                columns: ["50%", "50%"],
              },
              {
                columns: ["50%", "50%"],
              },
            ],
          },
        ],
      },
    ],
  },
];

const fonts = [
  {
    value: "Arial",
    label: "Arial",
  },
  {
    value: "Arial Black",
    label: "Arial Black",
  },
  {
    value: "Comic Sans MS",
    label: "Comic Sans MS",
  },
  {
    value: "Courier New",
    label: "Courier New",
  },
  {
    value: "Georgia",
    label: "Georgia",
  },
  {
    value: "Impact",
    label: "Impact",
  },
  {
    value: "Lucida Console",
    label: "Lucida Console",
  },
  {
    value: "Lucida Sans Unicode",
    label: "Lucida Sans Unicode",
  },
  {
    value: "Palatino Linotype",
    label: "Palatino Linotype",
  },
  {
    value: "Tahoma",
    label: "Tahoma",
  },
  {
    value: "Times New Roman",
    label: "Times New Roman",
  },
  {
    value: "Trebuchet MS",
    label: "Trebuchet MS",
  },
  {
    value: "Verdana",
    label: "Verdana",
  },
];

export default function MyEditor() {
  const editorConfig = useEditorConfigStore();
  const { upload } = useUpload();
  const [accept, setAccept] = useState<string | undefined>(undefined);
  const [visible, setVisible] = useState(false);
  const { universalElementSetting } = useUniversalElement();
  const [hoveringToolbarPosition] =
    useState<NonNullable<ThemeConfigProps["hoveringToolbar"]>["follow"]>(
      "container"
    );

  const editorInstance = useRef<EditorContextProps | null>(null);

  const hoveringToolbar: ThemeConfigProps["hoveringToolbar"] = useMemo(() => {
    return {
      list() {
        return [
          TextFormat.AI_ASSISTANT,
          TextFormat.FONT_SIZE,
          TextFormat.BOLD,
          TextFormat.ITALIC,
          TextFormat.UNDERLINE,
          TextFormat.STRIKETHROUGH,
          TextFormat.TEXT_COLOR,
          TextFormat.BACKGROUND_COLOR,
          TextFormat.ALIGN,
          TextFormat.LIST,
          TextFormat.LINK,
          TextFormat.IMAGE,
          TextFormat.MERGETAG,
          TextFormat.REMOVE_FORMAT,
        ];
      },
      follow: hoveringToolbarPosition,
      iconSize: 14,
    };
  }, [hoveringToolbarPosition]);

  const changeRef = useRef<(url: string) => void>(() => {
    //
  });

  const [authState, setAuthState] = useState<"pending" | "success" | "fail">(
    "pending"
  );

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

  const onSubmit: ThemeConfigProps["onSubmit"] = async (values, editor) => {
    console.log(values, editor);
    console.log("editorInstance", editorInstance.current);
  };

  const onChange: ThemeConfigProps["onChange"] = async (values) => {
    console.log("onChange", values);
  };

  const AIAssistant: ThemeConfigProps["AIAssistant"] = useMemo(() => {
    return {
      async onGenerate(messages) {
        const { data } = await axios.post<{ content: string; role: string; }>(
          `https://admin.easyemail.pro/api/ai`,
          {
            data: {
              messages: messages,
              model: "gpt-3.5-turbo",
            },
          }
        );
        return { content: data.content, role: data.role };
      },
    };
  }, []);

  useEffect(() => {
    EditorCore.auth(process.env.CLIENT_ID!)
      .then(() => {
        setAuthState("success");
      })
      .catch(() => {
        setAuthState("fail");
      });
  }, []);

  const config = Modern.useCreateConfig({
    instanceRef: editorInstance,
    clientId: process.env.CLIENT_ID!,
    height: "calc(100vh - 66px)",
    onUpload,
    initialValues: initialValues,
    onChange,
    onSubmit: onSubmit,
    mergetagsData: editorConfig.mergetagsData,
    mergetags: editorConfig.mergetags,
    categories,
    unsplash: {
      clientId: process.env.UNSPLASH_CLIENT_ID!,
    },
    hoveringToolbar: hoveringToolbar,
    AIAssistant: editorConfig.showAIIntegration ? AIAssistant : undefined,
    showLayer: true,
    showPreview: true,
    showSidebar: true,
    showPreviousLevelIcon: true,
    showBlockPaths: editorConfig.showBlockPaths,
    showTextHTMLMode: true,
    compact: false,
    handleUploadClick,
    universalElementSetting,
    localeData: get(localsData, editorConfig.language),
    controller: editorConfig.controller,
    fontList: fonts,
    headerElement: editorConfig.showFrozenBlocks ? headerElement : undefined,
    footerElement: editorConfig.showFrozenBlocks ? footerElement : undefined,
    autoScroll: true,
    enabledHtmlBlockNodeAlign: true,
    enabledButtonIcon: true,
    enabledResponsive: true,
    showSourceCode: true,
    enabledAutoComplete: true,
    showLogic: true,
    layerDefaultCollapsed: true,
    showDragMoveIcon: false,
    emptyPageElement: emptyPageElement as PageElement,
    prebuiltBlocks: prebuiltBlocks,
    enabledAmpEmail: true,
  });

  if (authState === "pending") {
    return <FullScreenLoading isFullScreen />;
  }
  if (authState === "fail") {
    return <div>Fail to load editor</div>;
  }

  return (
    <EmailEditorProvider {...config}>
      <EditorHeader
        prefix={<TranslationSelect lang={editorConfig.language} />}
      />

      <Layout.Content>
        <Modern.Layout
          tabRight={
            <Space>
              <EmailSize />
            </Space>
          }
        >
          {editorConfig.showCustomStyles && (
            <style id="customize-css">
              {`
                  /* Custom styles for Modern theme */
                `}
            </style>
          )}
        </Modern.Layout>
      </Layout.Content>
      <AssetManagerModal
        key={editorConfig.language}
        accept={accept}
        visible={visible}
        setVisible={setVisible}
        onSelect={changeRef.current}
      />
      <style>{retroStyle}</style>
    </EmailEditorProvider>
  );
}
