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
  sliderAdapter,
} from "easy-email-pro-theme";
import { PaddingField } from "./PaddingField";
export const buttonWidthAdapter = {
  formatter(val: string) {
    return val === "100%" ? "100%" : "auto";
  },
  normalize(val: string) {
    return val === "100%" ? "100%" : undefined;
  },
};

export const PageHeader = ({ nodePath }: { nodePath: Path }) => {
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
        <AttributeField.BackgroundColor
          path={nodePath}
          name="attributes.background-color"
          label={t("Background color")}
        />
        {/*  Logo */}
        <AttributeField.ImageUrl
          path={nodePath}
          name="data.content.0.attributes.src"
          label={t("Text")}
        />
      </Collapse.Item>
      <Collapse.Item name="0" header={t("Dimension")}>
        <AttributeField.SliderField
          label={t("Width")}
          path={nodePath}
          name="data.content.0.attributes.width"
          formItem={sliderAdapter}
          max={300}
          min={100}
        />
        <PaddingField path={nodePath} name="attributes" />
      </Collapse.Item>
    </CollapseWrapper>
  );
}
