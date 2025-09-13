"use client"; 

import React, { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import AboutSection from "../components/about-component.js";

export const metadata = {
  title: "About | Free Online Compare Tool",
  description: "Learn more about our free text, file, and image comparison tool.",
  alternates: {
    canonical: "https://freeonlinetextcomparetool.com/about",
  },
};

export default function TextCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="" />
      <AboutSection/>
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
