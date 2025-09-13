"use client";

import React, { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import ImageCompareComponent from "../components/image-compare.js"; 

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
