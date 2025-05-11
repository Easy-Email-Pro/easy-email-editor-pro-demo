import React from "react";
import styles from "./index.module.less";
import { PageElement } from "easy-email-pro-core";
import { pushEvent } from "@/utils/pushEvent";

export interface EmailItemProps {
  item: {
    id: string;
    subject: string;
    thumbnail: string;
    content: PageElement;
    url?: string;
  };
  onClick?: (item: {
    id: string;
    subject: string;
    thumbnail: string;
    content: PageElement;
    url?: string;
  }) => void;
}
export const EmailItem = ({ item, onClick }: EmailItemProps) => {
  return (
    <a
      href={
        onClick ? undefined : item.url ? item.url : `/template?id=${item.id}`
      }
      onClick={() => {
        pushEvent({
          event: "email_item_click",
          payload: {
            id: item.id,
            subject: item.subject,
          },
        });
        onClick?.(item);
      }}
      target="_blank"
      style={{ color: "#000" }}
    >
      <div
        className={styles.wrapItem}
        style={{
          backgroundImage: `url(${item.thumbnail})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        <div className={styles.bottom}>
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {item.subject}
          </div>
        </div>
      </div>
    </a>
  );
};
