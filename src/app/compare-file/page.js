import FileCompare from '../pages/file-compare.js';

export const metadata = {
  title: 'Text File & Image Compare - Free Online Difference Tool',
  description: 'Compare two texts files instantly with our free online tool. Highlight differences, detect inserted or deleted content, and clearly see every change.',
  alternates: {
    canonical: 'https://freeonlinetextcomparetool.com/compare-file',
  },
};

export default function TextComparePage() {
  return (
    <>
      <FileCompare />
    </>
  );
}
