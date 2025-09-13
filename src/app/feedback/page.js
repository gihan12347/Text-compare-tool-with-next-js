"use client";

import React, { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import Feedback from "../components/feedback.js";

export default function TextCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="" />
      <Feedback />
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
