export type Product = {
  slug: "grassr" | "cleanr";
  name: string;
  trade: string;
  status: "Live";
  href: string;
  appStoreHref: string;
  schemaId: string;
  publisherOrganizationId?: string;
  iconSrc: string;
  wordmarkSrc: string;
  wordmarkWidth: number;
  wordmarkHeight: number;
  tagline: string;
  description: string;
  features: string[];
  operatingSystem: string;
  applicationSubCategory: string;
};

export const products: Product[] = [
  {
    slug: "grassr",
    name: "Grassr",
    trade: "Lawn care software",
    status: "Live",
    href: "https://grassr.io/",
    appStoreHref: "https://apps.apple.com/us/app/grassr/id6758737552",
    schemaId: "https://grassr.io/#softwareapplication",
    iconSrc: "/products/grassr-icon.png",
    wordmarkSrc: "/products/grassr-wordmark.webp",
    wordmarkWidth: 778,
    wordmarkHeight: 165,
    tagline: "Lawn care business software for solo operators and small crews.",
    description:
      "Schedule recurring work, coordinate crews, plan daily routes, manage customers and estimates, send invoices, and collect payments.",
    features: [
      "Recurring jobs",
      "Crew schedules",
      "Route planning",
      "Estimates",
      "Invoices",
      "Payments",
    ],
    operatingSystem: "iOS, Web",
    applicationSubCategory: "Lawn Care Business Management Software",
  },
  {
    slug: "cleanr",
    name: "Cleanr",
    trade: "Cleaning business software",
    status: "Live",
    href: "https://trycleanr.com/",
    appStoreHref:
      "https://apps.apple.com/us/app/cleanr-business-management/id6776069251",
    schemaId: "https://trycleanr.com/#software",
    publisherOrganizationId: "https://useable.studio/#organization",
    iconSrc: "/products/cleanr-icon.png",
    wordmarkSrc: "/products/cleanr-wordmark.png",
    wordmarkWidth: 320,
    wordmarkHeight: 109,
    tagline: "Business management software for cleaning companies.",
    description:
      "Manage recurring appointments, staff dispatch, time on site, customer and property records, quotes, invoices, and online card payments after connecting Stripe.",
    features: [
      "Recurring appointments",
      "Staff dispatch",
      "Time on site",
      "Quotes",
      "Invoices",
      "Card payments",
    ],
    operatingSystem: "iOS, Web",
    applicationSubCategory: "Cleaning Business Management Software",
  },
];
