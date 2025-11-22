import markdownit from "markdown-it";

import {
  BlockManager,
  Element as NodeElement,
  ElementType,
  TextNode,
  NodeUtils,
  PageElement,
} from "easy-email-pro-core";
import { camelCase, get } from "lodash";
import markdownCss from "./markdown.css?inline";
import { previewLoadImage } from "easy-email-pro-theme";

const tagNameMap: Record<string, NodeElement["type"]> = {
  h1: ElementType.STANDARD_H1,
  h2: ElementType.STANDARD_H2,
  h3: ElementType.STANDARD_H3,
  h4: ElementType.STANDARD_H4,
  p: ElementType.STANDARD_PARAGRAPH,
};

const getItemNode = (
  node: ChildNode,
  { contentWindow }: { contentWindow: Window }
): TextNode | NodeElement => {
  if (node.nodeType === Node.TEXT_NODE) {
    const textContent =
      node.textContent?.replace(/\s+/g, " ").replace(/\n/g, "") || "";
    if (textContent === " " && node.nextSibling && node.previousSibling) {
      return {
        text: " ",
      };
    }
    return {
      text: textContent,
    };
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node as HTMLElement;
    const attrs: Record<string, string> = {};

    element.getAttributeNames().forEach((name) => {
      let key = camelCase(name);
      if (key === "class") {
        key = "className";
      }
      attrs[key] = element.getAttribute(name) || "";
    });

    const tagName = element.tagName.toLowerCase();

    if (tagName === "br") {
      return BlockManager.getBlockByType(ElementType.LINE_BREAK).create({
        attributes: {},
        data: {},
        children: [{ text: "" }],
      });
    }

    const childNodes = Array.from(node.childNodes)
      .map((child) => getItemNode(child, { contentWindow }))
      .filter(
        (item) => !(NodeUtils.isTextNode(item) && item.text.trim() === "")
      );

    if (tagName === "a" && !attrs.style?.includes("display")) {
      attrs.style = "display:inline-block;" + attrs.style;
    }

    return BlockManager.getBlockByType(
      isBlockNode({ item: element, contentWindow })
        ? ElementType.HTML_BLOCK_NODE
        : ElementType.HTML_NODE
    ).create({
      attributes: attrs,
      data: {
        tagName: tagName,
      },
      children: childNodes.length > 0 ? childNodes : [{ text: "" }],
    });
  }
  throw new Error("Invalid node");
};

const md = markdownit({
  html: true,
});

export const markdownToMjml = async (
  markdownString: string
): Promise<PageElement> => {
  const result = md.render(markdownString);

  const iframe: HTMLIFrameElement = await new Promise((resolve) => {
    const iframe = document.createElement("iframe");
    iframe.srcdoc = result;
    document.body.appendChild(iframe);
    iframe.style.display = "none";
    iframe.onload = () => {
      resolve(iframe);
    };
  });
  const dom = iframe.contentDocument!;
  const contentWindow = iframe.contentWindow!;
  const children = Array.from(dom.body.children);
  const imgMap = new Map<string, HTMLImageElement>();
  await Promise.all(
    Array.from(dom.body.querySelectorAll("img")).map(
      async (img: HTMLImageElement) => {
        try {
          const imgEle = await previewLoadImage(img.getAttribute("src") || "");
          imgMap.set(img.src, imgEle);
        } catch (error) {}
      }
    )
  );

  const contentChildren: NodeElement[] = children
    .map((item) => {
      let childNodes = Array.from(item.childNodes).filter((child) => {
        if (
          child.nodeType === Node.TEXT_NODE &&
          child.textContent?.trim() === ""
        ) {
          return false;
        }
        return true;
      });

      const tagName = item.tagName.toLocaleLowerCase();
      const firstNode = childNodes[0];

      if (childNodes.length === 1) {
        if (get(firstNode, "tagName", "").toLowerCase() === "p") {
          childNodes = Array.from(childNodes[0].childNodes);
        }
      }

      switch (item.tagName.toLocaleLowerCase()) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "p":
          if (
            childNodes.length === 1 &&
            get(firstNode, "tagName", "").toLowerCase() === "img"
          ) {
            const img = firstNode as HTMLImageElement;
            return BlockManager.getBlockByType(
              ElementType.STANDARD_IMAGE
            ).create({
              attributes: {
                src: img.getAttribute("src") || "",
              },
              data: {},
              children: [{ text: "" }],
            });
          }
          if (
            childNodes.length === 1 &&
            get(firstNode, "tagName", "").toLowerCase() === "a"
          ) {
            const link = firstNode as HTMLAnchorElement;
            const firstLinkChildNode = link.childNodes[0];
            if (
              link.childNodes.length === 1 &&
              get(firstLinkChildNode, "tagName", "").toLowerCase() === "img"
            ) {
              const img = firstLinkChildNode as HTMLImageElement;

              return BlockManager.getBlockByType(
                ElementType.STANDARD_IMAGE
              ).create({
                attributes: {
                  src: img.getAttribute("src") || "",
                  href: link.getAttribute("href") || "",
                  width: contentWindow.getComputedStyle(img).width,
                  height: contentWindow.getComputedStyle(img).height,
                },
                data: {},
                children: [{ text: "" }],
              });
            }
          }
          return BlockManager.getBlockByType(tagNameMap[tagName as any]).create(
            {
              attributes: {},
              data: {},
              children: formateChildNotes(item, { contentWindow }).map(
                (child) => getItemNode(child, { contentWindow })
              ),
            }
          );

        case "img":
          return BlockManager.getBlockByType(ElementType.STANDARD_IMAGE).create(
            {
              attributes: {
                src: item.getAttribute("src") || "",
                href: item.getAttribute("href") || "",
                width: contentWindow.getComputedStyle(item).width,
                height: contentWindow.getComputedStyle(item).height,
              },
              data: {},
              children: [{ text: "" }],
            }
          );
        case "blockquote":
          return BlockManager.getBlockByType(
            ElementType.STANDARD_BLOCK_QUOTE
          ).create({
            attributes: {},
            data: {},
            children: childNodes.map((child) =>
              getItemNode(child, { contentWindow })
            ),
          });
        case "table":
          return BlockManager.getBlockByType(ElementType.STANDARD_TABLE).create(
            {
              attributes: {
                "css-class": "markdown-table",
              },
              data: {
                code: item.innerHTML,
              },
              children: [{ text: "" }],
            }
          );

        case "ol":
        case "ul":
        case "div":
          return BlockManager.getBlockByType(
            ElementType.STANDARD_PARAGRAPH
          ).create({
            attributes: {},
            data: {},
            children: [
              BlockManager.getBlockByType(
                blockTypes.includes(
                  contentWindow.getComputedStyle(item as Element).display
                )
                  ? ElementType.HTML_BLOCK_NODE
                  : ElementType.HTML_NODE
              ).create({
                attributes: {},
                data: {
                  tagName: item.tagName.toLocaleLowerCase(),
                },
                children: formateChildNotes(item, { contentWindow }).map(
                  (child) => getItemNode(child, { contentWindow })
                ),
              }),
            ],
          });

        default:
          console.error(`Don't support ${item.tagName}`);
      }
    })
    .filter(Boolean) as NodeElement[];
  iframe.parentElement?.removeChild(iframe);
  return {
    data: {
      breakpoint: "480px",
      globalAttributes: {
        "font-family": `-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
        "line-height": " 1.5",
      },
      blockAttributes: {
        "standard-paragraph": {
          align: "left",
          "padding-left": "0px",
          "padding-right": "0px",
          "padding-top": "0px",
          "padding-bottom": "10px",
          "line-height": "1.25",
        },
        "standard-h1": {
          align: "left",
          "padding-left": "0px",
          "padding-right": "0px",
          "padding-top": "24px",
          "padding-bottom": "16px",
          "font-weight": "600",
          "line-height": "1.25",
        },
        "standard-h2": {
          align: "left",
          "padding-left": "0px",
          "padding-right": "0px",
          "padding-top": "24px",
          "padding-bottom": "16px",
          "font-weight": "600",
          "line-height": "1.25",
        },
        "standard-h3": {
          align: "left",
          "padding-left": "0px",
          "padding-right": "0px",
          "padding-top": "24px",
          "padding-bottom": "16px",
          "font-weight": "600",
          "line-height": "1.25",
        },
        "standard-h4": {
          align: "left",
          "padding-left": "0px",
          "padding-right": "0px",
          "padding-top": "24px",
          "padding-bottom": "16px",
          "font-weight": "600",
          "line-height": "1.25",
        },
        "standard-image": {
          align: "left",
          "padding-left": "0px",
          "padding-right": "0px",
          "padding-top": "24px",
          "padding-bottom": "16px",
        },
        "standard-section": {
          "padding-left": "25px",
          "padding-right": "25px",
          "padding-top": "20px",
          "padding-bottom": "20px",
        },
        "standard-blockquote": {
          "padding-left": "0px",
          "padding-right": "0px",
          "padding-top": "24px",
          "padding-bottom": "16px",
        },
      },
      headStyles: [
        {
          inline: "inline",
          content: markdownCss,
        },
      ],
    },
    type: "page",
    attributes: {
      "css-class": "markdown-body",
      "background-color": "#f5f5f5",
      "content-background-color": "#ffffff",
    },
    children: [
      {
        data: {},
        type: "standard-section",
        attributes: {},
        children: [
          {
            data: {},
            type: "standard-column",
            children: contentChildren,
            attributes: {},
          },
        ],
      },
    ],
  };
};

const blockTypes = ["block", "flex", "grid", "table", "list-item"];
const formateChildNotes = (
  node: Element,
  { contentWindow }: { contentWindow: Window }
): ChildNode[] => {
  const childNodes = Array.from(node.childNodes);
  const hasBlockElement = childNodes.some((item) => {
    return (
      item.nodeType === Node.ELEMENT_NODE &&
      blockTypes.includes(
        contentWindow.getComputedStyle(item as Element).display
      )
    );
  });
  if (!hasBlockElement) {
    return childNodes;
  }

  function groupNodesByDisplay(node: Element) {
    const result = [];
    let currentGroup: { display: string; children: ChildNode[] } | null = null;

    for (const child of node.childNodes) {
      const display =
        child.nodeType === Node.ELEMENT_NODE
          ? contentWindow.getComputedStyle(child as Element).display
          : "inline";

      if (!currentGroup || currentGroup.display !== display) {
        currentGroup = { display: display, children: [] };
        result.push(currentGroup);
      }

      currentGroup!.children.push(child);
    }

    return result;
  }
  const result = groupNodesByDisplay(node);
  const list: ChildNode[] = [];
  result.forEach((item) => {
    if (item.display === "inline") {
      const div = document.createElement("div");
      item.children.forEach((child) => {
        if (child.textContent?.trim()) {
          div.appendChild(child);
        }
      });
      if (div.childNodes.length > 0) {
        list.push(div);
      }
    } else {
      list.push(...item.children);
    }
  });
  return list;
};

const isBlockNode = ({
  contentWindow,
  item,
}: {
  contentWindow: Window;
  item: Element;
}) => {
  return blockTypes.includes(contentWindow.getComputedStyle(item).display);
};
