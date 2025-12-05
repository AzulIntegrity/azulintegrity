import { generateMetadata } from "@/components";
import HomePageWrapper from './HomePageWrapper';
import { loadHomePageSeo } from '@/lib/content';

// Core SEO keywords (protected)
const coreKeywords = [
  "CPA services",
  "accounting services", 
  "virtual CPA",
  "remote CPA services",
  "bookkeeping"
];

// Load SEO data and generate metadata
async function getPageMetadata() {
  try {
    const seoData = await loadHomePageSeo();
    
    // Combine core keywords with CMS flexible keywords
    const allKeywords = [...coreKeywords, ...(seoData.flexible_keywords || [])];
    
    return generateMetadata({
      title: seoData.title,
      description: seoData.description,
      keywords: allKeywords,
    });
  } catch (error) {
    console.error('Failed to load SEO data, using fallback:', error);
    
    // Fallback metadata if CMS fails
    return generateMetadata({
      title: "Azul Integrity CPA | Professional Accounting & Bookkeeping Services",
      description: "Professional CPA and accounting services for small businesses. Expert bookkeeping, payroll processing, tax preparation, and financial consulting. Licensed CPA in Florida and New Mexico.",
      keywords: [...coreKeywords, "virtual bookkeeping", "Xero bookkeeper", "QuickBooks bookkeeping expert", "payroll processing", "tax preparation"],
    });
  }
}

export const metadata = await getPageMetadata();

// Structured data schema for home page
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://azulintegritycpa.com/"
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <HomePageWrapper />
    </>
  );
}