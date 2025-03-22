import React from "react";
import {
  Modal,
  Tabs,
  Switch,
  Typography,
  Space,
  Select,
  Button,
  Popover,
  Image,
  Input,
} from "@arco-design/web-react";

import { Info } from "lucide-react";
import { useEditorConfigStore } from "../store/editorConfigStore";
import localsData from "easy-email-pro-localization/locales/locales.json";
import { IconPlus } from "@arco-design/web-react/icon";
import { get } from "lodash";

const TabPane = Tabs.TabPane;

interface ConfigOption {
  key: string;
  title: string;
  description: string;
  stateKey: string;
  toggleFn: string;
  previewImage?: string;
}

export const EditorConfigModal = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [visible, setVisible] = React.useState(false);
  const config = useEditorConfigStore();

  const displayOptions: ConfigOption[] = [
    {
      key: "compactMode",
      title: "Double Sidebar Layout",
      description: "When enabled, displays two sidebars instead of one",
      stateKey: "compactMode",
      toggleFn: "toggleCompactMode",
    },
    {
      key: "showCustomStyles",
      title: "Custom Styling",
      description: "Enable advanced styling options and custom CSS editor",
      stateKey: "showCustomStyles",
      toggleFn: "toggleCustomStyles",
      previewImage:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/tnzvplugd04lvofnatkdv_image.png",
    },
    {
      key: "showAIIntegration",
      title: "AI Assistant",
      description: "Enable AI-powered content generation and optimization",
      stateKey: "showAIIntegration",
      toggleFn: "toggleAIIntegration",
      previewImage:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/zo8rvp_wswq_v_y1lruhk_image.png",
    },
    {
      key: "showFrozenBlocks",
      title: "Frozen Blocks",
      description:
        "Display and manage locked content blocks that cannot be edited",
      stateKey: "showFrozenBlocks",
      toggleFn: "toggleFrozenBlocks",
    },
    {
      key: "showLayer",
      title: "Show Layer",
      description: "Display the layer panel in the editor",
      stateKey: "showLayer",
      toggleFn: "toggleLayer",
    },
    {
      key: "controller",
      title: "Show Controller",
      description: "Display the controller in the editor",
      stateKey: "controller",
      toggleFn: "toggleController",
      previewImage:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/eu2oorfjd5or8gmshzhvq_image.png",
    },

    {
      key: "showLogic",
      title: "Show Logic",
      description: "Display the logic panel in the editor",
      stateKey: "showLogic",
      toggleFn: "toggleLogic",
      previewImage:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/jeeyfekaje_mfugqqj63b_image.png",
    },
    {
      key: "showBlockPaths",
      title: "Show Block Paths",
      description: "Display block paths in the editor",
      stateKey: "showBlockPaths",
      toggleFn: "toggleBlockPaths",
      previewImage:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/jwdfp2eze_ohma3mfpjeq_image.png",
    },

    {
      key: "showResponsivePreview",
      title: "Responsive Preview",
      description:
        "Toggle between desktop and mobile views for responsive design",
      stateKey: "showResponsivePreview",
      toggleFn: "toggleResponsivePreview",
      previewImage:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/revyl9j_3ml7qeogrsve9_image.png",
    },
    {
      key: "showFavorites",
      title: "Universal Element Panel",
      description:
        "Display saved favorite elements and templates for quick access",
      stateKey: "showFavorites",
      toggleFn: "toggleFavorites",
      previewImage:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/erj5tgxzezfumb1trzoav_image.png",
    },
    {
      key: "showSourceCode",
      title: "Show Source Code",
      description: "Display the source code panel in the editor",
      stateKey: "showSourceCode",
      toggleFn: "toggleSourceCode",
    },
  ];

  const themeOptions = [
    { label: "Retro", value: "retro" },
    { label: "Purple", value: "purple" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Red", value: "red" },
  ];

  return (
    <>
      <div onClick={() => setVisible(true)}>{children}</div>

      <Modal
        title={
          <div style={{ textAlign: "left" }}>Email Editor Configuration</div>
        }
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        style={{ width: 800, height: "90vh", overflow: "auto" }}
      >
        <Tabs defaultActiveTab="displayOptions">
          <TabPane key="displayOptions" title="Display Options">
            <Space direction="vertical" style={{ width: "100%" }}>
              <div
                key="theme-option"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <Typography.Title heading={6} style={{ margin: 0 }}>
                      Theme Color
                    </Typography.Title>
                    <Typography.Text type="secondary">
                      Select your preferred editor theme
                    </Typography.Text>
                  </div>
                </div>

                <Button.Group style={{ flexShrink: 0 }}>
                  {themeOptions.map((option, index) => (
                    <Button
                      type={
                        config.theme === option.value ? "primary" : "default"
                      }
                      key={index}
                      value={option.value}
                      onClick={() => config.setTheme(option.value)}
                      style={{ padding: "0 10px" }}
                    >
                      {option.label}
                    </Button>
                  ))}
                </Button.Group>
              </div>

              <div
                key="language-option"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <Typography.Title heading={6} style={{ margin: 0 }}>
                      Language
                    </Typography.Title>
                    <Typography.Text type="secondary">
                      Choose interface language
                    </Typography.Text>
                  </div>
                </div>

                <Select
                  style={{ width: "150px", flexShrink: 0 }}
                  value={config.language}
                  onChange={(value) => {
                    config.setLanguage(value);
                    setTimeout(() => {
                      window.location.reload();
                    }, 100);
                  }}
                  options={Object.keys(localsData).map((item) => ({
                    label: item,
                    value: item,
                  }))}
                />
              </div>

              {displayOptions.map((option) => (
                <div
                  key={option.key}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                      <Typography.Title heading={6} style={{ margin: 0 }}>
                        {option.title}
                      </Typography.Title>
                      <Typography.Text type="secondary">
                        {option.description}
                      </Typography.Text>
                    </div>

                    {option.previewImage && (
                      <Popover
                        content={
                          <div style={{ maxWidth: "300px" }}>
                            <Image
                              src={option.previewImage}
                              width="100%"
                              preview={false}
                            />
                          </div>
                        }
                        position="right"
                        trigger="hover"
                      >
                        <Info
                          size={18}
                          style={{
                            marginLeft: "8px",
                            color: "var(--color-text-3)",
                            cursor: "pointer",
                          }}
                        />
                      </Popover>
                    )}
                  </div>

                  <Switch
                    checked={(config as any)[option.stateKey]}
                    onChange={(checked) =>
                      (config as any)[option.toggleFn](checked)
                    }
                  />
                </div>
              ))}
            </Space>
          </TabPane>
          <TabPane key="mergeTags" title="Merge Tags">
            <div style={{ padding: "0" }}>
              <Typography.Text
                type="secondary"
                style={{ display: "block", marginBottom: "20px" }}
              >
                Configure merge tags for dynamic content in your emails
              </Typography.Text>

              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 150px 1fr 60px",
                    gap: "10px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  <div>Tag Name</div>
                  <div>Tag Value</div>
                  <div>Type</div>
                  <div>Default Value</div>
                  <div></div>
                </div>

                {config.mergetags
                  .flatMap((category, categoryIndex) =>
                    (category.children || [])
                      .filter(
                        (tag) =>
                          !["repeat", "condition"].includes(tag.type || "")
                      )
                      .map((tag, tagIndex) => {
                        const pathToTag = `[${categoryIndex}].children[${tagIndex}]`;
                        const pathValue = tag.value.split(" | ")[0];

                        return (
                          <div
                            key={`${category.label}-${tagIndex}`}
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr 150px 1fr 60px",
                              gap: "10px",
                              alignItems: "center",
                              marginBottom: "10px",
                              padding: "10px 0",
                              borderBottom: "1px solid #eee",
                            }}
                          >
                            <Input
                              placeholder="Tag Name"
                              value={tag.label}
                              onChange={(value) => {
                                config.updateMergetag(
                                  `${pathToTag}.label`,
                                  value
                                );
                              }}
                            />
                            <Input
                              placeholder="Tag Value"
                              value={tag.value}
                              onChange={(value) => {
                                config.updateMergetag(
                                  `${pathToTag}.value`,
                                  value
                                );
                              }}
                            />
                            <Select
                              value={tag.type || "text"}
                              onChange={(value) => {
                                config.updateMergetag(
                                  `${pathToTag}.type`,
                                  value
                                );
                              }}
                              style={{ width: "100%" }}
                            >
                              <Select.Option value="text">Text</Select.Option>
                              <Select.Option value="image">Image</Select.Option>
                              <Select.Option value="link">Link</Select.Option>
                            </Select>
                            <Input
                              placeholder="Default Value"
                              value={get(config.mergetagsData, pathValue)}
                              onChange={(value) => {
                                config.updateMergetagData(pathValue, value);
                              }}
                            />
                          </div>
                        );
                      })
                  )
                  .filter(Boolean)}
              </div>

              <Button
                type="outline"
                icon={<IconPlus />}
                onClick={() => {
                  config.addMergetagCategory({
                    label: "",
                    value: "",
                    children: [
                      {
                        label: "Customer phone",
                        value: `customer.phone`,
                        type: "text",
                      },
                    ],
                  });
                }}
              >
                Add Merge Tag
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};
