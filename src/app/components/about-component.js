import { useState, useEffect } from "react";
import { Sparkles, X, Zap, Eye, FileText, Heart } from "lucide-react";
import { Step, FeatureCard } from "./sub-component.js";

export default function AboutSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(
      () => setActiveStep((prev) => (prev + 1) % 3),
      3000
    );
    return () => clearInterval(interval);
  }, []);
  
  const steps = [
    {
      title: "Paste Your Texts",
      description:
        "Add your original text on the left and the modified version on the right side",
    },
    {
      title: "Compare Analysis",
      description:
        "Click the Compare button to analyze differences between your texts",
    },
    {
      title: "Review Results",
      description:
        "See highlighted changes with red for deletions and green for additions",
    },
  ];

  return (
    <div className="border-0 shadow-2xl max-w-5xl mx-auto my-6 overflow-hidden rounded-2xl">
      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4">
          <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Quick Start Guide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {steps.map((step, idx) => (
              <Step
                key={idx}
                number={idx + 1}
                {...step}
                isActive={activeStep === idx}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <FeatureCard
            icon={Eye}
            title="Visual Highlights"
            description="Red highlights show deleted text, green shows additions"
            color="red"
          />
          <FeatureCard
            icon={FileText}
            title="Smart Analysis"
            description="Advanced algorithm detects even subtle changes"
            color="green"
          />
          <FeatureCard
            icon={Zap}
            title="Instant Results"
            description="Get comparison results in milliseconds"
            color="purple"
          />
          <FeatureCard
            icon={Sparkles}
            title="Clean Interface"
            description="Use Clean button to reset both text fields"
            color="blue"
          />
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4">
          <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Pro Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-amber-800">
            {[
              "For best results, ensure both texts are properly formatted",
              "The tool works great with any text length - from sentences to documents",
              "Results are processed locally - your data stays private",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></div>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}