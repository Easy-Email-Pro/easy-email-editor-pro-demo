import { StandardSectionElement } from "easy-email-pro-core";
import { PrebuiltBlock } from "easy-email-pro-theme";

export const announcementBlocks: PrebuiltBlock[] = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/cc5c456c1e44498493efc04426a91370_block_540d114b73e74d8a8fd38a4720df1426.png",
    title: "Announcement Banner",
    category: "Announcement",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#1890ff",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          attributes: { width: "100%" },
          data: {},
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#ffffff",
                "font-size": "14px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "🎉 New Feature Available! Check out our latest update.",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/c5defff231244ca19063d9000511b83f_block_3f403afa3d4e4e62a3af5423b4e95483.png",
    title: "Announcement Limited Offer",
    category: "Announcement",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FF6B6B",
        "padding-top": "20px",
        "padding-bottom": "20px",
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
                "font-size": "16px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "🔥 Limited Time Offer! Get 50% off on all products. Shop now!",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/418ccf82e98041a590e9d2641a9ae666_block_fbc7bd00c7e041fe9ac2f2cc906fa946.png",
    title: "Announcement Maintenance",
    category: "Announcement",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#2C3E50",
        "padding-top": "18px",
        "padding-bottom": "18px",
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
                "font-size": "14px",
                "font-weight": "normal",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "⚠️ System maintenance scheduled for tonight 11 PM - 1 AM EST",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/f0a18b49d33d45a3a308a57299def7ce_block_3a4fda3f166f4cf8b784283df50f3726.png",
    title: "Announcement with Button",
    category: "Announcement",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#27AE60",
        "padding-top": "22px",
        "padding-bottom": "22px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "70%",
          },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#FFFFFF",
                "font-size": "15px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "✨ New Feature: Advanced Analytics Dashboard is now live!",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "30%",
          },
          children: [
            {
              type: "standard-button",
              data: {
                content: "Explore",
              },
              attributes: {
                align: "right",
                "background-color": "#FFFFFF",
                color: "#27AE60",
                "border-radius": "4px",
                "padding-top": "8px",
                "padding-bottom": "8px",
                "padding-left": "20px",
                "padding-right": "20px",
                "font-size": "13px",
                "font-weight": "bold",
                "inner-padding-top": "8px",
                "inner-padding-bottom": "8px",
                "inner-padding-left": "20px",
                "inner-padding-right": "20px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Explore",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/5da41149efac470d8c44edde1417b98e_block_28ff1c4ac68b486f9c2a3a8d33b40896.png",
    title: "Announcement Special Offer",
    category: "Announcement",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#F39C12",
        "padding-top": "16px",
        "padding-bottom": "16px",
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
                "font-size": "15px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "🎁 Special Offer: Free shipping on orders over $50. Use code: FREESHIP",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/9b4179d473d84c51a689fbf4a7fe3ce2_block_2a3ee57975f744268f07b261dc93d2b7.png",
    title: "Announcement Important",
    category: "Announcement",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#9B59B6",
        "padding-top": "20px",
        "padding-bottom": "20px",
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
                  text: "📢 Important Update",
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
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "We've updated our privacy policy. Review changes here.",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/71ede0f8513642ed8f202a315d353309_block_88ef04686211495d9469b6b764d1ba78.png",
    title: "Announcement Flash Sale",
    category: "Announcement",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#E74C3C",
        "padding-top": "18px",
        "padding-bottom": "18px",
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
                "font-size": "15px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "⚡ Flash Sale: 24 hours only! Up to 70% off selected items.",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/393660af0dd9495a933641e315eb2571_block_c54536a3b42c4d97a12b399296e2eed0.png",
    title: "Announcement Welcome",
    category: "Announcement",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#3498DB",
        "padding-top": "20px",
        "padding-bottom": "20px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "60%",
          },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#FFFFFF",
                "font-size": "15px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "🎉 Welcome! Your account has been successfully created.",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "40%",
          },
          children: [
            {
              type: "standard-button",
              data: {
                content: "Get Started",
              },
              attributes: {
                align: "right",
                "background-color": "#FFFFFF",
                color: "#3498DB",
                "border-radius": "5px",
                "padding-top": "10px",
                "padding-bottom": "10px",
                "padding-left": "25px",
                "padding-right": "25px",
                "font-size": "14px",
                "font-weight": "bold",
                "inner-padding-top": "10px",
                "inner-padding-bottom": "10px",
                "inner-padding-left": "25px",
                "inner-padding-right": "25px",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/22fb2d5f9d2b4c6d8798c4aa0ba6669e_block_1f75eacf9ace4aefa3db27dd9d265c0b.png",
    title: "Announcement Notification",
    category: "Announcement",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#ECF0F1",
        "padding-top": "18px",
        "padding-bottom": "18px",
        "padding-left": "20px",
        "padding-right": "20px",
        "border-width": "1px",
        "border-style": "solid",
        "border-color": "#BDC3C7",
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
                color: "#2C3E50",
                "font-size": "14px",
                "font-weight": "normal",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "📬 You have 3 unread messages. Check your inbox now.",
                },
              ],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];
