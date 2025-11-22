import React, { useState } from "react";
import {
  Typography,
  Space,
  Button,
  Card,
  Grid,
  Message,
} from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import {
  BlockManager,
  Element,
  StandardWrapperElement,
} from "easy-email-pro-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDown, IconUp } from "@arco-design/web-react/icon";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const productCardList: Array<{
  thumbnail: string;
  payload: StandardWrapperElement;
}> = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/gptcpd80u5cbnhq1bzysj_i2oc-nesrpjlr3dmm844u.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "background-repeat": "no-repeat",
      },
      children: [
        {
          type: "standard-section",
          attributes: {
            "padding-left": "20px",
            "padding-right": "20px",
            "padding-top": "10px",
            "padding-bottom": "10px",
          },
          data: {},
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "220px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/89owcnnipygiqupiq8trk_image.png",
                    "padding-top": "0px",
                    "padding-bottom": "0px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "SIVEN9ukPOfcytJ0WVIZ4",
                },
              ],
              id: "ws6KsxgvkfF6LZli9DaN7",
            },
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "26px",
                    align: "left",
                  },
                  children: [
                    {
                      text: "Lorem ipsum",
                    },
                  ],
                  id: "wSr7c51NxtiI-sPhUoT2Y",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#505457",
                    "padding-bottom": "13px",
                    align: "left",
                    "line-height": "1.6",
                    "padding-top": "13px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "HdCf6NnCAGZgq3q-JUw9m",
                    },
                  ],
                  id: "9pseIS_VfR-EEd7yPCT2f",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#000000",
                    "padding-bottom": "13px",
                    align: "left",
                    "font-weight": "bold",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "CTA →",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "fusnSkPLjrlADcvzB0G3W",
                    },
                  ],
                  id: "GKjImHxGfaDp_K0SgbC6j",
                },
              ],
              id: "cjL5PraPKuQPd3aJuG06w",
            },
          ],
          id: "EaXopmeehKg-Tia0s8smg",
        },
        {
          type: "standard-section",
          attributes: {
            "padding-left": "20px",
            "padding-right": "20px",
            "padding-top": "10px",
            "padding-bottom": "10px",
            direction: "rtl",
          },
          data: {},
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "440px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/vgfskgix0l9bj4iwsj4yb_image.png",
                    "padding-top": "0px",
                    "padding-bottom": "0px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "gqQVbwjriFZcYpe83H02N",
                },
              ],
              id: "rGMKgXlh5UrYnDjI7Iw3V",
            },
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "26px",
                    align: "left",
                  },
                  children: [
                    {
                      text: "Lorem ipsum",
                    },
                  ],
                  id: "xzgzJ1RsnDAZNxSoLdQMg",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#505457",
                    "padding-bottom": "13px",
                    align: "left",
                    "line-height": "1.6",
                    "padding-top": "13px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "uOetVLkk3fHsetPOncwEg",
                    },
                  ],
                  id: "zxe7Z0jUTyLpAPmW_vodp",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#000000",
                    "padding-bottom": "13px",
                    align: "left",
                    "font-weight": "bold",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "CTA →",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "QsTKP1LxQM2wgzGtPjoUd",
                    },
                  ],
                  id: "eiqU8fU4t9Epyj_xi2_6d",
                },
              ],
              id: "_n-62kS86YRL31Pzw4cBQ",
            },
          ],
          id: "Y2xFbchWVJNysL2DHtzQK",
        },
      ],
      id: "p4axv-Xr-E4NsVyKuaP9h",
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/kc1-edyvmhciy16ztroey_yxd8k-kiutfxgtfdoytjb.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "background-repeat": "no-repeat",
      },
      children: [
        {
          type: "standard-section",
          attributes: {
            "padding-left": "20px",
            "padding-right": "20px",
            "padding-top": "10px",
            "padding-bottom": "10px",
          },
          data: {},
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "250px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/7fcqho6vkzxlajedpr5cv_image.png",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "SIVEN9ukPOfcytJ0WVIZ4",
                },
              ],
              id: "ws6KsxgvkfF6LZli9DaN7",
            },
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "26px",
                  },
                  children: [
                    {
                      text: "Lorem ipsum",
                    },
                  ],
                  id: "wSr7c51NxtiI-sPhUoT2Y",
                },
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "125px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/srccg8tygd7-jtdmpgmtn_image.png",
                    "padding-top": "20px",
                    "padding-bottom": "20px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "0odZ6X8A-04yhG9VeJ1Lj",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#505457",
                    "padding-bottom": "13px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Sed do eiusmod ",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "mLAVRSD9Wezl_IkPMaLB_",
                    },
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "tempor",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "HdCf6NnCAGZgq3q-JUw9m",
                    },
                  ],
                  id: "9pseIS_VfR-EEd7yPCT2f",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#EF3E5D",
                    "border-radius": "50px",
                    "inner-padding-top": "12px",
                    "inner-padding-bottom": "12px",
                    "inner-padding-left": "30px",
                    "inner-padding-right": "30px",
                  },
                  children: [
                    {
                      text: "ADD YOUR CTA",
                    },
                  ],
                  id: "MDnlK6nJ3UKPUe7n0XXIm",
                },
              ],
              id: "cjL5PraPKuQPd3aJuG06w",
            },
          ],
          id: "EaXopmeehKg-Tia0s8smg",
        },
        {
          type: "standard-section",
          attributes: {
            "padding-left": "20px",
            "padding-right": "20px",
            direction: "rtl",
            "padding-top": "10px",
            "padding-bottom": "10px",
          },
          data: {},
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "500px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/oirqvlh8ziincxw8meokb_image.png",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "hDzTFZ_u4GT4O882qZlFj",
                },
              ],
              id: "hiYgR_RzFcBhzRqi6NFIt",
            },
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "26px",
                  },
                  children: [
                    {
                      text: "Lorem ipsum",
                    },
                  ],
                  id: "Z8Zf9DD6yktKS0NMBBPqP",
                },
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "125px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/srccg8tygd7-jtdmpgmtn_image.png",
                    "padding-top": "20px",
                    "padding-bottom": "20px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "ZqrPyskohA1sKiCu_N-ct",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#505457",
                    "padding-bottom": "13px",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Sed do eiusmod ",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "jyEhodXf4IZ8k85td9452",
                    },
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "tempor",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "aeVeJG0Yj6kpB_aaDZbWV",
                    },
                  ],
                  id: "4LFGedX2zYDunDAz3muLd",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#EF3E5D",
                    "border-radius": "50px",
                    "inner-padding-top": "12px",
                    "inner-padding-bottom": "12px",
                    "inner-padding-left": "30px",
                    "inner-padding-right": "30px",
                  },
                  children: [
                    {
                      text: "ADD YOUR CTA",
                    },
                  ],
                  id: "KaMMyMrzb5Kl8F3KhaIfH",
                },
              ],
              id: "7b3GSCZCV332gdgzas82O",
            },
          ],
          id: "MhW-rjs-7exWOHYfbI1Vo",
        },
      ],
      id: "p4axv-Xr-E4NsVyKuaP9h",
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/jgqa2wo3nvzjfsh7trcvm_sarkqmbcn3ti-suksplhz.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "background-repeat": "no-repeat",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-bottom": "10px",
            "padding-top": "10px",
          },
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "100%",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "28px",
                  },
                  children: [
                    {
                      text: "Curated Just For You",
                    },
                  ],
                  id: "b2oQa4mIWTdb1fOa7hubb",
                },
              ],
              id: "s_HnYjkM3XMLbT5_P69VC",
            },
          ],
          id: "anleX-9t_IxFnpFVRjx0k",
        },
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-left": "10px",
            "padding-right": "10px",
            "padding-top": "0px",
            "padding-bottom": "0px",
          },
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "520px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/4arnqazgxjwhirlqknc5g_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "0px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "9WC9ghwIQ7KdOh2f3Vl69",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "16px",
                    "font-family": "sans-serif",
                  },
                  children: [
                    {
                      text: "Stiletto Heels",
                    },
                  ],
                  id: "je4euXVc90rPlKWObidlJ",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                    color: "#272727",
                    "font-weight": "300",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Price -£70.00",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "TPy0I9dcteo7SAkMGbgjn",
                    },
                  ],
                  id: "gAqVorNwxIXU-YVtAFMsj",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#000",
                    "border-radius": "6px",
                  },
                  children: [
                    {
                      text: "Explore Now",
                    },
                  ],
                  id: "5bzYRuAZpSs0k76HRx7Dk",
                },
              ],
              id: "bUoBMlnyjqdR6RH7GSMUD",
            },
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "520px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/o9klbg86vh_tbmo3jd792_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "0px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "9WC9ghwIQ7KdOh2f3Vl69",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-family": "sans-serif",
                  },
                  children: [
                    {
                      text: "Crystal Pendant",
                    },
                  ],
                  id: "je4euXVc90rPlKWObidlJ",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                    color: "#272727",
                    "font-weight": "300",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "Price -£30.00",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "lo5eZQ8jXM7iZoN8p-ije",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "_07BGtbWWicI7BjBEE2Dz",
                    },
                  ],
                  id: "jKEYxv3rjFxHTfETrzmFp",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#000",
                    "border-radius": "6px",
                  },
                  children: [
                    {
                      text: "Check It Out",
                    },
                  ],
                  id: "rEayEey3Oddcs--RiCtc9",
                },
              ],
              id: "bUoBMlnyjqdR6RH7GSMUD",
            },
          ],
          id: "_LOMrWcvPEUH47wbP0Dlb",
        },
      ],
      id: "WOQXpmbiqDb8NHdPaiWD3",
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/q2ehozenhelsw7purllwo_mocsgln4neir2bahhyr-3.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "background-repeat": "no-repeat",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-left": "10px",
            "padding-right": "10px",
            "padding-top": "0px",
            "padding-bottom": "0px",
          },
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "552px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/0iru-qzgepkkmate2c35y_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "15px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "9WC9ghwIQ7KdOh2f3Vl69",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                    "font-family": "sans-serif",
                    "font-weight": "bold",
                  },
                  children: [
                    {
                      text: "Hydra Luxe Cream",
                    },
                  ],
                  id: "je4euXVc90rPlKWObidlJ",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                    color: "#272727",
                    "font-weight": "300",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Intensive 24-hour hydration.",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "TPy0I9dcteo7SAkMGbgjn",
                    },
                  ],
                  id: "gAqVorNwxIXU-YVtAFMsj",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#000",
                    "border-radius": "6px",
                  },
                  children: [
                    {
                      text: "Learn More",
                    },
                  ],
                  id: "5bzYRuAZpSs0k76HRx7Dk",
                },
              ],
              id: "bUoBMlnyjqdR6RH7GSMUD",
            },
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "552px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/n9g4yhl3en9d8rjked18n_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "15px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "9WC9ghwIQ7KdOh2f3Vl69",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-family": "sans-serif",
                    "font-weight": "bold",
                  },
                  children: [
                    {
                      text: "Bali (Ubud)",
                    },
                  ],
                  id: "je4euXVc90rPlKWObidlJ",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                    color: "#272727",
                    "font-weight": "300",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "Silky hydration with a luminous finish.",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "lo5eZQ8jXM7iZoN8p-ije",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "_07BGtbWWicI7BjBEE2Dz",
                    },
                  ],
                  id: "jKEYxv3rjFxHTfETrzmFp",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#000",
                    "border-radius": "6px",
                  },
                  children: [
                    {
                      text: "Learn More",
                    },
                  ],
                  id: "rEayEey3Oddcs--RiCtc9",
                },
              ],
              id: "bUoBMlnyjqdR6RH7GSMUD",
            },
          ],
          id: "_LOMrWcvPEUH47wbP0Dlb",
        },
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-left": "10px",
            "padding-right": "10px",
            "padding-top": "0px",
            "padding-bottom": "0px",
          },
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "552px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/x8kzrbxbvzts3g4kbijzh_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "15px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "5loxJyLirmqJ_D7jQZCP7",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                    "font-family": "sans-serif",
                    "font-weight": "bold",
                  },
                  children: [
                    {
                      text: "Aqua Mist Toner",
                    },
                  ],
                  id: "N6GaimGP3mMOKHuluISQB",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                    color: "#272727",
                    "font-weight": "300",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Instantly refreshes and balances.",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "ghJMElAjhjwaOsHV2q7KO",
                    },
                  ],
                  id: "AAncuGAe3aFvDNt_oZrgr",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#000",
                    "border-radius": "6px",
                  },
                  children: [
                    {
                      text: "Learn More",
                    },
                  ],
                  id: "aHR-aCPIKOrDXzAkTEnYa",
                },
              ],
              id: "4BouZ775VBab_RGUf9CW1",
            },
            {
              type: "standard-column",
              attributes: {
                width: "50%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "552px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/mdplgzh6h_kx3w-t2ar7a_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "15px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "taPl3hvEPLqKfCVRsmOeC",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-family": "sans-serif",
                    "font-weight": "bold",
                  },
                  children: [
                    {
                      text: "Nourishing Face Serum",
                    },
                  ],
                  id: "EaSZ1rNc-xWteKYEaGej0",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                    color: "#272727",
                    "font-weight": "300",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "Complete care for a radiant complexion",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "yJvw1faKfRrLJfAL-eUoY",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "hhK06om5j5Wjdkc31dpNf",
                    },
                  ],
                  id: "NiCA2btIIXpvM6dmXvdHH",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#000",
                    "border-radius": "6px",
                  },
                  children: [
                    {
                      text: "Learn More",
                    },
                  ],
                  id: "LQeqMXJ-2gUEj69s5bCMT",
                },
              ],
              id: "spBDtpGkPb33zRPU3L4Kx",
            },
          ],
          id: "m7_9Q2_dHWUL7448KNzIw",
        },
      ],
      id: "WOQXpmbiqDb8NHdPaiWD3",
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/yg7h2mq8i2xgmzd1wxg66_esjq2ni97z8n776usbay.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "background-repeat": "no-repeat",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-left": "10px",
            "padding-right": "10px",
            "padding-top": "0px",
            "padding-bottom": "0px",
          },
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "336px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/chiyrhlsh7ydrrl5r9wj_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "15px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "9WC9ghwIQ7KdOh2f3Vl69",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                  },
                  children: [
                    {
                      text: "Bora Bora (French Polynesia)",
                    },
                  ],
                  id: "je4euXVc90rPlKWObidlJ",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                    color: "#272727",
                    "font-weight": "300",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Original Price: $180",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "J_NnHBvZ-KnvfocSFJZrj",
                    },
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "Discounted Price: $108",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "O6EW4ErW69yQdV33eQtM3",
                    },
                    {
                      type: "html-block-node",
                      children: [
                        {
                          text: "per night",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "TPy0I9dcteo7SAkMGbgjn",
                    },
                  ],
                  id: "gAqVorNwxIXU-YVtAFMsj",
                },
              ],
              id: "bUoBMlnyjqdR6RH7GSMUD",
            },
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "336px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/2u7ohicoztqngvqeazajg_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "15px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "9WC9ghwIQ7KdOh2f3Vl69",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                  },
                  children: [
                    {
                      text: "Bali (Ubud)",
                    },
                  ],
                  id: "je4euXVc90rPlKWObidlJ",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                    color: "#272727",
                    "font-weight": "300",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "Original Price: $100",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "na50maxaSogKEjzHHxoKa",
                        },
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "Discounted Price: $80",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "DkVmvYvTGbGUIGXL5pQMs",
                        },
                        {
                          type: "html-block-node",
                          children: [
                            {
                              text: "per night",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "lo5eZQ8jXM7iZoN8p-ije",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "_07BGtbWWicI7BjBEE2Dz",
                    },
                  ],
                  id: "jKEYxv3rjFxHTfETrzmFp",
                },
              ],
              id: "bUoBMlnyjqdR6RH7GSMUD",
            },
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "336px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/ewsxanq594iagrq7snwdp_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "15px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "9WC9ghwIQ7KdOh2f3Vl69",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                  },
                  children: [
                    {
                      text: "Marrakech (Morocco)",
                    },
                  ],
                  id: "je4euXVc90rPlKWObidlJ",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "font-size": "14px",
                    color: "#272727",
                    "font-weight": "300",
                  },
                  children: [
                    {
                      type: "html-block-node",
                      children: [
                        {
                          type: "html-block-node",
                          children: [
                            {
                              type: "html-block-node",
                              children: [
                                {
                                  text: "Original Price: $90",
                                },
                              ],
                              attributes: {},
                              data: {
                                tagName: "div",
                              },
                              id: "2WkSof9iQoQCDRkAhRFyr",
                            },
                            {
                              type: "html-block-node",
                              children: [
                                {
                                  text: "Discounted Price: $49.50 ",
                                },
                              ],
                              attributes: {},
                              data: {
                                tagName: "div",
                              },
                              id: "L-VeBUmZqhh8BaqW9rDFY",
                            },
                            {
                              type: "html-block-node",
                              children: [
                                {
                                  text: "per night",
                                },
                              ],
                              attributes: {},
                              data: {
                                tagName: "div",
                              },
                              id: "QR-AO0h7RLOUHSqVQbKrC",
                            },
                          ],
                          attributes: {},
                          data: {
                            tagName: "div",
                          },
                          id: "RbxtbZLxqo6OKONF7G1KU",
                        },
                      ],
                      attributes: {},
                      data: {
                        tagName: "div",
                      },
                      id: "lCtNrm-1QY0aJshRq0nyO",
                    },
                  ],
                  id: "DhAUtpAsUu3aoUP8Ct5tt",
                },
              ],
              id: "bUoBMlnyjqdR6RH7GSMUD",
            },
          ],
          id: "_LOMrWcvPEUH47wbP0Dlb",
        },
      ],
      id: "WOQXpmbiqDb8NHdPaiWD3",
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/jgickosuu1bk6vn0ujzfq_iohoryfmhgasob26ybk3g.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "background-repeat": "no-repeat",
      },
      children: [
        {
          type: "standard-section",
          attributes: {
            "padding-top": "0px",
            "padding-bottom": "10px",
          },
          data: {},
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "100%",
              },
              data: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "28px",
                  },
                  children: [
                    {
                      text: "Experience our sushi bar",
                    },
                  ],
                  id: "cwJRvnF5ySYdYIx6lulz_",
                },
              ],
              id: "jtJQtZSwZTpq6vBCMoSgM",
            },
          ],
          id: "OA38ucIsRLj3g5CEBFrZL",
        },
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-left": "10px",
            "padding-right": "10px",
            "padding-top": "0px",
            "padding-bottom": "0px",
          },
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "358px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/o2yecd12lvmns9cmd2fpv_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "15px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "9WC9ghwIQ7KdOh2f3Vl69",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                  },
                  children: [
                    {
                      text: "Stylish Winter Coat",
                    },
                  ],
                  id: "je4euXVc90rPlKWObidlJ",
                },
              ],
              id: "bUoBMlnyjqdR6RH7GSMUD",
            },
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "358px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/lovayysjndgnk41fvnlvz_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "15px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "9WC9ghwIQ7KdOh2f3Vl69",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                  },
                  children: [
                    {
                      text: "Elegant Work Shirt",
                    },
                  ],
                  id: "je4euXVc90rPlKWObidlJ",
                },
              ],
              id: "bUoBMlnyjqdR6RH7GSMUD",
            },
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    width: "358px",
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/cb0bcwc9k23ntcvujia7n_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "15px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "9WC9ghwIQ7KdOh2f3Vl69",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "padding-left": "0px",
                    "padding-right": "0px",
                  },
                  children: [
                    {
                      text: "Summer Floral Dress",
                    },
                  ],
                  id: "je4euXVc90rPlKWObidlJ",
                },
              ],
              id: "bUoBMlnyjqdR6RH7GSMUD",
            },
          ],
          id: "_LOMrWcvPEUH47wbP0Dlb",
        },
      ],
      id: "WOQXpmbiqDb8NHdPaiWD3",
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/sgfciiyisei0hp3zt5ysc_gedvo9t6mv6ly_o1flqo8.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "background-repeat": "no-repeat",
        "padding-top": "0px",
        "padding-bottom": "0px",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {
            "padding-left": "10px",
            "padding-right": "10px",
          },
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/gignpafskg7ivhgjga1pw_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "2bpwQ3i1TxhPRhJqeDgCk",
                  mobileAttributes: {
                    "fluid-on-mobile": "true",
                  },
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {},
                  children: [
                    {
                      text: "PRODUCT NAME",
                    },
                  ],
                  id: "wYRM1bvcfA3HP3Tb3FQd-",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#3E3E3E",
                  },
                  children: [
                    {
                      text: "$20",
                    },
                  ],
                  id: "muCnxqohRvh7-MgOQ7TVl",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#000",
                    "border-radius": "20px",
                  },
                  children: [
                    {
                      text: "Shop Now",
                    },
                  ],
                  id: "YAAg1xbnNtSTOP5aV2SQJ",
                },
              ],
              id: "cjlagk5KFHXdNzfHiu8XI",
            },
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/g0hacehi8ehjb0_edbrjl_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "2bpwQ3i1TxhPRhJqeDgCk",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {},
                  children: [
                    {
                      text: "PRODUCT NAME",
                    },
                  ],
                  id: "wYRM1bvcfA3HP3Tb3FQd-",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#3E3E3E",
                  },
                  children: [
                    {
                      text: "$30",
                    },
                  ],
                  id: "muCnxqohRvh7-MgOQ7TVl",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#000",
                    "border-radius": "20px",
                  },
                  children: [
                    {
                      text: "Shop Now",
                    },
                  ],
                  id: "E3ejmEqvOS-9C7aYHK2Dd",
                },
              ],
              id: "cjlagk5KFHXdNzfHiu8XI",
            },
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/qraudenajaqhydf3fn5gk_image.png",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "fluid-on-mobile": "true",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "2bpwQ3i1TxhPRhJqeDgCk",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {},
                  children: [
                    {
                      text: "PRODUCT NAME",
                    },
                  ],
                  id: "wYRM1bvcfA3HP3Tb3FQd-",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#3E3E3E",
                  },
                  children: [
                    {
                      text: "$50",
                    },
                  ],
                  id: "muCnxqohRvh7-MgOQ7TVl",
                },
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#000",
                    "border-radius": "20px",
                  },
                  children: [
                    {
                      text: "Shop Now",
                    },
                  ],
                  id: "muhzZ7oc4utiOnBSoqtVq",
                },
              ],
              id: "cjlagk5KFHXdNzfHiu8XI",
            },
          ],
          id: "YBVZtnJ0CDOEhkViK9bL3",
        },
      ],
      id: "AVuZMj3pVLCsPcU5v_0o9",
    },
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/naodbl39pqms1jfolfetc_ruqb7wgaxfj16pevmsei0.png",
    payload: {
      type: "standard-wrapper",
      data: {},
      attributes: {
        "background-repeat": "no-repeat",
        "background-color": "#EFEFEF",
        "padding-top": "0px",
        "padding-bottom": "0px",
      },
      children: [
        {
          type: "standard-section",
          data: {},
          attributes: {},
          children: [
            {
              type: "standard-column",
              data: {},
              attributes: {},
              children: [
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    "font-size": "32px",
                  },
                  children: [
                    {
                      text: "Spotted something of interest?",
                    },
                  ],
                  id: "qKKKqpTjDzO7WLJ-pr5Li",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#3E3E3E",
                    "font-weight": "300",
                    "padding-left": "30px",
                    "padding-right": "30px",
                  },
                  children: [
                    {
                      text: "We saw you browsing our collection earlier. Need assistance or more details? Browse our website, visit us, or call",
                    },
                  ],
                  id: "fLzI28UuqyxBSbQ2yRS9P",
                },
              ],
              id: "aL2iHNumnEfmwd0GVJlLD",
            },
          ],
          id: "5-PXhcCoR7-2Ix7qGbnmb",
        },
        {
          type: "standard-section",
          data: {},
          attributes: {},
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/trgumud-ey7drx6zlmmcx_image.png",
                    width: "347px",
                    "border-radius": "999px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "2bpwQ3i1TxhPRhJqeDgCk",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {},
                  children: [
                    {
                      text: "Orange Sweater",
                    },
                  ],
                  id: "wYRM1bvcfA3HP3Tb3FQd-",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#3E3E3E",
                  },
                  children: [
                    {
                      text: "$20",
                    },
                  ],
                  id: "muCnxqohRvh7-MgOQ7TVl",
                },
              ],
              id: "cjlagk5KFHXdNzfHiu8XI",
            },
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/ewm4qa1bsdof3j3kdtjrq_image.png",
                    width: "347px",
                    "border-radius": "999px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "2bpwQ3i1TxhPRhJqeDgCk",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {},
                  children: [
                    {
                      text: "Orange Sweater",
                    },
                  ],
                  id: "wYRM1bvcfA3HP3Tb3FQd-",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#3E3E3E",
                  },
                  children: [
                    {
                      text: "$30",
                    },
                  ],
                  id: "muCnxqohRvh7-MgOQ7TVl",
                },
              ],
              id: "cjlagk5KFHXdNzfHiu8XI",
            },
            {
              type: "standard-column",
              attributes: {
                width: "33.33%",
              },
              data: {},
              children: [
                {
                  type: "standard-image",
                  data: {},
                  attributes: {
                    src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/3woostbru3adozviwv8qk_image.png",
                    width: "347px",
                    "border-radius": "999px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
                  id: "2bpwQ3i1TxhPRhJqeDgCk",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {},
                  children: [
                    {
                      text: "Green Dress",
                    },
                  ],
                  id: "wYRM1bvcfA3HP3Tb3FQd-",
                },
                {
                  type: "standard-paragraph",
                  data: {},
                  attributes: {
                    color: "#3E3E3E",
                  },
                  children: [
                    {
                      text: "$50",
                    },
                  ],
                  id: "muCnxqohRvh7-MgOQ7TVl",
                },
              ],
              id: "cjlagk5KFHXdNzfHiu8XI",
            },
          ],
          id: "YBVZtnJ0CDOEhkViK9bL3",
        },
        {
          type: "standard-section",
          attributes: {
            "background-color": "#FFFFFF",
          },
          data: {},
          children: [
            {
              type: "standard-column",
              attributes: {
                width: "100%",
              },
              data: {},
              children: [
                {
                  type: "standard-button",
                  data: {
                    content: "Button",
                  },
                  attributes: {
                    "background-color": "#000000",
                    "border-radius": "6px",
                  },
                  children: [
                    {
                      text: "Shop Now",
                    },
                  ],
                  id: "cXYD_arX4FofgxJS5Kfh_",
                },
              ],
              id: "Psju8limkrkjvAYKKhwms",
            },
          ],
          id: "PYlLfW31uHENtuKYq3Zrl",
        },
      ],
      id: "AVuZMj3pVLCsPcU5v_0o9",
    },
  },
];

export const ProductCard = () => {
  const [expandedCodes, setExpandedCodes] = useState<Record<number, boolean>>(
    {}
  );

  const getDiscountCode = (item: Element) => {
    return JSON.stringify(item, null, 2);
  };

  const toggleCode = (index: number) => {
    setExpandedCodes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Title heading={2}>Product Card</Title>
        <Paragraph style={{ marginBottom: 0 }}>
          Customizable product card components for email campaigns. Each product
          card includes a thumbnail, title, description, price, and button.
        </Paragraph>
      </div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {productCardList.map((item, index) => {
          const blockDefinition =
            BlockManager.getBlockByType("standard-wrapper");
          const element = blockDefinition?.create(item.payload);

          return (
            <Card
              key={index}
              style={{
                background: "var(--color-bg-2)",
              }}
            >
              <div
                style={{
                  padding: "32px 16px",
                  background: "var(--color-bg-1)",
                  borderRadius: "4px",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: 600,
                    margin: "0 auto",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.thumbnail}
                    style={{
                      width: "100%",
                      cursor: "pointer", // Add cursor pointer to indicate clickable
                    }}
                    onClick={() => {
                      localStorage.setItem(
                        "preview_block_json",
                        getDiscountCode(element!)
                      );
                      window.open("/template?block_preview=true");
                    }}
                  />
                </div>
              </div>

              <div>
                <Row
                  justify="space-between"
                  align="center"
                  style={{ marginBottom: expandedCodes[index] ? 12 : 0 }}
                >
                  <Col>
                    <Space>
                      <Button
                        type="text"
                        size="small"
                        onClick={() => toggleCode(index)}
                        style={{ padding: 0 }}
                        icon={expandedCodes[index] ? <IconUp /> : <IconDown />}
                      >
                        {expandedCodes[index] ? "Hide Code" : "Show Code"}
                      </Button>
                      <Button
                        type="text"
                        size="small"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            getDiscountCode(element!)
                          );
                          Message.success("Code copied to clipboard");
                        }}
                      >
                        Copy Code
                      </Button>
                      <Button
                        type="text"
                        size="small"
                        onClick={() => {
                          localStorage.setItem(
                            "preview_block_json",
                            getDiscountCode(element!)
                          );
                          window.open("/template?block_preview=true");
                        }}
                      >
                        Preview
                      </Button>
                    </Space>
                  </Col>
                </Row>
                {expandedCodes[index] && (
                  <div style={{ marginTop: 16 }}>
                    <SyntaxHighlighter
                      language="json"
                      style={vscDarkPlus}
                      customStyle={{
                        margin: 0,
                        borderRadius: 4,
                        fontSize: "13px",
                        maxHeight: 300,
                      }}
                    >
                      {getDiscountCode(element!)}
                    </SyntaxHighlighter>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </Space>
    </>
  );
};
