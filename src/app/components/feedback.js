import { useState } from "react";
import { Check } from "lucide-react";
import { AlertBanner } from "../components/sub-component.js";

export default function FeedbackSection() {
  const [feedback, setFeedback] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const submitFeedback = async () => {
    if (!feedback.trim()) {
      setIsAlertVisible(true);
      return;
    }
    setIsAlertVisible(false);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log("submit feedback:", { feedback, rating });
      setTimeout(() => {
        setIsSubmitted(false);
        setFeedback("");
        setRating(0);
      }, 3000);
    }, 1500);
  };

  const clearForm = () => {
    setIsAlertVisible(false);
    setFeedback("");
    setIsSubmitted(false);
    setIsSubmitting(false);
    setRating(0);
  };

  const StarRating = ({ rating, onRatingChange }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRatingChange(star)}
          className={`w-6 h-6 transition-all duration-200 ${
            star <= rating
              ? "text-yellow-400 scale-110"
              : "text-gray-300 hover:text-yellow-300"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );

  return (
    <div className="border-0 shadow-2xl max-w-4xl mx-auto my-6 overflow-hidden rounded-2xl">
      <div className="p-4">
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Check className="w-8 h-8 text-white animate-in zoom-in duration-500" />
              </div>
              <div className="absolute inset-0 w-16 h-16 bg-green-400 rounded-full mx-auto animate-ping opacity-20"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-2">
              Your feedback means the world to us
            </p>
            <div className="flex items-center justify-center gap-1 text-yellow-400">
              {[...Array(rating)].map((_, i) => (
                <span key={i} className="text-lg">
                  ★
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {isAlertVisible && (
              <AlertBanner
                title="Please share your thoughts before submitting"
                color="warning"
                onClose={() => setIsAlertVisible(false)}
              />
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Rating */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4">
                <h3 className="font-semibold text-purple-900 mb-3">
                  How was your experience?
                </h3>
                <div className="flex items-center gap-4">
                  <StarRating rating={rating} onRatingChange={setRating} />
                  <span className="text-sm text-purple-700">
                    {rating === 0
                      ? "Rate your experience"
                      : rating <= 2
                      ? "We can do better"
                      : rating <= 4
                      ? "Great to hear!"
                      : "Amazing! 🎉"}
                  </span>
                </div>
              </div>

              {/* Feedback textarea */}
              <div>
                <label
                  htmlFor="feedback"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Tell us more about your experience
                </label>
                <div className="relative">
                  <textarea
                    id="feedback"
                    rows={3}
                    maxLength={500}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm placeholder-gray-400 transition-all duration-200"
                    placeholder="Share your thoughts, suggestions, or report any issues"
                    value={feedback}
                    onChange={(e) => {
                      setFeedback(e.target.value);
                      if (isAlertVisible) setIsAlertVisible(false);
                    }}
                  />
                  <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                    {feedback.length}/500
                  </div>
                </div>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="button"
              onClick={submitFeedback}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-purple-400 disabled:to-pink-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending your feedback...</span>
                </>
              ) : (
                <>
                  <Check className="w-5 h-5" />
                  <span>Submit Feedback</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}