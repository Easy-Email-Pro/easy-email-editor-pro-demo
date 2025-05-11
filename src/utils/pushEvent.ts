import { posthog } from "./posthog";

export function pushEvent(params: {
  event: string;
  payload?: Record<string, any>;
}) {
  posthog.capture(params.event, params.payload);
}
