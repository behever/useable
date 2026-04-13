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
  title: "Useable Studio — Software for Local Service Businesses",
  description:
    "We build software for local service businesses. Tools for the crews that run on clipboards, group texts, and spreadsheets.",
  openGraph: {
    title: "Useable Studio — Software for Local Service Businesses",
    description:
      "We build software for local service businesses. Tools for the crews that run on clipboards, group texts, and spreadsheets.",
    type: "website",
    url: "https://useable.studio",
    siteName: "Useable Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Useable Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Useable Studio — Software for Local Service Businesses",
    description:
      "We build software for local service businesses. Tools for the crews that run on clipboards, group texts, and spreadsheets.",
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
      <body
        className={`${dmSans.variable} font-sans antialiased bg-[#fafafa] text-[#1a1a1a]`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1a1a1a] focus:text-white focus:rounded"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
