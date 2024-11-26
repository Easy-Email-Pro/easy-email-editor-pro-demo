import { CustomBlockType } from "@/examples/constant";
import {
  createCustomBlock,
  t,
  components,
  mergeBlock,
  BlockManager,
  ElementType,
} from "easy-email-pro-core";
import { ElementCategory } from "easy-email-pro-core";
import React from "react";
import { cloneDeep } from "lodash";
import { SimpleCustomWrapperElement } from "@/custom-types";

const { Wrapper, Section, Column, Image, BlockRenderer } = components;

const defaultData = {
  ...BlockManager.getBlockByType(ElementType.STANDARD_WRAPPER).defaultData,
};

export const extraContent = (
  <Section padding="0px">
    <Column>
      <Image
        padding="0px"
        width="150px"
        src="https://www.easyemail.pro/_next/static/media/easy-email-pro.afb28576.svg"
      />
    </Column>
  </Section>
);

export const SimpleSectionCustomBlock =
  createCustomBlock<SimpleCustomWrapperElement>({
    get name() {
      return t("Custom Wrapper");
    },
    defaultData: defaultData,
    type: CustomBlockType.SIMPLE_WRAPPER_CUSTOM_BLOCK,
    void: false,
    emptyWithPlaceholder: true,
    create: (payload) => {
      const data: SimpleCustomWrapperElement = {
        type: CustomBlockType.SIMPLE_WRAPPER_CUSTOM_BLOCK,
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
    category: ElementCategory.WRAPPER,
    render(params) {
      const { node } = params;

      const cloneAttributes = cloneDeep(node.attributes);

      const {
        "border-enabled": borderEnabled,
        "border-width": borderWidth,
        "border-style": borderStyle,
        "border-color": borderColor,
        "vertical-align": verticalAlign = "top",
        ...attributes
      } = cloneAttributes;

      if (!attributes["background-image-enabled"]) {
        delete attributes["background-image-enabled"];
        attributes["background-url"] = "";
      }

      const border = borderEnabled
        ? `${borderWidth || "1px"} ${borderStyle || "solid"} ${
            borderColor || "#AAAAAA"
          }`
        : "";

      return (
        <Wrapper padding="0px" {...attributes} border={border}>
          {extraContent}
          {node.children.map((item, index) => {
            return <BlockRenderer key={index} {...params} node={item as any} />;
          })}
        </Wrapper>
      );
    },
  });
