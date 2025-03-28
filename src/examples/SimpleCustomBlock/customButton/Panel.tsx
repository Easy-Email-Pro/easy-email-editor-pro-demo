import { Collapse } from "@arco-design/web-react";
import { t } from "easy-email-pro-core";
import { useSelectedNode, ActiveTabKeys } from "easy-email-pro-editor";
import { Path } from "slate";
import {
  AttributesPanelWrapper,
  CollapseWrapper,
  AttributeField,
} from "easy-email-pro-theme";
import React from "react";

export const CustomButtonPanel = ({ nodePath }: { nodePath: Path }) => {
  return (
    <AttributesPanelWrapper>
      <AttributesContainer mode={ActiveTabKeys.DESKTOP} nodePath={nodePath} />
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
      <Collapse.Item name="1" header={t("Content")}>
        <AttributeField.TextField
          path={nodePath}
          name="data.content"
          label={t("Content")}
        />
      </Collapse.Item>
    </CollapseWrapper>
  );
}
