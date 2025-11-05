import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Zap, Target, FileText, Upload, File, Key, Lock, Smartphone, Gem, Share2, Users } from 'lucide-react';

export default function Faq() {
  const faqs = [
    {
      q: 'What is this tool used for?',
      a: 'This free online tool helps you compare text, decode JWT tokens, and visually compare images and files. It is designed to be fast and easy to use without installing anything.',
      icon: Target,
    },
    {
      q: 'How does the text compare feature work?',
      a: 'Paste two blocks of text into the boxes and click "Compare." The tool highlights what was added, removed, or changed so you can quickly spot differences.',
      icon: FileText,
    },
    {
      q: 'Can I compare files instead of typing text?',
      a: 'Yes, you can upload files and the tool will compare their text content side by side. (See supported file types below.)',
      icon: Upload,
    },
    {
      q: 'What types of files are supported?',
      a: 'This tool currently supports **plain text files only (.txt)**. Please convert other file types (JSON, CSV, HTML, etc.) to .txt before uploading if you want to compare their raw text content.',
      icon: File,
    },
    {
      q: 'What is the JWT Token Decode feature?',
      a: 'JWT decoding shows the token header, payload, and signature fields so you can inspect the data. The tool does not validate signatures; it only decodes the token for viewing.',
      icon: Key,
    },
    {
      q: 'Are my files or text data stored on your servers?',
      a: 'No. All comparisons and decoding run locally in your browser. Files and tokens are not uploaded or saved on our servers.',
      icon: Lock,
    },
    {
      q: 'Can I use this tool on mobile or tablet?',
      a: 'Yes. The site is responsive and works on modern mobile and tablet browsers.',
      icon: Smartphone,
    },
    {
      q: 'Is it really free to use?',
      a: 'Yes, the tool is free to use with no sign-up required.',
      icon: Gem,
    },
    {
      q: 'Can I share results with others?',
      a: 'You can copy or download the comparison result and share it manually. For privacy, we do not host or share your data automatically.',
      icon: Share2,
    },
    {
      q: 'Who can benefit from this tool?',
      a: 'Developers, writers, editors, and anyone who needs to compare text versions, inspect JWT tokens, or visually compare two images. Note: for file compare, only .txt is supported at this time.',
      icon: Users,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-300 mb-6">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 text-sm font-medium">Help Center</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Quick answers about the Free Online Text Compare Tool
          </p>

          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
            <Zap className="w-4 h-4 text-cyan-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const open = openIndex === idx;
            const Icon = item.icon;
            
            return (
              <div
                key={idx}
                className={`
                  group relative rounded-xl overflow-hidden transition-all duration-300
                  ${open 
                    ? 'bg-white border-blue-400 shadow-xl shadow-blue-200/50' 
                    : 'bg-white/80 border-blue-200 hover:border-blue-300 hover:shadow-lg'
                  }
                  border backdrop-blur-sm
                `}
              >
                {/* Glow effect on active */}
                {open && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-cyan-50/50 to-blue-50/50 pointer-events-none" />
                )}

                <button
                  onClick={() => setOpenIndex(open ? null : idx)}
                  className="relative w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-start gap-4 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl transition-all duration-200"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${idx}`}
                >
                  {/* Icon */}
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
                    ${open 
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-300/50' 
                      : 'bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200'
                    }
                  `}>
                    <Icon className={`w-5 h-5 transition-colors duration-300 ${
                      open ? 'text-white' : 'text-blue-600 group-hover:text-blue-700'
                    }`} />
                  </div>

                  {/* Question */}
                  <span className={`flex-1 font-semibold text-base md:text-lg transition-colors duration-200 ${
                    open ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'
                  }`}>
                    {item.q}
                  </span>

                  {/* Toggle Icon */}
                  <div className={`
                    flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300
                    ${open 
                      ? 'bg-blue-100 text-blue-600 rotate-180' 
                      : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }
                  `}>
                    {open ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  id={`faq-panel-${idx}`}
                  className={`
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                  aria-hidden={!open}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pl-16 md:pl-20">
                    <div className="relative">
                      {/* Vertical line connector */}
                      <div className="absolute -left-10 md:-left-12 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-transparent" />
                      
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom border glow on hover */}
                <div className={`
                  h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent
                  transition-opacity duration-300
                  ${open ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
                `} />
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-10 p-6 rounded-xl bg-white border border-blue-200 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-blue-700 font-semibold mb-2">Pro Tip</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you want to support other file types later (JSON, CSV, etc.), consider auto-converting to plain text on the client-side before comparing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}