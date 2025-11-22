import { Space } from "@arco-design/web-react";
import React from "react";
import { BlockManager } from "easy-email-pro-core";
import { SharedComponents } from "easy-email-pro-theme";
import { AmpLuckyWheelElement, KitElementType } from "easy-email-pro-kit";

type LuckyWheelVariant = {
  label: string;
  payload: AmpLuckyWheelElement;
};

const list: LuckyWheelVariant[] = [
  {
    label: "Purple — E-commerce (8 prizes)",
    payload: {
      "type": "amp-lucky-wheel",
      "data": {
        "prizes": [
          {
            "option": "10% OFF",
            "style": {
              "backgroundColor": "#EDE9FE",
              "textColor": "#4C1D95"
            }
          },
          {
            "option": "Free Shipping",
            "style": {
              "backgroundColor": "#7C3AED",
              "textColor": "#ffffff"
            }
          },
          {
            "option": "20% OFF",
            "style": {
              "backgroundColor": "#DDD6FE",
              "textColor": "#4C1D95"
            }
          },
          {
            "option": "Free Gift",
            "style": {
              "backgroundColor": "#5B21B6",
              "textColor": "#ffffff"
            }
          },
          {
            "option": "15% OFF",
            "style": {
              "backgroundColor": "#E9D5FF",
              "textColor": "#4C1D95"
            }
          },
          {
            "option": "Try Again",
            "style": {
              "backgroundColor": "#6D28D9",
              "textColor": "#ffffff"
            }
          },
          {
            "option": "5% OFF",
            "style": {
              "backgroundColor": "#C4B5FD",
              "textColor": "#4C1D95"
            }
          },
          {
            "option": "Thanks",
            "style": {
              "backgroundColor": "#8B5CF6",
              "textColor": "#ffffff"
            }
          }
        ],
        "winnerIndex": 0,
        "spinButtonText": "Spin",
        "stopButtonText": "Stop",
        "centerButtonText": "Spin",
        "centerButtonBackgroundColor": "#7C3AED",
        "centerButtonTextColor": "#ffffff",
        "centerButtonBorderColor": "#C4B5FD",
        "centerButtonBorderWidth": 4,
        "prizeButtonText": "Claim Prize",
        "prizeButtonHref": "https://example.com/claim",
        "congratsMessage": "Congratulations! You won {prize}. Use it at checkout!",
        "buttonBackgroundColor": "#5a21b6",
        "buttonTextColor": "#ffffff",
        "buttonBorderRadius": 8,
        "prizeButtonBackgroundColor": "#5a21b6",
        "prizeButtonTextColor": "#ffffff",
        "backgroundColors": [
          "#EDE9FE",
          "#7C3AED",
          "#DDD6FE",
          "#5B21B6",
          "#E9D5FF",
          "#6D28D9"
        ],
        "textColors": [
          "#4C1D95"
        ],
        "outerBorderColor": "#7C3AED",
        "outerBorderWidth": 10,
        "radiusLineColor": "#ffffff",
        "radiusLineWidth": 2,
        "fontSize": 16,
        "pointerColor": "#FFB3C7",
        "spinDuration": 3,
        "totalRotations": 5,
        "gifFrameRate": 30,
        "centerButtonResultText": "YOU WON!",
        "buttonWidth": 75,
        "congratsMessageColor": "#000000",
        "previewStateIndex": 2,
        "centerButtonSpinningText": "Stop"
      },
      "attributes": {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#ffffff",
        "static-image": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/tjplzuaw57ovnohpvp5cj_wheel-static.png",
        "spin-gif": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/z92wx4wzlws02syyrqhg7_wheel-spin.gif",
        "result-image": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/izmyp1moog32pl_cscwr_wheel-result.png"
      },
      "children": [
        {
          "text": ""
        }
      ],
      "id": "1GPHCCh_KesH9d2-5Jd44"
    }
  },
  {
    label: "Blue — E-commerce (8 prizes)",
    payload: {
      "type": "amp-lucky-wheel",
      "data": {
        "prizes": [
          {
            "option": "10% OFF",
            "style": {
              "backgroundColor": "#dbeafe",
              "textColor": "#1e40af"
            }
          },
          {
            "option": "Free Ship",
            "style": {
              "backgroundColor": "#2563eb",
              "textColor": "#ffffff"
            }
          },
          {
            "option": "20% OFF",
            "style": {
              "backgroundColor": "#bfdbfe",
              "textColor": "#1e3a8a"
            }
          },
          {
            "option": "Free Gift",
            "style": {
              "backgroundColor": "#1d4ed8",
              "textColor": "#ffffff"
            }
          },
          {
            "option": "15% OFF",
            "style": {
              "backgroundColor": "#93c5fd",
              "textColor": "#1e3a8a"
            }
          },
          {
            "option": "Try Again",
            "style": {
              "backgroundColor": "#3b82f6",
              "textColor": "#ffffff"
            }
          },
          {
            "option": "5% OFF",
            "style": {
              "backgroundColor": "#60a5fa",
              "textColor": "#1e3a8a"
            }
          },
          {
            "option": "Thanks",
            "style": {
              "backgroundColor": "#1e40af",
              "textColor": "#ffffff"
            }
          }
        ],
        "winnerIndex": 0,
        "spinButtonText": "Spin",
        "stopButtonText": "Stop",
        "centerButtonText": "Spin",
        "centerButtonBackgroundColor": "#2563eb",
        "centerButtonTextColor": "#ffffff",
        "centerButtonBorderColor": "#C4B5FD",
        "centerButtonBorderWidth": 4,
        "prizeButtonText": "Claim Offer",
        "prizeButtonHref": "https://example.com/shop",
        "congratsMessage": "You won {prize}! Claim your discount now.",
        "buttonBackgroundColor": "#2563eb",
        "buttonTextColor": "#ffffff",
        "buttonBorderRadius": 12,
        "prizeButtonBackgroundColor": "#2563eb",
        "prizeButtonTextColor": "#ffffff",
        "backgroundColors": [
          "#EDE9FE",
          "#7C3AED",
          "#DDD6FE",
          "#5B21B6",
          "#E9D5FF",
          "#6D28D9"
        ],
        "textColors": [
          "#4C1D95"
        ],
        "outerBorderColor": "#2563eb",
        "outerBorderWidth": 10,
        "radiusLineColor": "#ffffff",
        "radiusLineWidth": 2,
        "fontSize": 16,
        "pointerColor": "#FFB3C7",
        "spinDuration": 3,
        "totalRotations": 5,
        "gifFrameRate": 30,
        "centerButtonResultText": "YOU WON!",
        "buttonWidth": 100,
        "congratsMessageColor": "#1e40af",
        "previewStateIndex": 2,
        "centerButtonSpinningText": "Stop"
      },
      "attributes": {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#eff6ff",
        "static-image": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/k2tphktxkgttczjir-xkb_wheel-static.png",
        "spin-gif": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/8n2rhh51cxbeighejfmk1_wheel-spin.gif",
        "result-image": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/91xab1olde1bweuyfph_n_wheel-result.png"
      },
      "children": [
        {
          "text": ""
        }
      ],
      "id": "dh0xUzQWuPo5P9UdeKgYZ"
    },
  },
  {
    label: "Warm — Sale style (8 prizes)",
    payload: {
      "type": "amp-lucky-wheel",
      "data": {
        "prizes": [
          {
            "option": "10% OFF",
            "style": {
              "backgroundColor": "#fef3c7",
              "textColor": "#92400e"
            }
          },
          {
            "option": "Flash Sale",
            "style": {
              "backgroundColor": "#f59e0b",
              "textColor": "#ffffff"
            }
          },
          {
            "option": "20% OFF",
            "style": {
              "backgroundColor": "#fde68a",
              "textColor": "#b45309"
            }
          },
          {
            "option": "Free Gift",
            "style": {
              "backgroundColor": "#f97316",
              "textColor": "#ffffff"
            }
          },
          {
            "option": "15% OFF",
            "style": {
              "backgroundColor": "#fcd34d",
              "textColor": "#92400e"
            }
          },
          {
            "option": "Try Again",
            "style": {
              "backgroundColor": "#fb923c",
              "textColor": "#ffffff"
            }
          },
          {
            "option": "5% OFF",
            "style": {
              "backgroundColor": "#fde047",
              "textColor": "#a16207"
            }
          },
          {
            "option": "Thanks",
            "style": {
              "backgroundColor": "#ea580c",
              "textColor": "#ffffff"
            }
          }
        ],
        "winnerIndex": 0,
        "spinButtonText": "",
        "stopButtonText": "",
        "centerButtonText": "Spin",
        "centerButtonBackgroundColor": "#ea580c",
        "centerButtonTextColor": "#ffffff",
        "centerButtonBorderColor": "#C4B5FD",
        "centerButtonBorderWidth": 4,
        "prizeButtonText": "Claim Now",
        "prizeButtonHref": "https://example.com/sale",
        "congratsMessage": "You won {prize}! Limited time offer.",
        "buttonBackgroundColor": "#ea580c",
        "buttonTextColor": "#ffffff",
        "buttonBorderRadius": 8,
        "prizeButtonBackgroundColor": "#ea580c",
        "prizeButtonTextColor": "#ffffff",
        "backgroundColors": [
          "#EDE9FE",
          "#7C3AED",
          "#DDD6FE",
          "#5B21B6",
          "#E9D5FF",
          "#6D28D9"
        ],
        "textColors": [
          "#4C1D95"
        ],
        "outerBorderColor": "#ea580c",
        "outerBorderWidth": 10,
        "radiusLineColor": "#ffffff",
        "radiusLineWidth": 2,
        "fontSize": 16,
        "pointerColor": "#FFB3C7",
        "spinDuration": 3,
        "totalRotations": 5,
        "gifFrameRate": 30,
        "centerButtonResultText": "YOU WON!",
        "buttonWidth": 80,
        "congratsMessageColor": "#1f2937",
        "previewStateIndex": 0,
        "centerButtonSpinningText": "Stop"
      },
      "attributes": {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#fffbeb",
        "static-image": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/ooinqkr7eurlnupiwqq6k_wheel-static.png",
        "spin-gif": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/kpzxhdamoxqhmzfhyz1se_wheel-spin.gif",
        "result-image": "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/w2nkagznpklpgthr_clia_wheel-result.png"
      },
      "children": [
        {
          "text": ""
        }
      ],
      "id": "UhvG1lFsG8dtWI-1LDkiz"
    }
  },
];

function LuckyWheelPreview({ item }: { item: LuckyWheelVariant; }) {
  const { payload } = item;
  const prizes = payload.data?.prizes ?? [];
  const bg = payload.attributes?.["background-color"] ?? "#ffffff";
  const centerBg = payload.data?.centerButtonBackgroundColor ?? "#7C3AED";
  const centerColor = payload.data?.centerButtonTextColor ?? "#ffffff";
  const centerText = (payload.data?.centerButtonText ?? "Play").slice(0, 8);
  const borderColor = payload.data?.outerBorderColor ?? centerBg ?? "#e5e7eb";
  const borderWidth = Math.min(6, Math.max(2, Number(payload.data?.outerBorderWidth) ?? 3));

  if (prizes.length === 0) {
    return (
      <div style={{ padding: 20, textAlign: "center", fontSize: 11, color: "#94a3b8" }}>
        No prizes
      </div>
    );
  }

  const degPer = 360 / prizes.length;
  const conicParts = prizes
    .map((p, i) => {
      const start = i * degPer;
      const end = (i + 1) * degPer;
      const color = p?.style?.backgroundColor ?? "#e5e7eb";
      return `${color} ${start}deg ${end}deg`;
    })
    .join(", ");
  const conicGradient = `conic-gradient(from 0deg, ${conicParts})`;

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
        backgroundColor: bg,
        padding: "14px 16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 100,
            height: 100,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: conicGradient,
              border: `${borderWidth}px solid ${borderColor}`,
              boxSizing: "border-box",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: centerBg,
              color: centerColor,
              fontSize: 9,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(255,255,255,0.8)",
              boxSizing: "border-box",
            }}
          >
            {centerText}
          </div>
        </div>
        <div
          style={{
            fontSize: 10,
            color: "#6b7280",
            textAlign: "center",
          }}
        >
          {prizes.length} prizes
        </div>
        <div
          style={{
            fontSize: 9,
            color: "#94a3b8",
          }}
        >
          {item.label}
        </div>
      </div>
    </div>
  );
}

export function AmpLuckyWheel() {
  return (
    <Space direction="vertical" style={{ width: "100%", gap: 12 }}>
      {list.map((item, index) => {
        const blockDefinition = BlockManager.getBlockByType(
          KitElementType.AMP_LUCKY_WHEEL
        );
        const element = blockDefinition?.create(item.payload);
        return (
          <SharedComponents.DragItem key={index} element={element}>
            <div
              className="block-list-menu-popover-item"
              style={{
                width: "100%",
                padding: "12px 16px",
                display: "flex",
                alignItems: "stretch",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100%", maxWidth: 260 }}>
                <LuckyWheelPreview item={item} />
              </div>
            </div>
          </SharedComponents.DragItem>
        );
      })}
    </Space>
  );
}
