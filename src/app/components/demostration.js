import React from "react";

export default function Demonstration() {
  return (
    <section className="py-12 px-4 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Watch How to Use the Text Compare Tool
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how to compare text files easily using our free online tool.
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src="https://www.youtube.com/embed/udTYTvYazpg"
              title="How to Use Free Online Text Compare Tool"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}