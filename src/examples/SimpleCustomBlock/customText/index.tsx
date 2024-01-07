import { CustomBlockType } from "@/examples/constant";
import {
  createCustomBlock,
  t,
  components,
  mergeBlock,
} from "easy-email-pro-core";
import { ElementCategory } from "easy-email-pro-core";
import React from "react";
import { SimpleCustomTextElement } from "@/custom-types";

const { Text } = components;

const defaultData = {
  attributes: {},
  data: {},
};

export const SimpleTextCustomBlock = createCustomBlock<SimpleCustomTextElement>(
  {
    get name() {
      return t("Simple Text");
    },
    defaultData: defaultData,
    type: CustomBlockType.SIMPLE_TEXT_CUSTOM_BLOCK,
    void: true,
    create: (payload) => {
      const data: SimpleCustomTextElement = {
        type: CustomBlockType.SIMPLE_TEXT_CUSTOM_BLOCK,
        data: {
          ...defaultData.data,
        },
        attributes: {
          ...defaultData.attributes,
        },
        children: [
          {
            text: "default text",
          },
        ],
      };
      return mergeBlock(data, payload);
    },
    category: ElementCategory.TEXT,
    render(params) {
      const { node } = params;

      const { data, attributes } = node;

      return <Text idx={params.idx} {...attributes} children={node.children} />;
    },
  }
);
