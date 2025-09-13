import FileCompare from './pages/file-compare.js';

export const metadata = {
  title: 'Text File Compare - Free Online Text Difference Tool',
  description: 'Compare two text files instantly with our free online text file compare tool. Highlight differences, track inserted or deleted lines, and clearly see every change side by side.',
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
