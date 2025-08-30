"use client"; // only needed if you are in Next.js 13+ App Router

import React, { useState, useEffect, useRef } from "react";
import NavigationBar from "./components/navbar.js";
import Footer from "./components/footer.js";
import ImprovedTextareaUI from "./components/improved-text-area.js";

export default function TextCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="text" />
      <ImprovedTextareaUI></ImprovedTextareaUI>
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
