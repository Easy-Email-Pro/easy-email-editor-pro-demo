import { StandardSectionElement } from "easy-email-pro-core";
import { PrebuiltBlock } from "easy-email-pro-theme";

export const newsletterBlocks: PrebuiltBlock[] = [

  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/e6a81c1bae864feebc0ed04de91d9673_block_75022c69d60e48818d1665766e8531e4.png",
    title: "Newsletter Dark",
    category: "Newsletter Signup",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#2C3E50",
        "padding-top": "50px",
        "padding-bottom": "50px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "100%",
          },
          children: [
            {
              type: "standard-h2",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "28px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Stay in the Loop",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#BDC3C7",
                "font-size": "16px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Get weekly tips, exclusive content, and special offers delivered to your inbox",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Subscribe Now",
              },
              attributes: {
                align: "center",
                "background-color": "#3498DB",
                color: "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "14px",
                "padding-bottom": "14px",
                "padding-left": "35px",
                "padding-right": "35px",
                "font-size": "16px",
                "font-weight": "bold",
                "inner-padding-top": "14px",
                "inner-padding-bottom": "14px",
                "inner-padding-left": "35px",
                "inner-padding-right": "35px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Subscribe Now",
                },
              ],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/f08705e11a3044e59fc371afdf375af6_block_0b5980f237514be0b386d880998d2dbd.png",
    title: "Newsletter Bordered",
    category: "Newsletter Signup",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "40px",
        "padding-bottom": "40px",
        "padding-left": "20px",
        "padding-right": "20px",
        "border-width": "2px",
        "border-style": "solid",
        "border-color": "#E8E8E8",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "100%",
          },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#E67E22",
                "font-size": "12px",
                "font-weight": "bold",
                "text-transform": "uppercase",
                "letter-spacing": "1px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Newsletter",
                },
              ],
            },
            {
              type: "standard-h2",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "26px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Join Our Community",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C9D",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Be the first to know about new products and exclusive deals",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Sign Up Free",
              },
              attributes: {
                align: "center",
                "background-color": "#E67E22",
                color: "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "13px",
                "padding-bottom": "13px",
                "padding-left": "32px",
                "padding-right": "32px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "13px",
                "inner-padding-bottom": "13px",
                "inner-padding-left": "32px",
                "inner-padding-right": "32px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Sign Up Free",
                },
              ],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/zc3puunjthmdslyxgrjas_dkaiqn-1bf4uuq5r_fxom.png",
    title: "Newsletter Two Column",
    category: "Newsletter Signup",
    payload:{
      "type": "standard-section",
      "data": {},
      "attributes": {
        "background-color": "#ECF0F1",
        "padding-top": "45px",
        "padding-bottom": "45px",
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "children": [
        {
          "type": "standard-column",
          "data": {},
          "attributes": {
            "width": "60%",
            "vertical-align": "middle"
          },
          "children": [
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#2C3E50",
                "font-size": "24px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "Never Miss an Update"
                }
              ],
              "id": "GHhbya_r4z5qRxVrYMyGl"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "left",
                "color": "#7F8C8D",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "Subscribe to receive our latest news and offers"
                }
              ],
              "id": "B-MBdGSgsQ3M48kLasgY2"
            }
          ],
          "id": "s7ZM6iL4wgxaU5K9Li2wL"
        },
        {
          "type": "standard-column",
          "data": {},
          "attributes": {
            "width": "40%",
            "vertical-align": "middle"
          },
          "children": [
            {
              "type": "standard-button",
              "data": {
                "content": "Subscribe"
              },
              "attributes": {
                "align": "center",
                "background-color": "#27AE60",
                "color": "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "14px",
                "padding-bottom": "14px",
                "padding-left": "30px",
                "padding-right": "30px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "14px",
                "inner-padding-bottom": "14px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%"
              },
              "children": [
                {
                  "text": "Subscribe"
                }
              ],
              "id": "HbM0gqLSJLiaeRazv2sX9"
            }
          ],
          "id": "Gt43tEPsG_3nH35psXD8Y"
        }
      ],
      "id": "tSFkbLr8OBNR_VJijhgtR"
    } as StandardSectionElement,
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/49fb244ce22640d2be22a93a5e2737ae_block_dec7ff21337b4e58a0f969078ee2ce1b.png",
    title: "Newsletter with Discount",
    category: "Newsletter Signup",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#9B59B6",
        "padding-top": "55px",
        "padding-bottom": "55px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "100%",
          },
          children: [
            {
              type: "standard-h1",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "32px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Get 20% Off Your First Order",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "16px",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Subscribe to our newsletter and save 20% on your first purchase",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Claim Discount",
              },
              attributes: {
                align: "center",
                "background-color": "#FFFFFF",
                color: "#9B59B6",
                "border-radius": "6px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "padding-left": "38px",
                "padding-right": "38px",
                "font-size": "16px",
                "font-weight": "bold",
                "inner-padding-top": "16px",
                "inner-padding-bottom": "16px",
                "inner-padding-left": "38px",
                "inner-padding-right": "38px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Claim Discount",
                },
              ],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/9d02f6655f7d42fa872fca95dfc65ab9_block_a0207e58555f4676963393d89bd1dc93.png",
    title: "Newsletter with Features",
    category: "Newsletter Signup",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#34495E",
        "padding-top": "50px",
        "padding-bottom": "50px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "100%",
          },
          children: [
            {
              type: "standard-h2",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "26px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Join 50,000+ Subscribers",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Weekly tips and insights",
                },
                {
                  text: "  •  ",
                },
                {
                  text: "✓ Exclusive content",
                },
                {
                  text: "  •  ",
                },
                {
                  text: "✓ Special offers",
                },
              ],
            },
            {
              type: "standard-divider",
              data: {},
              attributes: {
                "border-color": "#7F8C8D",
                "border-width": "1px",
                "border-style": "solid",
                width: "200px",
                align: "center",
                "padding-top": "15px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Subscribe Today",
              },
              attributes: {
                align: "center",
                "background-color": "#E74C3C",
                color: "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "14px",
                "padding-bottom": "14px",
                "padding-left": "35px",
                "padding-right": "35px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "14px",
                "inner-padding-bottom": "14px",
                "inner-padding-left": "35px",
                "inner-padding-right": "35px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Subscribe Today",
                },
              ],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/f05f9f7185da47e2a8d151972f8f509d_block_0e275f69bc3744dc8642479422c84019.png",
    title: "Newsletter with Testimonial",
    category: "Newsletter Signup",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#1ABC9C",
        "padding-top": "50px",
        "padding-bottom": "50px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "100%",
          },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "18px",
                "font-style": "italic",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: '"The best newsletter I subscribe to!"',
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "13px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "— Over 10,000 satisfied readers",
                },
              ],
            },
            {
              type: "standard-h2",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "28px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Subscribe to Our Newsletter",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Join Now",
              },
              attributes: {
                align: "center",
                "background-color": "#FFFFFF",
                color: "#1ABC9C",
                "border-radius": "6px",
                "padding-top": "14px",
                "padding-bottom": "14px",
                "padding-left": "35px",
                "padding-right": "35px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "14px",
                "inner-padding-bottom": "14px",
                "inner-padding-left": "35px",
                "inner-padding-right": "35px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Join Now",
                },
              ],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/2f6bfcd35a944b16b939a4da7402fa04_block_5f270e57b3734e45b165b07ffc6a6b9a.png",
    title: "Newsletter with Icon",
    category: "Newsletter Signup",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F8F9FA",
        "padding-top": "40px",
        "padding-bottom": "40px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "100%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "22px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "📧 Newsletter Signup",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Get curated content delivered straight to your inbox every week",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Subscribe",
              },
              attributes: {
                align: "center",
                "background-color": "#3498DB",
                color: "#FFFFFF",
                "border-radius": "50px",
                "padding-top": "14px",
                "padding-bottom": "14px",
                "padding-left": "40px",
                "padding-right": "40px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "14px",
                "inner-padding-bottom": "14px",
                "inner-padding-left": "40px",
                "inner-padding-right": "40px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Subscribe →",
                },
              ],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/i2vrsscybuyjzxlzqiwxr_z2f_pbvrskjfv_lcyg-yy.png",
    title: "Newsletter Right Aligned",
    category: "Newsletter Signup",
    payload: {
      "type": "standard-section",
      "data": {},
      "attributes": {
        "background-color": "#FFFFFF",
        "padding-top": "35px",
        "padding-bottom": "35px",
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "children": [
        {
          "type": "standard-column",
          "data": {},
          "attributes": {
            "width": "50%",
            "vertical-align": "middle"
          },
          "children": [
            {
              "type": "standard-h3",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#2C3E50",
                "font-size": "20px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "Weekly Newsletter"
                }
              ],
              "id": "vMqR3zoBAz7ZKwz7IbRns"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#7F8C8D",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "Insights, tips, and exclusive content"
                }
              ],
              "id": "hTNnVDvUbE-O7z8DWI3QD"
            }
          ],
          "id": "yExXYvqv8297WfTki0vZZ"
        },
        {
          "type": "standard-column",
          "data": {},
          "attributes": {
            "width": "50%",
            "vertical-align": "middle"
          },
          "children": [
            {
              "type": "standard-button",
              "data": {
                "content": "Subscribe"
              },
              "attributes": {
                "align": "center",
                "background-color": "#E67E22",
                "color": "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "28px",
                "padding-right": "28px",
                "font-size": "14px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "28px",
                "inner-padding-right": "28px",
                "line-height": "130%"
              },
              "children": [
                {
                  "text": "Subscribe"
                }
              ],
              "id": "x7Rh6EYrZ4UFHHHhwqlZs"
            }
          ],
          "id": "bsW0GzkRg_kpVNcS0RyBa"
        }
      ],
      "id": "Odsn3dm9uLXu6Kd--JUpF"
    } as StandardSectionElement,
  },
];
