import { Space } from "@arco-design/web-react";
import React from "react";
import { BlockManager } from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";
import { CommonVideoElement, KitElementType } from "easy-email-pro-kit";

const list: Array<{ payload: CommonVideoElement }> = [
  {
    payload: {
      type: "common-video",
      data: {
        "video-link": "",
        "button-image":
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/nr-q0iibjzieaviueuxlc_image.png",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/fhticdcdcs5a4w6jqvzgh_image.png",
        "button-image-width": 100,
        "video-mask-opacity": 40,
      },
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/fjvaij47ts0v_c0e03tot_image.png",
        "padding-top": "0px",
        "padding-right": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "L5zAfXuoy9UHeKTnutLSU",
    },
  },
  {
    payload: {
      type: "common-video",
      data: {
        "video-link": "",
        "button-image":
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/cwagoopt4brv9bieu9rpr_image.png",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/fhticdcdcs5a4w6jqvzgh_image.png",
        "button-image-width": 100,
        "video-mask-opacity": 40,
      },
      attributes: {
        src: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/cmzdycuucugo7emma3kjj_video.png",
        "padding-top": "0px",
        "padding-right": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
      },
      children: [
        {
          text: "",
        },
      ],
      id: "L5zAfXuoy9UHeKTnutLSU",
    },
  },
];

export function Video() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {list.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          KitElementType.COMMON_VIDEO
        );

        const element = blockDefinition?.create(item.payload);

        return (
          <SharedComponents.DragItem key={index} element={element}>
            <div
              className="block-list-menu-popover-item"
              style={{
                width: "100%",
                padding: "10px 25px 10px 25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.payload.attributes.src}
                  style={{
                    height: item.payload.attributes.height,
                    width: item.payload.attributes.width,
                    borderRadius: item.payload.attributes["border-radius"],
                  }}
                />
              </div>
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
