import { getHomepageContent, getFooterContent } from '@/lib/content';
import HomePageClient from './HomePageClient';

export default function HomePage() {
  // Load all homepage content from markdown files
  const homepageContent = getHomepageContent();
  const footerData = getFooterContent();

  // Pass the loaded content as props to the client component
  return <HomePageClient homepageContent={homepageContent} footerData={footerData} />;
}