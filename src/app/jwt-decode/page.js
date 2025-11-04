import JWTDecoderMain from '../pages/jwt-decode.js';

export const metadata = {
  title: "JWT Token Decoder - Decode JSON Web Tokens Online",
  description:
    "Free online JWT Token Decoder. Decode, verify, and inspect JSON Web Tokens instantly. View header, payload, and signature safely in your browser.",
  keywords: [
    "JWT decoder",
    "JSON Web Token decoder",
    "JWT token validator",
    "decode JWT online",
    "JWT header payload signature",
    "JWT inspector",
    "JWT verification tool",
    "JWT token parser",
    "free JWT tool",
    "online JWT decode and verify",
  ],
  openGraph: {
    title: "JWT Token Decoder - Free Online JSON Web Token Tool",
    description:
      "Decode and verify JWT tokens instantly. View header, payload, and signature data securely in your browser.",
    url: "https://freeonlinetextcomparetool.com/jwt-decode",
    siteName: "Free Online Text Compare Tool",
    type: "website",
    images: [
      {
        url: "https://freeonlinetextcomparetool.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "JWT Token Decoder Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JWT Token Decoder - Decode JSON Web Tokens Online",
    description:
      "Instantly decode and verify JWTs. Secure, private, and fast online JSON Web Token decoder.",
    images: [
      "https://freeonlinetextcomparetool.com/og-image.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function JWTDecoder() {
  return (
    <>
      <JWTDecoderMain />
    </>
  );
}
