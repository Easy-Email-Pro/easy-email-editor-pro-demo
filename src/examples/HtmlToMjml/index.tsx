import React, { useEffect, useMemo, useRef, useState } from "react";
import { EditorCore } from "easy-email-pro-core";
import mjml2html from "mjml-browser";
import { useNavigate } from "react-router-dom";

const API_BASE = "https://api-ai.beacas.com";

export const HTML_TO_MJML_STORAGE_KEY = "html-to-mjml-result";

type ResultTab = "mjml" | "json" | "preview" | "html";
type InputView = "text" | "html" | "image";

type ImageData = { base64: string; type: string; name: string };

const authReady = EditorCore.auth(process.env.CLIENT_ID || "FREE").catch(
  (e) => {
    console.warn("EditorCore.auth failed:", e);
  }
);

async function fileToBase64(file: File): Promise<ImageData> {
  const buf = await file.arrayBuffer();
  const bytes = new Uint8Array(buf);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(
      null,
      Array.from(bytes.subarray(i, i + chunk))
    );
  }
  return {
    base64: btoa(binary),
    type: file.type || "image/png",
    name: file.name,
  };
}

export default function HtmlToMjml() {
  const navigate = useNavigate();

  const [htmlInput, setHtmlInput] = useState("");
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [inputView, setInputView] = useState<InputView>("text");

  const [mjmlOut, setMjmlOut] = useState("");
  const [jsonOut, setJsonOut] = useState("");
  const [htmlOut, setHtmlOut] = useState("");
  const [resultTab, setResultTab] = useState<ResultTab>("preview");
  const [convertedJson, setConvertedJson] = useState<unknown>(null);

  const [status, setStatus] = useState("");
  const [statusKind, setStatusKind] = useState<"" | "ok" | "err">("");
  const [loading, setLoading] = useState(false);
  const [elapsed, setElapsed] = useState("0.0s");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const inputPreviewRef = useRef<HTMLIFrameElement>(null);
  const previewRef = useRef<HTMLIFrameElement>(null);

  const setMsg = (msg: string, kind: "" | "ok" | "err" = "") => {
    setStatus(msg);
    setStatusKind(kind);
  };

  const onChooseHtmlFile = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setImageData(null);
    const text = await f.text();
    setHtmlInput(text);
    setInputView("text");
    setMsg("Loaded " + f.name);
    e.target.value = "";
  };

  const onChooseImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const data = await fileToBase64(f);
    setImageData(data);
    setHtmlInput("");
    setInputView("image");
    setMsg(
      "Loaded image " + f.name + " (" + (f.size / 1024).toFixed(1) + " KB)"
    );
    e.target.value = "";
  };

  const onClear = () => {
    setHtmlInput("");
    setImageData(null);
    setInputView("text");
    setMsg("");
  };

  const onTogglePreviewInput = () => {
    if (imageData) {
      setMsg("Image mode — preview not applicable", "err");
      return;
    }
    if (inputView === "html") {
      setInputView("text");
      return;
    }
    if (!htmlInput.trim()) {
      setMsg("Nothing to preview", "err");
      return;
    }
    setInputView("html");
  };

  useEffect(() => {
    if (inputView !== "html") return;
    const doc = inputPreviewRef.current?.contentDocument;
    if (!doc) return;
    doc.open();
    doc.write(htmlInput);
    doc.close();
  }, [inputView, htmlInput]);

  const renderPreview = (mjmlSrc: string, suffix = "") => {
    try {
      const { html, errors } = mjml2html(mjmlSrc, {
        validationLevel: "soft",
      });
      setHtmlOut(html);
      const doc = previewRef.current?.contentDocument;
      if (doc) {
        doc.open();
        doc.write(html);
        doc.close();
      }
      if (errors && errors.length) {
        setMsg("Rendered (" + errors.length + " warnings)" + suffix, "ok");
      } else {
        setMsg("Rendered" + suffix, "ok");
      }
    } catch (e: any) {
      setMsg("Render failed: " + e.message + suffix, "err");
    }
  };

  const onConvert = async () => {
    const html = htmlInput.trim();
    if (!html && !imageData) {
      setMsg("Please paste/upload HTML or choose an image first", "err");
      return;
    }
    setLoading(true);
    setConvertedJson(null);
    setMsg("Converting… usually takes 1-5 minutes, please be patient");
    const t0 = Date.now();
    const timer = window.setInterval(() => {
      setElapsed(((Date.now() - t0) / 1000).toFixed(1) + "s");
    }, 100);
    let quotaSuffix = "";
    try {
      const body: Record<string, unknown> = { provider: "gemini" };
      if (imageData) {
        body.image = imageData.base64;
        body.imageType = imageData.type;
      } else {
        body.html = html;
      }
      const qs = window.location.search || "";
      const r = await fetch(`${API_BASE}/convert${qs}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const remaining = r.headers.get("x-ratelimit-remaining");
      const limit = r.headers.get("x-ratelimit-limit");
      const bypassed = r.headers.get("x-ratelimit-bypassed") === "true";
      if (bypassed) {
        quotaSuffix = " · quota: unlimited";
      } else if (remaining != null && limit != null) {
        quotaSuffix = " · quota: " + remaining + "/" + limit + " left today";
      }
      const txt = await r.text();
      if (!r.ok) throw new Error(txt);

      let pageJson: unknown;
      try {
        pageJson = JSON.parse(txt);
      } catch {
        throw new Error("Invalid JSON response: " + txt.slice(0, 200));
      }
      setJsonOut(JSON.stringify(pageJson, null, 2));
      setConvertedJson(pageJson);

      await authReady;
      const mjmlSrc = EditorCore.toMJML({
        element: pageJson as any,
        mode: "production",
      });
      setMjmlOut(mjmlSrc);

      const dt = ((Date.now() - t0) / 1000).toFixed(1);
      setMsg("Done in " + dt + "s" + quotaSuffix, "ok");
      renderPreview(mjmlSrc, quotaSuffix);
      setResultTab("preview");
    } catch (e: any) {
      setMsg("Failed: " + e.message + quotaSuffix, "err");
    } finally {
      window.clearInterval(timer);
      setLoading(false);
    }
  };

  const onEditInEditor = () => {
    if (!convertedJson) return;
    window.localStorage.setItem(
      HTML_TO_MJML_STORAGE_KEY,
      JSON.stringify(convertedJson)
    );
    navigate("/full");
  };

  const onCopy = async () => {
    const src =
      resultTab === "html"
        ? htmlOut
        : resultTab === "json"
        ? jsonOut
        : mjmlOut;
    if (!src) return;
    await navigator.clipboard.writeText(src);
    setMsg("Copied", "ok");
  };

  const statusColor = useMemo(() => {
    if (statusKind === "ok") return "#1a7f37";
    if (statusKind === "err") return "#cf222e";
    return "#656d76";
  }, [statusKind]);

  return (
    <div style={styles.root}>
      <header style={styles.header}>
        <h1 style={styles.h1}>
          HTML → MJML
          <span style={styles.betaBadge} title="Beta — still under testing">
            BETA
          </span>
        </h1>
        <button
          type="button"
          style={styles.fileBtn}
          onClick={() => fileInputRef.current?.click()}
        >
          Choose HTML file
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".html,.htm,text/html"
          hidden
          onChange={onChooseHtmlFile}
        />
        <button
          type="button"
          style={styles.fileBtn}
          onClick={() => imageInputRef.current?.click()}
        >
          Choose image
        </button>
        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={onChooseImage}
        />
        <button
          type="button"
          style={styles.convertBtn}
          disabled={loading}
          onClick={onConvert}
        >
          Convert
        </button>
        <span style={{ ...styles.status, color: statusColor }}>{status}</span>
      </header>

      <main style={styles.main}>
        <section style={styles.panel}>
          <div style={styles.panelHead}>
            <span style={styles.panelTitle}>Input HTML</span>
            <button type="button" style={styles.tab} onClick={onClear}>
              Clear
            </button>
            <button
              type="button"
              style={{
                ...styles.tab,
                ...(inputView === "html" ? styles.tabActive : {}),
              }}
              onClick={onTogglePreviewInput}
            >
              Preview
            </button>
          </div>
          <div style={styles.panelBody}>
            <textarea
              style={{
                ...styles.textarea,
                display: inputView === "text" ? "block" : "none",
              }}
              spellCheck={false}
              placeholder="Paste HTML here, or use the 'Choose HTML file' / 'Choose image' button above"
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
            />
            <iframe
              ref={inputPreviewRef}
              style={{
                ...styles.iframe,
                display: inputView === "html" ? "block" : "none",
              }}
              sandbox="allow-same-origin"
            />
            {inputView === "image" && imageData && (
              <div style={styles.imageWrap}>
                <img
                  style={styles.imagePreview}
                  src={`data:${imageData.type};base64,${imageData.base64}`}
                  alt=""
                />
              </div>
            )}
          </div>
        </section>

        <section style={styles.panel}>
          <div style={styles.panelHead}>
            <span style={styles.panelTitle}>Result</span>
            {(["mjml", "json", "preview", "html"] as const).map((t) => (
              <button
                key={t}
                type="button"
                style={{
                  ...styles.tab,
                  ...(resultTab === t ? styles.tabActive : {}),
                }}
                onClick={() => setResultTab(t)}
              >
                {t === "mjml"
                  ? "MJML"
                  : t === "json"
                  ? "JSON"
                  : t === "preview"
                  ? "Preview"
                  : "Rendered HTML"}
              </button>
            ))}
            <button type="button" style={styles.tab} onClick={onCopy}>
              Copy
            </button>
            {convertedJson != null && (
              <button
                type="button"
                style={styles.editBtn}
                onClick={onEditInEditor}
              >
                Edit in Editor
              </button>
            )}
          </div>
          <div style={styles.panelBody}>
            <textarea
              style={{
                ...styles.textarea,
                ...styles.readonly,
                display: resultTab === "mjml" ? "block" : "none",
              }}
              readOnly
              spellCheck={false}
              placeholder="Converted MJML will appear here"
              value={mjmlOut}
            />
            <textarea
              style={{
                ...styles.textarea,
                ...styles.readonly,
                display: resultTab === "json" ? "block" : "none",
              }}
              readOnly
              spellCheck={false}
              placeholder="JSON returned by API"
              value={jsonOut}
            />
            <iframe
              ref={previewRef}
              style={{
                ...styles.iframe,
                display: resultTab === "preview" ? "block" : "none",
              }}
              sandbox="allow-same-origin"
            />
            <textarea
              style={{
                ...styles.textarea,
                ...styles.readonly,
                display: resultTab === "html" ? "block" : "none",
              }}
              readOnly
              spellCheck={false}
              value={htmlOut}
            />
            {loading && (
              <div style={styles.loading}>
                <div style={styles.spinner} />
                <div>Calling AI to convert…</div>
                <div style={styles.loadingHint}>
                  Usually takes 1-5 minutes, please be patient
                </div>
                <div style={styles.elapsed}>{elapsed}</div>
              </div>
            )}
          </div>
        </section>
      </main>

      <style>{spinnerKeyframes}</style>
    </div>
  );
}

const spinnerKeyframes = `@keyframes mjml-gen-spin { to { transform: rotate(360deg); } }`;

const styles: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
    fontSize: 13,
    color: "#1f2328",
    background: "#f6f8fa",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 16px",
    background: "#fff",
    borderBottom: "1px solid #d0d7de",
    flexWrap: "wrap",
  },
  h1: {
    fontSize: 14,
    fontWeight: 600,
    margin: "0 8px 0 0",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  },
  betaBadge: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.5,
    padding: "2px 6px",
    borderRadius: 10,
    background: "linear-gradient(135deg, #ff8a00, #e52e71)",
    color: "#fff",
    lineHeight: 1,
    textTransform: "uppercase",
  },
  fileBtn: {
    padding: "5px 14px",
    border: "1px solid rgba(27,31,36,.15)",
    borderRadius: 6,
    background: "#f6f8fa",
    color: "#1f2328",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
  },
  convertBtn: {
    padding: "5px 14px",
    border: "1px solid rgba(27,31,36,.15)",
    borderRadius: 6,
    background: "#1f883d",
    color: "#fff",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
  },
  editBtn: {
    padding: "5px 14px",
    border: "1px solid rgba(27,31,36,.15)",
    borderRadius: 6,
    background: "#0969da",
    color: "#fff",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
  },
  status: {
    marginLeft: "auto",
    fontSize: 12,
  },
  main: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 1,
    background: "#d0d7de",
    flex: 1,
    minHeight: 0,
  },
  panel: {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
  },
  panelHead: {
    display: "flex",
    gap: 4,
    padding: "6px 12px",
    background: "#f6f8fa",
    borderBottom: "1px solid #d0d7de",
    alignItems: "center",
  },
  panelTitle: {
    fontWeight: 600,
    color: "#656d76",
    fontSize: 12,
    marginRight: "auto",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  tab: {
    padding: "4px 10px",
    border: 0,
    background: "transparent",
    fontSize: 12,
    color: "#656d76",
    cursor: "pointer",
    borderRadius: 4,
  },
  tabActive: {
    background: "#fff",
    color: "#1f2328",
    boxShadow: "0 0 0 1px #d0d7de",
  },
  panelBody: { flex: 1, minHeight: 0, position: "relative" },
  textarea: {
    width: "100%",
    height: "100%",
    border: 0,
    outline: "none",
    padding: 12,
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
    fontSize: 12,
    lineHeight: 1.5,
    resize: "none",
    boxSizing: "border-box",
  },
  readonly: { background: "#f6f8fa" },
  iframe: { width: "100%", height: "100%", border: 0, background: "#fff" },
  imageWrap: {
    height: "100%",
    overflow: "auto",
    background: "#f6f8fa",
    padding: 12,
    textAlign: "center",
  },
  imagePreview: {
    maxWidth: "100%",
    height: "auto",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  loading: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 12,
    background: "rgba(255,255,255,.92)",
    zIndex: 10,
    color: "#656d76",
    fontSize: 13,
  },
  loadingHint: { fontSize: 12, color: "#8b949e" },
  spinner: {
    width: 32,
    height: 32,
    border: "3px solid #d0d7de",
    borderTopColor: "#1f883d",
    borderRadius: "50%",
    animation: "mjml-gen-spin .8s linear infinite",
  },
  elapsed: {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    color: "#1f883d",
    fontWeight: 600,
  },
};
