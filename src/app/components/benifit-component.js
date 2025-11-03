import React, { useState } from 'react';
import {
  Code,
  Zap,
  Shield,
  Target
} from 'lucide-react';

export default function KeyBenifit() {

  const benefits = [
    {
      icon: Code,
      title: "Code Comparison",
      description: "Easily compare code snippets line by line, spot changes, and ensure consistency across versions."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Find differences in documents or code and keep content accurate for professional projects."
    },
    {
      icon: Zap,
      title: "Workflow Efficiency",
      description: "Save time during editing, debugging, or reviewing documents with instant visual diffs."
    },
    {
      icon: Target,
      title: "Precision Analysis",
      description: "Achieve character-level comparison accuracy ideal for developers, editors, and writers."
    },
  ];

  return (
    <div
      className="bg-gradient-to-br from-cyan-50 via-blue-100 to-cyan-100 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="max-w-7xl mx-auto">

        <section className="mb-12 md:mb-16" aria-labelledby="about-heading">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border-2 border-cyan-200">
            
            <div className="p-6 md:p-10 lg:p-12">
              {/* Use Cases */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">
                  Who Can Benefit from This Tool?
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {benefits.map(({ icon: Icon, title, description }, i) => (
                    <article
                      key={i}
                      className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-xl p-5 border-2 border-cyan-100 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group"
                      itemScope
                      itemType="https://schema.org/CreativeWork"
                    >
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}