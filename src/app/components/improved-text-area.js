import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { HomePageToastNotifications } from "./toast-notifcations.js";

const AutoResizeTextarea = ({
  placeholder,
  value,
  onChange,
  className = "",
  minRows = 2,
  maxRows = 10,
  ...props
}) => {
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto"; // reset first
    const lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10);
    const minHeight = lineHeight * minRows;
    const maxHeight = lineHeight * maxRows;

    const newHeight = Math.min(
      Math.max(textarea.scrollHeight, minHeight),
      maxHeight
    );
    textarea.style.height = `${newHeight}px`;
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => {
        onChange?.(e);
        setTimeout(adjustHeight, 0);
      }}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};

const ImprovedTextareaUI = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [diffMap, setDiffMap] = useState({ text1: [], text2: [] });

  const resultRef = useRef(null);

  useEffect(() => {
    if (isVisible && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isVisible]);

  const compareTexts = async () => {
    console.log("Comparing texts...");
    if (!text1.trim() || !text2.trim()) {
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://text-compare-tool-1071342381187.us-central1.run.app/text-compare-tool/api/compare",
        { text1, text2 }
      );
      setDiffMap(res.data);
      setIsVisible(true);
    } catch (error) {
      console.error("Error comparing texts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const cleanText = () => {
    setText1("");
    setText2("");
    setIsVisible(false);
    setDiffMap({ text1: [], text2: [] });
  };

  const handleSwap = () => {
     if (isLoading) return;
    console.log("Swapping texts...");
    setText1(text2);
    setText2(text1);
  };

  const renderDiffStream = (diffArray) =>
    diffArray.map((part, index) => {
      let backgroundColor =
        part.type === "insert"
          ? "#008040"
          : part.type === "delete"
          ? "#FF0000"
          : "transparent";
      return (
        <span key={index} style={{ color: "black", backgroundColor }}>
          {part.text}
        </span>
      );
    });

  return (
    
    <div className="min-h-[200px] bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toast / Info Banner */}
        <HomePageToastNotifications />
        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-6 w-full">
              {/* First Textarea */}
              <div className="flex-1 lg:flex-[3] space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-semibold text-slate-700">
                    Original Text
                  </label>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    {text1.length} characters
                  </span>
                </div>
                <AutoResizeTextarea
                  placeholder="Paste or type your original text here..."
                  value={text1}
                  onChange={(e) => setText1(e.target.value)}
                  minRows={4}
                  maxRows={15}
                  className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-4 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-slate-100/50 transition-all duration-300 font-mono leading-relaxed"
                />
              </div>

              {/* Separator */}
              <div
                onClick={handleSwap}
                className="flex items-center justify-center lg:flex-col flex-row lg:w-auto w-full lg:py-8 py-4"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    ⇔
                  </div>
                  <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30 animate-ping"></div>
                </div>
              </div>

              {/* Second Textarea */}
              <div className="flex-1 lg:flex-[3] space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-semibold text-slate-700">
                    Modified Text
                  </label>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    {text2.length} characters
                  </span>
                </div>
                <AutoResizeTextarea
                  placeholder="Paste or type your modified text here..."
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}
                  minRows={4}
                  maxRows={15}
                  className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-4 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:bg-slate-100/50 transition-all duration-300 font-mono leading-relaxed"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-200">
              <div className="flex gap-4 w-full justify-center mb-2">
                {/* Compare Button */}
                <button
                  onClick={compareTexts}
                  disabled={isLoading}
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 py-3 min-w-[120px] text-white font-semibold text-base bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 hover:from-blue-600 hover:via-purple-600 hover:to-purple-700 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-purple-500/50 active:translate-y-0 active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Comparing...</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Compare</span>
                    </>
                  )}
                </button>

                {/* Clean Button */}
                <button
                  onClick={cleanText}
                  disabled={isLoading}
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 py-3 min-w-[120px] text-white font-semibold text-base bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-green-500/50 active:translate-y-0 active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <span>Clean</span>
                </button>
              </div>

              <div className="flex-1"></div>

              <div className="text-xs text-slate-500 flex items-center gap-4">
                <span>
                  Words: {text1.split(/\s+/).filter((w) => w.length > 0).length}{" "}
                  | {text2.split(/\s+/).filter((w) => w.length > 0).length}
                </span>
                <span>
                  Lines: {text1.split("\n").length} | {text2.split("\n").length}
                </span>
              </div>
            </div>
            
            {isVisible && (
              <div
                ref={resultRef}
                className="flex flex-col lg:flex-row gap-4 w-full justify-center mt-4 scroll-mt-50"
              >
                <div className="w-full lg:w-1/2">
                  <label className="block text-sm font-medium font-bold mb-2">
                    Original Text (Compared)
                  </label>
                  <div className="bg-gray-100 whitespace-pre-wrap p-2">
                    {renderDiffStream(diffMap.text1)}
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <label className="block text-sm font-medium mb-2">
                    Changed Text (Compared)
                  </label>
                  <div className="bg-gray-100 whitespace-pre-wrap p-2">
                    {renderDiffStream(diffMap.text2)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedTextareaUI;
