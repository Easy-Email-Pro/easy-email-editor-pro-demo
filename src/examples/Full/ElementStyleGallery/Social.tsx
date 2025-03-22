import { Space } from "@arco-design/web-react";
import React from "react";
import { SharedComponents } from "easy-email-pro-theme";
import {
  BlockManager,
  ElementType,
  NavbarElement,
  StandardNavbarElement,
  StandardSocialElement,
} from "easy-email-pro-core";

const socialList: Array<{ thumbnail: string; payload: StandardSocialElement }> =
  [
    {
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/u4tdcpjjfvsu7fdmey5nu_image.png",
      payload: {
        type: "standard-social",
        data: {},
        attributes: {
          spacing: "8px",
          "icon-size": "30px",
          mode: "horizontal",
        },
        children: [
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/psyz-f1z-ryy95lv2rh7g_image.png",
              href: "",
              "padding-left": "0px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "72iACN5oun1tqwJh_wdr3",
          },
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/rxxjzpus7vy2cxi0vp6hr_image.png",
              href: "",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "_XEjONnH-I29IPqkeqkmm",
          },
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/obdwqmxv5cljc16-ebnja_image.png",
              href: "",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "fdtwGIxutAOkWNwZ9Oubz",
          },
        ],
        id: "MoECVNoRBSTk4DrttQPdm",
      },
    },
    {
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/kc4s725rht9y5yitxglkm_image.png",
      payload: {
        type: "standard-social",
        data: {},
        attributes: {
          align: "center",
          "font-size": "15px",
          "icon-size": "30px",
          mode: "horizontal",
          spacing: "8px",
        },
        children: [
          {
            type: "standard-social-element",
            data: {},
            attributes: {
              "background-color": "#B8860B",
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/mfpkmlhg2mva_os9dl4p1_image.png",
              "padding-left": "0px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            children: [
              {
                text: "",
              },
            ],
            id: "IJPUsz6QtPLs-Hh6DA4ql",
          },
          {
            type: "standard-social-element",
            data: {},
            attributes: {
              "background-color": "#B8860B",
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/bc9v51iia1minm3_7hoz_image.png",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            children: [
              {
                text: "",
              },
            ],
            id: "KrTvxeXx_1XqO-484eWw2",
          },
          {
            type: "standard-social-element",
            data: {},
            attributes: {
              "background-color": "#B8860B",
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/yalfxko4tea86assl7rfg_image.png",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            children: [
              {
                text: "",
              },
            ],
            id: "uvOTno_Vh-3erJ01oeYMh",
          },
        ],
        id: "XJYRA6Y03jkFVbFdAbPhc",
      },
    },
    {
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/6eix3qutd1bg4pabveema_image.png",
      payload: {
        type: "standard-social",
        data: {},
        attributes: {
          spacing: "8px",
          "icon-size": "30px",
          mode: "horizontal",
        },
        children: [
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/noqc2te0gdpyphwd6y-k_image.png",
              href: "",
              "padding-left": "0px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "VxcDiXydWB3G4IPKed9zs",
          },
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/subsixm6-khbu4dwsm1nr_image.png",
              href: "",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "K0oiO5snGezfkmbJo-0cy",
          },
          {
            data: {},
            type: "standard-social-element",
            children: [
              {
                text: "",
              },
            ],
            attributes: {
              src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/gbwnp8-q32wsucbyee-0m_image.png",
              href: "",
              "padding-left": "8px",
              "padding-right": "0px",
              "padding-top": "0px",
              "padding-bottom": "0px",
            },
            id: "JSjtiQmB45KY14rFhrOIz",
          },
        ],
        id: "Lokg1kjEnJ0IFtpXTODlP",
      },
    },
  ];

export function Social() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {socialList.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          ElementType.STANDARD_SOCIAL
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
                style={{ objectFit: "cover", width: "100%", maxHeight: "100%" }}
              />
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
