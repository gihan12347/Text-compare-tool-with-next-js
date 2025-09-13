"use client"; 

import React, { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import AboutSection from "../components/about-component.js";

export default function About() {
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
