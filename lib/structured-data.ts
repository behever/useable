import type { Product } from "@/lib/products";

export const organizationId = "https://useable.studio/#organization";
export const websiteId = "https://useable.studio/#website";

export function softwareApplicationJsonLd(product: Product) {
  return {
    "@type": "SoftwareApplication",
    "@id": product.schemaId,
    name: product.name,
    url: product.href,
    sameAs: [product.appStoreHref],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: product.applicationSubCategory,
    operatingSystem: product.operatingSystem,
    description: product.description,
    ...(product.publisherOrganizationId
      ? {
          publisher: {
            "@id": product.publisherOrganizationId,
          },
        }
      : {}),
  };
}
