import { useMemo } from "react";

import { EmailEditorProps, useEventCallback } from "easy-email-pro-editor";
import { Element, t } from "easy-email-pro-core";
import { useUpload } from "./useUpload";
import { useLocalStorage } from "react-use";
import { uniqueId } from "lodash";
import { useCallback } from "react";
import { nanoid } from "nanoid";

interface UniversalElement {
  id: string;
  name: string;
  content: Element;
  thumbnail: string;
}

const defaultEmailElements: Array<UniversalElement> = [
  {
    id: "P4Mbzw-iMJd-BqFjlk8st",
    name: "Text with image",
    content: {
      title: "Text with image",
      type: "standard-section",
      data: {},
      attributes: {
        "background-color": "#FFFFFF",
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
              type: "standard-paragraph",
              data: {},
              attributes: {
                align: "left",
                color: "#000000",
                "padding-top": "25px",
                "padding-bottom": "25px",
                "padding-left": "25px",
                "padding-right": "25px",
              },
              children: [
                {
                  text: "And of course, no Irish meal would be complete without a pint of Guinness or a dram of Irish whiskey to wash it down.",
                },
                {
                  type: "line-break",
                  children: [
                    {
                      text: "",
                    },
                  ],
                  data: {},
                  attributes: {},
                },
                {
                  text: "",
                  bold: true,
                },
              ],
            },
            {
              type: "standard-button",
              data: {
                content: "Button",
              },
              attributes: {
                "line-height": "130%",
                "background-color": "#000000",
              },
              children: [
                {
                  text: "VIEW DRINK",
                },
              ],
            },
          ],
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
                "padding-top": "25px",
                "padding-bottom": "25px",
                "padding-left": "25px",
                "padding-right": "25px",
                src: "http://res.cloudinary.com/djnkpbshx/image/upload/v1706006848/easy-email-pro-test/lm6rpd3kbmwzkmjtzmp0.jpg",
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
    thumbnail:
      "https://res.cloudinary.com/djnkpbshx/image/upload/v1689070966/easy-email-pro-test/zpwiwmfzcyvbcjqwafdg.png",
  },
  {
    id: "QyK-lke9oRYjKY7kXY2jm",
    name: "Global menu",
    content: {
      title: "Global menu",
      type: "standard-navbar",
      data: {},
      attributes: {
        "padding-top": "0px",
        "padding-bottom": "0px",
      },
      children: [
        {
          data: {},
          type: "standard-navbar-link",
          children: [
            {
              text: "Shop",
            },
          ],
          attributes: {
            href: "",
          },
        },
        {
          data: {},
          type: "standard-navbar-link",
          children: [
            {
              text: "About",
            },
          ],
          attributes: {
            href: "",
          },
        },
        {
          data: {},
          type: "standard-navbar-link",
          children: [
            {
              text: "Contact",
            },
          ],
          attributes: {
            href: "",
          },
        },
        {
          data: {},
          type: "standard-navbar-link",
          children: [
            {
              text: "Blog",
            },
          ],
          attributes: {
            href: "",
          },
        },
      ],
    },
    thumbnail:
      "http://res.cloudinary.com/djnkpbshx/image/upload/v1708425123/easy-email-pro-test/an5h4wm1i8gehgs5m7uc.png",
  },
];

export const useUniversalElement = () => {
  const [universalElements, setUniversalElements] = useLocalStorage<
    UniversalElement[]
  >("customElements", defaultEmailElements);

  const customElements = useMemo(() => {
    const customElements =
      universalElements?.reduce(
        (acc, cur) => {
          return {
            ...acc,
            [cur.id]: {
              uid: cur.id,
              ...cur.content,
            },
          };
        },
        {} as Record<string, Element>
      ) || {};
    return customElements;
  }, [universalElements]);

  const elements = useMemo(() => {
    return (
      universalElements?.map((item) => {
        return {
          element: {
            uid: item.id,
            ...item.content,
          },
          thumbnail: item.thumbnail,
        };
      }) || []
    );
  }, [universalElements]);

  const { upload } = useUpload();

  const createEmailElementMutation = useCallback(
    async (newItem: {
      emailTemplateId: string;
      name: string;
      thumbnail: string;
      content: Element;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const uuid = nanoid();
      const universalElement = {
        id: uuid,
        name: newItem.name,
        content: newItem.content,
        thumbnail: newItem.thumbnail,
      };
      setUniversalElements((prev) => {
        if (!prev) return [universalElement];
        return [...prev, universalElement];
      });

      return universalElement;
    },
    [setUniversalElements]
  );

  const updateEmailElementMutation = useCallback(
    async (newItem: {
      id: string;
      name: string;
      thumbnail: string;
      content: Element;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const universalElement = {
        id: newItem.id,
        name: newItem.name,
        content: newItem.content,
        thumbnail: newItem.thumbnail,
      };
      setUniversalElements((prev) => {
        if (!prev) return [universalElement];
        return [...prev, universalElement];
      });

      return universalElement;
    },
    [setUniversalElements]
  );

  const onAddElement = useEventCallback(
    async (params: { element: Element; thumbnail: Blob }) => {
      const newItem = {
        thumbnail: await upload(params.thumbnail),
        element: {
          ...params.element,
        } as Element,
      };

      const res = await createEmailElementMutation({
        emailTemplateId: uniqueId() as string,
        name: newItem.element.title as string,
        thumbnail: newItem.thumbnail,
        content: newItem.element,
      });

      newItem.element.uid = res.id;
      return newItem.element;
    }
  );

  const onUpdateElement = useEventCallback(
    async (params: { element: Element; uid: string; thumbnail: Blob }) => {
      const thumbnail = await upload(params.thumbnail);

      await updateEmailElementMutation({
        id: params.uid,
        content: params.element,
        thumbnail: thumbnail,
        name: params.element.title as string,
      });

      return params.element;
    }
  );

  const universalElementSetting: EmailEditorProps["universalElementSetting"] =
    useMemo(() => {
      return {
        elements: customElements,
        list: [
          {
            label: t("Custom"),
            elements: elements,
          },
        ],
        onAddElement: onAddElement,
        onUpdateElement: onUpdateElement,
      };
    }, [customElements, elements, onAddElement, onUpdateElement]);

  return {
    universalElementSetting,
    loading: false,
  };
};
