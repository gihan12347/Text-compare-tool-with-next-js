"use client"; 

import React, { useRef } from "react";
import NavigationBar from "./components/navbar.js";
import Footer from "./components/footer.js";
import ImprovedTextareaUI from "./components/improved-text-area.js";
import FeaturesSection from "./components/feature-section.js";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Free Online Compare Tool",
  description: "Compare two texts online and instantly see the differences. Free text comparison tool to highlight changes, spot duplicates, and check content side by side.",
  alternates: {
    canonical: "https://freeonlinetextcomparetool.com",
  },
};

export default function TextCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="text" />
      <ImprovedTextareaUI></ImprovedTextareaUI>
      <FeaturesSection type="texts" />
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
