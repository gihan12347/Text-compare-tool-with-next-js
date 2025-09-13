import ImageCompare from '../pages/image-compare.js';

export const metadata = {
  title: 'Text File & Image Compare - Free Online Difference Tool',
  description: 'Compare two images side by side with our free online tool. Highlight visual differences, detect changes, and spot modified or altered areas easily.',
  alternates: {
    canonical: 'https://freeonlinetextcomparetool.com/compare-images',
  },
  icons: {
    icon: '/favicon.ico', 
    apple: '/apple-touch-icon.png',
  },
};

export default function TextComparePage() {
  return (
    <>
      <ImageCompare />
    </>
  );
}
