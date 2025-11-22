import { PageElement } from "easy-email-pro-core";

import springSaleTemplate from "./spring-sale-48h/index.json";
import springSaleThumbnail from "./spring-sale-48h/desktop.png";
import abandonedCartTemplate from "./abandoned-cart/index.json";
import abandonedCartThumbnail from "./abandoned-cart/desktop.png";
import aeroProLaunchTemplate from "./aero-pro-launch/index.json";
import aeroProLaunchThumbnail from "./aero-pro-launch/desktop.png";
import orderConfirmedTemplate from "./order-confirmed/index.json";
import orderConfirmedThumbnail from "./order-confirmed/desktop.png";
import orderDeliveredTemplate from "./order-delivered/index.json";
import orderDeliveredThumbnail from "./order-delivered/desktop.png";
import orderShippedTemplate from "./order-shipped/index.json";
import orderShippedThumbnail from "./order-shipped/desktop.png";
import weMissYouTemplate from "./we-miss-you/index.json";
import weMissYouThumbnail from "./we-miss-you/desktop.png";
import welcomeStudioTemplate from "./welcome-studio/index.json";
import welcomeStudioThumbnail from "./welcome-studio/desktop.png";

export type LocalEmailTemplate = {
  id: string;
  subject: string;
  thumbnail: string;
  content: PageElement;
};

const withTemplateMeta = (
  id: string,
  template: { subject: string; content: PageElement },
  thumbnail: string
): LocalEmailTemplate => ({
  id,
  subject: template.subject,
  thumbnail,
  content: template.content,
});

export const emailListTemplates: LocalEmailTemplate[] = [
  withTemplateMeta("spring-sale-48h", springSaleTemplate, springSaleThumbnail),
  withTemplateMeta("abandoned-cart", abandonedCartTemplate, abandonedCartThumbnail),
  withTemplateMeta("aero-pro-launch", aeroProLaunchTemplate, aeroProLaunchThumbnail),
  withTemplateMeta("order-confirmed", orderConfirmedTemplate, orderConfirmedThumbnail),
  withTemplateMeta("order-shipped", orderShippedTemplate, orderShippedThumbnail),
  withTemplateMeta("order-delivered", orderDeliveredTemplate, orderDeliveredThumbnail),
  withTemplateMeta("we-miss-you", weMissYouTemplate, weMissYouThumbnail),
  withTemplateMeta("welcome-studio", welcomeStudioTemplate, welcomeStudioThumbnail),
];
