import { generateMetadata } from "@/components";
import HomePageClient from './HomePageClient';

export const metadata = generateMetadata({
  title: "Azul Integrity CPA | Professional Accounting & Bookkeeping Services",
  description: "Professional CPA and accounting services for small businesses. Expert bookkeeping, payroll processing, tax preparation, and financial consulting. Licensed CPA in Florida and New Mexico.",
  keywords: ["CPA services", "accounting services", "bookkeeping", "virtual bookkeeping", "Xero bookkeeper", "QuickBooks bookkeeping expert", "payroll processing", "tax preparation", "small business accounting", "financial consulting", "Florida CPA", "New Mexico CPA", "QuickBooks", "GAAP compliance"],
});

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
      <HomePageClient />
    </>
  );
}