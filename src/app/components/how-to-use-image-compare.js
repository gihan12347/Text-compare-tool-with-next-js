import React, { useState } from 'react';
import { Play, Image, Upload, Eye, AlertCircle, CheckCircle, Layers } from 'lucide-react';

export default function HowToUseImageCompare() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      number: 1,
      title: "Upload Your Original Image",
      description: "Click the upload area or drag and drop your original image file. This will be your baseline image for comparison.",
      icon: Upload,
      detail: "Supports common image formats like JPG, PNG, GIF, and WebP. The original image serves as your reference point."
    },
    {
      number: 2,
      title: "Upload Your Compare Image",
      description: "Upload the second image you want to compare. This should be a modified or different version of your original image.",
      icon: Image,
      detail: "Upload the edited, modified, or updated version of the image. Both images will be analyzed for differences."
    },
    {
      number: 3,
      title: "View Differences",
      description: "The tool automatically compares both images and displays the differences in the bottom section with visual highlights.",
      icon: Eye,
      detail: "Differences are highlighted with color overlays, making it easy to spot even subtle changes between the two images."
    }
  ];

  const features = [
    {
      type: "Side-by-Side View",
      description: "Compare images placed next to each other",
      icon: Layers,
      colorClass: "text-emerald-600",
      bgClass: "from-emerald-50 to-green-50",
      borderClass: "border-emerald-200"
    },
    {
      type: "Difference Highlighting",
      description: "Visual indicators show changed areas",
      icon: Eye,
      colorClass: "text-blue-600",
      bgClass: "from-blue-50 to-cyan-50",
      borderClass: "border-blue-200"
    },
    {
      type: "Pixel-Perfect Detection",
      description: "Identifies even the smallest changes",
      icon: CheckCircle,
      colorClass: "text-purple-600",
      bgClass: "from-purple-50 to-pink-50",
      borderClass: "border-purple-200"
    }
  ];

  const useCases = [
    "Detecting changes in design mockups",
    "Comparing before/after photo edits",
    "Quality assurance testing for UI changes",
    "Verifying image modifications",
    "Spot differences in similar images",
    "Checking for image corruption or artifacts"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How to Use the Free Online Image Compare Tool
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compare two images instantly and see the differences with visual highlights. 
            Perfect for detecting changes, verifying edits, and quality assurance testing.
          </p>
        </header>

        {/* Step-by-Step Guide */}
        <section className="mb-16">
          <p className="text-3xl font-bold text-slate-900 text-center mb-12">
            Simple 3-Step Process
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.number;

              return (
                <div
                  key={step.number}
                  className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-emerald-500 shadow-emerald-200 scale-105'
                      : 'border-emerald-100 hover:border-emerald-300 hover:shadow-xl'
                  }`}
                  onClick={() => setActiveStep(isActive ? null : step.number)}
                >
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        <span className="text-white text-2xl font-bold">{step.number}</span>
                      </div>
                      <Icon className="w-8 h-8 text-emerald-600 mb-3" />
                      <p className="text-xl font-bold text-slate-900 mb-3">{step.title}</p>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      {isActive && (
                        <div className="mt-4 pt-4 border-t border-emerald-100 w-full">
                          <p className="text-sm text-slate-500 italic text-left">{step.detail}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Understanding Features */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-emerald-100 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
              <p className="text-2xl font-bold text-white">
                Key Features
              </p>
            </div>
            <div className="p-8">
              <p className="text-slate-600 mb-8 text-lg">
                Our image comparison tool provides powerful features to help you identify differences quickly:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.type}
                      className={`bg-gradient-to-br ${feature.bgClass} rounded-xl p-6 border ${feature.borderClass}`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <Icon className={`w-10 h-10 ${feature.colorClass} mb-3`} />
                        <p className="text-xl font-bold text-slate-900 mb-2">{feature.type}</p>
                        <p className="text-slate-700">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Visual Example */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
              <p className="text-2xl font-bold text-white">
                How It Works
              </p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Original Image Example */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <p className="font-bold text-slate-900">Original Image</p>
                  </div>
                  <div className="bg-slate-100 rounded-lg p-4 border-2 border-slate-200 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-16 h-16 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-500">Your original image appears here</p>
                    </div>
                  </div>
                </div>

                {/* Compare Image Example */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <p className="font-bold text-slate-900">Compare Image</p>
                  </div>
                  <div className="bg-slate-100 rounded-lg p-4 border-2 border-slate-200 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-16 h-16 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-500">Your compare image appears here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Difference Result Example */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <p className="font-bold text-slate-900">Difference View (Bottom)</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border-2 border-emerald-200">
                  <div className="text-center">
                    <Eye className="w-16 h-16 text-emerald-600 mx-auto mb-3" />
                    <p className="text-lg font-semibold text-slate-900 mb-2">
                      Differences Highlighted Below
                    </p>
                    <p className="text-sm text-slate-600">
                      Changed areas are highlighted with visual overlays, making differences easy to spot
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-100 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
              <p className="text-2xl font-bold text-white">
                Perfect For
              </p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-slate-50 to-emerald-50 rounded-lg p-4 border border-emerald-100 flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <p className="text-slate-700">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-lg border-2 border-blue-200 p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-2xl font-bold text-slate-900 mb-3">
                  Tips for Best Results
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Use images with the <strong>same dimensions</strong> for accurate comparison</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Ensure both images are in the <strong>same format</strong> (both JPG or both PNG)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Higher resolution images provide more detailed difference detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>The tool works best with images of <strong>similar content</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>All processing is done in your browser - your images stay private</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}