// app/sitemap.xml/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://freeonlinetextcomparetool.com";

  const pages = [
    "",
    "compare-file",
    "compare-images",
    "about",
    "feedback",
    "privacy-policy",
    "terms-and-conditions",
    "contact-us",
    "faq",
    "add-review",
    "how-to-use-file-compare",
    "key-features",
    "not-found",
    "about-developer",
    "key-benifits",
  ];

  const urls = pages
    .map((page) => {
      const path = page ? `/${page}` : "";
      return `
        <url>
          <loc>${baseUrl}${path}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}