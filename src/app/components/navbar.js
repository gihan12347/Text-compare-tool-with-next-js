import React, { useState } from "react";
import { FileText, Upload, Image } from "lucide-react";

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

const NavigationBar = ({selectedType}) => {
  console.log("Selected Type in Navbar:", selectedType);
  const [activeButton, setActiveButton] = useState(selectedType);

  const buttons = [
    {
      id: "text",
      label: "Text",
      icon: FileText,
      description: "Compare text directly",
    },
    {
      id: "file",
      label: "File",
      icon: Upload,
      description: "Upload and compare files",
    },
    {
      id: "images",
      label: "Images",
      icon: Image,
      description: "Compare image content",
    },
  ];

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    console.log(`${buttonId} button clicked`);
    switch (buttonId) {
      case "text":
        window.location.href = "/";
        break;
      case "file":
        window.location.href = "/compare-file";
        break;
      case "images":
        window.location.href = "/compare-images";     
        break;
      default:    
        window.location.href = "/";
        break; 
    }
  };
  
  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <a
                href="/"
                className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
                aria-label="Go to homepage"
              >
                <div className="relative">
                  <AcmeLogo />
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h1 className="font-bold text-white text-lg sm:text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    TextCompare
                  </h1>
                  <p className="text-xs text-gray-400 hidden sm:block">
                    Compare text with precision
                  </p>
                </div>
              </a>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {buttons.map((button) => {
                const Icon = button.icon;
                const isActive = activeButton === button.id;

                return (
                  <button
                    key={button.id}
                    onClick={() => handleButtonClick(button.id)}
                    className={`
                      group relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg
                      font-medium text-sm transition-all duration-300 ease-in-out
                      border border-transparent backdrop-blur-sm
                      ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500/50 shadow-lg shadow-blue-500/25"
                          : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:border-gray-600/50"
                      }
                      transform hover:scale-105 active:scale-95
                    `}
                    aria-label={button.description}
                    title={button.description}
                  >
                    {/* Animated background glow */}
                    <div
                      className={`
                        absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20"
                            : "bg-gradient-to-r from-gray-600/20 to-gray-500/20"
                        }
                        blur-xl
                      `}
                    ></div>

                    {/* Icon */}
                    <Icon
                      className={`
                        w-4 h-4 transition-all duration-300
                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white"
                        }
                        group-hover:scale-110
                      `}
                    />

                    {/* Button text */}
                    <span className="hidden sm:inline-block relative z-10">
                      {button.label}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subtle animated border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>
      </nav>
    </>
  );
};

export default NavigationBar;
