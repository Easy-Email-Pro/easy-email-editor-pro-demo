import { useCallback } from "react";
import axios from "axios";
import { get } from "lodash";
import { nanoid } from "nanoid";
const imageCompression = import("browser-image-compression");

export function useUpload() {
  const upload = useCallback(async (blob: Blob) => {
    if (!blob) {
      throw new Error("Missing file");
    }

    let file = blob;
    if (!(blob.type.includes("gif") || get(blob, "name", "").includes("gif"))) {
      file = await (
        await imageCompression
      ).default(blob as File, {
        maxWidthOrHeight: 800,
        fileType: blob.type,
        maxSizeMB: 2,
      });
    }

    console.log("Compression", file.size / (1024 * 1024 * 2));
    if (file.size > 1024 * 1024 * 2) {
      throw new Error(`File size too large`);
    }
    const data = new FormData();
    data.append("file", file);

    const res = await axios.post<{ url: string }>(
      "https://admin.easyemail.pro/api/upload",
      data,
      {
        params: {
          file_name: get(file, "name", nanoid().toLocaleLowerCase() + ".png"),
          mime_type: blob.type,
        },
      },
    );
    return res.data.url;
  }, []);

  return {
    upload,
  };
}
