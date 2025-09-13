import ImageCompare from './pages/image-compare.js';

export const metadata = {
  title: 'Image Compare - Free Online Image Difference Tool',
  description: 'Compare two images side by side with our free online image compare tool. Highlight visual differences, detect changes, and easily spot modified or altered areas between pictures.',
  alternates: {
    canonical: 'https://freeonlinetextcomparetool.com/compare-images',
  },
};

export default function TextComparePage() {
  return (
    <>
      <ImageCompare />
    </>
  );
}
