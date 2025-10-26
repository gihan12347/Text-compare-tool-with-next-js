import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For production: integrate with email API like EmailJS, Resend, or a backend endpoint.
    window.location.href = `mailto:gdkadawathage@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.email}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl bg-white shadow-md rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-900">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions or feedback about our Text, File, and Image Compare Tool? Fill out the form
          below or email us directly at {" "}
          <a href="mailto:gdkadawathage@gmail.com" className="text-blue-600 underline">
            gdkadawathage@gmail.com
          </a>.
        </p>

        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <p>Thank you for reaching out! Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition"
            >
              Send Message
            </button>
          </form>
        )}

        <footer className="mt-10 text-sm text-gray-500">
          <p>
            Or email us directly: {" "}
            <a href="mailto:gdkadawathage@gmail.com" className="text-blue-600 underline">
              gdkadawathage@gmail.com
            </a>
          </p>
          <p className="mt-2">We typically respond within 24–48 hours.</p>
        </footer>
      </div>
    </main>
  );
}
