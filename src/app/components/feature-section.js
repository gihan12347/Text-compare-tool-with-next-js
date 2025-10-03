export default function FeaturesSection({ type }) {
  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-t-3xl p-6 md:p-8 lg:p-12 shadow-2xl text-center">
      {/* Hero Description */}
      <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mb-6 md:mb-8 px-2">
        Compare two {type} instantly with our{" "}
        <strong className="text-gray-900">
          online text comparison and diff checker
        </strong>
        . Highlight differences, detect changes, and analyze edits with
        precision, accuracy, and speed. Ideal for{" "}
        <strong>developers, writers, editors, researchers, reviewers,</strong>{" "}
        and <strong>content creators</strong> who need a reliable, intuitive,
        and efficient solution for reviewing revisions, spotting subtle changes,
        and improving document quality.{" "}
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
        {/* Lightning Fast */}
        <div className="bg-white/60 backdrop-blur-sm p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
          <div className="text-2xl md:text-3xl mb-2 md:mb-3">🚀</div>
          <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
            Lightning Fast
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Real-time comparison with instant results for text changes.
          </p>
        </div>

        {/* Detailed Analysis */}
        <div className="bg-white/60 backdrop-blur-sm p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
          <div className="text-2xl md:text-3xl mb-2 md:mb-3">🔍</div>
          <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
            Detailed Analysis
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Detect changes at <strong>character and word level</strong> for
            complete accuracy.
          </p>
        </div>

        {/* Statistics */}
        <div className="bg-white/60 backdrop-blur-sm p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
          <div className="text-2xl md:text-3xl mb-2 md:mb-3">📊</div>
          <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
            Detailed Metrics
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Get <strong>comprehensive statistics</strong> on differences,
            insertions, and deletions.
          </p>
        </div>

        {/* Visual Diff */}
        <div className="bg-white/60 backdrop-blur-sm p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
          <div className="text-2xl md:text-3xl mb-2 md:mb-3">🎨</div>
          <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
            Visual Diff
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            <strong>Color-coded highlights</strong> make changes easy to
            identify at a glance.
          </p>
        </div>
      </div>
    </div>
  );
}