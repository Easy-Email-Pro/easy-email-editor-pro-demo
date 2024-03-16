import { CustomBlockType } from "@/examples/constant";
import {
  createCustomBlock,
  t,
  components,
  mergeBlock,
} from "easy-email-pro-core";
import { ElementCategory } from "easy-email-pro-core";
import React from "react";
import { SimpleCustomElement } from "@/custom-types";

const { Button, Wrapper, Section, Column, Image, Code, Table } = components;

const defaultData = {
  attributes: {
    src: "",
  },
  data: {
    buttonText: "Save",
  },
};

export const SimpleCustomBlock = createCustomBlock<SimpleCustomElement>({
  get name() {
    return t("Simple Block");
  },
  defaultData: defaultData,
  type: CustomBlockType.SIMPLE_CUSTOM_BLOCK,
  void: true,
  create: (payload) => {
    const data: SimpleCustomElement = {
      type: CustomBlockType.SIMPLE_CUSTOM_BLOCK,
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
  category: ElementCategory.SECTION,
  render(params) {
    const { node } = params;

    const { data, attributes } = node;

    return (
      <Wrapper idx={params.idx} {...node.attributes} data={node.data}>
        <Section>
          <Column>
            <Image
              padding="0px 0px 0px 0px"
              width="100px"
              src={attributes.src}
            />
            <Button background-color={attributes["button-color"]} href="#">
              {data.buttonText}
            </Button>
          </Column>
        </Section>
        <Section>
          <Column>
            <Code>
              {`
                <p style="color:red;font-size:40px">dangerous code</p>
              `}
            </Code>
          </Column>
        </Section>
        <Section>
          <Column>
            <Table>
              {`
               <tr style="border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;">
                  <th style="padding: 0 15px 0 0;">Year</th>
                  <th style="padding: 0 15px;">Language</th>
                  <th style="padding: 0 0 0 15px;">Inspired from</th>
                </tr>
                <tr>
                  <td style="padding: 0 15px 0 0;">1995</td>
                  <td style="padding: 0 15px;">PHP</td>
                  <td style="padding: 0 0 0 15px;">C, Shell Unix</td>
                </tr>
                <tr>
                  <td style="padding: 0 15px 0 0;">1995</td>
                  <td style="padding: 0 15px;">JavaScript</td>
                  <td style="padding: 0 0 0 15px;">Scheme, Self</td>
                </tr>
              `}
            </Table>
          </Column>
        </Section>
      </Wrapper>
    );
  },
});
