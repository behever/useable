import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Software for Local Service Businesses | Useable Studio",
  description:
    "Useable Studio builds focused software for local service businesses. Explore Grassr for lawn care and Cleanr for cleaning businesses.",
  alternates: {
    canonical: "https://useable.studio",
  },
  openGraph: {
    title: "Software for Local Service Businesses | Useable Studio",
    description:
      "Useable Studio builds focused software for local service businesses. Explore Grassr for lawn care and Cleanr for cleaning businesses.",
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
    title: "Software for Local Service Businesses | Useable Studio",
    description:
      "Useable Studio builds focused software for local service businesses. Explore Grassr for lawn care and Cleanr for cleaning businesses.",
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
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://useable.studio/#organization",
              name: "Useable Studio",
              legalName: "Useable LLC",
              url: "https://useable.studio",
              logo: {
                "@type": "ImageObject",
                url: "https://useable.studio/useable-logo.png",
                width: 512,
                height: 512,
              },
              description: "We build software for local service businesses.",
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
