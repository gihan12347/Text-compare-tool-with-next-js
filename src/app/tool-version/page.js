"use client"; 

import { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import SubNavBar from '../components/sub-navbar.js';
import Footer from "../components/footer.js";
import ToolVersion from "../components/tool-version.js";

export default function ToolVersionPage() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="" />
      <SubNavBar />
      <ToolVersion/>
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
