"use client"; 

import { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import SubNavBar from '../components/sub-navbar.js';
import Footer from "../components/footer.js";
import KeyBenifit from "../components/benifit-component.js";

export default function TextCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="" />
      <SubNavBar />
      <KeyBenifit/>
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
