"use client"; 

import { useRef } from "react";
import NavigationBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import ContactUs from "../components/contact-us-component.js";

export default function TextCompare() {
  const bottomRef = useRef(null);
  return (
    <>
      <NavigationBar selectedType="" />
      <ContactUs/>
      <div
        ref={bottomRef}
        className="bg-black text-white py-4 text-center mt-4"
      >
        <Footer />
      </div>
    </>
  );
}
