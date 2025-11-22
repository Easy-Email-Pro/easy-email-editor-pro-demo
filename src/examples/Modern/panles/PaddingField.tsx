import { Form, Slider } from "@arco-design/web-react";
import { ArrowUpDown, ArrowLeftRight } from "lucide-react";
import { t } from "easy-email-pro-core";
import { useEditorContext, useElementDefault } from "easy-email-pro-theme";
import { useSelectedNode } from "easy-email-pro-editor";
import React, { useCallback, useState, useMemo, useEffect } from "react";
import { Path } from "slate";
import { debounce } from "lodash";

interface PaddingFieldProps {
  path: Path;
  name?: string;
  fieldName?: string;
}

export const PaddingField: React.FC<PaddingFieldProps> = ({
  path,
  name = "",
  fieldName = "padding",
}) => {
  const { getFieldValue, setFieldValue } = useEditorContext();
  const { selectedNode } = useSelectedNode();
  const prefix = name ? `${name}.` : "";

  // Get default element values (similar to enhancer)
  const defaultElement = useElementDefault({
    type: selectedNode?.type || null,
    path: path,
  });

  // Get current values with fallback to defaults
  const top = useMemo(() => {
    return (
      getFieldValue(path, `${prefix}${fieldName}-top`) ||
      (defaultElement.attributes as any)?.[`${fieldName}-top`] ||
      "0px"
    );
  }, [path, prefix, fieldName, getFieldValue, defaultElement]);

  const bottom = useMemo(() => {
    return (
      getFieldValue(path, `${prefix}${fieldName}-bottom`) ||
      (defaultElement.attributes as any)?.[`${fieldName}-bottom`] ||
      "0px"
    );
  }, [path, prefix, fieldName, getFieldValue, defaultElement]);

  const left = useMemo(() => {
    return (
      getFieldValue(path, `${prefix}${fieldName}-left`) ||
      (defaultElement.attributes as any)?.[`${fieldName}-left`] ||
      "0px"
    );
  }, [path, prefix, fieldName, getFieldValue, defaultElement]);

  const right = useMemo(() => {
    return (
      getFieldValue(path, `${prefix}${fieldName}-right`) ||
      (defaultElement.attributes as any)?.[`${fieldName}-right`] ||
      "0px"
    );
  }, [path, prefix, fieldName, getFieldValue, defaultElement]);

  // Calculate display values from current padding
  const calculatedVerticalPadding = useMemo(() => {
    const topValue = parseInt(top.replace("px", "")) || 0;
    const bottomValue = parseInt(bottom.replace("px", "")) || 0;
    return topValue === bottomValue
      ? topValue
      : Math.round((topValue + bottomValue) / 2);
  }, [top, bottom]);

  const calculatedHorizontalPadding = useMemo(() => {
    const leftValue = parseInt(left.replace("px", "")) || 0;
    const rightValue = parseInt(right.replace("px", "")) || 0;
    return leftValue === rightValue
      ? leftValue
      : Math.round((leftValue + rightValue) / 2);
  }, [left, right]);

  const [verticalPadding, setVerticalPadding] = useState(
    calculatedVerticalPadding
  );
  const [horizontalPadding, setHorizontalPadding] = useState(
    calculatedHorizontalPadding
  );

  // Sync state with calculated values when they change externally
  useEffect(() => {
    setVerticalPadding(calculatedVerticalPadding);
  }, [calculatedVerticalPadding]);

  useEffect(() => {
    setHorizontalPadding(calculatedHorizontalPadding);
  }, [calculatedHorizontalPadding]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleVerticalChange = useCallback(
    debounce(
      (value: string) => {
        setFieldValue(path, `${prefix}${fieldName}-top`, value);
        setFieldValue(path, `${prefix}${fieldName}-bottom`, value);
      },
      200,
      {
        maxWait: 200,
      }
    ),
    [path, prefix, setFieldValue]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleHorizontalChange = useCallback(
    debounce(
      (value: string) => {
        setFieldValue(path, `${prefix}${fieldName}-left`, value);
        setFieldValue(path, `${prefix}${fieldName}-right`, value);
      },
      200,
      {
        maxWait: 200,
      }
    ),
    [path, prefix, setFieldValue]
  );

  return (
    <>
      <Form.Item
        label={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{t("Padding")}</span>
            <span>
              <ArrowUpDown size={16} />
            </span>
          </div>
        }
        labelCol={{ span: 7, offset: 1 }}
        wrapperCol={{ span: 14 }}
        style={{ marginBottom: 16 }}
      >
        <Slider
          value={verticalPadding}
          onChange={(value: number | number[]) => {
            const numValue = Array.isArray(value) ? value[0] : value;
            const pxValue = `${numValue}px`;
            setVerticalPadding(numValue);
            handleVerticalChange(pxValue);
          }}
          min={0}
          max={100}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        label={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span></span>
            <span>
              <ArrowLeftRight size={16} />
            </span>
          </div>
        }
        labelCol={{ span: 7, offset: 1 }}
        wrapperCol={{ span: 14 }}
        style={{ marginBottom: 16 }}
      >
        <Slider
          value={horizontalPadding}
          onChange={(value: number | number[]) => {
            const numValue = Array.isArray(value) ? value[0] : value;
            const pxValue = `${numValue}px`;
            setHorizontalPadding(numValue);
            handleHorizontalChange(pxValue);
          }}
          min={0}
          max={100}
          style={{ width: "100%" }}
        />
      </Form.Item>
    </>
  );
};
