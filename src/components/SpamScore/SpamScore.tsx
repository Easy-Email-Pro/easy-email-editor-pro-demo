import React from "react";
import { Drawer, Space, Button, Typography } from "@arco-design/web-react";
import { useSpamScore } from "./useSpamScore";
import { useEditorContext } from "easy-email-pro-theme";
import { useEditorProps } from "easy-email-pro-editor";
import { EditorCore, PluginManager } from "easy-email-pro-core";
import mjml from "mjml-browser";

const IconWarning = (props: React.ComponentProps<"svg">) => (
  <svg
    width="13"
    height="12"
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.8777 8.99999L6.87766 1.99999C6.79044 1.84609 6.66396 1.71808 6.51112 1.62902C6.35828 1.53997 6.18455 1.49304 6.00766 1.49304C5.83077 1.49304 5.65704 1.53997 5.5042 1.62902C5.35136 1.71808 5.22488 1.84609 5.13766 1.99999L1.13766 8.99999C1.0495 9.15267 1.00327 9.32594 1.00366 9.50224C1.00405 9.67855 1.05105 9.85161 1.13988 10.0039C1.22872 10.1562 1.35623 10.2823 1.50951 10.3694C1.66278 10.4565 1.83636 10.5016 2.01266 10.5H10.0127C10.1881 10.4998 10.3604 10.4535 10.5123 10.3656C10.6642 10.2778 10.7903 10.1515 10.8779 9.99955C10.9656 9.84756 11.0117 9.67518 11.0116 9.49973C11.0116 9.32428 10.9654 9.15193 10.8777 8.99999Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.0127 4.5V6.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.0127 8.5H6.01853"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
function toSorted<T>(array: T[], sorter: (a: T, b: T) => number): T[] {
  const cloned = [...array];
  cloned.sort(sorter);
  return cloned;
}

function sanitize(text: string): string {
  return text.replace(/[<>]/g, "");
}

interface SpamScoreProps {
  visible: boolean;
  onClose: () => void;
}

const SpamScore: React.FC<SpamScoreProps> = ({ visible, onClose }) => {
  const { values, mergetagsData } = useEditorContext();
  const { universalElementSetting } = useEditorProps();

  // Get HTML markup
  const markup = React.useMemo(() => {
    try {
      const mjmlStr = EditorCore.toMJML({
        element: values.content,
        mode: "production",
        universalElements: universalElementSetting,
        beautify: true,
      });

      const html = mjml(mjmlStr).html;
      return PluginManager.renderWithData(html, mergetagsData || {});
    } catch (error) {
      console.error("Failed to generate HTML:", error);
      return "";
    }
  }, [values.content, universalElementSetting, mergetagsData]);

  // Extract plain text from HTML
  const plainText = React.useMemo(() => {
    if (!markup) return "";
    const div = document.createElement("div");
    div.innerHTML = markup;
    return div.textContent || div.innerText || "";
  }, [markup]);

  const [result, { loading, load }] = useSpamScore({
    markup,
    plainText,
  });

  React.useEffect(() => {
    if (visible && markup) {
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, markup]);

  const handleRefresh = () => {
    load();
  };

  return (
    <Drawer
      width={600}
      title="Spam Score"
      visible={visible}
      onCancel={onClose}
      footer={
        <Space>
          <Button onClick={handleRefresh} loading={loading}>
            Refresh
          </Button>
          <Button type="primary" onClick={onClose}>
            Close
          </Button>
        </Space>
      }
    >
      {loading && !result ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <Typography.Text type="secondary">
            Checking spam score...
          </Typography.Text>
        </div>
      ) : result ? (
        <div>
          <div
            style={{
              borderBottom: "1px solid var(--color-border-2)",
              padding: "16px 0",
              position: "sticky",
              top: 0,
              backgroundColor: "var(--color-bg-1)",
              zIndex: 1,
            }}
          >
            <Space style={{ width: "100%", justifyContent: "space-between" }}>
              <Space>
                <IconWarning
                  style={{
                    fontSize: 18,
                    color:
                      result.points === 0
                        ? "var(--color-success-light-1)"
                        : result.points > 0 && result.points <= 1.5
                          ? undefined
                          : result.points > 1.5 && result.points <= 3
                            ? "var(--color-warning-light-1)"
                            : result.points > 3 && result.points < 5
                              ? "var(--color-warning-light-1)"
                              : "var(--color-danger-light-1)",
                  }}
                />
                <Typography.Text style={{ textTransform: "uppercase" }}>
                  Score
                </Typography.Text>
              </Space>
              <Typography.Text type="secondary">
                {result.points === 0
                  ? "Congratulations! Your email is clean of abuse indicators."
                  : "Higher scores are better"}
              </Typography.Text>
              <Space>
                <Typography.Text
                  style={{
                    fontSize: 24,
                    color:
                      result.points === 0
                        ? "#00B42A"
                        : result.points > 0 && result.points <= 1.5
                          ? undefined
                          : result.points > 1.5 && result.points <= 3
                            ? "#FFB020"
                            : result.points > 3 && result.points < 5
                              ? "#FFB020"
                              : "#F53F3F",
                  }}
                >
                  {(10 - result.points).toFixed(1)}
                </Typography.Text>
                <Typography.Text type="secondary">/ 10</Typography.Text>
              </Space>
            </Space>
          </div>
          <div style={{ marginTop: 16 }}>
            {toSorted(result.checks, (a, b) => b.points - a.points).map(
              (check) => (
                <div
                  key={check.name}
                  style={{
                    padding: "12px 0",
                    borderBottom: "1px solid var(--color-border-2)",
                  }}
                >
                  <Space
                    style={{ width: "100%", justifyContent: "space-between" }}
                  >
                    <Space>
                      <IconWarning
                        style={{
                          fontSize: 16,
                          color:
                            check.points > 1 && check.points <= 2
                              ? "#FFB020"
                              : check.points > 2 && check.points <= 3
                                ? "#FFB020"
                                : check.points > 3
                                  ? "#F53F3F"
                                  : undefined,
                        }}
                      />
                      <Typography.Text
                        style={{ textTransform: "uppercase", fontSize: 12 }}
                      >
                        {sanitize(check.name)}
                      </Typography.Text>
                    </Space>
                    <Typography.Text
                      type="secondary"
                      style={{ flex: 1, marginLeft: 16 }}
                    >
                      {check.description}
                    </Typography.Text>
                    <Typography.Text
                      style={{
                        fontFamily: "monospace",
                        color:
                          check.points > 1 && check.points <= 2
                            ? "var(--color-warning-light-1)"
                            : check.points > 2 && check.points <= 3
                              ? "var(--color-warning-light-1)"
                              : check.points > 3
                                ? "var(--color-danger-light-1)"
                                : undefined,
                      }}
                    >
                      -{check.points.toFixed(1)}
                    </Typography.Text>
                  </Space>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <Typography.Text type="secondary">
            No spam score data available
          </Typography.Text>
        </div>
      )}
    </Drawer>
  );
};

export default SpamScore;
