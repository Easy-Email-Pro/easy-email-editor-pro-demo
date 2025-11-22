import { Collapse } from "@arco-design/web-react";
import { t } from "easy-email-pro-core";
import { useSelectedNode } from "easy-email-pro-editor";
import { ActiveTabKeys } from "easy-email-pro-editor";
import React, { useMemo } from "react";
import { Path } from "slate";
import {
  AttributeField,
  AttributesPanelWrapper,
  CollapseWrapper,
  ResponsiveTabs,
  ResponsiveField,
} from "easy-email-pro-theme";
export const buttonWidthAdapter = {
  formatter(val: string) {
    return val === "100%" ? "100%" : "auto";
  },
  normalize(val: string) {
    return val === "100%" ? "100%" : undefined;
  },
};

export const Button = ({ nodePath }: { nodePath: Path }) => {
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

  const textPath = useMemo(() => {
    return [...nodePath, 0];
  }, [nodePath]);

  if (!selectedNode) return null;

  return (
    <CollapseWrapper defaultActiveKey={["0", "1", "2", "3", "4"]}>
      <Collapse.Item name="3" header={t("Content")}>
        <div style={{ textAlign: "center", padding: 20 }}>
          Customize example ....
        </div>
        <div style={{ textAlign: "center", padding: 20 }}>
          Customize example ....
        </div>
        <div style={{ textAlign: "center", padding: 20 }}>
          Customize example ....
        </div>

        <AttributeField.ButtonContent
          path={textPath}
          name="text"
          label={t("Content")}
        />
        <AttributeField.Link path={nodePath} name="attributes.href" />
      </Collapse.Item>
      <Collapse.Item name="0" header={t("Dimension")}>
        <ResponsiveField
          label={t("Width")}
          component={AttributeField.ButtonGroupField}
          path={nodePath}
          name="width"
          options={[
            { label: t("Auto"), value: "auto" },
            { label: t("Full width"), value: "100%" },
          ]}
          formItem={buttonWidthAdapter}
        />
        <ResponsiveField
          component={AttributeField.Height}
          path={nodePath}
          name="height"
        />
        <ResponsiveField
          label={t("Inner padding")}
          fieldName="inner-padding"
          component={AttributeField.Padding}
          path={nodePath}
          name=""
        />
        <ResponsiveField
          component={AttributeField.Padding}
          path={nodePath}
          name=""
        />
      </Collapse.Item>
      <Collapse.Item name="1" header={t("Typography")}>
        <ResponsiveField
          mode={mode}
          component={AttributeField.Buttons}
          path={nodePath}
          name=""
          type={selectedNode.type}
          hidePadding
        />
      </Collapse.Item>
      <Collapse.Item name="2" header={t("Border")}>
        <ResponsiveField
          component={AttributeField.Border}
          path={nodePath}
          name=""
        />
        <ResponsiveField
          component={AttributeField.BorderRadius}
          path={nodePath}
          name="border-radius"
        />
      </Collapse.Item>
      <Collapse.Item name="4" header={t("Block")}>
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
  );
}
