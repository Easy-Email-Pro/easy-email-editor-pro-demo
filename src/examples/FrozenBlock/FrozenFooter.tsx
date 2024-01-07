import { CustomBlockType } from "@/examples/constant";
import {
  createCustomBlock,
  t,
  components,
  mergeBlock,
} from "easy-email-pro-core";
import { ElementCategory } from "easy-email-pro-core";
import React from "react";
import { FrozenFooterElement } from "@/custom-types";

const { Section, Column, Text } = components;

const defaultData = {
  attributes: {},
  data: {},
};

export const FrozenFooter = createCustomBlock<FrozenFooterElement>({
  get name() {
    return t("Frozen footer");
  },
  defaultData: defaultData,
  type: CustomBlockType.FROZEN_FOOTER,
  void: true,
  create: (payload) => {
    const data: FrozenFooterElement = {
      type: CustomBlockType.FROZEN_FOOTER,
      data: {
        ...defaultData.data,
      },
      attributes: {
        ...defaultData.attributes,
      },
      children: [],
    };
    return mergeBlock(data, payload);
  },
  category: ElementCategory.UNSET,
  render(params) {
    return (
      <Section idx={params.idx} background-color="#000000">
        <Column>
          <Text padding="0px" color="#ffffff" align="center" font-size="18px">
            FROZEN FOOTER
          </Text>
        </Column>
      </Section>
    );
  },
});
