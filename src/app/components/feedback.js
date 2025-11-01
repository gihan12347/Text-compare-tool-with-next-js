import React, { useState } from 'react';
import { Code, Heart, MessageCircle, Facebook, Send, CheckCircle, User, Briefcase, Zap, Shield, Target } from 'lucide-react';

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
      description: "Compare code snippets, identify changes, and track modifications easily."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Ensure document accuracy and spot any unintended changes in your content."
    },
    {
      icon: Zap,
      title: "Development Efficiency",
      description: "Speed up your workflow with instant diff checking for daily tasks."
    },
    {
      icon: Target,
      title: "Precision Analysis",
      description: "Character-level accuracy for developers who need detailed comparisons."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-cyan-50 via-blue-100 to-cyan-100 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* About Us Section */}
        <section className="mb-12 md:mb-16" aria-labelledby="about-heading">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border-2 border-cyan-200">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 px-6 md:px-8 py-6 md:py-8">
              <div className="flex items-center gap-4 justify-center">
                <User className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <h2 id="about-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  About the Developer
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 lg:p-12">
              
              {/* Main Story */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-12">
                
                {/* Text Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="w-6 h-6 text-cyan-600" />
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                      Built by a Software Engineer
                    </h3>
                  </div>
                  
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
                    As a <strong className="text-slate-900">professional software engineer</strong>, I know the daily challenges developers face when comparing code, reviewing changes, and ensuring quality in their work.
                  </p>
                  
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
                    This tool came from my own need for a <strong className="text-slate-900">fast, reliable, and simple text comparison solution</strong> that could manage everything from quick code diffs to thorough document reviews.
                  </p>

                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-5 border-l-4 border-cyan-600">
                    <p className="text-slate-800 font-medium italic">
                      "I created this tool to make daily development tasks easier, faster, and more effective for developers like me."
                    </p>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8 shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                        <Code className="w-8 h-8 text-cyan-600" />
                        <span className="text-slate-900 font-semibold">Software Engineer</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                        <Heart className="w-8 h-8 text-red-500" />
                        <span className="text-slate-900 font-semibold">Passionate Developer</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                        <Target className="w-8 h-8 text-blue-600" />
                        <span className="text-slate-900 font-semibold">Problem Solver</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-3xl"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
                </div>
              </div>

              {/* Use Cases Grid */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">
                  Perfect for Your Daily Development Tasks
                </h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-xl p-5 border-2 border-cyan-100 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="mb-8" aria-labelledby="feedback-heading">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border-2 border-cyan-200">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 px-6 md:px-8 py-6 md:py-8">
              <div className="flex items-center gap-4 justify-center">
                <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <h2 id="feedback-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Share Your Feedback
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 lg:p-12">
              <div className="max-w-3xl mx-auto text-center">
                
                <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8">
                  Your feedback helps me improve this tool for everyone in the developer community. 
                  I'd love to hear about your experience, feature requests, or any issues you've encountered.
                </p>

                {/* Feedback Button */}
                <div className="space-y-4">
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

                  <p className="text-slate-600 text-sm">
                    Connect with me on Facebook to share your thoughts, report bugs, or request features.
                  </p>
                </div>

                {/* Additional Info */}
                <div className="mt-10 pt-8 border-t-2 border-cyan-100">
                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4">
                      <MessageCircle className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                      <p className="text-slate-900 font-semibold mb-1">Quick Response</p>
                      <p className="text-slate-600 text-sm">I read all feedback.</p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4">
                      <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                      <p className="text-slate-900 font-semibold mb-1">Community Driven</p>
                      <p className="text-slate-600 text-sm">Built for developers.</p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4">
                      <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-slate-900 font-semibold mb-1">Constant Updates</p>
                      <p className="text-slate-600 text-sm">Always improving.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}