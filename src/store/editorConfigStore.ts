import { MergetagItem } from "easy-email-pro-editor";
import { create } from "zustand";
import { set as lodashSet, get as lodashGet } from "lodash";
import { persist, createJSONStorage } from "zustand/middleware";

// 合并标签值接口
interface MergetagsData {
  [key: string]: any;
}

interface EditorConfigState {
  showLayer: boolean;
  showPreview: boolean;
  showLogic: boolean;
  showBlockPaths: boolean;
  showSourceCode: boolean;
  compactMode: boolean;
  controller: boolean;
  showAIIntegration: boolean;
  showFrozenBlocks: boolean;
  showCustomStyles: boolean;
  showResponsivePreview: boolean;
  showFavorites: boolean;

  // Theme and language
  theme: string;
  language: string;

  // Merge Tags
  mergetags: MergetagItem[];
  mergetagsData: MergetagsData;

  // Actions
  toggleLayer: (value?: boolean) => void;
  togglePreview: (value?: boolean) => void;
  toggleLogic: (value?: boolean) => void;
  toggleBlockPaths: (value?: boolean) => void;
  toggleSourceCode: (value?: boolean) => void;
  toggleCompactMode: (value?: boolean) => void;
  toggleController: (value?: boolean) => void;
  toggleAIIntegration: (value?: boolean) => void;
  toggleFrozenBlocks: (value?: boolean) => void;
  toggleCustomStyles: (value?: boolean) => void;
  toggleResponsivePreview: (value?: boolean) => void;
  toggleFavorites: (value?: boolean) => void;

  // Set actions
  setTheme: (theme: string) => void;
  setLanguage: (lang: string) => void;

  // Merge Tags actions
  setMergetags: (mergetags: MergetagItem[]) => void;
  setMergetagsData: (data: MergetagsData) => void;
  updateMergetagData: (path: string, value: any) => void;
  updateMergetag: (path: string, value: any) => void;
  removeMergetag: (tag: MergetagItem) => void;
  addMergetagCategory: (category: MergetagItem) => void;
  addMergetagToCategory: (
    categoryIndex: number,
    mergetag: MergetagItem
  ) => void;
}

// 默认状态值，当 localStorage 中没有数据时使用
const defaultState: Partial<EditorConfigState> = {
  showLayer: true,
  showPreview: true,
  showLogic: true,
  showBlockPaths: true,
  showSourceCode: true,
  compactMode: false,
  controller: true,
  showAIIntegration: true,
  showFrozenBlocks: false,
  showCustomStyles: false,
  showResponsivePreview: true,
  showFavorites: true,
  theme: "blue",
  language: "en",

  // 默认 mergetags 数据
  mergetags: [
    {
      label: "Customer",
      value: "",
      children: [
        {
          label: "Customer name",
          value: "customer.name | title_case",
          type: "text",
        },
        {
          label: "Customer email",
          value: "customer.email",
          type: "text",
        },
        {
          label: "Customer country",
          value: "customer.country",
          type: "condition",
        },
        {
          label: "Customer sex",
          value: "customer.sex",
          type: "condition",
        },
      ],
    },
    {
      label: "Order",
      value: "",
      children: [
        {
          label: "Order number",
          value: "order.number",
          type: "text",
        },
        {
          label: "Order total",
          value: "order.total",
          type: "text",
        },
      ],
    },
    {
      label: "Social",
      value: "",
      children: [
        {
          label: "Facebook",
          value: "social.facebook",
          type: "image",
        },
        {
          label: "Twitter",
          value: "social.twitter",
          type: "image",
        },
      ],
    },

    {
      label: "Product",
      value: "",
      children: [
        {
          label: "Product list",
          value: "products",
          type: "repeat",
        },
        {
          label: "Product title",
          value: "item.title",
          type: "text",
        },
        {
          label: "Product price",
          value: "item.price",
          type: "text",
        },
      ],
    },
    {
      label: "Common",
      value: "",
      children: [
        {
          label: "Unsubscribe link",
          value: "common.unsubscribe",
          type: "link",
        },
        {
          label: "Company logo",
          value: "common.logo",
          type: "image",
        },
        {
          label: "Website",
          value: "common.website",
          type: "link",
        },
      ],
    },
  ],

  // 默认 mergetagsData 数据
  mergetagsData: {
    order: {
      number: "Shopify#1001",
      total: "$100.00",
    },
    customer: {
      name: "john wilson",
      email: "easy-email-pro@example.com",
      country: "Canada",
      sex: "female",
    },
    social: {
      facebook:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/rxxjzpus7vy2cxi0vp6hr_image.png",
      twitter:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/psyz-f1z-ryy95lv2rh7g_image.png",
    },
    products: [
      {
        title: "#product 1",
        image:
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/jwbrgf-j9czz8k8qh3f2d_image.png",
      },
      {
        title: "#product 2",
        image:
          "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/3kcq5x39xga7wdbaprvb-_image.png",
      },
    ],
    colors: {
      red: "#ff0000",
      yellow: "#ffff00",
      blue: "#0000ff",
    },
    common: {
      unsubscribe: "http://www.easyemail.pro",
      website: "http://www.easyemail.pro",
      logo: "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/g3ehq-wtmes20zksyny0p_mv1spd10wcqm0wryjhusm.png",
    },
  },
};

export const useEditorConfigStore = create<EditorConfigState>()(
  persist(
    (set, get) => ({
      ...defaultState,

      toggleLayer: (value) =>
        set((state) => ({
          showLayer: value !== undefined ? value : !state.showLayer,
        })),
      togglePreview: (value) =>
        set((state) => ({
          showPreview: value !== undefined ? value : !state.showPreview,
        })),
      toggleLogic: (value) =>
        set((state) => ({
          showLogic: value !== undefined ? value : !state.showLogic,
        })),
      toggleBlockPaths: (value) =>
        set((state) => ({
          showBlockPaths: value !== undefined ? value : !state.showBlockPaths,
        })),
      toggleSourceCode: (value) =>
        set((state) => ({
          showSourceCode: value !== undefined ? value : !state.showSourceCode,
        })),
      toggleCompactMode: (value) =>
        set((state) => ({
          compactMode: value !== undefined ? value : !state.compactMode,
        })),
      toggleController: (value) =>
        set((state) => ({
          controller: value !== undefined ? value : !state.controller,
        })),
      toggleAIIntegration: (value) =>
        set((state) => ({
          showAIIntegration:
            value !== undefined ? value : !state.showAIIntegration,
        })),
      toggleFrozenBlocks: (value) =>
        set((state) => ({
          showFrozenBlocks:
            value !== undefined ? value : !state.showFrozenBlocks,
        })),
      toggleCustomStyles: (value) =>
        set((state) => ({
          showCustomStyles:
            value !== undefined ? value : !state.showCustomStyles,
        })),
      toggleResponsivePreview: (value) =>
        set((state) => ({
          showResponsivePreview:
            value !== undefined ? value : !state.showResponsivePreview,
        })),
      toggleFavorites: (value) =>
        set((state) => ({
          showFavorites: value !== undefined ? value : !state.showFavorites,
        })),
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),

      // Merge Tags操作方法
      setMergetags: (mergetags) => set({ mergetags }),
      setMergetagsData: (mergetagsData) => set({ mergetagsData }),
      updateMergetagData: (path, value) =>
        set((state) => {
          const newData = { ...state.mergetagsData };
          lodashSet(newData, path, value);
          return { mergetagsData: newData };
        }),
      updateMergetag: (path, value) =>
        set((state) => {
          const newMergetags = JSON.parse(JSON.stringify(state.mergetags));
          lodashSet(newMergetags, path, value);
          return { mergetags: newMergetags };
        }),
      removeMergetag: (tag) =>
        set((state) => {
          // 创建新的数组来保持不可变性
          const newMergetags = JSON.parse(JSON.stringify(state.mergetags));

          // 遍历所有类别
          for (let i = 0; i < newMergetags.length; i++) {
            const category = newMergetags[i];

            if (category.children) {
              // 使用严格相等比较关键属性
              category.children = category.children.filter(
                (child) =>
                  !(
                    child.label === tag.label &&
                    child.value === tag.value &&
                    child.type === tag.type
                  )
              );
            }
          }

          return { mergetags: newMergetags };
        }),
      addMergetagCategory: (category) =>
        set((state) => {
          const newMergetags = [...state.mergetags, category];
          return { mergetags: newMergetags };
        }),
      addMergetagToCategory: (categoryIndex, mergetag) =>
        set((state) => {
          const newMergetags = JSON.parse(JSON.stringify(state.mergetags));

          const childrenPath = `[${categoryIndex}].children`;
          const children = lodashGet(newMergetags, childrenPath) || [];
          children.push(mergetag);

          lodashSet(newMergetags, childrenPath, children);

          return { mergetags: newMergetags };
        }),
    }),
    {
      name: "editor-config-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        showLayer: state.showLayer,
        showPreview: state.showPreview,
        showLogic: state.showLogic,
        showBlockPaths: state.showBlockPaths,
        showSourceCode: state.showSourceCode,
        compactMode: state.compactMode,
        controller: state.controller,
        showAIIntegration: state.showAIIntegration,
        showFrozenBlocks: state.showFrozenBlocks,
        showCustomStyles: state.showCustomStyles,
        showResponsivePreview: state.showResponsivePreview,
        showFavorites: state.showFavorites,
        theme: state.theme,
        language: state.language,
        mergetags: state.mergetags,
        mergetagsData: state.mergetagsData,
      }),
    }
  )
);
