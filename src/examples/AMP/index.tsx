import { useEffect, useMemo } from "react";
import {
  EmailEditorProvider,
  EmailTemplate,
  TextFormat,
} from "easy-email-pro-editor";
import {
  EditorContextProps,
  Retro,
  ThemeConfigProps,
} from "easy-email-pro-theme";
import "easy-email-pro-theme/lib/style.css";

import retroStyle from "@arco-themes/react-easy-email-pro/css/arco.css?inline";
import colorPurpleStyle from "@arco-themes/react-easy-email-pro-purple/css/arco.css?inline";
import colorRedStyle from "@arco-themes/react-easy-email-pro-red/css/arco.css?inline";
import colorBlueStyle from "@arco-themes/react-easy-email-pro-sky/css/arco.css?inline";
import colorGreenStyle from "@arco-themes/react-easy-email-pro-green/css/arco.css?inline";
import colorLocalStyle from "../ColorTheme/theme.css?inline";

import data from "./template.json";
import { EditorHeader } from "../../components/EditorHeader";
import { useUpload } from "../../hooks/useUpload";
import {
  Layout,
} from "@arco-design/web-react";
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
} from "easy-email-pro-kit";
import { EditorCore, PluginManager } from "easy-email-pro-core";
import { useState } from "react";
import { useRef } from "react";

import localsData from "easy-email-pro-localization/locales/locales.json";
import { get } from "lodash";
import { useUniversalElement } from "@/hooks/useUniversalElement";
import customizeCss from "./customize.scss?inline";
import customizeCss2 from "../Customize/customize.scss?inline";
import FullScreenLoading from "@/components/FullScreenLoading";
import axios from "axios";
import { useEditorConfigStore } from "../../store/editorConfigStore";


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
import "./ElementStyleGallery";
import { TranslationSelect } from "@/components/TranslationSelect";
import { categories } from './categories';
import { AssetManagerModal } from '../Full/AssetManagerModal';
import { prebuiltBlocks } from '../Full/prebuiltBlocks';

const EmailSize = React.lazy(() => import("@/components/EmailSize"));

export default function MyEditor() {
  const editorConfig = useEditorConfigStore();
  const { upload } = useUpload();
  const [accept, setAccept] = useState<string | undefined>(undefined);
  const [visible, setVisible] = useState(false);
  const { universalElementSetting } = useUniversalElement();


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
      follow: 'container',
      iconSize: 14,
    };
  }, []);

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
    if (theme === "local") {
      return colorLocalStyle;
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
    categories: categories,
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
    showGenerateBlockImage: true,
    compact: editorConfig.compactMode,
    handleUploadClick,
    universalElementSetting,
    localeData: get(localsData, editorConfig.language),
    showDragMoveIcon: true,
    showInsertTips: true,
    controller: editorConfig.controller,
    autoScroll: true,
    enabledButtonIcon: true,
    enabledHtmlBlockNodeAlign: true,
    enabledGradientImage: true,
    enabledAutoComplete: true,
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
        showConfiguration
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


    </EmailEditorProvider>
  );
}
