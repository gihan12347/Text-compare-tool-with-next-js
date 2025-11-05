"use client"; 

import { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import SubNavBar from '../components/sub-navbar.js';
import Footer from "../components/footer.js";
import FeaturesSection from "../components/jwt-features-section.js";
import Feedback from '../components/feedback.js';
import JWTDecoderComponent from "../components/jwt-decode-component.js";
import HowToUseJWTDecoder from '../components/how-to-use-jwt-decorder.js';

export default function JWTDecoderPage() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="jwtDcode" />
      <SubNavBar />
      <JWTDecoderComponent/>
      <HowToUseJWTDecoder />
      <FeaturesSection />
      {/* <CenterComponent type="text"/> */}
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
