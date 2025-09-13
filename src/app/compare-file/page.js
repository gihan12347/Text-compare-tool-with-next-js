"use client"; 

import React, { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import ImprovedTextareaUIForFile from "../components/improved-text-area-for-file-compare.js";
import FeaturesSection from "../components/feature-section.js";

export const metadata = {
  title: "Compare two files | Free Online Compare Tool",
  description: "Compare two texts files online and instantly see the differences. Free text comparison tool to highlight changes, spot duplicates, and check content side by side.",
  alternates: {
    canonical: "https://freeonlinetextcomparetool.com/compare-file",
  },
};

export default function TextCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="file" />
      <ImprovedTextareaUIForFile></ImprovedTextareaUIForFile>
      <FeaturesSection type="files" />
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
