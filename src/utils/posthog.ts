import posthog from "posthog-js";

posthog.init("phc_Yn1dsJedTJquMn5XSDrahqAn0etHoRbUMoUP3y0GumU", {
  api_host: "https://app.posthog.com",
});
(window as any).posthog = posthog;
export { posthog };
