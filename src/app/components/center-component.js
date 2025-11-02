import React from "react";
import { FileText, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";

export default function CenterComponent({ type = "text" }) {
  const isText = type === "text";
  const title = isText
    ? "Online Text Compare Tool. Find Differences Instantly"
    : "Online File Compare Tool. Find Differences Instantly";

  const subtitle = isText
    ? "Compare two texts, documents, or files online. See the differences side by side."
    : "Compare two files or folders online. See the differences side by side.";

  const description = isText
    ? "Our free text comparison tool makes it easy to check for duplication, plagiarism, or content changes in just one click."
    : "Our free file comparison tool makes it easy to check for code, document, or content changes in just one click.";

  const introToolName = isText
    ? "online text comparison tool"
    : "online file comparison tool";

  const diffCheckerName = isText ? "diff checker" : "file diff checker";

  const freeToolName = isText
    ? "free text compare tool"
    : "free file compare tool";

  const comparisonPhrase = isText
    ? "text comparison online"
    : "file comparison online";

  const whyTitle = isText
    ? "Why Choose Our Text Comparison Tool?"
    : "Why Choose Our File Comparison Tool?";

  const whyCompareTitle = isText
    ? "Why Compare Texts Online?"
    : "Why Compare Files Online?";

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
      <section className="bg-gradient-to-br from-cyan-100 via-blue-100 to-cyan-50 py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              100% Free & Secure
            </span>
          </div>

          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {title}
          </div>

          <p className="text-xl md:text-2xl text-slate-700 mb-4 font-medium">
            {subtitle}
          </p>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <div className="bg-white border-2 border-cyan-200 rounded-full px-6 py-3 flex items-center shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300 group">
              <Zap className="w-5 h-5 text-cyan-600 mr-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-slate-700">
                Instant Results
              </span>
            </div>
            <div className="bg-white border-2 border-cyan-200 rounded-full px-6 py-3 flex items-center shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300 group">
              <Shield className="w-5 h-5 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-slate-700">
                100% Secure
              </span>
            </div>
            <div className="bg-white border-2 border-cyan-200 rounded-full px-6 py-3 flex items-center shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300 group">
              <FileText className="w-5 h-5 text-cyan-600 mr-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-slate-700">
                No Registration
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <article
            className="bg-white rounded-2xl shadow-xl border-2 border-cyan-100 p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300"
            itemScope
            itemType="https://schema.org/SoftwareApplication"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg p-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900">
                Welcome to Your Perfect Comparison Tool
              </div>
            </div>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              Welcome to the easiest and most reliable way to highlight
              differences in your {isText ? "text" : "files"}. Our free{" "}
              <span className="font-bold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">
                {introToolName}
              </span>{" "}
              is built to be fast, secure, and simple for anyone who needs to
              compare content. Just{" "}
              {isText
                ? "paste your original text and modified text into the boxes"
                : "upload your original and modified files"}{" "}
              , click{" "}
              <em className="font-semibold text-blue-600">&ldquo;Compare&rdquo;</em>
              , and quickly see the differences highlighted side by side. This
              effective{" "}
              <span className="font-bold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">
                {diffCheckerName}
              </span>{" "}
              works for essays, research papers, legal contracts, website
              content, source code, or any document where precision matters.
              You will spot{" "}
              <span className="font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                additions, removals, and changes
              </span>{" "}
              easily, helping you avoid errors and save valuable time. For
              longer documents, our smart navigation system with jump links lets
              you navigate quickly through each change without endless
              scrolling. Whether you are a writer checking revisions, a student
              verifying originality, a developer comparing code, or a
              professional reviewing important documents, this{" "}
              <span className="font-bold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">
                {freeToolName}
              </span>{" "}
              ensures you never miss even the smallest difference. Best of
              all, it runs entirely in your browser with no downloads or
              registrations needed, making it a safe, private, and efficient
              solution for accurate{" "}
              <span className="font-bold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">
                {comparisonPhrase}
              </span>
              .
            </p>
          </article>

          <section className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-xl border-2 border-cyan-100 p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 w-2 h-12 rounded-full"></span>
              <div className="text-2xl md:text-3xl font-bold text-slate-900">
                {whyTitle}
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-cyan-100 hover:border-cyan-300 transition-all duration-300">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg p-2 mt-1">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                </div>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed flex-1">
                  Our {isText ? "online text compare tool" : "online file compare tool"} is designed for{" "}
                  <span className="font-bold text-cyan-700">
                    speed, security, and accuracy
                  </span>
                  . In just a few clicks, you can{" "}
                  {isText
                    ? "paste or upload two pieces of text"
                    : "upload or select two files or folders"}
                  , press &quot;Compare,&quot; and quickly see the differences
                  highlighted side by side. This makes it an important tool for{" "}
                  <span className="font-bold text-blue-700">
                    students, developers, editors, researchers, and
                    professionals
                  </span>{" "}
                  who need fast and reliable results.
                </p>
              </div>

              <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-cyan-100 hover:border-cyan-300 transition-all duration-300">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg p-2 mt-1">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                </div>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed flex-1">
                  Unlike many basic {isText ? "text diff checkers" : "file diff tools"}, our tool supports{" "}
                  <span className="font-bold text-cyan-700">
                    long-form documents
                  </span>{" "}
                  and has a smart navigation system with jump links for easy
                  browsing without endless scrolling.
                </p>
              </div>

              <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-cyan-100 hover:border-cyan-300 transition-all duration-300">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg p-2 mt-1">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                </div>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed flex-1">
                  Privacy and convenience are key to our solution. Our tool
                  doesn&apos;t require sign-ups, downloads, or external servers.
                  All comparisons run{" "}
                  <span className="font-bold text-cyan-700">
                    directly in your browser
                  </span>
                  , keeping your content private, secure, and under your
                  control.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl shadow-xl border-2 border-blue-100 p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 w-2 h-12 rounded-full"></span>
              <div className="text-2xl md:text-3xl font-bold text-slate-900">
                {whyCompareTitle}
              </div>
            </div>

            <div className="space-y-5">
              {isText ? (
                <>
                  <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-blue-100 hover:border-blue-300 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed flex-1">
                      Comparing texts online is vital for ensuring{" "}
                      <span className="font-bold text-blue-700">
                        originality, consistency, and accuracy
                      </span>
                      . By spotting even the smallest changes, you can avoid{" "}
                      <span className="font-bold text-cyan-700">
                        duplicate content issues
                      </span>
                      , which matter for both{" "}
                      <span className="font-bold text-blue-700">
                        SEO optimization
                      </span>{" "}
                      and academic integrity.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-blue-100 hover:border-blue-300 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed flex-1">
                      The tool is also invaluable for{" "}
                      <span className="font-bold text-blue-700">
                        plagiarism detection, content monitoring, and version
                        control
                      </span>
                      . Whether you&apos;re a blogger updating posts, a business
                      tracking policy changes, or a developer reviewing code,
                      text comparison helps you stay in control of every edit.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-blue-100 hover:border-blue-300 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed flex-1">
                      Writers, researchers, and businesses depend on accurate
                      comparison tools to{" "}
                      <span className="font-bold text-blue-700">
                        maintain brand consistency, verify originality, and
                        streamline editing workflows
                      </span>
                      . With our free online text diff checker, you can work
                      faster, see changes clearly, and ensure your documents
                      stay high-quality and trustworthy.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-blue-100 hover:border-blue-300 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed flex-1">
                      Comparing files online is crucial for ensuring{" "}
                      <span className="font-bold text-blue-700">
                        accuracy, consistency, and version integrity
                      </span>
                      . It allows you to quickly find modifications across
                      documents, codebases, or directories. This helps avoid
                      synchronization issues and data loss.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-blue-100 hover:border-blue-300 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed flex-1">
                      The tool is perfect for{" "}
                      <span className="font-bold text-blue-700">
                        developers, IT professionals, and editors
                      </span>{" "}
                      who need to check changes in configuration files, scripts,
                      or text across versions.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-blue-100 hover:border-blue-300 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed flex-1">
                      Our free online file diff checker helps you{" "}
                      <span className="font-bold text-blue-700">
                        detect renames, additions, and deletions
                      </span>
                      , ensuring you never miss critical updates in your data or
                      code repositories.
                    </p>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}