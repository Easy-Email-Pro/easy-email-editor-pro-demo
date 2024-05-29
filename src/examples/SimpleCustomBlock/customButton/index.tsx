import { CustomBlockType } from "@/examples/constant";
import {
  createCustomBlock,
  t,
  components,
  mergeBlock,
} from "easy-email-pro-core";
import { ElementCategory } from "easy-email-pro-core";
import React from "react";
import { SimpleCustomButtonElement } from "@/custom-types";

const { SlateNodePlaceholder, Button, ContentLeaf } = components;

const defaultData = {
  attributes: {},
  data: {
    content: "Button",
  },
};

export const SimpleButtonCustomBlock =
  createCustomBlock<SimpleCustomButtonElement>({
    get name() {
      return t("Simple Button");
    },
    defaultData: defaultData,
    type: CustomBlockType.SIMPLE_BUTTON_CUSTOM_BLOCK,
    void: true,
    create: (payload) => {
      const data: SimpleCustomButtonElement = {
        type: CustomBlockType.SIMPLE_BUTTON_CUSTOM_BLOCK,
        data: {
          ...defaultData.data,
        },
        attributes: {
          ...defaultData.attributes,
        },
        children: [
          {
            text: "",
          },
        ],
      };
      return mergeBlock(data, payload);
    },
    category: ElementCategory.BUTTON,
    render(params) {
      const { node } = params;

      return <mj-button>{node.data.content}</mj-button>;
    },
  });
