import {
  BasicElement,
  TextElement,
  ButtonElement,
  StandardSectionElement,
} from "easy-email-pro-core";
import { BasicEmailTemplate } from "easy-email-pro-editor";
import { CustomBlockType } from "./examples/constant";
import { PluginsCustomEditorTypes } from "easy-email-pro-theme";
import {
  MarketingCountdownElement,
  MarketingShopwindowElement,
  MarketingQRCodeElement,
  CommonVideoElement,
  CommonImageWithTextElement,
  MarketingCountdownElementV2,
} from "easy-email-pro-kit";

type CustomType = typeof CustomBlockType;

interface CustomEmailTemplate extends BasicEmailTemplate {
  subject: string;
}

export interface FrozenHeaderElement extends BasicElement {
  type: CustomType["FROZEN_HEADER"];
  data: {};
  attributes: {};
}
export interface FrozenFooterElement extends BasicElement {
  type: CustomType["FROZEN_FOOTER"];
  data: {};
  attributes: {};
}

export interface SimpleCustomElement extends BasicElement {
  type: CustomType["SIMPLE_CUSTOM_BLOCK"];
  data: {
    buttonText: string;
  };
  attributes: {
    src: string;
    "button-color"?: string;
  };
}
export interface SimpleCustomTextElement extends Omit<TextElement, "type"> {
  type: CustomType["SIMPLE_TEXT_CUSTOM_BLOCK"];
}
export interface SimpleCustomButtonElement extends Omit<ButtonElement, "type"> {
  type: CustomType["SIMPLE_BUTTON_CUSTOM_BLOCK"];
  data: {
    content: string;
  };
}
export interface SimpleCustomWrapperElement
  extends Omit<StandardSectionElement, "type"> {
  type: CustomType["SIMPLE_WRAPPER_CUSTOM_BLOCK"];
  data: {};
}

export interface DynamicCustomElement extends BasicElement {
  type: CustomType["DYNAMIC_CUSTOM_BLOCK"];
  data: {
    buttonText: string;
    quantity: number;
    type: "products" | "collections";
    productIds: string[];
    collectionIds: string[];
    showComparePrice: boolean;
    showTitle: boolean;
  };
  attributes: {
    "background-color": string;
    "button-color": string;
    "button-text-color": string;
    "product-name-color": string;
    "product-price-color": string;
    "product-compare-price-color": string;
    "image-border-radius"?: string;
    "image-width"?: string;
    "image-vertical-align"?: string;
    "image-border"?: string;
    border?: string;
    "padding-top"?: string;
    "padding-bottom"?: string;
    "padding-left"?: string;
    "padding-right"?: string;
    "heading-padding"?: string;
    "title-font-size"?: string;
  };
}

declare module "easy-email-pro-core" {
  export interface CustomTypes {
    Element:
      | SimpleCustomElement
      | DynamicCustomElement
      | FrozenHeaderElement
      | FrozenFooterElement
      | MarketingCountdownElement
      | MarketingCountdownElementV2
      | MarketingQRCodeElement
      | MarketingShopwindowElement
      | CommonVideoElement
      | SimpleCustomTextElement
      | SimpleCustomButtonElement
      | SimpleCustomWrapperElement
      | CommonImageWithTextElement;
  }
}

declare module "easy-email-pro-editor" {
  export interface CustomEditorTypes {
    EmailTemplate: CustomEmailTemplate;
    EmailEditorProps: PluginsCustomEditorTypes["EmailEditorProps"];
  }
}
