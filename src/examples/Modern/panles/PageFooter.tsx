import { Collapse } from "@arco-design/web-react";
import { t } from "easy-email-pro-core";
import { useSelectedNode } from "easy-email-pro-editor";
import { ActiveTabKeys } from "easy-email-pro-editor";
import React from "react";
import { Path } from "slate";
import {
  AttributeField,
  AttributesPanelWrapper,
  CollapseWrapper,
  ResponsiveTabs,
  ResponsiveField,
  pixelNumberAdapter,
  useEditorContext,
} from "easy-email-pro-theme";
export const buttonWidthAdapter = {
  formatter(val: string) {
    return val === "100%" ? "100%" : "auto";
  },
  normalize(val: string) {
    return val === "100%" ? "100%" : undefined;
  },
};

export const PageFooter = ({ nodePath }: { nodePath: Path }) => {
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
  const { values } = useEditorContext();
  if (!selectedNode) return null;

  return (
    <CollapseWrapper defaultActiveKey={["0", "1", "2", "3", "4"]}>
      <Collapse.Item name="3" header={t("Content")}>
        <AttributeField.RichTextField
          height="200px"
          path={nodePath}
          name="data.content.0.children.0.children.0"
          label={t("Text")}
          pageElement={values.content}
        />
        <AttributeField.BackgroundColor
          path={nodePath}
          name="attributes.background-color"
          label={t("Background color")}
        />
      </Collapse.Item>
      <Collapse.Item name="0" header={t("Dimension")}>
        <ResponsiveField
          label={t("Width")}
          component={AttributeField.Width}
          path={nodePath}
          name="width"
          formItem={pixelNumberAdapter}
        />
      </Collapse.Item>
    </CollapseWrapper>
  );
}
