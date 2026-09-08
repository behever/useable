import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { organizationId, websiteId } from "@/lib/structured-data";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Software Design & Development | Useable Studio",
  description:
    "We design and build software that makes everyday work easier. Explore Grassr and Cleanr, or talk to Useable Studio about your project.",
  alternates: {
    canonical: "https://useable.studio",
  },
  openGraph: {
    title: "Software Design & Development | Useable Studio",
    description:
      "We design and build software that makes everyday work easier. Explore Grassr and Cleanr, or talk to Useable Studio about your project.",
    type: "website",
    url: "https://useable.studio",
    siteName: "Useable Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Useable Studio — Good ideas. Made useable.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Design & Development | Useable Studio",
    description:
      "We design and build software that makes everyday work easier. Explore Grassr and Cleanr, or talk to Useable Studio about your project.",
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
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": organizationId,
                  name: "Useable Studio",
                  legalName: "Useable LLC",
                  url: "https://useable.studio/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://useable.studio/useable-logo.png",
                    width: 512,
                    height: 512,
                  },
                  description:
                    "Useable Studio designs and builds useful software. The studio behind Grassr and Cleanr, open to helping with your next project.",
                },
                {
                  "@type": "WebSite",
                  "@id": websiteId,
                  name: "Useable Studio",
                  url: "https://useable.studio/",
                  publisher: { "@id": organizationId },
                },
              ],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
