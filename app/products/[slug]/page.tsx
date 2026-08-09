import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/product-detail-page";
import { getProductBySlug, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  const canonical = `https://useable.studio${product.internalHref}`;

  return {
    title: product.pageTitle,
    description: product.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: product.pageTitle,
      description: product.metaDescription,
      type: "website",
      url: canonical,
      siteName: "Useable Studio",
      images: [
        {
          url: product.iconSrc,
          width: 512,
          height: 512,
          alt: `${product.name} — ${product.trade}`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: product.pageTitle,
      description: product.metaDescription,
      images: [product.iconSrc],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
