import TextCompare from './pages/text-compare.js';

export const metadata = {
  title: 'Text Compare - Free Online Text Compare Tool',
  description: 'Compare two texts instantly with our free online text compare tool. Highlight differences between documents, detect inserted or deleted content, and clearly see what has changed.',
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
