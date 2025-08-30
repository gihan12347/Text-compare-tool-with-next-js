import React from "react";

export const HomePageToastNotifications = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M12 5.5A6.5 6.5 0 1018.5 12 6.5 6.5 0 0012 5.5z"
          />
        </svg>
        <p className="text-sm font-medium">
          Paste your <span className="font-semibold">Original</span> text on the
          left and your <span className="font-semibold">Modified</span> text on
          the right. Then click <span className="font-semibold">Compare</span>{" "}
          to see the differences.
        </p>
      </div>
    </div>
  );
};

export const FileCompareToastNotifications = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M12 5.5A6.5 6.5 0 1018.5 12 6.5 6.5 0 0012 5.5z"
          />
        </svg>
        <p className="text-sm font-medium">
          Paste your <span className="font-semibold">Original</span> text file on the
          left and your <span className="font-semibold">Modified</span> text file on
          the right. Then click <span className="font-semibold">Compare</span>{" "}
          to see the differences.
        </p>
      </div>
    </div>
  );
};
