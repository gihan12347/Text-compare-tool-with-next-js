export default function FeaturesSectionJWT() {
  const features = [
    {
      title: "Instant Token Validation",
      description:
        "Quickly validate JWTs and detect expired, malformed, or tampered tokens in real-time.",
      image: "image/token-validation.png",
      alt: "Instant token validation icon - secure and real-time JWT check",
    },
    {
      title: "Header, Payload & Signature View",
      description:
        "Decode and visualize JWT sections separately. Understand algorithms, claims, and integrity instantly.",
      image: "image/jwt-structure.png",
      alt: "JWT structure icon - header, payload, signature visualization",
    },
    {
      title: "Signature Verification",
      description:
        "Verify the token's signature against your secret or public key to ensure authenticity and integrity.",
      image: "image/signature-verification.png",
      alt: "Signature verification icon - cryptographic JWT check",
    },
    {
      title: "Secure & Private",
      description:
        "All decoding happens locally in your browser. No token data ever leaves your device.",
      image: "image/local-security.png",
      alt: "Security lock icon - data stays private and local",
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 rounded-t-3xl p-6 md:p-8 lg:p-12 shadow-2xl text-center"
      aria-label="JWT Decoder features section"
    >
      <div className="max-w-5xl mx-auto mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
          Powerful JWT Decoder & Validation Features
        </h2>

        <p className="text-slate-700 text-base md:text-lg lg:text-xl leading-relaxed px-2">
          Decode, inspect, and validate your{" "}
          <span className="text-slate-900 font-semibold">JSON Web Tokens</span>{" "}
          instantly. View headers, payloads, and signatures clearly with{" "}
          <span className="text-slate-900 font-semibold">
            real-time validation and local-only security
          </span>
          . Perfect for{" "}
          <span className="text-slate-900 font-semibold">
            developers, security engineers, and testers
          </span>{" "}
          who need a fast and safe way to debug JWTs.
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
              {feature.description}
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