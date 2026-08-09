export type ProductSlug = "grassr" | "cleanr";

export type ProductSection = {
  title: string;
  description: string;
};

export type ProductLink = {
  label: string;
  href: string;
};

export type Product = {
  slug: ProductSlug;
  name: string;
  trade: string;
  status: "Live";
  internalHref: string;
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
  pageTitle: string;
  metaDescription: string;
  pageLede: string;
  audienceHeading: string;
  audience: string;
  relationship: string;
  sections: ProductSection[];
  officialLinks: ProductLink[];
};

export const products: Product[] = [
  {
    slug: "grassr",
    name: "Grassr",
    trade: "Lawn care software",
    status: "Live",
    internalHref: "/products/grassr",
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
    pageTitle: "Grassr | Lawn Care Business Software from Useable Studio",
    metaDescription:
      "Grassr is lawn care business software for recurring scheduling, crew coordination, route planning, estimates, invoices, and payments on iPhone and the web.",
    pageLede:
      "Lawn care business software for solo operators and small crews. Grassr brings recurring jobs, shared schedules, daily routes, customer records, estimates, invoices, and payments into one field-focused workflow.",
    audienceHeading: "Built for lawn care operators and small crews.",
    audience:
      "Grassr is designed primarily for solo lawn care operators and small crews that need scheduling, crew coordination, routes, estimates, invoicing, and payments without a broad multi-trade system.",
    relationship:
      "Grassr is one of Useable Studio’s two live products, built specifically for lawn care operations.",
    sections: [
      {
        title: "Organize the day",
        description:
          "Schedule one-time or recurring jobs, assign the crew, and keep the day’s work visible in a shared schedule.",
      },
      {
        title: "Plan the route and preserve customer context",
        description:
          "Put daily stops in route order and keep service addresses, job history, notes, and payment status connected to each customer.",
      },
      {
        title: "Finish the job and start collection",
        description:
          "Create estimates and invoices, track what is paid or overdue, and—when a customer has authorized a card on file—charge the card as the job is completed and email the receipt.",
      },
    ],
    officialLinks: [
      { label: "Visit Grassr", href: "https://grassr.io/" },
      {
        label: "View on the App Store",
        href: "https://apps.apple.com/us/app/grassr/id6758737552",
      },
      { label: "Open Grassr", href: "https://grassr.app/" },
      { label: "Grassr documentation", href: "https://docs.grassr.io/" },
      { label: "Support", href: "https://grassr.io/support" },
      { label: "Privacy", href: "https://grassr.io/privacy" },
      { label: "Terms", href: "https://grassr.io/terms" },
    ],
  },
  {
    slug: "cleanr",
    name: "Cleanr",
    trade: "Cleaning business software",
    status: "Live",
    internalHref: "/products/cleanr",
    href: "https://trycleanr.com/",
    appStoreHref:
      "https://apps.apple.com/us/app/cleanr-business-management/id6776069251",
    schemaId: "https://trycleanr.com/#software",
    publisherOrganizationId: "https://trycleanr.com/#organization",
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
    pageTitle: "Cleanr | Cleaning Business Software from Useable Studio",
    metaDescription:
      "Cleanr helps cleaning businesses manage recurring appointments, staff dispatch, customer and property records, quotes, invoices, and card payments on iPhone and the web.",
    pageLede:
      "Cleaning business software for solo operators and small cleaning teams. Cleanr keeps recurring appointments, staff assignments, customer and property details, quotes, invoices, and payment activity connected across iPhone and the web.",
    audienceHeading: "Built for cleaning businesses.",
    audience:
      "Cleanr is designed for cleaning company owners, solo cleaners, and small teams managing repeat residential or small commercial work.",
    relationship:
      "Cleanr is developed and operated by Useable LLC. Useable Studio is the product studio behind Cleanr.",
    sections: [
      {
        title: "Plan and run recurring work",
        description:
          "Create one-time or recurring appointments, assign the work, and give cleaners the customer, property, and service details they need for the day.",
      },
      {
        title: "Keep a record of the clean",
        description:
          "Starting and completing a session creates a time-on-site record. Before-and-after photos and notes stay attached to the work for the owner to review.",
      },
      {
        title: "Move from quote to payment",
        description:
          "Create quotes and invoices from the same customer record. After the business connects Cleanr Pay through Stripe, it can send an online payment link or charge an authorized saved card.",
      },
    ],
    officialLinks: [
      { label: "Visit Cleanr", href: "https://trycleanr.com/" },
      {
        label: "View on the App Store",
        href: "https://apps.apple.com/us/app/cleanr-business-management/id6776069251",
      },
      { label: "Cleanr help center", href: "https://trycleanr.com/help" },
      { label: "About Cleanr", href: "https://trycleanr.com/about" },
      { label: "Privacy", href: "https://trycleanr.com/privacy" },
      { label: "Terms", href: "https://trycleanr.com/terms" },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
