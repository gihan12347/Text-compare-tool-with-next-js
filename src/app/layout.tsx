import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Free Online Text Compare Tool – Diff Checker & Text Comparison",
  description:
    "Use our free online text compare tool to compare two texts, check for differences, and highlight changes instantly.",
  keywords:
    "free online text compare tool, online text compare tool, text compare tool, compare online, compare text, diff checker online",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Free Online Text Compare Tool – Text & Diff Checker",
    description:
      "Compare two texts, find differences, and highlight changes instantly using our online text comparison tool.",
    url: "https://freeonlinetextcomparetool.com/",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Text Compare Tool – Text & Diff Checker",
    description:
      "Use our free text compare tool to detect differences between texts, compare files, and highlight changes easily.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
