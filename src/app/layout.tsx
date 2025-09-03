import "./globals.css";
import type { ReactNode } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Online Text Comparison Tool | Compare Text Fast",
  description:
    "Use our free online text compare tool to quickly find and highlight differences between two texts. Fast, free, and accurate text comparison online.",
  keywords:
    "free online text compare tool, online text compare, text comparison, diff checker online, string compare, text difference checker, compare text online free",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Free Online Text Compare Tool | Fast & Accurate Diff Checker",
    description:
      "Compare two texts online for free. Instantly highlight differences with our fast and accurate text compare & diff checker tool.",
    url: "https://freeonlinetextcomparetool.com/",
    siteName: "Free Online Text Compare Tool",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Online Text Compare Tool Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Text Compare Tool | Text & Diff Checker",
    description:
      "Use our free online text compare tool to detect differences between two texts instantly. Simple, fast, and reliable diff checker.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // For dynamic canonical URL
  const canonicalUrl = `https://freeonlinetextcomparetool.com${pathname}`;

  return (
    <html lang="en">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-L39W9XFW1S"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L39W9XFW1S', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Free Online Text Compare Tool",
              url: "https://freeonlinetextcomparetool.com/",
              applicationCategory: "Utility",
              operatingSystem: "Any",
              description:
                "Free online text compare tool to find differences between two texts quickly and highlight them instantly.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
