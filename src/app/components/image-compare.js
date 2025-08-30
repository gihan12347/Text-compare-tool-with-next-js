import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import { Upload, Image as ImageIcon } from "lucide-react";

const ImageCompareComponent = () => {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img1Url, setImg1Url] = useState(null);
  const [img2Url, setImg2Url] = useState(null);
  const canvasRef = useRef(null);

  const loadImage = async (file, setUrl) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new window.Image();
        img.src = e.target.result;
        img.onload = () => resolve(img);
        setUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    if (!img1 || !img2) return;
    const canvas = canvasRef.current;
    const size = 256;
    canvas.width = size;
    canvas.height = size;
    const run = async () => {
      const tensorFromImage = (img) =>
        tf.browser
          .fromPixels(img)
          .resizeBilinear([size, size])
          .toFloat()
          .div(255)
          .expandDims();
      const t1 = tensorFromImage(img1);
      const t2 = tensorFromImage(img2);
      for (let alpha = 0; alpha <= 1.0; alpha += 0.05) {
        const blended = tf.add(tf.mul(t1, 1 - alpha), tf.mul(t2, alpha));
        const clipped = blended.squeeze();
        await tf.browser.toPixels(clipped, canvas);
        await new Promise((r) => setTimeout(r, 200));
      }
      t1.dispose();
      t2.dispose();
    };
    run();
  }, [img1, img2]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Upload Section */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Image 1 Upload */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    First Image
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Choose the starting image for your morph
                  </p>
                  
                  <label className="cursor-pointer group">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl font-medium transition-all duration-200 transform group-hover:scale-105 shadow-lg">
                      <Upload className="w-5 h-5" />
                      Choose Image
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (e) => {
                        if (e.target.files[0]) {
                          const loaded = await loadImage(e.target.files[0], setImg1Url);
                          setImg1(loaded);
                        }
                      }}
                    />
                  </label>
                  
                  {img1Url && (
                    <div className="mt-4">
                      <div className="inline-flex items-center gap-2 text-green-600 text-sm font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Image uploaded successfully
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Image 2 Upload */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Second Image
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Choose the ending image for your morph
                  </p>
                  
                  <label className="cursor-pointer group">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-200 transform group-hover:scale-105 shadow-lg">
                      <Upload className="w-5 h-5" />
                      Choose Image
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (e) => {
                        if (e.target.files[0]) {
                          const loaded = await loadImage(e.target.files[0], setImg2Url);
                          setImg2(loaded);
                        }
                      }}
                    />
                  </label>
                  
                  {img2Url && (
                    <div className="mt-4">
                      <div className="inline-flex items-center gap-2 text-green-600 text-sm font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Image uploaded successfully
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {(img1Url || img2Url || img1 || img2) && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Morphing Preview
                </h2>
                <p className="text-gray-600">
                  Watch your images transform into each other
                </p>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                {/* Image 1 Display */}
                <div className="flex flex-col items-center group">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {img1Url ? (
                        <img
                          src={img1Url}
                          alt="Input 1"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          <ImageIcon className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-sm">Upload first image</p>
                        </div>
                      )}
                    </div>
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-lg font-semibold text-gray-800">Source Image</p>
                    <p className="text-sm text-gray-500">Starting point</p>
                  </div>
                </div>

                {/* Transition Display */}
                <div className="flex flex-col items-center group">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-gray-300 flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <canvas
                        ref={canvasRef}
                        className="w-full h-full object-cover rounded-2xl"
                        style={{ imageRendering: 'pixelated' }}
                      />
                    </div>
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      ⟶
                    </div>
                    {img1 && img2 && (
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full shadow-lg animate-pulse">
                          Morphing...
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-lg font-semibold text-gray-800">Live Transition</p>
                    <p className="text-sm text-gray-500">AI-powered morphing</p>
                  </div>
                </div>

                {/* Image 2 Display */}
                <div className="flex flex-col items-center group">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {img2Url ? (
                        <img
                          src={img2Url}
                          alt="Input 2"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          <ImageIcon className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-sm">Upload second image</p>
                        </div>
                      )}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-lg font-semibold text-gray-800">Target Image</p>
                    <p className="text-sm text-gray-500">Ending point</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!img1Url && !img2Url && (
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-blue-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900">How it works</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Upload your first image</h4>
                      <p className="text-gray-600 text-sm">Choose any image as your starting point</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Upload your second image</h4>
                      <p className="text-gray-600 text-sm">Select the image you want to morph into</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Watch the magic happen</h4>
                      <p className="text-gray-600 text-sm">Our AI will automatically create a smooth transition between your images</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCompareComponent;