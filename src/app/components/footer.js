import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronUp,
  Code,
  FileText,
  Image,
  Shield,
  Twitter,
  Facebook,
  Linkedin,
  Github,
  Copy,
  Check,
} from "lucide-react";

const AcmeLogo = () => (
  <svg
    fill="none"
    height="40"
    width="40"
    viewBox="0 0 32 32"
    className="text-white transition-transform duration-300 hover:scale-110"
    aria-label="Text Compare Tool Logo"
    role="img"
  >
    <title>Text Compare Tool Logo</title>
    <desc>Free Online Text, File & Image Comparison Tool</desc>
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const SocialShareButton = ({ platform, url, text, icon: Icon, color }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
      return;
    }

    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
        break;
      case "github":
        shareUrl = "https://github.com/gihankadawathage";
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(
        shareUrl,
        "_blank",
        "noopener,noreferrer,width=600,height=400"
      );
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`group relative p-3 rounded-full transition-all duration-300 hover:scale-110 ${color} hover:shadow-lg backdrop-blur-sm border border-white/10`}
      aria-label={platform === "copy" ? "Copy link" : `Share on ${platform}`}
      title={platform === "copy" ? "Copy link" : `Share on ${platform}`}
    >
      {platform === "copy" && copied ? (
        <Check size={18} className="text-green-400" />
      ) : (
        <Icon
          size={18}
          className="text-white group-hover:text-white transition-colors duration-300"
        />
      )}
      <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
        {platform === "copy"
          ? copied
            ? "Copied!"
            : "Copy link"
          : `Share on ${platform}`}
      </span>
    </button>
  );
};

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const features = [
    { icon: FileText, text: "Text Comparison" },
    { icon: Code, text: "Code Analysis" },
    { icon: Image, text: "Image Diff" },
    { icon: Shield, text: "Privacy First" },
  ];

  const socialPlatforms = [
    {
      platform: "twitter",
      icon: Twitter,
      color: "bg-blue-500/20 hover:bg-blue-500/30",
      url: "https://freeonlinetextcomparetool.com",
      text: "Check out this amazing free text comparison tool! 🚀",
    },
    {
      platform: "facebook",
      icon: Facebook,
      color: "bg-blue-600/20 hover:bg-blue-600/30",
      url: "https://freeonlinetextcomparetool.com",
      text: "Free Text Compare Tool - Perfect for developers!",
    },
    {
      platform: "linkedin",
      icon: Linkedin,
      color: "bg-blue-700/20 hover:bg-blue-700/30",
      url: "https://freeonlinetextcomparetool.com",
      text: "Powerful free text comparison tool for professionals",
    },
    {
      platform: "github",
      icon: Github,
      color: "bg-gray-600/20 hover:bg-gray-600/30",
      url: "https://github.com/gihankadawathage",
      text: "Check out my GitHub profile",
    },
    {
      platform: "copy",
      icon: Copy,
      color: "bg-green-600/20 hover:bg-green-600/30",
      url: "https://freeonlinetextcomparetool.com",
      text: "Text Compare Tool",
    },
  ];

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 backdrop-blur-sm border border-white/20"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-gray-700/50 relative overflow-hidden text-gray-300">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link href="/" aria-label="Go to homepage">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6 group">
                  <AcmeLogo />
                  <span className="text-white font-bold text-lg sm:text-xl group-hover:text-blue-400 transition-colors duration-300">
                    Text Compare Tool
                  </span>
                </div>
              </Link>

              <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-md mx-auto sm:mx-0 text-center sm:text-left text-sm sm:text-base">
                Compare{" "}
                text, files, and images{" "}
                instantly with the most advanced free online comparison tool.
                Highlight differences, track changes, and find similarities with
                ease — all in one powerful, easy-to-use platform.
              </p>

              {/* Feature Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-3 text-center sm:text-left mb-6">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 px-1 py-1 rounded-lg hover:bg-white/5"
                  >
                    <feature.icon
                      size={14}
                      className="text-blue-500 flex-shrink-0"
                    />
                    <span className="truncate">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <nav className="text-center sm:text-left relative">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-2 sm:gap-3 text-sm">
                {[
                  { href: "/compare-text", label: "Compare Text" },
                  { href: "/compare-file", label: "Compare File" },
                  { href: "/compare-image", label: "Compare Images" },
                  { href: "/about", label: "About Us" },
                  { href: "/feedback", label: "Feedback" },
                  { href: "/privacy-policy", label: "Privacy Policy" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline underline-offset-4 block py-1 px-2 rounded hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Icons - Display on all devices */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4">
                {socialPlatforms.map((social, idx) => (
                  <SocialShareButton
                    key={idx}
                    platform={social.platform}
                    icon={social.icon}
                    color={social.color}
                    url={social.url}
                    text={social.text}
                  />
                ))}
              </div>
            </nav>

            {/* Why Choose Us */}
            <div className="text-center sm:text-left">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                Why Choose Us?
              </h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-start justify-center sm:justify-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-left">
                    Lightning-fast comparison algorithms
                  </span>
                </div>
                <div className="flex items-start justify-center sm:justify-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-left">
                    100% free with no registration required
                  </span>
                </div>
                <div className="flex items-start justify-center sm:justify-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-left">
                    Works on all devices and browsers
                  </span>
                </div>
                <div className="flex items-start justify-center sm:justify-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-left">
                    Your data never leaves your device
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Text Compare Tool",
              description:
                "Free online text, file, and image comparison tool for developers, writers, and students. Fast, accurate, and privacy-focused.",
              applicationCategory: "Utility",
              operatingSystem: "Web",
              url: "https://freeonlinetextcomparetool.com",
              author: {
                "@type": "Person",
                name: "Gihan Kadawathage",
                sameAs: [
                  "https://github.com/gihankadawathage",
                  "https://twitter.com/gihankadawathage",
                  "https://linkedin.com/in/gihankadawathage",
                ],
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1250",
              },
            }),
          }}
        />
      </footer>
    </>
  );
};

export default Footer;