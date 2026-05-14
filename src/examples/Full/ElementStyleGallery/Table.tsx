import { Space } from "@arco-design/web-react";
import React from "react";
import { SharedComponents } from "easy-email-pro-theme";
import {
  BlockManager,
  ElementType,
  StandardTable2Element,
} from "easy-email-pro-core";

const list: Array<{ thumbnail: string; payload: StandardTable2Element }> = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/3f0uhmldm-vzqb3tgo7yb_image.png",
    payload: {
      type: "standard-table2",
      data: {},
      attributes: {
        cellpadding: "10px",
        "text-align": "center",
        "container-background-color": "#FFFFFF",
        "table-layout": "fixed",
        "padding-left": "5px",
        "padding-right": "5px",
        align: "left",
        "font-size": "14px",
      },
      children: [
        {
          type: "standard-table2-tr",
          data: {},
          attributes: {
            "background-color": "#7daa55",
          },
          children: [
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  text: "Item",
                  bold: true,
                  fontSize: "18px",
                },
              ],
              id: "HVaEKr8PNu-A3s3z3Ti_q",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  text: "Description",
                  fontSize: "18px",
                  bold: true,
                },
              ],
              id: "nRtOvynwJDo2n_ZZzKxAt",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  text: "Price",
                  bold: true,
                  fontSize: "18px",
                },
                {
                  bold: true,
                  fontSize: "16px",
                  text: "   ",
                },
              ],
              id: "1gtNteye4DjeLDOfN31ho",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  text: "Action",
                  bold: true,
                  fontSize: "18px",
                },
              ],
              id: "G7N4yEUxoZ5G2bQ6zBHzu",
            },
          ],
          id: "fGFwjWgXjdQznohjAZyE_",
        },
        {
          type: "standard-table2-tr",
          data: {},
          attributes: {
            "background-color": "#e4efda",
          },
          children: [
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  text: "Nike Dunk Low ",
                },
              ],
              id: "tPdNicS0zTnU0HrGz_8_J",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  type: "html-block-node",
                  attributes: {
                    style: "text-align:left;",
                  },
                  data: {
                    tagName: "div",
                  },
                  children: [
                    {
                      text: "",
                    },
                    {
                      type: "html-node",
                      data: {
                        tagName: "img",
                      },
                      attributes: {
                        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/sx9iemawisklnrsn_nx4f_image.png",
                        width: "120px",
                        height: "120px",
                        style: "max-width:100%;display:inline-block;",
                      },
                      children: [
                        {
                          text: "",
                        },
                      ],
                      id: "SO9OSX-B8RKXqKsvg3GHn",
                    },
                    {
                      text: "",
                    },
                  ],
                  id: "XwdEvfLdYKCAdeaU28IfQ",
                },
              ],
              id: "QUH_eN8xzAQNqLL07BZls",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  type: "html-block-node",
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  children: [
                    {
                      text: "HK$999",
                    },
                  ],
                  id: "HzlKGQju5405nvYONteNE",
                },
              ],
              id: "voX4QAhHtU3OPw4TV6ks9",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  type: "html-block-node",
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Buy",
                          link: {
                            href: "https://www.nike.com.hk/product/HQ4345-300/detail.htm",
                            blank: true,
                          },
                        },
                      ],
                      data: {
                        tagName: "div",
                      },
                      attributes: {
                        style: "text-align:center;",
                      },
                      id: "QkqVzbKav83eoJduEvW3v",
                    },
                  ],
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  id: "jY03RvPhp3MRXv40ZAg13",
                },
              ],
              id: "zNQGhiPWngaXItiheXjo8",
            },
          ],
          id: "ktErIV0DafEuNS_OdYmXL",
        },
        {
          type: "standard-table2-tr",
          data: {},
          attributes: {},
          children: [
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  text: "Sabrina 2 EP",
                },
              ],
              id: "F1rRfghPu3eGLsZ4-Rwjc",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  type: "html-block-node",
                  children: [
                    {
                      text: "",
                    },
                    {
                      type: "html-node",
                      data: {
                        tagName: "img",
                      },
                      attributes: {
                        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/1lfgm24de1_nve5jz8b5e_image.png",
                        width: "120px",
                        height: "120px",
                        style: "max-width:100%;display:inline-block;",
                      },
                      children: [
                        {
                          text: "",
                        },
                      ],
                      id: "ApL2_FIu_kYORkjWDj-er",
                    },
                    {
                      text: "",
                    },
                  ],
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:left;",
                  },
                  id: "D_1pBvBrl4Y9LNVn4Cjq5",
                },
              ],
              id: "y2IpHGdtJyLl_jgaNJpF3",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  type: "html-block-node",
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  children: [
                    {
                      text: "HK$899",
                    },
                  ],
                  id: "UzcqLSDvLJ4p4Qbv7DO4b",
                },
              ],
              id: "GicXvIP0TKWUh9YbvjA-W",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  type: "html-block-node",
                  children: [
                    {
                      text: "Buy",
                      link: {
                        href: "https://www.nike.com.hk/product/HQ4345-300/detail.htm",
                        blank: true,
                      },
                    },
                  ],
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  id: "A4Z0Z5cDE5v3rtB-9smI1",
                },
              ],
              id: "fpP6bVN2wIguHeronfNwv",
            },
          ],
          id: "qa6dsB5YrosiDhW1NhHr6",
        },
        {
          type: "standard-table2-tr",
          data: {},
          attributes: {
            "background-color": "#e4efda",
          },
          children: [
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  text: "Nike Vaporfly 3",
                },
              ],
              id: "bEayzhJtrnEKHyYYutAkG",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  type: "html-block-node",
                  children: [
                    {
                      text: "",
                    },
                    {
                      type: "html-node",
                      data: {
                        tagName: "img",
                      },
                      attributes: {
                        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/kcb_901pyt2rxsckj52xp_image.png",
                        width: "120px",
                        height: "120px",
                        style: "max-width:100%;display:inline-block;",
                      },
                      children: [
                        {
                          text: "",
                        },
                      ],
                      id: "eFLb918p1bH0-C-NISfYL",
                    },
                    {
                      text: "",
                    },
                  ],
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:left;",
                  },
                  id: "YhI-ryLrMdxFeoM7UVk5n",
                },
              ],
              id: "phf_ts9AhvbD-9wFtkAVr",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  type: "html-block-node",
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  children: [
                    {
                      text: "HK$1,699",
                    },
                  ],
                  id: "2Hvp4-xauKJiD4XNl6eiJ",
                },
              ],
              id: "pOsITrMTVQrbsQ-ha9H2C",
            },
            {
              type: "standard-table2-td",
              data: {
                rowspan: 1,
                colspan: 1,
              },
              attributes: {},
              children: [
                {
                  type: "html-block-node",
                  children: [
                    {
                      text: "Buy",
                      link: {
                        href: "https://www.nike.com.hk/product/HJ7040-300/detail.htm",
                        blank: true,
                      },
                    },
                  ],
                  data: {
                    tagName: "div",
                  },
                  attributes: {
                    style: "text-align:center;",
                  },
                  id: "563d-4so-Gt7X-MzcczOF",
                },
              ],
              id: "ULkyZVzuCc_HsYOh_s0lZ",
            },
          ],
          id: "BpZiJ7BT57AphYDUj8ENs",
        },
      ],
      id: "0MrAhVbZYRksKB8-7or0t",
    } as StandardTable2Element,
  },
];

export function Table() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {list.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          ElementType.STANDARD_TABLE2
        );

        const element = blockDefinition?.create(item.payload);

        return (
          <SharedComponents.DragItem key={index} element={element}>
            <div
              className="block-list-menu-popover-item"
              style={{
                width: "100%",
                minHeight: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={item.thumbnail}
                style={{ width: "100%", maxHeight: "100%" }}
              />
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
