import { CustomBlockType } from "@/examples/constant";
import {
  createCustomBlock,
  t,
  mergeBlock,
  components,
} from "easy-email-pro-core";
import { ElementCategory } from "easy-email-pro-core";
import React from "react";
import { SimpleCustomElement } from "@/custom-types";

const { Style, Wrapper } = components;

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
      <Wrapper {...node.attributes}>
        <mj-section css-class="custom-section">
          <mj-column>
            <mj-image
              padding="0px 0px 0px 0px"
              width="100px"
              src={attributes.src}
            />
            <mj-button background-color={attributes["button-color"]} href="#">
              {data.buttonText}
            </mj-button>
          </mj-column>
        </mj-section>
        <Style>{`
        .custom-section {
          border: 1px solid #000;
        }
        `}</Style>
        {/* <mj-section>
          <mj-column>
            <mj-text>
              <p style={{ color: "red", fontSize: 40 }}>dangerous code</p>
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section>
          <mj-column>
            <mj-table>
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
            </mj-table>
          </mj-column>
        </mj-section> */}
      </Wrapper>
    );
  },
});
