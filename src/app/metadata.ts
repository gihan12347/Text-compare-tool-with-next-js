import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://freeonlinetextcomparetool.com/"),
  title: "Free Online Text Compare Tool",
  description:
    "Compare two texts, files, or images instantly with our free online diff checker. Highlight differences, track changes, and analyze edits easily.",
  openGraph: {
    title: "Free Online Text Compare Tool",
    description:
      "Compare two texts, files, or images instantly with our free online diff checker.",
    images: ["/og-image.png"], // relative to metadataBase
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Text Compare Tool",
    description:
      "Compare two texts, files, or images instantly with our free online diff checker.",
    images: ["/twitter-image.png"], // relative to metadataBase
  },
};
