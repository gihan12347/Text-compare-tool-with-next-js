import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Online text compare tool",   
  description: "An online diff checker allows you to compare two text files, code snippets, or images side by side, highlighting any additions, deletions, or changes. It makes spotting differences quick and easy, whether you’re reviewing text content, code, or visual files.",
  icons: {
    icon: "/favicon.ico",    
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
