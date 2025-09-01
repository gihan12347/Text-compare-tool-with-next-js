import React, { useState } from "react";
import { FileText, Upload, Image, Menu, X } from "lucide-react";
import Link from "next/link";

export const AcmeLogo = () => {
  return (
    <svg
      fill="none"
      height="36"
      width="36"
      viewBox="0 0 32 32"
      className="text-white transition-transform duration-300 hover:scale-110"
      aria-label="Acme Logo"
      role="img"
    >
      <title>Acme Logo</title>
      <desc>Logo for Online Text Compare Tool</desc>
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const NavigationBar = ({ selectedType }) => {
  const [activeButton, setActiveButton] = useState(selectedType);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    {
      id: "text",
      label: "Text Compare",
      icon: FileText,
      description: "Compare and find differences between two text snippets.",
      href: "/",
    },
    {
      id: "file",
      label: "File Compare",
      icon: Upload,
      description: "Upload and compare documents or code files.",
      href: "/compare-file",
    },
    {
      id: "images",
      label: "Image Compare",
      icon: Image,
      description: "Spot differences between two images instantly.",
      href: "/compare-images",
    },
  ];

  return (
    <nav
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm relative"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
            aria-label="Go to homepage - Free Online Text Compare Tool"
          >
            <div className="relative">
              <AcmeLogo />
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="font-bold text-white text-lg sm:text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Free Online Text Compare Tool
              </span>
              <p className="text-xs text-gray-400 hidden sm:block">
                Compare text, files & images with precision
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center space-x-4" role="menubar">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = activeButton === link.id;
              return (
                <li key={link.id} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    title={link.description}
                    aria-label={link.description}
                    className={`
                      group relative flex items-center gap-2 px-3 py-2 rounded-lg
                      font-medium text-sm transition-all duration-300 ease-in-out
                      ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                          : "text-gray-300 hover:text-white hover:bg-gray-800"
                      }
                    `}
                    onClick={() => setActiveButton(link.id)}
                  >
                    <Icon
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                      }`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Toggle */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-black border-t border-gray-800">
          <ul className="px-2 py-3 space-y-1" role="menu">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = activeButton === link.id;
              return (
                <li key={link.id} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    title={link.description}
                    aria-label={link.description}
                    className={`flex items-center w-full px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                    onClick={() => setActiveButton(link.id)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>

      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: links.map((l) => l.label),
            url: links.map((l) => `https://yourwebsite.com${l.href}`),
          }),
        }}
      />
    </nav>
  );
};

export default NavigationBar;
