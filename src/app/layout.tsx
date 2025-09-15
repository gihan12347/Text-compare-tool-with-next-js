import "./globals.css";
import type { ReactNode } from "react";
import Script from "next/script";

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
        <Script
          id="ld-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
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
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How can I compare two texts online?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Use our free text compare tool. Paste your two texts and instantly see the differences.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the best free text compare tool?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Our tool highlights every insertion, deletion, and change with clarity, all online and free.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
