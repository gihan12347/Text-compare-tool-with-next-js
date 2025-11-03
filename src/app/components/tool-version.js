"use client";
import { Code2, FileText, Image, GitCompare, Calendar, Package, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ToolVersion() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const versionInfo = {
    name: "Free Online Text Compare Tool",
    version: "v1.0.0",
    releaseDate: "November 2025",
    description:
      "This is the first version of our online tool suite. You can compare text, files, images, and decode JWT tokens—all securely and for free.",
    features: [
      { 
        name: "Text Compare", 
        icon: FileText,
        color: "from-blue-500 to-cyan-500",
        description: "Compare text files instantly"
      },
      { 
        name: "File Compare", 
        icon: GitCompare,
        color: "from-purple-500 to-pink-500",
        description: "Analyze file differences"
      },
      { 
        name: "Image Compare", 
        icon: Image,
        color: "from-emerald-500 to-green-500",
        description: "Visual image comparison"
      },
      { 
        name: "JWT Token Decode", 
        icon: Code2,
        color: "from-orange-500 to-red-500",
        description: "Decode JWT tokens easily"
      },
    ],
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-indigo-100 mb-4">
            <Sparkles className="text-indigo-600 w-5 h-5" />
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              Tool Version
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {versionInfo.name}
          </h2>
          
          {/* Description */}
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {versionInfo.description}
          </p>
        </div>

        {/* Version Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* Version Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 min-w-[240px] transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl">
                <Package className="text-white w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-500 font-medium">Current Version</p>
                <p className="text-2xl font-bold text-slate-900">{versionInfo.version}</p>
              </div>
            </div>
          </div>

          {/* Release Date Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 min-w-[240px] transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl">
                <Calendar className="text-white w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-500 font-medium">Release Date</p>
                <p className="text-2xl font-bold text-slate-900">{versionInfo.releaseDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Available Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {versionInfo.features.map((feature, index) => {
              const Icon = feature.icon;
              const isHovered = hoveredFeature === index;
              
              return (
                <div
                  key={feature.name}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="group relative bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-6 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:border-transparent cursor-pointer overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative bg-gradient-to-br ${feature.color} p-4 rounded-xl mb-4 inline-flex shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon className="text-white w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
                      {feature.name}
                    </h4>
                    <p className={`text-sm text-slate-600 transition-all duration-300 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-1'
                    }`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-100 p-6 mb-8">
          <div className="flex items-center justify-center gap-3 text-center">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <p className="text-slate-700 font-medium">
              <span className="font-bold text-indigo-600">100% Free</span> • 
              <span className="mx-2">No Registration Required</span> • 
              <span className="font-bold text-indigo-600">Secure & Private</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-xl px-6 py-3 shadow-md border border-slate-200">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} <span className="font-semibold text-slate-700">FreeOnlineTextCompareTool.com</span> — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}