import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Service Business Software | Useable Studio",
  description:
    "Simple software for lawn care, cleaning, and local service crews who still run on clipboards and spreadsheets. See what we're building — and get early access.",
  alternates: {
    canonical: "https://useable.studio",
  },
  openGraph: {
    title: "Local Service Business Software | Useable Studio",
    description:
      "Simple software for lawn care, cleaning, and local service crews who still run on clipboards and spreadsheets. See what we're building — and get early access.",
    type: "website",
    url: "https://useable.studio",
    siteName: "Useable Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Useable Studio — Software for Local Service Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Service Business Software | Useable Studio",
    description:
      "Simple software for lawn care, cleaning, and local service crews who still run on clipboards and spreadsheets. See what we're building — and get early access.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://useable.studio"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--ink)] focus:text-[var(--white)] focus:rounded-[6px]"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Useable Studio",
              url: "https://useable.studio",
              logo: "https://useable.studio/icon.svg",
              description:
                "We build software for local service businesses.",
              foundingDate: "2025",
              sameAs: [],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
