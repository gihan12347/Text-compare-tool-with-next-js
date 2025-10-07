import TextCompare from './pages/text-compare.js';

export const metadata = {
  title: "Text & Image Compare Tool | Free Online Text Comparison",
  description:
    "Free text compare tool to compare two texts online instantly. Highlight differences, detect inserted or deleted content, and clearly see every change.",
  keywords: [
    "text compare",
    "compare text online",
    "free text comparison tool",
    "text diff checker",
    "compare two files online",
    "online text compare",
    "text difference finder",
    "compare documents",
    "compare two texts",
    "find text changes",
    "text and image compare",
    "online file comparison",
  ],
  alternates: {
    canonical: "https://freeonlinetextcomparetool.com",
  },
  openGraph: {
    title: "Free Online Text & Image Compare Tool",
    description:
      "Compare two texts or images online instantly. Highlight changes, find differences, and visualize every modification with our free online compare tool.",
    url: "https://freeonlinetextcomparetool.com",
    siteName: "Free Online Text Compare Tool",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://freeonlinetextcomparetool.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Text Compare Tool preview image",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function TextComparePage() {
  return (
    <>
      <TextCompare />
    </>
  );
}
