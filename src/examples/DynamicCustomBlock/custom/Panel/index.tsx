import React, { useCallback, useEffect, useMemo } from "react";
import { Collapse } from "@arco-design/web-react";
import { t } from "easy-email-pro-core";

import {
  AttributeField,
  AttributesPanelWrapper,
  ResponsiveField,
  ResponsiveTabs,
  useEditorContext,
} from "easy-email-pro-theme";
import { ActiveTabKeys, useSelectedNode } from "easy-email-pro-editor";
import { Path } from "slate";
import { ProductPicker } from "./ProductPicker";
import { ProductItem } from "..";
import { DynamicCustomElement } from "@/custom-types";

export interface ProductRecommendationProps {
  products: ProductItem[];
  selectedIds: string[];
  onSelect: (products: string[]) => void;
  loading: boolean;
  size: number;
  total: number;
  onPaginationChange: (params: {
    page: number;
    size: number;
    keyword?: string;
  }) => void;
}

function AttributesContainer({
  nodePath,
  mode,
  ...rest
}: {
  mode: ActiveTabKeys;
  nodePath: Path;
} & ProductRecommendationProps) {
  return (
    <AttributesPanelWrapper>
      <Collapse defaultActiveKey={["1", "2", "3", "4"]}>
        <Collapse.Item
          contentStyle={{ padding: 0 }}
          name="1"
          header={t("Product source")}
        >
          <ProductPicker {...rest} />
        </Collapse.Item>

        <Collapse.Item name="2" header={t("Product Setting")}>
          <AttributeField.SwitchField
            label={t("Show title")}
            path={nodePath}
            name={`data.showTitle`}
          />
          <AttributeField.SwitchField
            label={t("Show compare price")}
            path={nodePath}
            name={`data.showComparePrice`}
          />
          <AttributeField.TextField
            label={t("Button text")}
            path={nodePath}
            name={`buttonText`}
          />
        </Collapse.Item>
        <Collapse.Item name="4" header={t("Font")}>
          <ResponsiveField
            component={AttributeField.FontSize}
            label={t("Title font size")}
            name={`title-font-size`}
            path={nodePath}
          />
        </Collapse.Item>
        <Collapse.Item
          contentStyle={{ padding: 0 }}
          name="3"
          header={t("Dimension")}
        >
          <ResponsiveField
            name=""
            component={AttributeField.Padding}
            path={nodePath!}
          />
        </Collapse.Item>
        <Collapse.Item name="4" header={t("Color")}>
          <ResponsiveField
            component={AttributeField.ColorPickerField}
            label={t("Background color")}
            name={`background-color`}
            path={nodePath}
          />

          <ResponsiveField
            component={AttributeField.ColorPickerField}
            label={t("Product title")}
            name={`product-name-color`}
            path={nodePath}
          />

          <ResponsiveField
            component={AttributeField.ColorPickerField}
            label={t("Product price")}
            name={`product-price-color`}
            path={nodePath}
          />

          <ResponsiveField
            component={AttributeField.ColorPickerField}
            label={t("Compare price")}
            name={`product-compare-price-color`}
            path={nodePath}
          />

          <ResponsiveField
            component={AttributeField.ColorPickerField}
            label={t("Button")}
            name={`button-color`}
            path={nodePath}
          />
          <ResponsiveField
            component={AttributeField.ColorPickerField}
            label={t("Button text")}
            name={`button-text-color`}
            path={nodePath}
          />
        </Collapse.Item>
      </Collapse>
    </AttributesPanelWrapper>
  );
}

const total = 50;
const size = 10;

export const Panel = ({ nodePath }: { nodePath: Path }) => {
  const [products, setProducts] = React.useState<ProductItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const { selectedNode } = useSelectedNode<DynamicCustomElement>();

  const { setFieldValue } = useEditorContext();

  const selectedIds = useMemo(
    () => selectedNode?.data.productIds || [],
    [selectedNode?.data.productIds]
  );

  const getProducts = useCallback(
    async (params: { page: number; size: number }) => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const images = [
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/w0ox4nmnmpsvx0m2gqak__d7_lnruhgkolsln-jqfub.png",
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/llghcrwaextpwo9achp0d_7m3t7pdvklhfdpmejf7l6.png",
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/lzqtdy43rd793z26z8vxw_vow_gopf_7n99wx4qmozj.png",
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/w0ox4nmnmpsvx0m2gqak__d7_lnruhgkolsln-jqfub.png",
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/llghcrwaextpwo9achp0d_7m3t7pdvklhfdpmejf7l6.png",
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/lzqtdy43rd793z26z8vxw_vow_gopf_7n99wx4qmozj.png",
      ];
      const list = new Array(10).fill(true).map((_, index) => {
        const id = index + params.page * params.size;
        return {
          id: id.toString(),
          title: `Product #${id}`,
          price: "$" + (+id + 10 * (index + 50)).toString(),
          comparePrice: "$" + (+id + 10 * (index + 50) + 50).toString(),
          image: images[index % 10],
        };
      });
      setProducts(list);
      setLoading(false);
    },
    []
  );

  useEffect(() => {
    getProducts({ page: 1, size: 10 });
  }, [getProducts]);

  const onSelect = (ids: string[]) => {
    setFieldValue(nodePath, "data.productIds", ids);
  };

  return (
    <AttributesPanelWrapper>
      <ResponsiveTabs
        desktop={
          <AttributesContainer
            mode={ActiveTabKeys.DESKTOP}
            products={products}
            total={total}
            size={size}
            selectedIds={selectedIds}
            nodePath={nodePath}
            loading={loading}
            onSelect={onSelect}
            onPaginationChange={getProducts}
          />
        }
        mobile={
          <AttributesContainer
            mode={ActiveTabKeys.MOBILE}
            products={products}
            total={total}
            size={size}
            selectedIds={selectedIds}
            nodePath={nodePath}
            loading={loading}
            onSelect={onSelect}
            onPaginationChange={getProducts}
          />
        }
      />
    </AttributesPanelWrapper>
  );
};
