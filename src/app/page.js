import TextCompare from './pages/text-compare.js';

export const metadata = {
  title: 'Text Compare - Your Site',
  description: 'Compare texts easily with our tool.',
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
