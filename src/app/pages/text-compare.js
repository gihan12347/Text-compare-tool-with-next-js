'use client';

import { useRef } from 'react';
import NavigationBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import ImprovedTextareaUI from '../components/improved-text-area.js';
import FeaturesSection from '../components/feature-section.js';
import AdBanner from '../components/ad-component.js';
import CenterComponent from '../components/center-component.js';
import Demonstration from '../components/demostration.js';

export default function TextCompare() {
  const bottomRef = useRef(null);

  return (
    <>
      <NavigationBar selectedType="text" />
      <ImprovedTextareaUI />
      <AdBanner />
      <FeaturesSection type="texts" />
      <CenterComponent type="text"/>
      <Demonstration />
      <div ref={bottomRef} className="bg-black text-white py-4 text-center mt-4">
        <Footer />
      </div>
    </>
  );
}
