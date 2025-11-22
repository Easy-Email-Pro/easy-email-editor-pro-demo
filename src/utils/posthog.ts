import posthog from "posthog-js";

if (process.env.NODE_ENV === "production") {
  posthog.init("phc_Yn1dsJedTJquMn5XSDrahqAn0etHoRbUMoUP3y0GumU", {
    api_host: "https://app.posthog.com",
    disable_session_recording: true,
  });
}

(window as any).posthog = posthog;
export { posthog };
