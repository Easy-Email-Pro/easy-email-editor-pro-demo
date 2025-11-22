import { Button, Form, Message, Select } from "@arco-design/web-react";
import React, { useState } from "react";
import { WidgetElementEditor } from "./WidgetElementEditor";
import { WidgetElementPreview } from "./WidgetElementPreview";
import { IconCopy } from "@arco-design/web-react/icon";
import { motion } from "framer-motion"; // 需要安装: npm install framer-motion
import { SectionWidgetElement } from "easy-email-pro-core";
import { EmailTemplate } from "easy-email-pro-editor";
import { AttributeField, WidgetTypeOptions } from "easy-email-pro-theme";

import simple from "./simple.json";
import product from "./product1.json";
import product2 from "./product2.json";
import productList from "./productList.json";
import { ProductPicker } from "./components/ProductPicker";

WidgetTypeOptions.push({
  value: "product_picker",
  label: "Product Picker",
});

WidgetTypeOptions.push({
  value: "product_list_picker",
  label: "Product List Picker",
});

const demoMap: Record<string, EmailTemplate> = {
  simple: simple as EmailTemplate,
  product: product as EmailTemplate,
  product2: product2 as EmailTemplate,
  productList: productList as EmailTemplate,
};

const OldFieldItem = AttributeField.FieldItem;
AttributeField.FieldItem = (props) => {
  if (props.type === "product_picker") {
    return <ProductPicker {...props} />;
  }
  if (props.type === "product_list_picker") {
    return <ProductPicker {...props} multiple />;
  }
  return <OldFieldItem {...props} />;
};

export default function Studio() {
  const [activeTab, setActiveTab] = useState<"create" | "preview">("create");
  const [widgetElement, setWidgetElement] =
    useState<SectionWidgetElement | null>(null);

  const [selectedDemo, setSelectedDemo] = useState<string>("simple");
  const [initialValues, setInitialValues] = useState<EmailTemplate>(
    simple as EmailTemplate
  );

  const handleChangeDemo = (value: string) => {
    setInitialValues(demoMap[value]);

    setSelectedDemo(value);
  };

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Main content area */}
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Custom tab navigation */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#f5f5f5",
            position: "relative",
            padding: "0px 15px",
            alignItems: "center",
            justifyContent: "space-between",
            height: "66px",
          }}
        >
          <div style={{ paddingLeft: "15px" }}>
            <Form.Item
              label="Select demo"
              layout="inline"
              style={{ marginBottom: "0px" }}
            >
              <Select
                style={{ width: "200px" }}
                value={selectedDemo}
                options={[
                  { label: "Simple", value: "simple" },
                  { label: "Product", value: "product" },
                  { label: "Product2", value: "product2" },
                  { label: "Product List", value: "productList" },
                ]}
                onChange={handleChangeDemo}
              />
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#4169E1",
              borderRadius: "9999px",
              overflow: "hidden",
              padding: "0",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                padding: "10px 25px",
                cursor: "pointer",
                color: "#ffffff",
                backgroundColor:
                  activeTab === "create"
                    ? "transparent"
                    : "rgba(255,255,255,0.2)",
                fontWeight: "500",
                transition: "all 0.2s",
                borderRight: "1px solid rgba(255,255,255,0.2)",
              }}
              onClick={() => setActiveTab("create")}
            >
              Create Widget
            </div>
            <div
              style={{
                padding: "10px 25px",
                cursor: "pointer",
                color: "#ffffff",
                backgroundColor:
                  activeTab === "preview"
                    ? "transparent"
                    : "rgba(255,255,255,0.2)",
                fontWeight: "500",
                transition: "all 0.2s",
              }}
              onClick={() => setActiveTab("preview")}
            >
              Preview Widget
            </div>
          </div>

          {/* Extra button on the right */}
          <div
            style={{ paddingRight: "15px" }}
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(widgetElement));
              Message.success("Widget element copied to clipboard");
            }}
          >
            <Button size="large" icon={<IconCopy />} type="primary">
              Copy Widget
            </Button>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            flex: 1,
            height: "calc(100% - 66px)",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <motion.div
              animate={{
                x: activeTab === "create" ? 0 : "-100%",
                opacity: activeTab === "create" ? 1 : 0.8,
              }}
              initial={false}
              transition={{
                x: { type: "tween", ease: "easeInOut", duration: 0.3 },
                opacity: { duration: 0.2 },
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "#fff",
                zIndex: activeTab === "create" ? 2 : 1,
              }}
            >
              <WidgetElementEditor
                key={selectedDemo}
                initialValues={initialValues}
                onChange={setWidgetElement}
              />
            </motion.div>

            {/* 预览面板 */}
            <motion.div
              animate={{
                x: activeTab === "preview" ? 0 : "100%",
                opacity: activeTab === "preview" ? 1 : 0.8,
              }}
              initial={false}
              transition={{
                x: { type: "tween", ease: "easeInOut", duration: 0.3 },
                opacity: { duration: 0.2 },
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "#fff",
                zIndex: activeTab === "preview" ? 2 : 1,
              }}
            >
              {widgetElement && (
                <WidgetElementPreview
                  key={selectedDemo}
                  initialValues={initialValues}
                  widgetElement={widgetElement}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
