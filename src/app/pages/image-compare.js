"use client";

import React, { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import SubNavBar from '../components/sub-navbar.js';
import Footer from "../components/footer.js";
import ImageCompareComponent from "../components/image-compare.js"; 

export default function ImageCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="images" />
      <SubNavBar />
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
