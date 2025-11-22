import { StandardSectionElement } from "easy-email-pro-core";
import { PrebuiltBlock } from "easy-email-pro-theme";

export const header: PrebuiltBlock[] = [
  {
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/f1dca5ede4d5466095b8ef76f0616143_block_ce5c2cdd9f0f4b68b4273778bf59dda0.png",
    title: "Header Centered Logo",
    category: "Header/Footer",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "30px",
        "padding-bottom": "30px",
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
              type: "standard-image",
              data: {},
              attributes: {
                src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/hwm526rq8_e9s0ynhimam_image.png",
                alt: "Company logo, modern design, white background [Width: 200px, Height: 60px]",
                width: "200px",
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
                color: "#2C3E50",
                "font-size": "18px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Company Name",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/uc3c17foexhk-up9npgx3_g2et7jfleft3xvkij6upv.png",
    title: "Header Blue",
    category: "Header/Footer",
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
            width: "40%",
          },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#FFFFFF",
                "font-size": "24px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Company Name",
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "60%",
          },
          children: [
            {
              type: "standard-navbar",
              data: {},
              attributes: {
                align: "right",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
                color: "#FFFFFF",
                "item-padding-top": "8px",
                "item-padding-bottom": "8px",
              },
              children: [
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#FFFFFF",
                    href: "#",
                    "padding-top": "8px",
                    "padding-bottom": "8px",
                  },
                  children: [
                    {
                      text: "Home",
                    },
                  ],
                },
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#FFFFFF",
                    href: "#",
                    "padding-top": "8px",
                    "padding-bottom": "8px",
                  },
                  children: [
                    {
                      text: "Features",
                    },
                  ],
                },
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#FFFFFF",
                    href: "#",
                    "padding-top": "8px",
                    "padding-bottom": "8px",
                  },
                  children: [
                    {
                      text: "Pricing",
                    },
                  ],
                },
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#FFFFFF",
                    href: "#",
                    "padding-top": "8px",
                    "padding-bottom": "8px",
                  },
                  children: [
                    {
                      text: "Contact",
                    },
                  ],
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/40eb9b38911e47729774eeb7a0465a97_block_fd56f52f6ed34f53bfff6fb6329ea71d.png",
    title: "Header Centered Nav",
    category: "Header/Footer",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "30px",
        "padding-bottom": "30px",
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
              type: "standard-image",
              data: {},
              attributes: {
                src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/hwm526rq8_e9s0ynhimam_image.png",
                alt: "Company logo, modern design, white background [Width: 200px, Height: 60px]",
                width: "200px",
                align: "center",
                "padding-top": "0px",
                "padding-bottom": "15px",
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
              type: "standard-navbar",
              data: {},
              attributes: {
                align: "center",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
                color: "#2C3E50",
                "item-padding-top": "10px",
                "item-padding-bottom": "10px",
              },
              children: [
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#2C3E50",
                    href: "#",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      text: "Home",
                    },
                  ],
                },
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#2C3E50",
                    href: "#",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      text: "Products",
                    },
                  ],
                },
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#2C3E50",
                    href: "#",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      text: "About",
                    },
                  ],
                },
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#2C3E50",
                    href: "#",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      text: "Blog",
                    },
                  ],
                },
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#2C3E50",
                    href: "#",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      text: "Contact",
                    },
                  ],
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/00aab6672b514a93894e8d1233b1a3af_block_d1488e5a510a4c57bdc88f250e2580f4.png",
    title: "Header with Social",
    category: "Header/Footer",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#27AE60",
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
                "font-size": "20px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Company Name",
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
              type: "standard-social",
              data: {},
              attributes: {
                align: "right",
                mode: "horizontal",
                "icon-size": "24px",
                spacing: "12px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  type: "standard-social-element",
                  data: {},
                  attributes: {
                    name: "facebook",
                    href: "#",
                    "padding-top": "0px",
                    "padding-bottom": "0px",
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
                  type: "standard-social-element",
                  data: {},
                  attributes: {
                    name: "twitter",
                    href: "#",
                    "padding-top": "0px",
                    "padding-bottom": "0px",
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
                  type: "standard-social-element",
                  data: {},
                  attributes: {
                    name: "instagram",
                    href: "#",
                    "padding-top": "0px",
                    "padding-bottom": "0px",
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
                  type: "standard-social-element",
                  data: {},
                  attributes: {
                    name: "linkedin",
                    href: "#",
                    "padding-top": "0px",
                    "padding-bottom": "0px",
                    "padding-left": "0px",
                    "padding-right": "0px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/38041a8e6bd64bb9ae2feb32c27b1c36_block_067ce42dd465400498aea23d82dbed0f.png",
    title: "Header with Buttons",
    category: "Header/Footer",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "35px",
        "padding-bottom": "35px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "25%",
          },
          children: [
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/hwm526rq8_e9s0ynhimam_image.png",
                alt: "Company logo, modern design, white background [Width: 120px, Height: 35px]",
                width: "120px",
                align: "left",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "",
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
              type: "standard-navbar",
              data: {},
              attributes: {
                align: "center",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
                color: "#2C3E50",
                "item-padding-top": "10px",
                "item-padding-bottom": "10px",
              },
              children: [
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#2C3E50",
                    href: "#",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      text: "Home",
                    },
                  ],
                },
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#2C3E50",
                    href: "#",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      text: "Products",
                    },
                  ],
                },
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#2C3E50",
                    href: "#",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      text: "About",
                    },
                  ],
                },
                {
                  type: "standard-navbar-link",
                  data: {},
                  attributes: {
                    color: "#2C3E50",
                    href: "#",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  },
                  children: [
                    {
                      text: "Contact",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "25%",
          },
          children: [
            {
              type: "standard-button",
              data: {
                content: "Sign Up",
              },
              attributes: {
                align: "right",
                "background-color": "#3498DB",
                color: "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
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
                  text: "Sign Up",
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Log In",
              },
              attributes: {
                align: "right",
                "background-color": "transparent",
                color: "#3498DB",
                "border-radius": "6px",
                "border-width": "1px",
                "border-style": "solid",
                "border-color": "#3498DB",
                "padding-top": "10px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
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
                  text: "Log In",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/bd023fe0e08b4d80a2355afce5e3ed1a_block_8ee404129f1148eab65edf17c762187d.png",
    title: "Header with Contact",
    category: "Header/Footer",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
        "padding-top": "30px",
        "padding-bottom": "30px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "30%",
          },
          children: [
            {
              type: "standard-image",
              data: {},
              attributes: {
                src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/hwm526rq8_e9s0ynhimam_image.png",
                alt: "Company logo, modern design, white background [Width: 150px, Height: 45px]",
                width: "150px",
                align: "left",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "",
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
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "center",
                color: "#2C3E50",
                "font-size": "14px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "📧 support@company.com | 📞 +1 (555) 123-4567",
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
              type: "standard-social",
              data: {},
              attributes: {
                align: "right",
                mode: "horizontal",
                "icon-size": "22px",
                spacing: "10px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  type: "standard-social-element",
                  data: {},
                  attributes: {
                    name: "facebook",
                    href: "#",
                    "padding-top": "0px",
                    "padding-bottom": "0px",
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
                  type: "standard-social-element",
                  data: {},
                  attributes: {
                    name: "twitter",
                    href: "#",
                    "padding-top": "0px",
                    "padding-bottom": "0px",
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
                  type: "standard-social-element",
                  data: {},
                  attributes: {
                    name: "instagram",
                    href: "#",
                    "padding-top": "0px",
                    "padding-bottom": "0px",
                    "padding-left": "0px",
                    "padding-right": "0px",
                  },
                  children: [
                    {
                      text: "",
                    },
                  ],
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/929cb4253aee4fe296a6b64a2303f73f_block_a0eebec02adb44ee88269ac249ef40a8.png",
    title: "Header Purple",
    category: "Header/Footer",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#9B59B6",
        "padding-top": "25px",
        "padding-bottom": "25px",
        "padding-left": "20px",
        "padding-right": "20px",
      },
      children: [
        {
          type: "standard-column",
          data: {},
          attributes: {
            width: "50%",
          },
          children: [
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#FFFFFF",
                "font-size": "22px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Company Name",
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
              type: "standard-button",
              data: {
                content: "Shop Now",
              },
              attributes: {
                align: "right",
                "background-color": "#FFFFFF",
                color: "#9B59B6",
                "border-radius": "6px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
                "font-size": "14px",
                "font-weight": "bold",
                "inner-padding-top": "12px",
                "inner-padding-bottom": "12px",
                "inner-padding-left": "30px",
                "inner-padding-right": "30px",
                "line-height": "130%",
              },
              children: [
                {
                  text: "Shop Now →",
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
      "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/4bdb5ea6400e420fbc61c1ce0d7b5920_block_b5d1944233ac4d238d3b3f3741c15588.png",
    title: "Header Minimal",
    category: "Header/Footer",
    payload: {
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#1A1A1A",
        "padding-top": "35px",
        "padding-bottom": "35px",
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
                "font-size": "26px",
                "font-weight": "bold",
                "padding-top": "0px",
                "padding-bottom": "5px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Company Name",
                },
              ],
            },
            {
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#BDC3C7",
                "font-size": "13px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
              },
              children: [
                {
                  text: "Innovation. Quality. Excellence.",
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
                content: "Get Started",
              },
              attributes: {
                align: "right",
                "background-color": "#E74C3C",
                color: "#FFFFFF",
                "border-radius": "6px",
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
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
                  text: "Get Started",
                },
              ],
            },
          ],
        },
      ],
    } as StandardSectionElement,
  },
];
