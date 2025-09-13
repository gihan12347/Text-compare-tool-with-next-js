// "use client"; // <--- This makes the component a Client Component
import "./globals.css";
import type { ReactNode } from "react";
import Script from "next/script";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug?: string } }): Promise<Metadata> {
  const slug = params?.slug ? `/${params.slug}` : "";
  return {
    alternates: {
      canonical: `https://freeonlinetextcomparetool.com${slug}`,
    },
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <head>

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
                "Free online compare tool to quickly find differences between two texts, files, or images. Instantly highlight changes, spot duplicates, and analyze content side by side with ease.",
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
