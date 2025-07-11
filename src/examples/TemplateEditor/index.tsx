import { useMemo } from "react";
import { EmailEditorProvider, EmailTemplate } from "easy-email-pro-editor";
import {
  IconFont,
  Retro,
  ThemeConfigProps,
  useEditorContext,
  mjmlToJson,
} from "easy-email-pro-theme";
import "easy-email-pro-theme/lib/style.css";
import "@arco-themes/react-easy-email-pro/css/arco.css";

import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import { Button, Layout, Message } from "@arco-design/web-react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import {
  Countdown,
  Shopwindow,
  QRCode,
  MarketingType,
  Video,
  ImageWithText,
  CountdownV2,
} from "easy-email-pro-kit";
import {
  BlockManager,
  EditorCore,
  ElementType,
  NodeUtils,
  PageElement,
  PluginManager,
  StandardSectionElement,
  StandardWrapperElement,
  t,
} from "easy-email-pro-core";
import { useCompactMode } from "@/hooks/useCompactMode";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import FullScreenLoading from "@/components/FullScreenLoading";

PluginManager.registerPlugins([
  CountdownV2,
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

const TemplateEditor = ({
  data,
}: {
  data: { content: EmailTemplate["content"]; subject: string };
}) => {
  const { upload } = useUpload();

  const initialValues: EmailTemplate | null = useMemo(() => {
    return {
      subject: data.subject,
      content: data.content as EmailTemplate["content"],
    };
  }, [data]);

  const onUpload = (file: Blob): Promise<string> => {
    return upload(file);
  };

  const onSubmit = (values: EmailTemplate) => {
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
    showSourceCode: true,
    showLayer: true,
    compact,
    showDragMoveIcon: true,
    showInsertTips: true,
    showSidebar: true,
    showPreviousLevelIcon: true,
    showBlockPaths: true,
    showTextHTMLMode: true,
    showSelectFileButton: true,
  });

  return (
    <EmailEditorProvider {...config}>
      <EditorHeader extra={<SaveAndShareButton />} />

      <Layout.Content>
        <Retro.Layout></Retro.Layout>
      </Layout.Content>
    </EmailEditorProvider>
  );
};

const SaveAndShareButton = () => {
  const isShare = location.pathname === "/share";
  const [params] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const id = params.get("id") || "";
  const gid = params.get("gid") || "";
  const { values, reset } = useEditorContext();

  const onShare = async () => {
    try {
      setLoading(true);
      if (!id) {
        const { data } = await axios.post(
          `https://admin.easyemail.pro/api/email-template`,
          {
            subject: values.subject,
            content: values.content,
            thumbnail:
              "https://d3k81ch9hvuctc.cloudfront.net/company/S7EvMw/images/73aba2b0-4d98-4314-8a98-654598279ced.png",
          },
          {
            params: {
              user_id: "clnu5hbaj000608mk27gof0y4",
            },
          }
        );

        window.location.replace(`/share?id=${data.id}`);
      } else {
        const { data } = await axios.patch(
          `https://admin.easyemail.pro/api/email-template/${id}`,
          {
            subject: values.subject,
            content: values.content,
          },
          {
            params: {
              user_id: "clnu5hbaj000608mk27gof0y4",
            },
          }
        );
      }
      await navigator.clipboard.writeText(location.href);
      Message.success(`The link has been copied to the clipboard`);
    } catch (error) {
      Message.error(String(error));
    }
    setLoading(false);
  };
  if (!isShare) return null;
  return (
    <Button loading={loading} onClick={onShare}>
      <strong>Save and share</strong>
    </Button>
  );
};

const TemplateEditorContainer = () => {
  const [params] = useSearchParams();
  const [authState, setAuthState] = useState<"pending" | "success" | "fail">(
    "pending"
  );
  const isBlockPreview = params.get("block_preview") === "true";

  useEffect(() => {
    EditorCore.auth(process.env.CLIENT_ID!)
      .then(() => {
        setAuthState("success");
      })
      .catch(() => {
        setAuthState("fail");
      });
  }, []);

  const [data, setData] = useState<{
    subject: string;
    content: PageElement;
  } | null>(null);

  const id = params.get("id") || "";
  const gid = params.get("gid") || "";

  useEffect(() => {
    if (authState !== "success") return;

    if (!id && !gid) {
      let block: StandardSectionElement | StandardWrapperElement = {
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
                type: "placeholder",
                data: {},
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
      };
      if (isBlockPreview) {
        const blockJson = localStorage.getItem("preview_block_json");
        if (blockJson) {
          block = JSON.parse(blockJson);

          if (NodeUtils.isContentElement(block)) {
            const sectionDefinition = BlockManager.getBlockByType(
              ElementType.STANDARD_SECTION
            );
            const columnDefinition = BlockManager.getBlockByType(
              ElementType.STANDARD_COLUMN
            );
            const textDefinition = BlockManager.getBlockByType(
              ElementType.STANDARD_PARAGRAPH
            );
            block = sectionDefinition?.create({
              children: [
                columnDefinition?.create({
                  children: [
                    block,
                    textDefinition.create({
                      children: [{ text: "" }],
                    }),
                  ],
                }),
              ],
            });
          }
        }
      }

      setData({
        subject: "Blank",
        content: {
          data: {
            breakpoint: "480px",
            globalAttributes: {
              "font-family": "Arial, sans-serif",
            },
          },
          type: "page",
          children: [block],
          attributes: {
            "background-color": "#f5f5f5",
            "content-background-color": "#ffffff",
          },
        },
      });
      return;
    }
    if (gid) {
      axios
        .get(
          `https://api.github.com/repos/Easy-Email-Pro/email-templates/contents/${gid}`
        )
        .then(({ data }) => {
          setData({
            subject: data.name,
            content: mjmlToJson(atob(data.content)),
          });
        });
    } else if (id) {
      axios
        .get(`https://admin.easyemail.pro/api/email-template/${id}`, {
          params: {
            user_id:
              location.pathname === "/share"
                ? "clnu5hbaj000608mk27gof0y4"
                : "clnl5a07900065zltiqvalojp",
          },
        })
        .then(({ data }) => {
          setData(data);
        });
    }
  }, [authState, gid, id, isBlockPreview]);

  console.log("data", data);
  if (!data) return <FullScreenLoading isFullScreen></FullScreenLoading>;
  return <TemplateEditor data={data} />;
};

export default TemplateEditorContainer;
