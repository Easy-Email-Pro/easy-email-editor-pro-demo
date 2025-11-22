import { useUpload } from "@/hooks/useUpload";
import { useCallback } from "react";
import { cloneDeep, random, uniqueId } from "lodash";
import React from "react";
import { Node } from "slate";
import { ReactEditor, useSlate } from "slate-react";
import { useSelectedNodePath } from "easy-email-pro-editor";
import {
  AssetManager,
  AssetManagerProps,
  FileItem,
  FolderItem,
} from "easy-email-pro-asset-manager";
import "easy-email-pro-asset-manager/lib/style.css";
import { Element, NodeUtils } from "easy-email-pro-core";

const assetMap = new Map<string, Array<FileItem | FolderItem>>();

export const AssetManagerModal = ({
  visible,
  setVisible,
  onSelect,
  accept,
}: {
  visible: AssetManagerProps["visible"];
  setVisible: AssetManagerProps["setVisible"];
  onSelect: (url: string) => void;
  accept?: string;
}) => {
  const { upload } = useUpload();

  const editor = useSlate();
  const selectedNodePath = useSelectedNodePath();

  const onCreateFile: AssetManagerProps["onCreateFile"] = useCallback(
    async (item) => {
      const newItem = {
        id: "new" + uniqueId(),
        type: "FILE",
        ...item,
        thumbnail: item.url + `?w=200`, // as thumbnail
      } as FileItem;
      const parent = assetMap.get(item.parentFolderId || "root");
      if (parent) {
        parent.push(newItem);
        assetMap.set(item.parentFolderId || "root", [...parent]);
        assetMap.set(item.parentFolderId || "root", [...parent]);
      }

      return newItem;
    },
    []
  );

  const onUpdateFile: AssetManagerProps["onUpdateFile"] = useCallback(
    async (item) => {
      const newFile = {
        ...item,
        thumbnail: item.url + `?w=200`, // as thumbnail
      };
      const parent = assetMap.get(item.parentFolderId || "root");
      parent?.forEach((item, index) => {
        if (item.id === newFile.id) {
          parent[index] = newFile;
          assetMap.set(item.parentFolderId || "root", [...parent]);
        }
      });
      return newFile;
    },
    []
  );

  const onUpdateFolder: AssetManagerProps["onUpdateFolder"] = useCallback(
    async (item) => {
      const newFolder = {
        ...item,
      };
      const parent = assetMap.get(item.parentFolderId || "root");
      parent?.forEach((item, index) => {
        if (item.id === newFolder.id) {
          parent[index] = newFolder;
          assetMap.set(item.parentFolderId || "root", [...parent]);
        }
      });
      return newFolder;
    },
    []
  );

  const onCreateFolder: AssetManagerProps["onCreateFolder"] = useCallback(
    async (item) => {
      const newFolder = {
        id: "new-folder" + uniqueId(),
        type: "FOLDER",
        parentFolderId: item.parentFolderId,
        name: item.name,
      } as FolderItem;
      const parent = assetMap.get(item.parentFolderId || "root");
      if (parent) {
        parent.push(newFolder);

        assetMap.set(item.parentFolderId || "root", [...parent]);
        assetMap.set(newFolder.id, []);
      }

      return newFolder;
    },
    []
  );

  const onDeleteFile: AssetManagerProps["onDeleteFile"] = useCallback(
    async (item) => {
      return true;
    },
    []
  );

  const onDeleteFolder: AssetManagerProps["onDeleteFolder"] =
    useCallback(async () => {
      // throw new Error("Folder is not empty");
      return true;
    }, []);

  const fetchData = useCallback(
    async (folderId?: string): Promise<Array<FileItem | FolderItem>> => {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, 1000)
      );

      if (assetMap.get(folderId || "root")) {
        return cloneDeep(assetMap.get(folderId || "root")!);
      }

      const count = random(2, 5, false);
      const resData = [
        {
          id: uniqueId(),
          name: `Folder${folderId ? `-${folderId}` : ""} `,
          type: "FOLDER",
          parentFolderId: null,
        },
        {
          id: uniqueId(),
          url: "https://cdn.shopify.com/test.pdf",
          thumbnail: "",
          type: "FILE" as const,
          name: `test`,
          parentFolderId: null,
        },
        ...new Array(count).fill(true).map((item, index) => {
          return {
            id: uniqueId(),
            url: "https://cdn.shopify.com/s/files/1/0656/7346/1987/products/WX20230906-184909_2x_865d6583-a975-4997-95d3-bcbd8661bf2c_430x.png",
            thumbnail:
              "https://cdn.shopify.com/s/files/1/0656/7346/1987/products/WX20230906-184909_2x_865d6583-a975-4997-95d3-bcbd8661bf2c_430x.png?v=1694138521",
            type: "FILE" as const,
            name: `image${folderId ? `-${index + 1}` : `-${index + 1}`} `,
            parentFolderId: null,
          };
        }),
      ] as Array<FileItem | FolderItem>;
      assetMap.set(folderId || "root", resData);
      return cloneDeep(resData);
    },
    []
  );

  const onSelectFile = useCallback(
    (url: string) => {
      if (
        ["png", "jpg", "jpeg", "gif"].some((item) =>
          url.replace(/\?.*/, "").endsWith(item)
        )
      ) {
        const node = Node.get(editor, selectedNodePath!) as Element;
        const domeNode = ReactEditor.toDOMNode(editor, node);
        if (NodeUtils.isImageElement(node)) {
          const width = domeNode.getBoundingClientRect().width;
          onSelect(url + `?w=${width}`);
        } else {
          onSelect(url);
        }
      } else {
        onSelect(url);
      }
    },
    [editor, onSelect, selectedNodePath]
  );

  return (
    <div>
      <AssetManager
        accept={accept}
        showUnacceptedFile
        setVisible={setVisible}
        visible={visible}
        request={fetchData}
        onSelect={onSelectFile}
        upload={upload}
        onCreateFile={onCreateFile}
        onCreateFolder={onCreateFolder}
        onUpdateFile={onUpdateFile}
        onUpdateFolder={onUpdateFolder}
        onDeleteFile={onDeleteFile}
        onDeleteFolder={onDeleteFolder}
      />
    </div>
  );
};
