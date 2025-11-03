"use client"; 

import { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import SubNavBar from '../components/sub-navbar.js';
import Footer from "../components/footer.js";
import HowToUseTextCompare from "../components/how-to-use-text-compare.js";
import HowToUseFileCompare from "../components/how-to-use-file-compare-tool.js";
import HowToUseImageCompare from "../components/how-to-use-image-compare.js";
import HowToUseJwtDecoder from "../components/how-to-use-jwt-decoreder.js";

export default function TextCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="" />
      <SubNavBar />
      <HowToUseTextCompare/>
      <HowToUseFileCompare/>
      <HowToUseImageCompare/>
      <HowToUseJwtDecoder/>
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
