import React, { useState } from 'react';
import {
  Code,
  Heart,
  MessageCircle,
  Facebook,
  Send,
  CheckCircle,
  User,
  Briefcase,
  Zap,
  Shield,
  Target,
  FileText,
} from 'lucide-react';

export default function AboutAndFeedback({ facebookPageUrl = "https://www.facebook.com/profile.php?id=61582649887773" }) {
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleFeedbackClick = () => {
    setFeedbackSent(true);
    setTimeout(() => setFeedbackSent(false), 3000);
  };

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

        {/* About the Developer */}
        <section className="mb-12 md:mb-16" aria-labelledby="about-heading">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border-2 border-cyan-200">
            
            <header className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 px-6 md:px-8 py-6 md:py-8 text-center">
              <div className="flex items-center gap-4 justify-center">
                <User className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <h2 id="about-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  About the Developer
                </h2>
              </div>
              <p className="text-cyan-100 mt-3 max-w-3xl mx-auto">
                I build tools that make daily tasks easier for developers, writers, and digital professionals.
              </p>
            </header>

            <div className="p-6 md:p-10 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-12">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-cyan-600" /> A Developer with a Purpose
                  </h2>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
                    Hi, I’m a <strong className="text-slate-900">software engineer</strong> who built this tool to tackle a real problem:
                    finding a fast, accurate, and private way to compare text and code online without ads or signup walls.
                  </p>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
                    This website was made to help users compare <strong>text documents, essays, code snippets, and configuration files</strong> in their browser. 
                    The aim is to provide a <strong>free, secure, and easy-to-use text comparison experience</strong> that works instantly for everyone.
                  </p>
                  <blockquote className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-5 border-l-4 border-cyan-600 italic text-slate-800 font-medium">
                    “Every tool I create focuses on simplicity, reliability, and real-world usefulness. This project is no exception.”
                  </blockquote>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8 shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
                        <Code className="w-8 h-8 text-cyan-600" />
                        <span className="text-slate-900 font-semibold">Full-Stack Engineer</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
                        <Heart className="w-8 h-8 text-red-500" />
                        <span className="text-slate-900 font-semibold">Open-Source Contributor</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
                        <Target className="w-8 h-8 text-blue-600" />
                        <span className="text-slate-900 font-semibold">Focused Problem Solver</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-3xl"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
                </div>
              </div>

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

        {/* Feedback */}
        <section aria-labelledby="feedback-heading">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border-2 border-cyan-200">
            <header className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 px-6 md:px-8 py-6 md:py-8 text-center">
              <div className="flex items-center gap-4 justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
                <h2 id="feedback-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Share Your Feedback
                </h2>
              </div>
              <p className="text-cyan-100 mt-3">
                Help improve this free online text comparison tool by sharing your thoughts or feature ideas.
              </p>
            </header>

            <div className="p-6 md:p-10 lg:p-12 text-center">
              <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Your insights matter. Whether you’re a developer, student, or content creator, your feedback helps shape future improvements.
              </p>

              {!feedbackSent ? (
                <a
                  href={facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleFeedbackClick}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Send Feedback on Facebook</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-3 bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg animate-pulse">
                  <CheckCircle className="w-6 h-6" />
                  <span>Opening Facebook...</span>
                </div>
              )}

              <p className="text-slate-600 text-sm mt-4">
                Join our Facebook page to suggest features, report bugs, or share ideas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}