import {
  Button,
  Dropdown,
  Input,
  Menu,
  Message,
  Modal,
  PageHeader,
  Space,
  Tooltip,
  Typography,
} from "@arco-design/web-react";
import { IconMenu } from "@arco-design/web-react/icon";
import React from "react";
import {
  ActiveTabKeys,
  EmailTemplate,
  useEditorProps,
  useEditorState,
} from "easy-email-pro-editor";
import { mjmlToJson, useEditorContext } from "easy-email-pro-theme";
import {
  EditorCore,
  PageElement,
  PluginManager,
  easyEmailToEasyEmailPro,
} from "easy-email-pro-core";
import mjml from "mjml-browser";
import { saveAs } from "file-saver";
import { Uploader } from "@/utils/Uploader";
import { pick } from "lodash";
import { ReactEditor, useSlate } from "slate-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SendEmailModal } from "./SendEmailModal";
import { base64ToBlob, dom2Svg } from "@/utils/base64ToBlob";
import { Menu as LucideMenu, Rocket, Download, Settings } from "lucide-react";
import { EditorConfigModal } from "./EditorConfigModal";
import { EmailList } from "./EmailList";
import { Node } from "slate";

export const EditorHeader = (props: {
  prefix?: React.ReactNode;
  extra?: React.ReactNode;
  hideImport?: boolean;
  hideExport?: boolean;
}) => {
  const editor = useSlate();
  const [collapsed, setCollapsed] = React.useState(true);
  const [text, setText] = React.useState("");
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  const { values, submit, setFieldValue, mergetagsData, reset, dirty } =
    useEditorContext();
  const { setActiveTab, activeTab } = useEditorState();

  const activetabRef = React.useRef(ActiveTabKeys.DESKTOP);
  const onChange = (text: string) => {
    setFieldValue(null, "subject", text);
  };

  const { universalElementSetting } = useEditorProps();
  const [params] = useSearchParams();

  const isDev = params.get("dev") === "true";

  const onExportImage = async () => {
    Message.loading("Loading...");
    activetabRef.current = activeTab;

    setActiveTab(ActiveTabKeys.DESKTOP);
    const container = ReactEditor.toDOMNode(editor, Node.get(editor, [0]));

    const blob1 = await new Promise<any>(async (resolve) => {
      const png = await base64ToBlob(await dom2Svg(container));
      resolve(png);
    });
    setActiveTab(ActiveTabKeys.MOBILE);
    const container2 = ReactEditor.toDOMNode(editor, Node.get(editor, [0]));
    const mobileContainer = document.createElement("div");
    mobileContainer.style.width = "375px";
    mobileContainer.appendChild(container2.cloneNode(true));
    document.body.appendChild(mobileContainer);
    const blob2 = await new Promise<any>(async (resolve) => {
      const png = await base64ToBlob(await dom2Svg(mobileContainer));
      resolve(png);
    });
    mobileContainer.parentElement?.removeChild(mobileContainer);
    setActiveTab(activetabRef.current);

    saveAs(blob1, "desktop.png");
    saveAs(blob2, "mobile.png");
    Message.clear();
  };
  const onExportPDF = async () => {
    const printCSS = document.createElement("style");
    printCSS.innerHTML = `
    @media print {
      body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
      }
    }
  `;

    const contentWindow = ReactEditor.getWindow(editor);
    if (contentWindow) {
      contentWindow.document.body.appendChild(printCSS);
      contentWindow.print();
      printCSS.parentElement?.removeChild(printCSS);
    }
  };

  const onExportJSON = () => {
    navigator.clipboard.writeText(
      JSON.stringify(pick(values, ["subject", "content"]), null, 2)
    );
    saveAs(
      new Blob(
        [JSON.stringify(pick(values, ["content", "subject"]), null, 2)],
        { type: "application/json" }
      ),
      "easy-email-pro.json"
    );
  };

  const onExportMJML = () => {
    const mjmlStr = EditorCore.toMJML({
      element: values.content,
      mode: "production",
      universalElements: universalElementSetting,
      beautify: true,
    });

    navigator.clipboard.writeText(mjmlStr);
    saveAs(new Blob([mjmlStr], { type: "text/mjml" }), "easy-email-pro.mjml");
  };

  const onExportHTML = () => {
    const mjmlStr = EditorCore.toMJML({
      element: values.content,
      mode: "production",
      universalElements: universalElementSetting,
      beautify: true,
    });

    const html = mjml(mjmlStr).html;
    const finalMergeTag = PluginManager.renderWithData(html, mergetagsData);
    navigator.clipboard.writeText(html);
    saveAs(
      new Blob([finalMergeTag], { type: "text/html" }),
      "easy-email-pro.html"
    );
  };

  const onImportMJML = async () => {
    const uploader = new Uploader(() => Promise.resolve(""), {
      accept: "text/mjml",
      limit: 1,
    });

    const [file] = await uploader.chooseFile();
    const reader = new FileReader();
    const pageData = await new Promise<[string, EmailTemplate["content"]]>(
      (resolve, reject) => {
        reader.onload = function (evt) {
          if (!evt.target) {
            reject();
            return;
          }
          try {
            const pageData = mjmlToJson(evt.target.result as any);
            resolve([file.name, pageData]);
          } catch (error) {
            reject();
          }
        };
        reader.readAsText(file);
      }
    );

    reset({
      subject: pageData[0],
      content: pageData[1],
    });
  };

  const onImportMJMLJSON = async () => {
    const uploader = new Uploader(() => Promise.resolve(""), {
      accept: "application/json",
      limit: 1,
    });

    const [file] = await uploader.chooseFile();
    const reader = new FileReader();
    const pageData = await new Promise<[string, EmailTemplate["content"]]>(
      (resolve, reject) => {
        reader.onload = function (evt) {
          if (!evt.target) {
            reject();
            return;
          }
          try {
            const pageData = mjmlToJson(
              JSON.parse(evt.target.result as any) as any
            );
            resolve([file.name, pageData]);
          } catch (error) {
            reject();
          }
        };
        reader.readAsText(file);
      }
    );

    reset({
      subject: pageData[0],
      content: pageData[1],
    });
  };

  const onImportJSON = async () => {
    const uploader = new Uploader(() => Promise.resolve(""), {
      accept: "application/json",
      limit: 1,
    });

    const [file] = await uploader.chooseFile();
    const reader = new FileReader();
    const emailTemplate = await new Promise<EmailTemplate>(
      (resolve, reject) => {
        reader.onload = function (evt) {
          if (!evt.target) {
            reject();
            return;
          }
          try {
            const template = JSON.parse(
              evt.target.result as any
            ) as EmailTemplate;
            resolve(template);
          } catch (error) {
            reject();
          }
        };
        reader.readAsText(file);
      }
    );

    reset({
      subject: emailTemplate.subject,
      content: emailTemplate.content,
    });
  };

  const onImportEasyEmailJSON = async () => {
    const uploader = new Uploader(() => Promise.resolve(""), {
      accept: "application/json",
      limit: 1,
    });

    const [file] = await uploader.chooseFile();
    const reader = new FileReader();
    const emailTemplate = await new Promise<EmailTemplate>(
      (resolve, reject) => {
        reader.onload = function (evt) {
          if (!evt.target) {
            reject();
            return;
          }
          try {
            const template = JSON.parse(evt.target.result as any);
            const content = easyEmailToEasyEmailPro(template.content);
            if (!template.content) {
              Message.error(`Invalid template, need content params`);
              reject();
              return;
            }

            resolve({
              subject: template.subject,
              content: content,
            });
          } catch (error) {
            console.log(error);
            reject();
          }
        };
        reader.readAsText(file);
      }
    );

    reset({
      subject: emailTemplate.subject,
      content: emailTemplate.content,
    });
  };

  const onSwitchTemplate = (item: {
    id: string;
    subject: string;
    thumbnail: string;
    content: PageElement;
    url?: string | undefined;
  }) => {
    reset({
      content: item.content,
      subject: item.subject,
    });
    setCollapsed(true);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <PageHeader
          backIcon
          onBack={() => navigate("/")}
          className="editor-header"
          style={{
            backgroundColor: "rgb(var(--primary-6))",
            color: "#fff !important",
            height: 66,
          }}
          subTitle={
            <div
              style={{
                height: 40,
                position: "absolute",
                minWidth: 300,
                top: 18,
              }}
            >
              <Typography.Title
                heading={5}
                style={{
                  margin: 0,
                  color: "var(--color-white)",
                }}
                editable={{
                  onChange: onChange,
                }}
              >
                {values.subject}
              </Typography.Title>
            </div>
          }
          extra={
            <div style={{ marginRight: 0 }}>
              <Space>
                {props.prefix}
                <Tooltip content="Editor Configuration">
                  <EditorConfigModal>
                    <Button icon={<Settings size={16} />}>
                      <strong>&nbsp;Configuration</strong>
                    </Button>
                  </EditorConfigModal>
                </Tooltip>

                <Tooltip content="Examples">
                  <Button
                    icon={<LucideMenu size={16} />}
                    onClick={() => setCollapsed((v) => !v)}
                  >
                    <strong>&nbsp;Features & templates</strong>
                  </Button>
                </Tooltip>

                {!props.hideImport && isDev && (
                  <Dropdown
                    droplist={
                      <Menu>
                        <Menu.Item key="MJML" onClick={onImportMJML}>
                          Import from MJML
                        </Menu.Item>
                        <Menu.Item key="MJML-JSON" onClick={onImportMJMLJSON}>
                          Import from MJML JSON
                        </Menu.Item>

                        <Menu.Item key="JSON" onClick={onImportJSON}>
                          Import from JSON
                        </Menu.Item>
                        <Menu.Item
                          key="Easy Email JSON"
                          onClick={onImportEasyEmailJSON}
                        >
                          Import from Easy Email JSON
                        </Menu.Item>
                      </Menu>
                    }
                  >
                    <Button>
                      <strong>Import</strong>
                    </Button>
                  </Dropdown>
                )}

                {!props.hideExport && (
                  <Dropdown
                    droplist={
                      <Menu>
                        <Menu.Item key="Export MJML" onClick={onExportMJML}>
                          Export MJML
                        </Menu.Item>
                        <Menu.Item key="Export HTML" onClick={onExportHTML}>
                          Export HTML
                        </Menu.Item>
                        <Menu.Item key="Export JSON" onClick={onExportJSON}>
                          Export JSON
                        </Menu.Item>
                        <Menu.Item key="Export Image" onClick={onExportImage}>
                          Export Image
                        </Menu.Item>
                        <Menu.Item key="Export PDF" onClick={onExportPDF}>
                          Export PDF
                        </Menu.Item>
                      </Menu>
                    }
                  >
                    <Button icon={<Download size={16} />}>
                      <strong>&nbsp;Export</strong>
                    </Button>
                  </Dropdown>
                )}
                {/* <Button disabled={!dirty} onClick={() => submit()}>
                  <strong>Submit</strong>
                </Button> */}
                {isDev && <SendEmailModal />}
                {/* <Button
                  icon={<HelpCircle size={20} />}
                  target="_blank"
                  href="https://docs.easyemail.pro/docs/intro?utm_source=demo"
                >
                  <strong>&nbsp;Documentation</strong>
                </Button> */}
                <Button target="_blank" href="/components">
                  <strong>&nbsp;Blocks</strong>
                </Button>
                <Button
                  icon={<Rocket size={20} />}
                  target="_blank"
                  href="https://www.easyemail.pro/?#trial?utm_source=demo"
                >
                  <strong>&nbsp;Start Trial</strong>
                </Button>

                {props?.extra}
                <div />
              </Space>
            </div>
          }
        />
        <Modal
          visible={!collapsed}
          onCancel={() => setCollapsed(true)}
          style={{ width: "90vw", height: "90vh", overflow: "auto" }}
          footer={null}
        >
          <div style={{ backgroundColor: "#fff", padding: 16, height: "100%" }}>
            <EmailList onClick={onSwitchTemplate} />
          </div>
        </Modal>
      </div>

      <style>{`
      .editor-header .arco-page-header-back { color: var(--color-white); }
      .editor-header .arco-page-header-back:hover:before { background-color: transparent !important; }
      .editor-header .arco-typography-operation-edit { color: var(--color-white); }
      .editor-header .arco-typography-operation-edit { color: var(--color-white);background-color: transparent; }
      .editor-header .arco-typography-operation-edit:hover { color: var(--color-white);background-color: transparent; }
      `}</style>

      <Modal
        visible={visible}
        title="Import"
        onCancel={() => setVisible(false)}
      >
        <Input.TextArea value={text} onChange={setText} rows={10} />
      </Modal>
      {/* <AutoSaveAndRestore name="temp" /> */}
    </>
  );
};
