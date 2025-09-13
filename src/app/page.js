import TextCompare from './pages/text-compare.js';

export const metadata = {
  title: 'Text File & Image Compare - Free Online Difference Tool',
  description: 'Compare two texts instantly with our free online tool. Highlight differences, detect inserted or deleted content, and clearly see every change.',
  alternates: {
    canonical: 'https://freeonlinetextcomparetool.com',
  },
};

export default function TextComparePage() {
  return (
    <>
      <TextCompare />
    </>
  );
}
