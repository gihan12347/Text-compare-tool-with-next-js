"use client";

import React, { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import ImprovedTextareaUIForFile from "../components/improved-text-area-for-file-compare.js";
import FeaturesSection from "../components/feature-section.js";
import CenterComponent from '../components/center-component.js';
import Feedback from '../components/feedback.js';
import HowToUseFileCompare from '../components/how-to-use-file-compare-tool.js';

export default function FileCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="file" />
      <ImprovedTextareaUIForFile></ImprovedTextareaUIForFile>
      <HowToUseFileCompare />
      <FeaturesSection type="files" />
      <CenterComponent type="file"/>
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
