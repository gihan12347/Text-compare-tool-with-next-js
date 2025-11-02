'use client';

import { useRef } from 'react';
import NavigationBar from '../components/navbar.js';
import SubNavBar from '../components/sub-navbar.js';
import Footer from '../components/footer.js';
import ImprovedTextareaUI from '../components/improved-text-area.js';
import FeaturesSection from '../components/feature-section.js';
import HowToUseTextCompare from '../components/how-to-use-text-compare.js';
import CenterComponent from '../components/center-component.js';
import Feedback from '../components/feedback.js';

export default function TextCompare() {
  const bottomRef = useRef(null);

  return (
    <>
      <NavigationBar selectedType="text" />
      <SubNavBar />
      <ImprovedTextareaUI />
      <HowToUseTextCompare />
      <FeaturesSection type="texts" />
      <CenterComponent type="text"/>
      <Feedback />
      <div ref={bottomRef} className="bg-black text-white py-4 text-center mt-4">
        <Footer />
      </div>
    </>
  );
}
