"use client";

import React, { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import ImageCompareComponent from "../components/image-compare.js"; 

export const metadata = {
  title: "Compare two images | Free Online Compare Tool",
  description: "Compare two images online and quickly spot differences. Free image comparison tool to highlight changes, detect duplicates, and analyze visuals side by side.",
  alternates: {
    canonical: "https://freeonlinetextcomparetool.com/compare-images",
  },
};

export default function TextCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="images" />
      <ImageCompareComponent /> 
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
