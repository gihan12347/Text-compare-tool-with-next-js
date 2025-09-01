import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronUp, ExternalLink, Code, FileText, Image, Users, Shield, Heart } from "lucide-react";

const AcmeLogo = () => {
  return (
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
    { icon: Shield, text: "Privacy First" }
  ];

  return (
    <>
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 backdrop-blur-sm border border-white/20"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      <footer
        className="bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-gray-700/50 relative overflow-hidden text-gray-300"
        role="contentinfo"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" aria-label="Go to homepage">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6 group">
                  <AcmeLogo />
                  <span className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors duration-300">
                    Text Compare Tool
                  </span>
                </div>
              </Link>
              
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                The most advanced free online comparison tool for <strong className="text-white">text, files, and images</strong>. 
                Trusted by developers, writers, and professionals worldwide for accurate difference detection.
              </p>

              {/* Feature Icons */}
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <feature.icon size={16} className="text-blue-500" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <nav aria-label="Footer navigation" className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "/compare-text", label: "Compare Text" },
                  { href: "/compare-file", label: "Compare File" },
                 { href: "/compare-image", label: "Compare Images" }, 
                  { href: "/about", label: "About Us" },
                  { href: "/feedback", label: "Feedback" },
                  { href: "/privacy-policy", label: "Privacy Policy" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Features & Benefits */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-4 text-lg">Why Choose Us?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400">Lightning-fast comparison algorithms</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400">100% free with no registration required</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400">Works on all devices and browsers</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400">Your data never leaves your device</span>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700/50"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-0.5 rounded-full"></div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 flex items-center gap-1">
              &copy; {new Date().getFullYear()} Text Compare Tool - Gihan Kadawathage. 
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500">Made with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span className="text-gray-500">for developers</span>
            </div>
          </div>

          {/* Mobile-specific bottom spacing */}
          <div className="h-4 sm:h-0"></div>
        </div>

        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </footer>

      {/* Enhanced Schema Markup for SEO */}
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
            url: "https://yourwebsite.com",
            author: {
              "@type": "Person",
              name: "Gihan Kadawathage"
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            }
          }),
        }}
      />
    </>
  );
};

export default Footer;