"use client";

import React, { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import ImageCompareComponent from "../components/image-compare.js"; 
import AdBanner from '../components/ad-component.js';

export default function ImageCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="images" />
      <ImageCompareComponent /> 
      <AdBanner />
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
