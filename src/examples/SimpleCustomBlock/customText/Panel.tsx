import { Collapse } from "@arco-design/web-react";
import { t } from "easy-email-pro-core";
import { useSelectedNode, ActiveTabKeys } from "easy-email-pro-editor";
import { Path } from "slate";
import {
  ResponsiveTabs,
  AttributesPanelWrapper,
  CollapseWrapper,
  ResponsiveField,
  AttributeField,
} from "easy-email-pro-theme";
import React from "react";

export const CustomTextPanel = ({ nodePath }: { nodePath: Path }) => {
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

  if (!selectedNode) return null;

  return (
    <CollapseWrapper defaultActiveKey={["0", "1"]}>
      <Collapse.Item name="0" header={t("Settings")}>
        <ResponsiveField
          label="Color"
          component={AttributeField.ColorPickerField}
          path={nodePath}
          name="color"
        />
      </Collapse.Item>
    </CollapseWrapper>
  );
}
