import { Button, Grid, Space, Table, Typography } from "@arco-design/web-react";
import { IconDelete, IconDragDotVertical } from "@arco-design/web-react/icon";
import React, { useCallback, useMemo, createContext, useContext } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { ColumnProps } from "@arco-design/web-react/es/Table";
import { ProductsSheet } from "./ProductsSheet";
import { ProductItem } from "..";
import { t } from "easy-email-pro-core";
import { ProductRecommendationProps } from ".";

// Context to pass drag handle props to child components
interface DragHandleContextValue {
  listeners?: React.HTMLAttributes<HTMLElement>;
  attributes?: React.HTMLAttributes<HTMLElement>;
}

const DragHandleContext = createContext<DragHandleContextValue>({});

const DragHandle: React.FC = () => {
  const { listeners, attributes } = useContext(DragHandleContext);
  console.log(listeners, attributes);
  return (
    <div
      {...listeners}
      {...attributes}
      style={{ cursor: "move", display: "flex", alignItems: "center" }}
    >
      <IconDragDotVertical
        style={{
          color: "rgb(92 95 98)",
          fontSize: 20,
        }}
      />
    </div>
  );
};

interface SortableRowProps {
  id: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

const SortableRow: React.FC<SortableRowProps> = ({ id, children, ...rest }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const contextValue = useMemo(
    () => ({ listeners, attributes }),
    [listeners, attributes]
  );

  return (
    <DragHandleContext.Provider value={contextValue}>
      <tr {...rest} ref={setNodeRef} style={style} >

        {children}
      </tr>
    </DragHandleContext.Provider>
  );
};

export function ProductPicker(props: ProductRecommendationProps) {
  const selectedProducts = useMemo(
    () =>
      (props.selectedIds || [])
        .map((id) =>
          [...props.products, ...props.products].find((item) => item.id === id)
        )
        .filter(Boolean) as ProductItem[],
    [props.products, props.selectedIds]
  );

  const onDeleteItem = useCallback(
    (id: string) => {
      props.onSelect(props.selectedIds.filter((item) => item !== id));
    },
    [props]
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const oldIndex = props.selectedIds.indexOf(active.id as string);
        const newIndex = props.selectedIds.indexOf(over.id as string);

        if (oldIndex !== -1 && newIndex !== -1) {
          const newData = arrayMove(props.selectedIds, oldIndex, newIndex);
          props.onSelect(newData);
        }
      }
    },
    [props]
  );

  const columns: ColumnProps<ProductItem>[] = useMemo(
    () => [
      {
        title: t("Content"),
        render: (_: unknown, record: ProductItem) => {
          return (
            <Space>
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundImage: `url(${record.image})`,
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  border: "1px solid #e8e8e8",
                }}
              />
              <Typography.Text ellipsis style={{ width: 150 }}>
                {record.title}
              </Typography.Text>
            </Space>
          );
        },
      },
      {
        title: t("Action"),
        render: (_: unknown, record: ProductItem) => {
          return (
            <Grid.Row
              style={{ flexWrap: "nowrap" }}
              justify="end"
              align="center"
            >
              <Button
                onClick={() => onDeleteItem(record.id)}
                icon={
                  <IconDelete style={{ fontSize: 20, color: "rgb(92 95 98)" }} />
                }
              />
              <Grid.Col span={3} />
              <DragHandle />
            </Grid.Row>
          );
        },
      },
    ],
    [onDeleteItem]
  );

  const components = useMemo(
    () => ({
      body: {
        tbody: (tbodyProps: React.HTMLAttributes<HTMLTableSectionElement>) => (
          <tbody {...tbodyProps} />
        ),
        row: (rowProps: {
          record?: ProductItem;
          children?: React.ReactNode;
          [key: string]: unknown;
        }) => {
          const { record, children, ...rest } = rowProps;
          if (!record) {
            return (
              <tr {...(rest as React.HTMLAttributes<HTMLTableRowElement>)}>
                {children}
              </tr>
            );
          }
          return (
            <SortableRow id={record.id} {...rest}>
              {children}
            </SortableRow>
          );
        },
      },
    }),
    []
  );

  return (
    <>
      <div>
        <Grid.Row
          style={{ padding: "10px 16px 0px 16px" }}
          justify="space-between"
          align="center"
        >
          <Typography.Text>{t("Product")}</Typography.Text>
          <ProductsSheet
            {...props}
            onSelect={props.onSelect}
            productIds={props.selectedIds}
          >
            <Button style={{ padding: 0 }} type="text">
              {t("Add product")}
            </Button>
          </ProductsSheet>
        </Grid.Row>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={props.selectedIds}
            strategy={verticalListSortingStrategy}
          >
            <Table
              loading={props.loading}
              rowKey="id"
              showHeader={false}
              border={false}
              className="arco-drag-table-container-2"
              components={components}
              columns={columns}
              data={selectedProducts}
              pagination={false}
            />
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
}


