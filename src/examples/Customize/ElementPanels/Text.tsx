import { Collapse } from "@arco-design/web-react";
import { NodeUtils, t } from "easy-email-pro-core";
import { useEditorProps, useSelectedNode } from "easy-email-pro-editor";
import { ActiveTabKeys } from "easy-email-pro-editor";
import React from "react";
import { Path } from "slate";
import {
  AttributeField,
  AttributesPanelWrapper,
  CollapseWrapper,
  SharedComponents,
  ResponsiveTabs,
  ResponsiveField,
} from "easy-email-pro-theme";

export const Text = ({ nodePath }: { nodePath: Path }) => {
  return (
    <AttributesPanelWrapper>
      <ResponsiveTabs
        desktop={
          <AttributesContainer
            mode={ActiveTabKeys.DESKTOP}
            nodePath={nodePath}
          />
        }
        mobile={
          <AttributesContainer
            mode={ActiveTabKeys.MOBILE}
            nodePath={nodePath}
          />
        }
      />
    </AttributesPanelWrapper>
  );
};

function AttributesContainer({
  nodePath,
  mode,
}: {
  mode: ActiveTabKeys;
  nodePath: Path;
}) {
  const { selectedNode } = useSelectedNode();
  const { showTextHTMLMode } = useEditorProps();

  if (!selectedNode) return null;

  return (
    <div>
      <CollapseWrapper defaultActiveKey={["0", "1", "2"]}>
        <Collapse.Item
          name="0"
          header={t("Dimension")}
          extra={
            showTextHTMLMode ? <SharedComponents.TextHTMLEditor /> : undefined
          }
        >
          <div style={{ textAlign: "center", padding: 20 }}>
            Customize example ....
          </div>
          <div style={{ textAlign: "center", padding: 20 }}>
            Customize example ....
          </div>
          <div style={{ textAlign: "center", padding: 20 }}>
            Customize example ....
          </div>

          <ResponsiveField
            component={AttributeField.Height}
            path={nodePath}
            name="height"
          />
          <ResponsiveField
            component={AttributeField.Padding}
            path={nodePath}
            name=""
          />
        </Collapse.Item>
        <Collapse.Item name="1" header={t("Typography")}>
          {mode === ActiveTabKeys.DESKTOP &&
            !NodeUtils.isTextListElement(selectedNode) && (
              <AttributeField.Heading
                path={nodePath}
                formItem={{
                  labelCol: { span: 8, style: { lineHeight: 1.15 } },
                  wrapperCol: { span: 14, offset: 0 },
                }}
              />
            )}
          <ResponsiveField
            mode={mode}
            component={AttributeField.Typography}
            path={nodePath}
            name=""
            type={selectedNode.type}
          />
        </Collapse.Item>
        <Collapse.Item name="2" header={t("Block")}>
          <ResponsiveField
            component={AttributeField.BackgroundColor}
            path={nodePath}
            name="container-background-color"
          />
          <ResponsiveField
            component={AttributeField.TextAlign}
            path={nodePath}
            name={`align`}
          />
        </Collapse.Item>
      </CollapseWrapper>
    </div>
  );
}
