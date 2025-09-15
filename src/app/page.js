import TextCompare from './pages/text-compare.js';

export const metadata = {
  title: 'Text File & Image Compare Tool | Compare Two Texts Online Free',
  description: 'Free text compare tool to compare two texts online instantly. Highlight differences, detect inserted or deleted content, and clearly see every change.',
  alternates: {
    canonical: 'https://freeonlinetextcomparetool.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function TextComparePage() {
  return (
    <>
      <TextCompare />
    </>
  );
}
