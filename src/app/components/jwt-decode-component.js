"use client";
import { useState, useRef, useEffect } from "react";

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

    textarea.style.height = "auto";
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

function parseJwt(token) {
  try {
    const [header, payload] = token.split(".");
    if (!header || !payload) throw new Error("Invalid token format");
    
    const decodeBase64 = (str) =>
      JSON.parse(
        decodeURIComponent(
          atob(str.replace(/-/g, "+").replace(/_/g, "/"))
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        )
      );
    
    return {
      header: decodeBase64(header),
      payload: decodeBase64(payload),
    };
  } catch (err) {
    throw new Error("Invalid JWT token");
  }
}

export default function JWTDecoderComponent() {
  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState(null);
  const [error, setError] = useState("");
  const [isDecoding, setIsDecoding] = useState(false);
  const resultRef = useRef(null);

  useEffect(() => {
    if (decoded && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [decoded]);

  const handleDecode = () => {
    if (!token.trim()) {
      setError("Please enter a JWT token");
      setDecoded(null);
      return;
    }

    setIsDecoding(true);
    setTimeout(() => {
      try {
        const decodedToken = parseJwt(token);
        setDecoded(decodedToken);
        setError("");
      } catch (err) {
        console.error(err);
        setDecoded(null);
        setError(err.message);
      } finally {
        setIsDecoding(false);
      }
    }, 300);
  };

  const handleClear = () => {
    setToken("");
    setDecoded(null);
    setError("");
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            JWT Token Decoder
          </h1>
          <p className="text-slate-600">
            Decode and inspect JWT tokens instantly
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6">
            {/* Input Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-semibold text-slate-700">
                  JWT Token
                </label>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  {token.length} characters
                </span>
              </div>
              <AutoResizeTextarea
                placeholder="Paste your JWT token here (e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                minRows={3}
                maxRows={8}
                className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-4 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-slate-100/50 transition-all duration-300 font-mono leading-relaxed"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-200">
              <div className="flex gap-4 w-full justify-center">
                {/* Decode Button */}
                <button
                  onClick={handleDecode}
                  disabled={isDecoding}
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 py-3 min-w-[140px] text-white font-semibold text-base bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 hover:from-blue-600 hover:via-purple-600 hover:to-purple-700 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-purple-500/50 active:translate-y-0 active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isDecoding ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Decoding...</span>
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
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        />
                      </svg>
                      <span>Decode</span>
                    </>
                  )}
                </button>

                {/* Clear Button */}
                <button
                  onClick={handleClear}
                  disabled={isDecoding}
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 py-3 min-w-[140px] text-white font-semibold text-base bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-green-500/50 active:translate-y-0 active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
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
                  <span>Clear</span>
                </button>
              </div>
            </div>

            {/* Results Section */}
            {decoded && (
              <div
                ref={resultRef}
                className="mt-8 space-y-6 scroll-mt-20"
              >
                {/* Header Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Header
                    </h2>
                    <button
                      onClick={() => handleCopy(JSON.stringify(decoded.header, null, 2))}
                      className="text-xs px-3 py-1.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copy
                    </button>
                  </div>
                  <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 overflow-x-auto">
                    <pre className="text-sm text-slate-800 font-mono">
                      {JSON.stringify(decoded.header, null, 2)}
                    </pre>
                  </div>
                </div>

                {/* Payload Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                      Payload
                    </h2>
                    <button
                      onClick={() => handleCopy(JSON.stringify(decoded.payload, null, 2))}
                      className="text-xs px-3 py-1.5 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copy
                    </button>
                  </div>
                  <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 overflow-x-auto">
                    <pre className="text-sm text-slate-800 font-mono">
                      {JSON.stringify(decoded.payload, null, 2)}
                    </pre>
                  </div>
                </div>

                {/* Info Banner */}
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-blue-700">
                    This tool only decodes the JWT token. It does not validate the signature. 
                    Never share tokens containing sensitive information.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}