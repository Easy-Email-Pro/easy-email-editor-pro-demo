import { StandardSectionElement } from "easy-email-pro-core";
import { PrebuiltBlock } from "easy-email-pro-theme";

export const pricingBlocks: PrebuiltBlock[] = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/0d9501d0f60947ccb367a649b083030b_block_ec289ca8d7af4f4f99eeeb77db6c72f2.png",
    title: "Pricing Three Column",
    category: "Pricing",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
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
                color: "#2C3E50",
                "font-size": "32px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Choose Your Plan",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "16px",
                "padding-top": "0px",
                "padding-bottom": "40px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Select the perfect plan for your needs",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "24px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Basic",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#3498DB",
                "font-size": "36px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$9",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "per month",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 10 Projects",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 5GB Storage",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Email Support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Get Started",
              },
              attributes: {
                align: "center",
                "background-color": "#3498DB",
                color: "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "30px",
                "padding-right": "30px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Get Started",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "24px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Pro",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#27AE60",
                "font-size": "36px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$29",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "per month",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Unlimited Projects",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 50GB Storage",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Priority Support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Get Started",
              },
              attributes: {
                align: "center",
                "background-color": "#27AE60",
                color: "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "30px",
                "padding-right": "30px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Get Started",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "24px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Enterprise",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#9B59B6",
                "font-size": "36px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$99",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "per month",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Everything in Pro",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Custom Integrations",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Dedicated Support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Get Started",
              },
              attributes: {
                align: "center",
                "background-color": "#9B59B6",
                color: "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "30px",
                "padding-right": "30px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Get Started",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/5ebaf0d697da4729a7f3600dc92c4bd1_block_81b6b44043c84a829b04ff8556a39f6a.png",
    title: "Pricing Two Column",
    category: "Pricing",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F8F9FA",
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
                color: "#2C3E50",
                "font-size": "30px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "40px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Simple Pricing",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "50%",
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
                  text: "Monthly",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#3498DB",
                "font-size": "42px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$19",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Billed monthly",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ All features included",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Cancel anytime",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 24/7 Support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Start Free Trial",
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
                  text: "Start Free Trial",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "50%",
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
                  text: "Annual",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#27AE60",
                "font-size": "42px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$15",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Save 21% - Billed annually",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ All features included",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Cancel anytime",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 24/7 Support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Start Free Trial",
              },
              attributes: {
                align: "center",
                "background-color": "#27AE60",
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
                  text: "Start Free Trial",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/vfgjmkyhy--jfq-cugpmt_mdlwxxy0f3colhhaa5ml9.png",
    title: "Pricing Dark",
    category: "Pricing",
    payload: {
      "type": "standard-section",
      "data": {},
      "attributes": {
        "background-color": "#2C3E50",
        "padding-top": "50px",
        "padding-bottom": "50px",
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "children": [
        {
          "type": "standard-column",
          "data": {},
          "attributes": {
            "width": "100%"
          },
          "children": [
            {
              "type": "standard-h2",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#FFFFFF",
                "font-size": "32px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "40px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "Pricing Plans"
                }
              ],
              "id": "xJqs2YIYMDiZU-YLX_OBi"
            }
          ],
          "id": "wf2v0tVgoXPMNWsYb7dKv"
        },
        {
          "type": "standard-column",
          "data": {},
          "attributes": {
            "width": "33.33%"
          },
          "children": [
            {
              "type": "standard-h3",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#FFFFFF",
                "font-size": "22px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "Starter"
                }
              ],
              "id": "SeGJqt17rEo-4LmQmiKcp"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#3498DB",
                "font-size": "38px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "$0"
                }
              ],
              "id": "S05wbuPA-wTjvnpKXp-cA"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "Free forever"
                }
              ],
              "id": "EVP3nJ8_2x0eU0tJSfwNQ"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "✓ Up to 3 projects"
                }
              ],
              "id": "RhUwaXwLk-Yh35B8ORroH"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "✓ Basic features"
                }
              ],
              "id": "OqHr14JzMP28teW_wcGcD"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "✓ Community support"
                }
              ],
              "id": "M8wo9bap0X6W_VWA-i-Ye"
            },
            {
              "type": "standard-button",
              "data": {
                "content": "Get Started"
              },
              "attributes": {
                "align": "center",
                "background-color": "#3498DB",
                "color": "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-right": "25px",
                "line-height": "130%"
              },
              "children": [
                {
                  "text": "Get Started"
                }
              ],
              "id": "ftc3cmw1VhoXTQGeRxcUf"
            }
          ],
          "id": "U08ANHIH7Zaggc4SimAg-"
        },
        {
          "type": "standard-column",
          "data": {},
          "attributes": {
            "width": "33.33%"
          },
          "children": [
            {
              "type": "standard-h3",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#FFFFFF",
                "font-size": "22px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "Professional"
                }
              ],
              "id": "v4tJ7SS6VmLx1kheEy3iY"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#27AE60",
                "font-size": "38px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "$49"
                }
              ],
              "id": "yOIiNUcd61NdYid83u22d"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "per month"
                }
              ],
              "id": "bf3peJQxjXG0zoD9bb-s-"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "✓ Unlimited projects"
                }
              ],
              "id": "vXqrbh9dlodQejr5FEv23"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "✓ Advanced features"
                }
              ],
              "id": "ZeQPVmOfSGq0Z4vnCPnPS"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "✓ Priority support"
                }
              ],
              "id": "kK0MQ8lhhTt71L7stMkbH"
            },
            {
              "type": "standard-button",
              "data": {
                "content": "Get Started"
              },
              "attributes": {
                "align": "center",
                "background-color": "#27AE60",
                "color": "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-right": "25px",
                "line-height": "130%",
                "width": "100%"
              },
              "children": [
                {
                  "text": "Get Started"
                }
              ],
              "id": "4sxZtsfH3Kfey-BCXTe_1"
            }
          ],
          "id": "twF1QOjKLCLCvSDpCRHwk"
        },
        {
          "type": "standard-column",
          "data": {},
          "attributes": {
            "width": "33.33%"
          },
          "children": [
            {
              "type": "standard-h3",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#FFFFFF",
                "font-size": "22px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "Enterprise"
                }
              ],
              "id": "70cYD3fg6dP3crcqN5myx"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#E67E22",
                "font-size": "38px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "Custom"
                }
              ],
              "id": "SKFCCg4YzeqHKd9xUtd4r"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "Contact us"
                }
              ],
              "id": "CJ8TfglcdV5tDps8EO5wX"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "✓ Everything in Pro"
                }
              ],
              "id": "gR7t4QiYezx4ZEfzYFEdC"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "✓ Custom solutions"
                }
              ],
              "id": "9PdgpmYlSDrdkd3PbXRQn"
            },
            {
              "type": "standard-paragraph",
              "data": {},
              "attributes": {
                "align": "center",
                "color": "#BDC3C7",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px"
              },
              "children": [
                {
                  "text": "✓ Dedicated  manager"
                }
              ],
              "id": "PRyKn60wahBkRqQImHZfA"
            },
            {
              "type": "standard-button",
              "data": {
                "content": "Contact Sales"
              },
              "attributes": {
                "align": "center",
                "background-color": "#E67E22",
                "color": "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "25px",
                "inner-padding-right": "25px",
                "line-height": "130%"
              },
              "children": [
                {
                  "text": "Contact Sales"
                }
              ],
              "id": "89Ra7S0Vv6CpxECN-tkPF"
            }
          ],
          "id": "TAmASnQ1gNdzGwGCRgVCG"
        }
      ],
      "id": "Hbuhlpqu_56pM2WkX9aNg"
    } as StandardSectionElement,
  },
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/df7119c9949b4da5a32962a430c72ce9_block_0c101830b51a4b54ace8ce9fed8459ba.png",
    title: "Pricing Premium",
    category: "Pricing",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#3498DB",
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
                "font-size": "32px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Start Free Today",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "16px",
                "padding-top": "0px",
                "padding-bottom": "35px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "No credit card required",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "20px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Free",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "40px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$0",
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
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Forever free",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Basic features",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 5 projects",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Community support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Get Started",
              },
              attributes: {
                align: "center",
                "background-color": "#FFFFFF",
                color: "#3498DB",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "30px",
                "padding-right": "30px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Get Started",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "20px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Pro",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "40px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$29",
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
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "per month",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ All features",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Unlimited projects",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Priority support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Get Started",
              },
              attributes: {
                align: "center",
                "background-color": "#FFFFFF",
                color: "#3498DB",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "30px",
                "padding-right": "30px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Get Started",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "20px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Enterprise",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "40px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Custom",
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
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Contact us",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Everything in Pro",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Custom solutions",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Dedicated support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Contact Sales",
              },
              attributes: {
                align: "center",
                "background-color": "#FFFFFF",
                color: "#3498DB",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "30px",
                "padding-right": "30px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Contact Sales",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/dc354f6e28894a92aff366755e231069_block_2563f2dcae624447bce47be46ccb02c1.png",
    title: "Pricing Flexible",
    category: "Pricing",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#ECF0F1",
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
                color: "#2C3E50",
                "font-size": "30px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "40px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Flexible Pricing",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "21px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Basic Plan",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#3498DB",
                "font-size": "34px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$15",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "13px",
                "padding-top": "0px",
                "padding-bottom": "22px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "per month",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 20 projects",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 10GB storage",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Basic support",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Mobile app access",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Start Now",
              },
              attributes: {
                align: "center",
                "background-color": "#3498DB",
                color: "#FFFFFF",
                "border-radius": "5px",
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
                "line-height": "130%",
              },
              children: [
                {
                  text: "Start Now",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "21px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Premium Plan",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#27AE60",
                "font-size": "34px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$45",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "13px",
                "padding-top": "0px",
                "padding-bottom": "22px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "per month",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Unlimited projects",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 100GB storage",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Priority support",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Advanced analytics",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Start Now",
              },
              attributes: {
                align: "center",
                "background-color": "#27AE60",
                color: "#FFFFFF",
                "border-radius": "5px",
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
                "line-height": "130%",
              },
              children: [
                {
                  text: "Start Now",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "21px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Business Plan",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#9B59B6",
                "font-size": "34px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$99",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "13px",
                "padding-top": "0px",
                "padding-bottom": "22px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "per month",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Everything in Premium",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Unlimited storage",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 24/7 phone support",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Custom integrations",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Start Now",
              },
              attributes: {
                align: "center",
                "background-color": "#9B59B6",
                color: "#FFFFFF",
                "border-radius": "5px",
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
                "line-height": "130%",
              },
              children: [
                {
                  text: "Start Now",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/35d6bf24982643a2be2f1fd89460ebb5_block_bcd1946ddf4c4ed5af181551138ec2fa.png",
    title: "Pricing with Dividers",
    category: "Pricing",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
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
                color: "#2C3E50",
                "font-size": "28px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "40px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Pick Your Plan",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "20px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Starter",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#3498DB",
                "font-size": "36px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "5px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$10",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "12px",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "/month",
                },
              ],
            },
            {
              type: "standard-divider",
              data: {},
              attributes: {
                "border-color": "#E8E8E8",
                "border-width": "1px",
                "border-style": "solid",
                width: "100%",
                align: "center",
                "padding-top": "0px",
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
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 5 projects",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 5GB storage",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Email support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Get Started",
              },
              attributes: {
                align: "center",
                "background-color": "#3498DB",
                color: "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "30px",
                "padding-right": "30px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Get Started",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "20px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Professional",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#27AE60",
                "font-size": "36px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "5px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$29",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "12px",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "/month",
                },
              ],
            },
            {
              type: "standard-divider",
              data: {},
              attributes: {
                "border-color": "#E8E8E8",
                "border-width": "1px",
                "border-style": "solid",
                width: "100%",
                align: "center",
                "padding-top": "0px",
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
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Unlimited projects",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 50GB storage",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Priority support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Get Started",
              },
              attributes: {
                align: "center",
                "background-color": "#27AE60",
                color: "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "30px",
                "padding-right": "30px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Get Started",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "33.33%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "20px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Enterprise",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#9B59B6",
                "font-size": "36px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "5px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$99",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#7F8C8D",
                "font-size": "12px",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "/month",
                },
              ],
            },
            {
              type: "standard-divider",
              data: {},
              attributes: {
                "border-color": "#E8E8E8",
                "border-width": "1px",
                "border-style": "solid",
                width: "100%",
                align: "center",
                "padding-top": "0px",
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
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Everything in Pro",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Unlimited storage",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#5D6D7E",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ 24/7 support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Get Started",
              },
              attributes: {
                align: "center",
                "background-color": "#9B59B6",
                color: "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "30px",
                "padding-right": "30px",
                "font-size": "15px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Get Started",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/5b6c462ee7734d988a26104f0bf36b79_block_cffed01c2f2d4f5da179ed65a728a954.png",
    title: "Pricing Special Offer",
    category: "Pricing",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#9B59B6",
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
                "font-size": "32px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Special Offer",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "18px",
                "padding-top": "0px",
                "padding-bottom": "35px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Get 50% off your first 3 months!",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "50%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "22px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Monthly",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "40px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$19",
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
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Regular: $38/month",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ All premium features",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Unlimited access",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Priority support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Claim Offer",
              },
              attributes: {
                align: "center",
                "background-color": "#FFFFFF",
                color: "#9B59B6",
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
                  text: "Claim Offer",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "50%",
          },
          children: [
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "22px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Annual",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#FFFFFF",
                "font-size": "40px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "$15",
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
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Save 60% - Regular: $38/month",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ All premium features",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Unlimited access",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ECF0F1",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Priority support",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Claim Offer",
              },
              attributes: {
                align: "center",
                "background-color": "#FFFFFF",
                color: "#9B59B6",
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
                  text: "Claim Offer",
                },
              ],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];
