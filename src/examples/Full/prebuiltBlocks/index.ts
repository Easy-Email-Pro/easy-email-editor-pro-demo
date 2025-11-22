import { t } from "easy-email-pro-core";
import { header } from "./header";
import { footer } from "./footer";
import { productCardBlocks } from "./productCard";
import { ctaBlocks } from "./cta";
import { reviewBlocks } from "./review";
import { newsletterBlocks } from "./newsletter";
import { featureBlocks } from "./feature";
import { pricingBlocks } from "./pricing";
import { faqBlocks } from "./faq";
import { trustBadgeBlocks } from "./trustBadge";
import { announcementBlocks } from "./announcement";
import { discountBlocks } from "./discount";
import { PrebuiltBlockCategory } from "easy-email-pro-theme";

export const prebuiltBlocks: PrebuiltBlockCategory[] = [
  {
    get label() {
      return t("Product Card");
    },
    active: true,
    blocks: productCardBlocks,
  },
  {
    get label() {
      return t("CTA");
    },
    active: true,
    blocks: ctaBlocks,
  },
  {
    get label() {
      return t("Testimonial");
    },
    active: true,
    blocks: reviewBlocks,
  },
  {
    get label() {
      return t("Newsletter Signup");
    },
    active: true,
    blocks: newsletterBlocks,
  },
  {
    get label() {
      return t("Feature Showcase");
    },
    active: true,
    blocks: featureBlocks,
  },
  {
    get label() {
      return t("Pricing Table");
    },
    active: true,
    blocks: pricingBlocks,
  },
  {
    get label() {
      return t("FAQ");
    },
    active: true,
    blocks: faqBlocks,
  },
  {
    get label() {
      return t("Social Proof");
    },
    active: true,
    blocks: trustBadgeBlocks,
  },
  {
    get label() {
      return t("Announcement");
    },
    active: true,
    blocks: announcementBlocks,
  },
  {
    get label() {
      return t("Discount");
    },
    active: true,
    blocks: discountBlocks,
  },
  {
    get label() {
      return t("Header");
    },
    active: true,
    blocks: header,
  },
  {
    get label() {
      return t("Footer");
    },
    active: true,
    blocks: footer,
  },
];
