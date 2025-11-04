import React, { useState } from 'react';
import { Play, Key, Copy, Lock, AlertCircle, CheckCircle, Shield } from 'lucide-react';

export default function HowToUseJWTDecoder() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      number: 1,
      title: "Copy Your JWT Token",
      description: "Get the JWT token from your application, API response, or authentication system. It usually starts with &apos;eyJ...&apos;",
      icon: Key,
      detail: "JWT tokens are typically found in HTTP headers (Authorization: Bearer), cookies, or local storage in web apps."
    },
    {
      number: 2,
      title: "Paste the Token",
      description: "Paste your JWT token into the text area. The token should be a long string divided into three parts by dots.",
      icon: Copy,
      detail: "A valid JWT has three sections: Header.Payload.Signature, each encoded in Base64URL format."
    },
    {
      number: 3,
      title: "Click Decode Button",
      description: "Click the &apos;Decode&apos; button to extract and show the header and payload information from your JWT token.",
      icon: Lock,
      detail: "Our decoder quickly parses the token and displays the data in a readable JSON format without validating the signature."
    },
    {
      number: 4,
      title: "Review Decoded Data",
      description: "Check the header (algorithm and token type) and payload (claims, expiration, user data) sections.",
      icon: CheckCircle,
      detail: "You can copy individual sections for further examination or debugging. Look for expiration times, user IDs, and permissions."
    }
  ];

  const sections = [
    {
      type: "Header",
      description: "Contains metadata about the token",
      content: "Algorithm (alg), Token Type (typ)",
      icon: Shield,
      colorClass: "text-blue-600",
      bgClass: "from-blue-50 to-cyan-50",
      borderClass: "border-blue-200"
    },
    {
      type: "Payload",
      description: "Contains the claims and user data",
      content: "User info, Expiration (exp), Issued At (iat), Claims",
      icon: Key,
      colorClass: "text-purple-600",
      bgClass: "from-purple-50 to-pink-50",
      borderClass: "border-purple-200"
    },
    {
      type: "Signature",
      description: "Used to verify token authenticity",
      content: "Not decoded - requires secret key to validate",
      icon: Lock,
      colorClass: "text-slate-600",
      bgClass: "from-slate-50 to-gray-50",
      borderClass: "border-slate-200"
    }
  ];

  const commonClaims = [
    { name: "iss", description: "Issuer - Who created the token" },
    { name: "sub", description: "Subject - Who the token is about" },
    { name: "aud", description: "Audience - Who should accept the token" },
    { name: "exp", description: "Expiration - When the token expires" },
    { name: "iat", description: "Issued At - When the token was created" },
    { name: "nbf", description: "Not Before - When the token becomes valid" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How to Use the JWT Token Decoder
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Decode JSON Web Tokens (JWT) quickly to view header and payload information. 
            Great for debugging authentication, inspecting claims, and understanding token structure.
          </p>
        </header>

        {/* Demo Video Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-cyan-100">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-4">
              <p className="text-2xl font-bold text-white flex items-center gap-3">
                <Play className="w-7 h-7" />
                Watch Demo Video
              </p>
            </div>
            <div className="p-8">
              <div className="relative bg-slate-900 rounded-xl overflow-hidden">
                <video
                  className="w-full h-auto rounded-lg"
                  src="vedio/jwt-token-decode-demo.mp4"
                  title="JWT Token Decode Demo"
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
          <p className="text-3xl font-bold text-slate-900 text-center mb-12">
            Simple 4-Step Process
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.number;

              return (
                <div
                  key={step.number}
                  className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-purple-500 shadow-purple-200 scale-105'
                      : 'border-purple-100 hover:border-purple-300 hover:shadow-xl'
                  }`}
                  onClick={() => setActiveStep(isActive ? null : step.number)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl font-bold">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-6 h-6 text-purple-600" />
                          <p className="text-xl font-bold text-slate-900">{step.title}</p>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                        {isActive && (
                          <div className="mt-4 pt-4 border-t border-purple-100">
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

        {/* Understanding Token Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-100 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
              <p className="text-2xl font-bold text-white">
                Understanding JWT Token Structure
              </p>
            </div>
            <div className="p-8">
              <p className="text-slate-600 mb-8 text-lg">
                A JWT token has three parts separated by dots (.). Each part serves a specific purpose:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <div
                      key={section.type}
                      className={`bg-gradient-to-br ${section.bgClass} rounded-xl p-6 border ${section.borderClass}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className={`w-8 h-8 ${section.colorClass}`} />
                        <p className="text-xl font-bold text-slate-900">{section.type}</p>
                      </div>
                      <p className="text-slate-700 mb-3 font-medium">{section.description}</p>
                      <p className="text-sm text-slate-600">{section.content}</p>
                    </div>
                  );
                })}
              </div>

              {/* Example Token */}
              <div className="bg-slate-900 rounded-xl p-6 text-white font-mono text-sm overflow-x-auto">
                <div className="mb-2 text-slate-400">Example JWT Token:</div>
                <div className="break-all">
                  <span className="text-blue-400">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-purple-400">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-slate-500">SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common JWT Claims */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-indigo-100 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
              <p className="text-2xl font-bold text-white">
                Common JWT Claims
              </p>
            </div>
            <div className="p-8">
              <p className="text-slate-600 mb-6 text-lg">
                JWT payloads usually include these standard claims:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {commonClaims.map((claim) => (
                  <div
                    key={claim.name}
                    className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-lg p-4 border border-indigo-100"
                  >
                    <div className="flex items-start gap-3">
                      <code className="bg-indigo-600 text-white px-3 py-1 rounded font-mono text-sm font-bold">
                        {claim.name}
                      </code>
                      <p className="text-slate-700 text-sm leading-relaxed flex-1">
                        {claim.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Notice */}
        <section>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-lg border-2 border-amber-200 p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-2xl font-bold text-slate-900 mb-3">
                  Important Security Notes
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>This tool only <strong>decodes</strong> JWT tokens - it does not <strong>validate</strong> signatures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Never share tokens with sensitive or production data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>JWTs are encoded, not encrypted - anyone can decode and read the contents.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Always verify tokens on your server before trusting their contents.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Check the expiration (exp) claim to ensure tokens haven&apos;t expired.</span>
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