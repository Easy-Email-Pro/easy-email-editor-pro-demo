import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { Home } from "./Home";

import posthog from "posthog-js";
import { nanoid } from "nanoid";

const getClientId = () => {
  let userId = window.localStorage.getItem("userId");

  if (!userId) {
    userId = nanoid();

    window.localStorage.setItem("userId", userId);
  }

  return userId;
};

if (process.env.NODE_ENV === "production") {
  posthog.init("phc_Yn1dsJedTJquMn5XSDrahqAn0etHoRbUMoUP3y0GumU", {
    api_host: "https://app.posthog.com",
  });

  const email = new URLSearchParams(location.search || "").get("email");

  posthog.identify(getClientId(), {
    email: email,
  });

  Sentry.init({
    dsn: "https://70c370f4840742e68a4135c9615859e3@o1071232.ingest.sentry.io/4505312761937920",

    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    integrations: [new Sentry.Replay()],
  });
}

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

export const navigation = [
  {
    name: "Full",
    path: "/full",
    element: <Full />,
  },

  {
    name: "Markdown",
    path: "/markdown",
    element: <Markdown />,
  },
  {
    name: "Notion-like(processing)",
    path: "/notion-like",
    element: <Minimalist />,
  },
  {
    name: "Simple",
    path: "/simple",
    element: <Simple />,
  },
  {
    name: "Customize",
    path: "/customize",
    element: <Customize />,
  },
  {
    name: "GlobalVariables",
    path: "/global-variables",
    element: <GlobalVariables />,
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
    name: "SideBar",
    path: "/side-bar",
    element: <SideBar />,
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
    element: <Customize />,
  },
  {
    name: "Responsive view",
    path: "/responsive-view",
    element: <ResponsiveView />,
  },
  {
    name: "Simple custom block",
    path: "/simple-custom-block",
    element: <SimpleCustomBlock />,
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
    name: "Studio",
    path: "/studio",
    element: <Studio />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
