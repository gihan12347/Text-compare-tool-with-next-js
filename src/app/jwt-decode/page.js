import JWTDecoderMain from '../pages/jwt-decode.js';

export const metadata = {
  title: "JWT Token Decoder - Decode JSON Web Tokens Online",
  description:
    "Decode your JWT tokens instantly. View JWT header and payload in a readable format. Free online JWT decoder for developers and testers.",
  openGraph: {
    title: "JWT Token Decoder",
    description:
      "Decode your JWT tokens instantly. View JWT header and payload in a readable format.",
    url: "https://freeonlinetextcomparetool.com/jwt-decode",
    siteName: "JWT Decoder Tool",
    type: "website",
  },
};

export default function JWTDecoder() {
  return (
    <>
      <JWTDecoderMain />
    </>
  );
}
