"use client"; 

import { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import SubNavBar from '../components/sub-navbar.js';
import Footer from "../components/footer.js";
import JWTDecoderComponent from "../components/jwt-decode-component.js";

export default function JWTDecoderPage() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="jwtDcode" />
      <SubNavBar />
      <JWTDecoderComponent/>
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
