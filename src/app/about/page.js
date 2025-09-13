import About from '../pages/about.js';

export const metadata = {
  title: 'Text File & Image Compare - Free Online Difference Tool',
  description: 'Our free online compare tool makes it easy to analyze text files and images. Instantly spot differences with a clear side-by-side view, and quickly detect inserted, deleted, or modified content.',
  alternates: {
    canonical: 'https://freeonlinetextcomparetool.com/about',
  },
};

export default function TextComparePage() {
  return (
    <>
      <About />
    </>
  );
}
