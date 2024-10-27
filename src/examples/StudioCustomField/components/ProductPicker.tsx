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
        "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116393/easy-email-pro/jwfkjrlq8izkekcx7ad9.png",
        "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116371/easy-email-pro/as41p2ahhff377y8c9s8.png",
        "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116331/easy-email-pro/mrzhiom54uhmxu5fqfs8.png",
        "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116393/easy-email-pro/jwfkjrlq8izkekcx7ad9.png",
        "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116371/easy-email-pro/as41p2ahhff377y8c9s8.png",
        "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116331/easy-email-pro/mrzhiom54uhmxu5fqfs8.png",
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
