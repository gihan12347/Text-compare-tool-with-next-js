import React from 'react';
import { FileText, CheckCircle, Shield, Zap, Columns, ChevronRight } from 'lucide-react';

export default function CenterComponent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Online Text Compare Tool – Find Differences Instantly
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Compare two texts, documents, or files online and instantly see the differences side-by-side.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Our free text comparison tool makes it simple to check for duplication, plagiarism, or content changes in just one click.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Introduction Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-10 mb-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Welcome to the most efficient way to highlight differences in your text! Our online text compare tool is fast, secure, and easy to use. Simply paste your two texts into the boxes, hit “Compare,” and instantly see differences highlighted side by side. 
              Whether you’re working with essays, contracts, source code, or website content, this tool helps you spot additions, removals, and changes clearly. 
              For longer texts, you can quickly navigate through each difference with jump links, saving valuable time.
            </p>
          </div>

          {/* Quick Features Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-full px-5 py-2 flex items-center">
              <Zap className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Instant Results</span>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-full px-5 py-2 flex items-center">
              <Shield className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-700">100% Secure</span>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-full px-5 py-2 flex items-center">
              <FileText className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">No Registration</span>
            </div>
          </div>

          {/* Why Us Section */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-10 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 w-1 h-8 mr-3 rounded"></span>
              Why Choose Our Text Comparison Tool?
            </h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Unlike basic diff checkers, our tool is built specifically for quick and accurate online text comparison. We don’t store or share your data, so your content is always safe. 
                Whether you need to compare a Word document, a research paper, or lines of code, our tool makes spotting differences effortless.
              </p>
              <p>
                Many existing tools weren’t designed with speed and clarity in mind. That’s why we created a text compare solution that saves time, improves accuracy, and delivers results instantly.
              </p>
            </div>
          </div>

          {/* Why Necessary Section */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-10 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 w-1 h-8 mr-3 rounded"></span>
              Why Compare Texts Online?
            </h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                If you’re rewriting or editing content, it’s important to verify differences before publishing. Comparing two texts ensures originality and helps you avoid duplicate content issues, which is crucial for SEO and academic work.
              </p>
              <p>
                Our text compare tool is also great for tracking plagiarism, monitoring website content changes, and maintaining brand integrity. 
                By viewing changes side-by-side, you’ll instantly know what has been added or removed between two versions.
              </p>
              <p>
                This professional, free tool helps writers, students, developers, and businesses analyze text differences with speed and precision.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-lg shadow-sm p-6 md:p-10 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Features of Our Text Comparison Tool
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-disc pl-5">
              <li className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Levenshtein Distance Calculation</h3>
                <p className="text-gray-600 text-sm">Accurately measures similarity between two texts to detect even the smallest changes.</p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Common Text Highlighting</h3>
                <p className="text-gray-600 text-sm">Displays shared text clearly with differences marked for quick scanning.</p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:col-span-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Two-Column Comparison View</h3>
                <p className="text-gray-600 text-sm">Shows both versions side by side, making additions and removals easy to identify.</p>
              </li>
            </ul>
          </div>

          {/* Related Topics */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-10 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 w-1 h-8 mr-3 rounded"></span>
              Related Tools & Guides
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="/word-counter" className="flex items-center text-gray-700 text-base md:text-lg hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                  Free Online Word Counter
                </a>
              </li>
              <li>
                <a href="/plagiarism-guide" className="flex items-center text-gray-700 text-base md:text-lg hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                  Plagiarism Guide – How to Avoid Duplicate Content
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}