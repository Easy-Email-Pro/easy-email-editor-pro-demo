import { Button, Grid, Link, Space } from "@arco-design/web-react";
import { TourProvider, useTour, ProviderProps } from "@reactour/tour";
import { useSelectedNode } from "easy-email-pro-editor";
import React, { useEffect, useMemo } from "react";
import HotKeys from "./HotKeys";

export const Tutorial = ({ children }: { children: React.ReactNode }) => {
  return (
    <TourProvider
      steps={[]}
      showBadge={false}
      showDots={false}
      showNavigation={false}
      showCloseButton={false}
      onClickMask={() => {
        //
      }}
    >
      {children}
      <TourProviderInteract />
    </TourProvider>
  );
};

const TourProviderInteract = () => {
  const {
    isOpen,
    currentStep,
    setIsOpen,
    setCurrentStep,
    setSteps,
    nextButton,
  } = useTour();

  const { setSelectedNodePath } = useSelectedNode();

  const hasDisplay = localStorage.getItem("tutorial");

  const steps: ProviderProps["steps"] = useMemo(() => {
    return [
      {
        padding: 0,
        position: "center",
        stepInteraction: false,
        selector: undefined,
        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                Welcome to our editor! In the following steps, we will guide you
                through the basic features of the editor.
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    setCurrentStep((t) => t + 1);
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
      {
        padding: 0,
        position: "center",
        stepInteraction: false,
        selector: ".easy-email-pro-block-sidebar",
        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                In the Element tab, you can find various basic elements like{" "}
                <b>text</b>,<b>images</b>, and <b>buttons</b>. Drag and drop
                these elements to build your email content.
              </p>
              <p>
                You can also choose layouts, such as the number of columns per
                row, to organize your content.
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    const ele = document.querySelector(
                      ".easy-email-pro-block-sidebar-style-title"
                    );
                    if (ele instanceof HTMLElement) {
                      ele.click();
                      setCurrentStep((t) => t + 1);
                    }
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
      {
        padding: 0,
        position: "center",
        stepInteraction: false,
        selector: ".easy-email-pro-block-sidebar",

        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                In the Style tab, you can configure various global settings,
                including global fonts, buttons, links, and web fonts
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    const ele = document.querySelector(
                      ".easy-email-pro-block-sidebar-layer-title"
                    );
                    if (ele instanceof HTMLElement) {
                      ele.click();
                      setCurrentStep((t) => t + 1);
                    }
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
      {
        padding: 0,
        position: "center",
        stepInteraction: false,
        selector: ".easy-email-pro-block-sidebar",

        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                In the Layer tab, manage all element layers in the email, making
                it easier to handle complex layouts.
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    const ele = document.querySelector(
                      ".easy-email-pro-block-sidebar-element-title"
                    );
                    if (ele instanceof HTMLElement) {
                      ele.click();
                    }

                    setSelectedNodePath([0, 2, 0, 0]);
                    setCurrentStep((t) => t + 1);
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
      {
        padding: 0,
        position: "center",
        stepInteraction: false,
        selector: ".easy-email-pro-block-sidebar",

        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                When you select a block, you can configure different properties
                in the element panel on the right, and it will be displayed in
                the editor in real-time.
              </p>
              <p>
                By default, mobile will inherit the properties of the desktop.
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    const ele = document.querySelector(
                      ".easy-email-pro-responsive-tabs-display-title"
                    );
                    if (ele instanceof HTMLElement) {
                      ele.click();
                      setCurrentStep((t) => t + 1);
                    }
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
      {
        padding: 0,
        position: "center",
        stepInteraction: false,
        selector: ".easy-email-pro-block-sidebar",

        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                In the "Display" panel, you can control the visibility of
                elements on different devices simultaneously and configure
                dynamic display logic (default generates Liquid template code).
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    const ele = document.querySelector(
                      ".easy-email-pro-responsive-tabs-source-code-title"
                    );
                    if (ele instanceof HTMLElement) {
                      ele.click();

                      setCurrentStep((t) => t + 1);
                    }
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
      {
        padding: 0,
        position: "center",
        stepInteraction: false,
        selector: ".easy-email-pro-block-sidebar",

        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                Each element is a JSON object. You can view or modify the
                corresponding configurations in the source code panel and view
                the pre-generated MJML code.
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    setSelectedNodePath([0]);
                    setCurrentStep((t) => t + 1);
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },

      {
        padding: 0,
        position: "center",
        stepInteraction: false,
        selector: ".easy-email-pro-editor-tabs",

        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                At the top of the editor, you can switch between desktop and
                mobile views for editing, clear the canvas, and preview.
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    const ele = document.querySelector(
                      ".easy-email-pro-editor-tabs-preview-btn"
                    );
                    if (ele instanceof HTMLElement) {
                      ele.click();
                      setTimeout(() => {
                        setCurrentStep((t) => t + 1);
                      }, 500);
                    }
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
      {
        padding: 1,
        position: "bottom",
        stepInteraction: false,
        selector: ".easy-email-pro-preview-header-variables-btn",

        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                During preview, it will combine with preloaded dynamic data to
                generate the display.
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    const ele = document.querySelector(
                      ".easy-email-pro-preview-header-variables-btn"
                    );
                    if (ele instanceof HTMLElement) {
                      ele.click();
                      setTimeout(() => {
                        setCurrentStep((t) => t + 1);
                      }, 100);
                    }
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
      {
        padding: 0,
        position: "center",
        stepInteraction: false,
        selector: ".easy-email-pro-preview-variables-view",

        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                However, you can also directly modify dynamic variables to see
                the display in different scenarios. Previews will update in
                real-time after modifying variables.
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    const ele = document.querySelector(
                      ".easy-email-pro-preview-header-close-btn"
                    );
                    if (ele instanceof HTMLElement) {
                      ele.click();
                      setCurrentStep((t) => t + 1);
                    }
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
      {
        padding: 0,
        position: (_, rect) => {
          const iframe = document
            .getElementById("easy-email-pro-iframe")!
            .getBoundingClientRect();
          return [iframe.left + rect.left - 100, iframe.top + rect.top + 30];
        },
        stepInteraction: false,
        selector: ".easy-email-pro-editor-controller",

        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                There is a controller function in the bottom right corner that
                allows you to navigate through your operation history and zoom
                the view. We have also built-in many shortcuts to simplify your
                operations.
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    setCurrentStep((t) => t + 1);
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
      {
        selector: undefined,
        padding: 0,
        position: "center",
        stepInteraction: false,
        styles: {
          popover: (old) => {
            return {
              ...old,
              maxWidth: 640,
              padding: 20,
            };
          },
        },
        content: (
          <div style={{ width: 600 }}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <HotKeys />
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    setCurrentStep((t) => t + 1);
                  }}
                  type="primary"
                >
                  Next
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
      {
        selector: undefined,
        padding: 0,
        position: "center",
        stepInteraction: false,
        content: (
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <p>
                The beginner's guide is now complete, but our features go far
                beyond what we've introduced.
              </p>
              <p>
                It's time to try out our editor and experience more advanced
                functionalities. We offer a seven-day free trial, and you can
                <Link
                  target="_blank"
                  href="https://www.easyemail.pro/?#pricing&utm_source=onborarding"
                >
                  contact us
                </Link>
                at any time.
              </p>
              <Grid.Row justify="end">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    localStorage.setItem("tutorial", "true");
                  }}
                  type="primary"
                >
                  Finish
                </Button>
              </Grid.Row>
            </Space>
          </div>
        ),
      },
    ] as any;
  }, [setCurrentStep, setIsOpen, setSelectedNodePath]);

  useEffect(() => {
    if (!hasDisplay) {
      setSteps?.(steps);
      setIsOpen(true);
    }
  }, [hasDisplay, setIsOpen, setSteps, steps]);

  return <></>;
};
