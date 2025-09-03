"use client"; // <--- This makes the component a Client Component
import "./globals.css";
import type { ReactNode } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // dynamic path
  const canonicalUrl = `https://freeonlinetextcomparetool.com${pathname}`;

  return (
    <html lang="en">
      <head>
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

        {/* JSON-LD Schema */}
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
