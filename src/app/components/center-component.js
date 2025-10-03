import React from "react";
import {
  FileText,
  Shield,
  Zap,
  ChevronRight,
} from "lucide-react";

export default function CenterComponent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-8 md:py-7">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Online Text Compare Tool – Find Differences Instantly
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Compare two texts, documents, or files online and instantly see
              the differences side-by-side.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Our free text comparison tool makes it simple to check for
              duplication, plagiarism, or content changes in just one click.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-4 md:py-8">
        <div className="max-w-5xl mx-auto">
          {/* Introduction Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8 mb-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Welcome to the most efficient and reliable way to highlight
              differences in your text. Our free{" "}
              <strong>online text comparison tool</strong> is designed to be
              fast, secure, and easy to use for anyone who needs to compare
              content with precision. Simply paste your original text and
              modified text into the boxes, click <em>“Compare”</em>, and
              instantly view the differences highlighted side by side in an
              easy-to-read format. This powerful <strong>diff checker</strong>{" "}
              works for essays, research papers, legal contracts, website
              content, source code, or any other type of document where accuracy
              matters. You’ll be able to identify{" "}
              <strong>additions, removals, and text changes</strong> clearly,
              helping you avoid mistakes and save valuable editing time. For
              longer documents, our smart navigation system with jump links lets
              you move quickly through each detected change without endless
              scrolling. Whether you are a writer checking revisions, a student
              verifying originality, a developer comparing code, or a
              professional reviewing critical documents, this
              <strong> free text compare tool</strong> ensures that you never
              miss even the smallest difference. Best of all, it runs entirely
              in your browser with no downloads or registrations required,
              making it a safe, private, and efficient solution for accurate
              <strong> text comparison online</strong>.
            </p>
          </div>

          {/* Quick Features Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-full px-5 py-2 flex items-center">
              <Zap className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">
                Instant Results
              </span>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-full px-5 py-2 flex items-center">
              <Shield className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-700">
                100% Secure
              </span>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-full px-5 py-2 flex items-center">
              <FileText className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">
                No Registration
              </span>
            </div>
          </div>

          {/* Why Us Section */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 w-1 h-8 mr-3 rounded"></span>
              Why Choose Our Text Comparison Tool?
            </h2>
            <div className="space-y-3 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Our online text compare tool is designed for speed, security,
                and simplicity. With just a few clicks, you can paste two pieces
                of text, hit "Compare," and instantly see highlighted
                differences side by side. Perfect for students, developers,
                editors, and professionals.
              </p>
              <p>
                For longer documents, our smart navigation with jump links makes
                scanning through differences effortless and time-saving.
              </p>
              <p>
                Unlike many tools, our text diff checker doesn’t require
                registration or downloads and guarantees privacy—your data never
                leaves your browser.
              </p>
            </div>
          </div>

          {/* Why Necessary Section */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 w-1 h-8 mr-3 rounded"></span>
              Why Compare Texts Online?
            </h2>
            <div className="space-y-3 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Comparing texts ensures originality and avoids duplicate content
                issues, crucial for SEO, academic work, and professional
                writing.
              </p>
              <p>
                It’s also useful for detecting plagiarism, monitoring content
                updates, and maintaining brand consistency across platforms.
              </p>
              <p>
                Writers, developers, researchers, and businesses benefit from
                precise, reliable comparisons with our free tool.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-lg shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Key Features of Our Text Comparison Tool
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-disc pl-5">
              <li className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Levenshtein Distance Calculation
                </h3>
                <p className="text-gray-600 text-sm">
                  Detects even the smallest differences with accurate text
                  similarity checks.
                </p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Common Text Highlighting
                </h3>
                <p className="text-gray-600 text-sm">
                  Marks shared and modified text for faster, clearer reviews.
                </p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:col-span-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Two-Column Comparison View
                </h3>
                <p className="text-gray-600 text-sm">
                  Displays original and modified text side by side for easy
                  identification of edits.
                </p>
              </li>
            </ul>
          </div>

          {/* Related Topics */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 w-1 h-8 mr-3 rounded"></span>
              Related Tools & Guides
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/word-counter"
                  className="flex items-center text-gray-700 text-base md:text-lg hover:text-blue-600 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                  Free Online Word Counter
                </a>
              </li>
              <li>
                <a
                  href="/plagiarism-guide"
                  className="flex items-center text-gray-700 text-base md:text-lg hover:text-blue-600 transition-colors"
                >
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