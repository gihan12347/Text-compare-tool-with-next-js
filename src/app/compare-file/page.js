import FileCompare from '../pages/file-compare.js';

export const metadata = {
  title: "File Compare Tool | Free Online File & Text Comparison",
  description:
    "Compare two files online instantly for free. Highlight differences between text, documents, or code files and easily see inserted, deleted, or modified content.",
  keywords: [
    "file compare",
    "compare files online",
    "free file comparison tool",
    "text and file diff checker",
    "compare two documents",
    "online file compare",
    "compare text files online",
    "document difference finder",
    "highlight file differences",
    "compare code files",
    "file comparison online free",
    "compare two files for changes",
    "find differences in files",
    "online document comparison tool",
    "file diff online",
    "text and file comparison",
    "compare files side by side",
    "file comparison software",
    "check file differences online"
  ],
  alternates: {
    canonical: "https://freeonlinetextcomparetool.com/compare-file",
  },
  openGraph: {
    title: "Free Online File & Text Compare Tool",
    description:
      "Compare two files or texts online instantly. Highlight changes, find differences, and visualize every modification with our free online comparison tool.",
    url: "https://freeonlinetextcomparetool.com/compare-file",
    siteName: "Free Online File Compare Tool",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://freeonlinetextcomparetool.com/og-image.png", 
        width: 1200,
        height: 630,
        alt: "File Compare Tool preview image",
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
      <FileCompare />
    </>
  );
}
