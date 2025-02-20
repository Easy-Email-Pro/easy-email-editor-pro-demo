import React, { useCallback, useEffect, useState } from "react";
import { AttributeField, useEditorContext } from "easy-email-pro-theme";
import { Button, Form } from "@arco-design/web-react";
import { t } from "easy-email-pro-core";
import { useEventCallback } from "easy-email-pro-editor";
import { ProductItem } from "@/examples/DynamicCustomBlock/custom";
import { ProductsSheet } from "@/examples/DynamicCustomBlock/custom/Panel/ProductsSheet";

const ProductPicker = (
  props: Parameters<typeof AttributeField.FieldItem>[0]
) => {
  const total = 50;
  const size = 10;

  const [products, setProducts] = React.useState<ProductItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { setFieldValue } = useEditorContext();

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
          description: `This is a general product information description #${id}`,
          price: "$" + (+id + 10 * (index + 50)).toString(),
          comparePrice: "$" + (+id + 10 * (index + 50) + 50).toString(),
          image: images[index % 5],
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

  const onSelect = useEventCallback((ids: string[]) => {
    const last = ids[ids.length - 1];
    const matchProduct = products.find((item) => item.id === last);
    if (matchProduct) {
      setFieldValue(props.path, props.name, matchProduct);
    }

    setSelectedIds([last]);
  });

  return (
    <div>
      <Form.Item
        label={`Product`}
        wrapperCol={{ span: 14 }}
        labelCol={{ span: 7, offset: 1 }}
      >
        <ProductsSheet
          type="radio"
          loading={loading}
          products={products}
          onSelect={onSelect}
          productIds={selectedIds}
          size={size}
          total={total}
          onPaginationChange={getProducts}
        >
          <Button style={{ width: "100%" }} type="primary">
            {t("Change product")}
          </Button>
        </ProductsSheet>
      </Form.Item>
    </div>
  );
};

export { ProductPicker };
