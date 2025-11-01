import React from 'react';

export default function FeaturesSection({ type }) {
  const features = [
    {
      title: "Lightning Fast",
      description: "Real-time comparison with instant results for text changes.",
      image: "image/lighting-fast.png",
      alt: "Lightning fast text comparison icon - instant real-time results"
    },
    {
      title: "Detailed Analysis",
      description: "Detect changes at character and word level for complete accuracy.",
      image: "image/detailed-analysis.png",
      alt: "Detailed text analysis icon - character and word level detection"
    },
    {
      title: "Detailed Metrics",
      description: "Get detailed statistics on differences, insertions, and deletions.",
      image: "image/detailed-metrics.png",
      alt: "Detailed metrics icon - statistics on text differences and changes"
    },
    {
      title: "Visual Diff",
      description: "Color-coded highlights make changes easy to spot at a glance.",
      image: "image/visual-diff.png",
      alt: "Visual diff icon - color-coded text comparison highlights"
    }
  ];

  return (
    <section 
      className="bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 rounded-t-3xl p-6 md:p-8 lg:p-12 shadow-2xl text-center"
      aria-labelledby="features-heading"
    >
      <div className="max-w-5xl mx-auto mb-8 md:mb-12">
        <h2 
          id="features-heading" 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6"
        >
          Powerful Text Comparison Features
        </h2>
        <p className="text-slate-700 text-base md:text-lg lg:text-xl leading-relaxed px-2">
          Compare two {type} instantly with our{" "}
          <strong className="text-slate-900 font-semibold">
            online text comparison and diff checker
          </strong>
          . Highlight differences, detect changes, and analyze edits with speed and precision. This tool is perfect for{" "}
          <strong className="text-slate-900 font-semibold">
            developers, writers, editors, researchers, reviewers,
          </strong>{" "}
          and <strong className="text-slate-900 font-semibold">content creators</strong> who need a reliable, easy-to-use, and efficient solution for reviewing revisions, spotting subtle changes, and improving document quality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-6 md:mt-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <article
            key={index}
            className="group bg-white rounded-2xl p-6 md:p-7 border-2 border-cyan-100 hover:border-cyan-400 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-200/50 hover:-translate-y-2"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-5">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                  loading="lazy"
                  width="80"
                  height="80"
                />
              </div>
            </div>

            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
              {feature.title}
            </h3>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {feature.description.split('<strong>').map((part, i) => {
                if (i === 0) return part;
                const [bold, rest] = part.split('</strong>');
                return (
                  <React.Fragment key={i}>
                    <strong className="text-slate-900 font-semibold">{bold}</strong>
                    {rest}
                  </React.Fragment>
                );
              })}
            </p>

            <div className="mt-5 pt-5 border-t border-cyan-100">
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 mx-auto"></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}