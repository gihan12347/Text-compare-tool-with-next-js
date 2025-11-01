import React, { useState } from 'react';
import { Play, FileText, ArrowLeftRight, Search, AlertCircle, CheckCircle } from 'lucide-react';

export default function HowToUseTextCompare() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      number: 1,
      title: "Paste Your Original Text",
      description: "Copy and paste your original text into the left-side text area. This will be your baseline for comparison.",
      icon: FileText,
      detail: "The left panel accepts any plain text content - documents, code, articles, or any text you want to compare."
    },
    {
      number: 2,
      title: "Paste Your Compare Text",
      description: "Copy and paste the text you want to compare into the right-side text area. This is the modified version you want to check against the original.",
      icon: FileText,
      detail: "The right panel is for the updated or modified version of your text that you want to analyze for differences."
    },
    {
      number: 3,
      title: "Swap Texts (Optional)",
      description: "Need to switch the texts? Click the center swap icon to instantly exchange the content between left and right panels.",
      icon: ArrowLeftRight,
      detail: "This feature is helpful when you need to reverse the comparison direction without manually copying and pasting again."
    },
    {
      number: 4,
      title: "Click Compare Button",
      description: "Click the 'Compare' button to analyze the differences. The tool will instantly highlight all changes between your texts.",
      icon: Search,
      detail: "Our intelligent algorithm processes both texts and identifies every addition, deletion, and modification in seconds."
    }
  ];

  const results = [
    {
      type: "Deletions",
      description: "Text removed from the original",
      color: "Red highlighting on left side",
      icon: AlertCircle,
      colorClass: "text-red-600"
    },
    {
      type: "Additions",
      description: "Text added to the original",
      color: "Green highlighting on right side",
      icon: CheckCircle,
      colorClass: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How to Use the Free Online Text Compare Tool
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compare two texts instantly and visualize differences with color-coded highlights. Perfect for detecting changes, revisions, and modifications in any document.
          </p>
        </header>

        {/* Demo Video Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-cyan-100">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Play className="w-7 h-7" />
                Watch Demo Video
              </h2>
            </div>
            <div className="p-8">
              <div className="relative bg-slate-900 rounded-xl overflow-hidden">
                <video 
                  className="w-full h-auto rounded-lg"
                  src="/vedio/text-compare-demo.mp4"
                  title="Text Compare Demo"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Simple 4-Step Process
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.number;
              
              return (
                <div
                  key={step.number}
                  className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'border-cyan-500 shadow-cyan-200 scale-105' 
                      : 'border-cyan-100 hover:border-cyan-300 hover:shadow-xl'
                  }`}
                  onClick={() => setActiveStep(isActive ? null : step.number)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl font-bold">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-6 h-6 text-cyan-600" />
                          <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                        {isActive && (
                          <div className="mt-4 pt-4 border-t border-cyan-100">
                            <p className="text-sm text-slate-500 italic">{step.detail}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Understanding Results Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-cyan-100 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Understanding Your Results
              </h2>
            </div>
            <div className="p-8">
              <p className="text-slate-600 mb-8 text-lg">
                After clicking the Compare button, the tool highlights differences using color-coding for easy identification:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {results.map((result) => {
                  const Icon = result.icon;
                  return (
                    <div 
                      key={result.type}
                      className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-xl p-6 border border-cyan-200"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className={`w-8 h-8 ${result.colorClass}`} />
                        <h3 className="text-xl font-bold text-slate-900">{result.type}</h3>
                      </div>
                      <p className="text-slate-700 mb-2">{result.description}</p>
                      <div className="flex items-center gap-2 mt-4">
                        <div className={`w-4 h-4 rounded ${result.type === 'Deletions' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                        <span className="text-sm font-medium text-slate-600">{result.color}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}