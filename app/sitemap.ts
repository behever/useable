import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-09T00:00:00.000Z");

  return [
    {
      url: "https://useable.studio/",
      lastModified,
    },
    ...products.map((product) => ({
      url: `https://useable.studio${product.internalHref}`,
      lastModified,
    })),
    {
      url: "https://useable.studio/about",
      lastModified,
    },
    {
      url: "https://useable.studio/privacy",
      lastModified,
    },
  ];
}
