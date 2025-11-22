import { CustomBlockType } from "@/examples/constant";
import {
  createCustomBlock,
  t,
  components,
  mergeBlock,
  TextElement,
  ElementType,
} from "easy-email-pro-core";
import { ElementCategory } from "easy-email-pro-core";
import { get } from "lodash";
import * as React from "react";
import { DynamicCustomElement } from "src/custom-types";

const { Show, ForEach, SlateNodePlaceholder } = components;

export interface ProductItem {
  id: string;
  title: string;
  image: string;
  comparePrice: string;
  price: string;
}

const defaultData: Pick<DynamicCustomElement, "attributes" | "data"> = {
  attributes: {
    "background-color": "#ffffff",
    "button-text-color": "#ffffff",
    "button-color": "#000000",
    "product-name-color": "#000000",
    "product-price-color": "#000000",
    "product-compare-price-color": "#737373",
    "image-border-radius": "5px",
    "image-width": "150px",
    "padding-top": "20px",
    "padding-bottom": "20px",
    "padding-left": "10px",
    "padding-right": "10px",
    "heading-padding": "10px 25px 10px 25px",
  },
  data: {
    buttonText: "Buy now",
    quantity: 6,
    type: "products",
    productIds: [],
    collectionIds: [],
    showComparePrice: true,
    showTitle: true,
  },
};

export const DynamicCustomBlock = createCustomBlock<DynamicCustomElement>({
  get name() {
    return t("Dynamic Block");
  },
  defaultData: defaultData,
  type: CustomBlockType.DYNAMIC_CUSTOM_BLOCK,
  void: true,
  create: (payload) => {
    const data: DynamicCustomElement = {
      type: CustomBlockType.DYNAMIC_CUSTOM_BLOCK,
      data: {
        ...defaultData.data,
      },
      attributes: {
        ...defaultData.attributes,
      },
      children: [
        {
          type: ElementType.STANDARD_H3,
          data: {},
          attributes: {
            align: "center",
          },
          children: [{ text: "You might also like" }],
        },
      ],
    };
    return mergeBlock(data, payload);
  },
  category: ElementCategory.WRAPPER,
  render(params) {
    const { node, mergetagsData, mode } = params;
    const { showTitle = true, showComparePrice = true } = params.node.data;
    const dataSourceKey = "products";

    const products = get(
      mergetagsData,
      dataSourceKey,
      []
    ) as Array<ProductItem>;
    const { attributes, data } = node;
    const RenderList = ({ item }: { item: ProductItem }) => {
      return (
        <mj-column width="50%">
          <mj-image
            border-radius={attributes["image-border-radius"]}
            padding="10px"
            src={item.image}
          />
          {showTitle && (
            <mj-text
              font-size={attributes["title-font-size"]}
              align="center"
              padding="10px 0px 0px 0px"
              color={attributes["product-name-color"]}
            >
              {item.title}
            </mj-text>
          )}
          <mj-text
            align="center"
            padding="10px 0px 0px 0px"
            color={attributes["product-price-color"]}
          >
            {item.price}
          </mj-text>
          {showComparePrice && (
            <mj-text
              align="center"
              mj-text-decoration="line-through"
              color={attributes["product-compare-price-color"]}
              padding="10px 0px 0px 0px"
            >
              {item.comparePrice}
            </mj-text>
          )}
          <mj-button
            href="#"
            background-color={attributes["button-color"]}
            color={attributes["button-text-color"]}
          >
            Buy now
          </mj-button>
        </mj-column>
      );
    };
    return (
      <mj-wrapper
        background-color={attributes["background-color"]}
        padding-top={attributes["padding-top"]}
        padding-bottom={attributes["padding-bottom"]}
        padding-left={attributes["padding-left"]}
        padding-right={attributes["padding-right"]}
      >
        <mj-section padding="0px">
          <mj-column padding="0px" border="none" vertical-align="top">
            <SlateNodePlaceholder node={node.children[0] as TextElement} />
          </mj-column>
        </mj-section>
        <mj-section padding="0px">
          <mj-group>
            {mode === "testing" ? (
              products.map((item, index) => (
                <RenderList item={item} key={index} />
              ))
            ) : (
              <ForEach dataSource={dataSourceKey} itemName="item">
                <RenderList
                  item={{
                    id: "{{item.id}}",
                    title: "{{item.title}}",
                    image: "{{item.image}}",
                    comparePrice: "{{item.comparePrice}}",
                    price: "{{item.price}}",
                  }}
                />
              </ForEach>
            )}
          </mj-group>
        </mj-section>
      </mj-wrapper>
    );
  },
});
