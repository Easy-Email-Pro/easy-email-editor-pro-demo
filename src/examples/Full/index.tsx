import { useEffect, useMemo } from "react";
import {
  EmailEditorProvider,
  EmailTemplate,
  TextFormat,
} from "easy-email-pro-editor";
import {
  EditorContextProps,
  IconFont,
  Retro,
  ThemeConfigProps,
} from "easy-email-pro-theme";
import "easy-email-pro-theme/lib/style.css";

import retroStyle from "@arco-themes/react-easy-email-pro/css/arco.css?inline";
import colorPurpleStyle from "@arco-themes/react-easy-email-pro-purple/css/arco.css?inline";
import colorRedStyle from "@arco-themes/react-easy-email-pro-red/css/arco.css?inline";
import colorBlueStyle from "@arco-themes/react-easy-email-pro-sky/css/arco.css?inline";
import colorGreenStyle from "@arco-themes/react-easy-email-pro-green/css/arco.css?inline";

import data from "./template.json";
import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import { Layout } from "@arco-design/web-react";
import React from "react";
import {
  Shopwindow,
  QRCode,
  Video,
  MarketingType,
  CommonType,
  ImageWithText,
  CountdownV2,
  Countdown,
} from "easy-email-pro-kit";
import { EditorCore, ElementType, PluginManager, t } from "easy-email-pro-core";
import { useState } from "react";
import { useRef } from "react";

import localsData from "easy-email-pro-localization/locales/locales.json";
import { get } from "lodash";
import { AssetManagerModal } from "./AssetManagerModal";
import { useUniversalElement } from "@/hooks/useUniversalElement";
import customizeCss from "./customize.scss?inline";
import customizeCss2 from "../Customize/customize.scss?inline";
import FullScreenLoading from "@/components/FullScreenLoading";
import axios from "axios";
import { Tutorial } from "@/components/Tutorial";
import { useEditorConfigStore } from "../../store/editorConfigStore";

import { footerElement } from "../FrozenBlock";
import { headerElement } from "../FrozenBlock";

PluginManager.registerPlugins([
  CountdownV2,
  Countdown,
  Shopwindow,
  QRCode,
  Video,
  ImageWithText,
]);

// register elements styles
import "./ElementStyleGallery";
import { TranslationSelect } from "@/components/TranslationSelect";

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
      {
        type: ElementType.STANDARD_TABLE2,
        icon: (
          <IconFont
            className={"block-list-grid-item-icon"}
            iconName="icon-table"
          />
        ),
        payload: {
          type: "standard-table2",
          data: {},
          attributes: {
            cellpadding: "20px",
            "container-background-color": "#FFFFFF",
          },
          children: [
            {
              type: "standard-table2-tr",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "standard-table2-tr",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "standard-table2-tr",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
                },
                {
                  type: "standard-table2-td",
                  data: {
                    rowspan: 1,
                    colspan: 1,
                  },
                  attributes: {},
                  children: [
                    {
                      text: "",
                    },
                  ],
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
    value: "Tangerine",
    label: "Tangerine",
    href: "https://fonts.googleapis.com/css?family=Tangerine",
  },
  {
    value: "Arial",
    label: "Arial",
  },
  {
    value: "Tahoma",
    label: "Tahoma",
  },
  {
    value: "Verdana",
    label: "Verdana",
  },
  {
    value: "Times New Roman",
    label: "Times New Roman",
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
    value: "Lato",
    label: "Lato",
  },
  {
    value: "Montserrat",
    label: "Montserrat",
  },
  {
    value: "黑体",
    label: "黑体",
  },
  {
    value: "仿宋",
    label: "仿宋",
  },
  {
    value: "楷体",
    label: "楷体",
  },
  {
    value: "标楷体",
    label: "标楷体",
  },
  {
    value: "华文仿宋",
    label: "华文仿宋",
  },
  {
    value: "华文楷体",
    label: "华文楷体",
  },
  {
    value: "宋体",
    label: "宋体",
  },
  {
    value: "微软雅黑",
    label: "微软雅黑",
  },
];

const optionsList = [
  {
    label: "Ask AI",
    value: "Ask AI",
    getMessages(text: string) {
      return [
        {
          role: "system",
          content: "Answer the question based on the context below.",
        },
        {
          role: "system",
          content: "The response should be in HTML format.",
        },
        {
          role: "system",
          content:
            "The response should preserve any HTML formatting, links, and styles in the context.",
        },
      ];
    },
  },
  {
    label: "Summarize content",
    value: "Summarize content",
    getMessages(text: string) {
      return [
        {
          role: "system",
          content: "Answer the question based on the context below.",
        },
        {
          role: "system",
          content: "The response should be in HTML format.",
        },
        {
          role: "system",
          content:
            "The response should preserve any HTML formatting, links, and styles in the context.",
        },
        {
          role: "user",
          content: `Question: Provide the key points and concepts in this content in a succinct summary. Context: ${text}`,
        },
      ];
    },
  },
  {
    label: "Improve writing",
    value: "Improve writing",
    getMessages(text: string) {
      return [
        {
          role: "system",
          content: "Answer the question based on the context below.",
        },
        {
          role: "system",
          content: "The response should be in HTML format.",
        },
        {
          role: "system",
          content:
            "The response should preserve any HTML formatting, links, and styles in the context.",
        },
        {
          role: "user",
          content: `Question: Rewrite this content with no spelling mistakes, proper grammar, and with more descriptive language, using best writing practices without losing the original meaning. Context: ${text}`,
        },
      ];
    },
  },
  {
    label: "Simplify language",
    value: "Simplify language",
    getMessages(text: string) {
      return [
        {
          role: "system",
          content: "Answer the question based on the context below.",
        },
        {
          role: "system",
          content: "The response should be in HTML format.",
        },
        {
          role: "system",
          content:
            "The response should preserve any HTML formatting, links, and styles in the context.",
        },
        {
          role: "user",
          content: `Question: Rewrite this content with simplified language and reduce the complexity of the writing, so that the content is easier to understand. Context: ${text}`,
        },
      ];
    },
  },
  {
    label: "Expand upon",
    value: "Expand upon",
    getMessages(text: string) {
      return [
        {
          role: "system",
          content: "Answer the question based on the context below.",
        },
        {
          role: "system",
          content: "The response should be in HTML format.",
        },
        {
          role: "system",
          content:
            "The response should preserve any HTML formatting, links, and styles in the context.",
        },
        {
          role: "user",
          content: `Question: Expand upon this content with descriptive language and more detailed explanations, to make the writing easier to understand and increase the length of the content. Context: ${text}`,
        },
      ];
    },
  },
  {
    label: "Trim content",
    value: "Trim content",
    getMessages(text: string) {
      return [
        {
          role: "system",
          content: "Answer the question based on the context below.",
        },
        {
          role: "system",
          content: "The response should be in HTML format.",
        },
        {
          role: "system",
          content:
            "The response should preserve any HTML formatting, links, and styles in the context.",
        },
        {
          role: "user",
          content: `Question: Remove any repetitive, redundant, or non-essential writing in this content without changing the meaning or losing any key information. Context: ${text}`,
        },
      ];
    },
  },
];

export default function MyEditor() {
  const editorConfig = useEditorConfigStore();
  const { upload } = useUpload();
  const [accept, setAccept] = useState<string | undefined>(undefined);
  const [visible, setVisible] = useState(false);
  const { universalElementSetting } = useUniversalElement();
  const [hoveringToolbarPosition, setHoveringToolbarPosition] =
    useState<NonNullable<ThemeConfigProps["hoveringToolbar"]>["follow"]>(
      "container"
    );

  const editorInstance = useRef<EditorContextProps | null>(null);

  const hoveringToolbar: ThemeConfigProps["hoveringToolbar"] = useMemo(() => {
    return {
      list({ isCollapsed, selection, isFocus }) {
        // if (!isFocus) return [];
        return [
          TextFormat.AI_ASSISTANT,
          TextFormat.FONT_FAMILY,
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

  const theme = editorConfig.theme;
  const matchThemeStyle = useMemo(() => {
    if (theme === "retro") {
      return retroStyle;
    }
    if (theme === "purple") {
      return colorPurpleStyle;
    }
    if (theme === "green") {
      return colorGreenStyle;
    }
    if (theme === "blue") {
      return colorBlueStyle;
    }
    if (theme === "red") {
      return colorRedStyle;
    }
    return "";
  }, [theme]);

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

  const onChange: ThemeConfigProps["onChange"] = async (values, editor) => {
    console.log("onChange", values);
  };

  const AIAssistant: ThemeConfigProps["AIAssistant"] = useMemo(() => {
    return {
      async onGenerate(messages) {
        const { data } = await axios.post<{ content: string; role: string }>(
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
      // options: optionsList,
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

  const config = Retro.useCreateConfig({
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
    showSourceCode: editorConfig.showSourceCode,
    showLayer: editorConfig.showLayer,
    showPreview: editorConfig.showPreview,
    showSidebar: true,
    showPreviousLevelIcon: true,
    showBlockPaths: editorConfig.showBlockPaths,
    showTextHTMLMode: true,
    showSelectFileButton: true,
    compact: editorConfig.compactMode,
    handleUploadClick,
    universalElementSetting,
    localeData: get(localsData, editorConfig.language),
    showDragMoveIcon: true,
    showInsertTips: true,
    controller: editorConfig.controller,
    // sourceCodeEditable: false,
    fontList: fonts,
    // emptyPageElement: data2.content,
    dragoverType: editorConfig.dragoverType ? "line" : "placeholder",
    headerElement: editorConfig.showFrozenBlocks ? headerElement : undefined,
    footerElement: editorConfig.showFrozenBlocks ? footerElement : undefined,
    autoScroll: true,
    attributesVariables: {
      "background-color": "red",
      "font-size": "18px",
    },
    enabledHtmlBlockNodeAlign: true,
    enabledGradientImage: true,
  });

  if (authState === "pending") {
    return <FullScreenLoading isFullScreen />;
  }
  if (authState === "fail") {
    return <div>Fail to load editor</div>;
  }

  return (
    <EmailEditorProvider {...config}>
      <Tutorial>
        <EditorHeader
          prefix={<TranslationSelect lang={editorConfig.language} />}
        />

        <Layout.Content>
          <Retro.Layout tabRight={<EmailSize />}>
            <style id="customize-css">{customizeCss}</style>
            {editorConfig.showCustomStyles && (
              <style id="customize-css2">{customizeCss2}</style>
            )}
          </Retro.Layout>
        </Layout.Content>
        <AssetManagerModal
          key={editorConfig.language}
          accept={accept}
          visible={visible}
          setVisible={setVisible}
          onSelect={changeRef.current}
        />
        <style>{matchThemeStyle}</style>
      </Tutorial>
    </EmailEditorProvider>
  );
}
