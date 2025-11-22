import { StandardSectionElement } from "easy-email-pro-core";
import { PrebuiltBlock } from "easy-email-pro-theme";

export const faqBlocks: PrebuiltBlock[] = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/eae33f7194d74d669f88e99ea49ec6f1_block_68a80036a9e5434aa334f61a46afca5d.png",
    title: "FAQ Basic",
    category: "FAQ",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
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
              type: "standard-h2",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "28px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "30px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Frequently Asked Questions",
                },
              ],
            },
          ],
        },
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
                align: "left",
                color: "#2C3E50",
                "font-size": "18px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Q: How do I get started?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#7F8C8D",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "A: Simply sign up for a free account and follow our quick setup guide.",
                },
              ],
            },
          ],
        },
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
                align: "left",
                color: "#2C3E50",
                "font-size": "18px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Q: What payment methods do you accept?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#7F8C8D",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "A: We accept all major credit cards, PayPal, and bank transfers.",
                },
              ],
            },
          ],
        },
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
                align: "left",
                color: "#2C3E50",
                "font-size": "18px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Q: Can I cancel anytime?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#7F8C8D",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "A: Yes, you can cancel your subscription at any time with no penalties.",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/8cc54c357afa4ea59f016fef94deaf4f_block_19804bd143b74cd6be2988ac2354b484.png",
    title: "FAQ with Dividers",
    category: "FAQ",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F8F9FA",
        "padding-top": "45px",
        "padding-bottom": "45px",
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
                "padding-bottom": "35px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Common Questions",
                },
              ],
            },
          ],
        },
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
                align: "left",
                color: "#3498DB",
                "font-size": "20px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "What is your refund policy?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#5D6D7E",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "We offer a 30-day money-back guarantee on all plans.",
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
                "padding-bottom": "25px",
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
              type: "standard-h3",
              data: {},
              attributes: {
                align: "left",
                color: "#3498DB",
                "font-size": "20px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Do you offer customer support?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#5D6D7E",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Yes, we provide 24/7 customer support via email and live chat.",
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
                "padding-bottom": "25px",
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
              type: "standard-h3",
              data: {},
              attributes: {
                align: "left",
                color: "#3498DB",
                "font-size": "20px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "12px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Is there a free trial?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#5D6D7E",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Yes, we offer a 14-day free trial with full access to all features.",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/e5d815379db5435b9bd07f83e032af83_block_2bd82516d3364b458f7fa27e99be0d36.png",
    title: "FAQ Two Column",
    category: "FAQ",
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
                "font-size": "32px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "35px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Got Questions?",
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
                align: "left",
                color: "#3498DB",
                "font-size": "19px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "How does billing work?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#BDC3C7",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Billing occurs monthly or annually, depending on your plan.",
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
                align: "left",
                color: "#3498DB",
                "font-size": "19px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Can I upgrade my plan?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#BDC3C7",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Yes, you can upgrade or downgrade at any time from your account.",
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
                align: "left",
                color: "#3498DB",
                "font-size": "19px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "What features are included?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#BDC3C7",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "All plans include core features, with premium features on higher tiers.",
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
                align: "left",
                color: "#3498DB",
                "font-size": "19px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Is my data secure?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#BDC3C7",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Absolutely. We use industry-standard encryption to protect your data.",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/586269be46c8437280e750fc97706fe9_block_a5212a64c4d14d87a43d6d7a3d77ab8b.png",
    title: "FAQ Numbered",
    category: "FAQ",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "40px",
        "padding-bottom": "40px",
        "padding-left": "20px",
        "padding-right": "20px",
        "border-width": "1px",
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
              type: "standard-h2",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "26px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "30px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Need Help?",
                },
              ],
            },
          ],
        },
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
                align: "left",
                color: "#2C3E50",
                "font-size": "17px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "1. How do I create an account?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#7F8C8D",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "22px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: 'Click the "Sign Up" button and fill in your details.',
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#2C3E50",
                "font-size": "17px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "2. What if I forget my password?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#7F8C8D",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "22px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: 'Use the "Forgot Password" link on the login page to reset it.',
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#2C3E50",
                "font-size": "17px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "3. How can I contact support?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#7F8C8D",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Reach out via email at support@example.com or use our live chat.",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/554094b89de843d18652bfe22f4b8b24_block_f4bf8988b8f6428595bf6bd5a4afbf58.png",
    title: "FAQ with Icon",
    category: "FAQ",
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
                "padding-bottom": "15px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "❓ FAQ",
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
                "padding-bottom": "35px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Find answers to the most common questions",
                },
              ],
            },
          ],
        },
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
                align: "left",
                color: "#2C3E50",
                "font-size": "19px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Q: How long does setup take?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#5D6D7E",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "A: Setup typically takes less than 5 minutes with our guided process.",
                },
              ],
            },
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "left",
                color: "#2C3E50",
                "font-size": "19px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "10px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Q: Do you offer integrations?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#5D6D7E",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "A: Yes, we integrate with over 100 popular tools and services.",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/91434f82b4f84ab395c35e80eb2b25ff_block_bcdf27bf130c457393e39080ec5277a4.png",
    title: "FAQ Premium",
    category: "FAQ",
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
                  text: "Questions & Answers",
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
                  text: "Everything you need to know",
                },
              ],
            },
          ],
        },
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
                align: "left",
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
                  text: "How do I get started?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#BDC3C7",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Getting started is easy! Just sign up and follow our step-by-step guide.",
                },
              ],
            },
            {
              type: "standard-h3",
              data: {},
              attributes: {
                align: "left",
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
                  text: "What makes you different?",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#BDC3C7",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "We focus on simplicity, speed, and exceptional customer service.",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/664a9e1b517f433891a4dafd2a4f5fcb_block_af7024400090466b875486cbf3cb5eb8.png",
    title: "FAQ with CTA",
    category: "FAQ",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "45px",
        "padding-bottom": "45px",
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
                "padding-bottom": "30px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Still Have Questions?",
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
                "padding-bottom": "25px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Can't find the answer you're looking for? We're here to help.",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Contact Support",
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
                  text: "Contact Support",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/f7c8207f52bf4833bde5d1bd29c44b24_block_65dfb77a43514a5b94b3b6fb1a1346aa.png",
    title: "FAQ Quick Answers",
    category: "FAQ",
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
                "font-size": "30px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "35px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Quick Answers",
                },
              ],
            },
          ],
        },
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
                align: "left",
                color: "#FFFFFF",
                "font-size": "18px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "8px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✓ Free trial available",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#ECF0F1",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Try all features free for 14 days, no credit card required.",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#FFFFFF",
                "font-size": "18px",
                "font-weight": "bold",
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
                align: "left",
                color: "#ECF0F1",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "20px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "No long-term contracts. Cancel your subscription whenever you want.",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#FFFFFF",
                "font-size": "18px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "8px",
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
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#ECF0F1",
                "font-size": "15px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Our support team is available around the clock to assist you.",
                },
              ],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];
