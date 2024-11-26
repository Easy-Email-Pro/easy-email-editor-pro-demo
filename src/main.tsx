import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";

import { nanoid } from "nanoid";

const getClientId = () => {
  let userId = window.localStorage.getItem("userId");

  if (!userId) {
    userId = nanoid();

    window.localStorage.setItem("userId", userId);
  }

  return userId;
};

const Full = React.lazy(() => import("./examples/Full/index"));
const Simple = React.lazy(() => import("./examples/Simple/index"));
const Customize = React.lazy(() => import("./examples/Customize/index"));
const SideBar = React.lazy(() => import("./examples/SideBar/index"));
const UniversalElement = React.lazy(
  () => import("./examples/UniversalElement/index")
);
const UniversalElement2 = React.lazy(
  () => import("./examples/UniversalElement2/index")
);
const ColorTheme = React.lazy(() => import("./examples/ColorTheme/index"));
const Localization = React.lazy(() => import("./examples/Localization/index"));
const DynamicData = React.lazy(() => import("./examples/DynamicData/index"));
const CustomTemplateEngine = React.lazy(
  () => import("./examples/CustomTemplateEngine/index")
);
const ResponsiveView = React.lazy(
  () => import("./examples/ResponsiveView/index")
);
const SimpleCustomBlock = React.lazy(
  () => import("./examples/SimpleCustomBlock/index")
);
const CustomElementComponent = React.lazy(
  () => import("./examples/CustomElementComponent/index")
);
const DynamicCustomBlock = React.lazy(
  () => import("./examples/DynamicCustomBlock/index")
);
const FrozenBlock = React.lazy(() => import("./examples/FrozenBlock/index"));
const ReadOnly = React.lazy(() => import("./examples/ReadOnly/index"));
const Minimalist = React.lazy(() => import("./examples/Minimalist/index"));
const Markdown = React.lazy(() => import("./examples/Markdown/index"));
const GlobalVariables = React.lazy(
  () => import("./examples/GlobalVariables/index")
);
const TemplateEditor = React.lazy(
  () => import("./examples/TemplateEditor/index")
);
const Studio = React.lazy(() => import("./examples/Studio/index"));

const StudioCustomField = React.lazy(
  () => import("./examples/StudioCustomField/index")
);
const StudioCustomFieldEditor = React.lazy(
  () => import("./examples/StudioCustomField/editor")
);

export const navigation = [
  {
    name: "Full",
    path: "/full",
    element: <Full />,
  },

  {
    name: "Customize",
    path: "/customize",
    element: <Customize />,
  },

  {
    name: "UniversalElement",
    path: "/universal-element",
    element: <UniversalElement />,
  },
  {
    name: "UniversalElement2",
    path: "/universal-element2",
    element: <UniversalElement2 />,
  },
  {
    name: "ColorTheme",
    path: "/color-theme",
    element: <ColorTheme />,
  },
  {
    name: "Localization",
    path: "/localization",
    element: <Localization />,
  },
  {
    name: "Dynamic data",
    path: "/dynamic-data",
    element: <DynamicData />,
  },
  {
    name: "AI Assistant demo",
    path: "/ai-assistant",
    element: <Full />,
  },
  {
    name: "Studio",
    path: "/studio",
    element: <Studio />,
  },
  {
    name: "StudioCustomField",
    path: "/studio-custom-field",
    element: <StudioCustomField />,
  },
  {
    name: "StudioCustomFieldEditor",
    path: "/studio-custom-field-editor",
    element: <StudioCustomFieldEditor />,
  },
  {
    name: "Responsive view",
    path: "/responsive-view",
    element: <ResponsiveView />,
  },
  {
    name: "SideBar",
    path: "/side-bar",
    element: <SideBar />,
  },
  {
    name: "Simple",
    path: "/simple",
    element: <Simple />,
  },
  {
    name: "Simple custom block",
    path: "/simple-custom-block",
    element: <SimpleCustomBlock />,
  },
  {
    name: "Custom element component",
    path: "/custom-element-component",
    element: <CustomElementComponent />,
  },
  {
    name: "Dynamic custom block",
    path: "/dynamic-custom-block",
    element: <DynamicCustomBlock />,
  },

  {
    name: "Frozen block",
    path: "/frozen-block",
    element: <FrozenBlock />,
  },
  {
    name: "Read only",
    path: "/read-only",
    element: <ReadOnly />,
  },
  {
    name: "GlobalVariables",
    path: "/global-variables",
    element: <GlobalVariables />,
  },
];

const router = createBrowserRouter([
  ...navigation,
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  // {
  //   name: "Template Engine",
  //   path: "/template-engine",
  //   element: <CustomTemplateEngine />,
  // },

  {
    name: "Template",
    path: "/template",
    element: <TemplateEditor />,
  },

  {
    name: "Share",
    path: "/share",
    element: <TemplateEditor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
