import { generateMetadata } from "@/components";
import ServicesPageClient from './ServicesPageClient';

export const metadata = generateMetadata({
  title: "Professional Accounting Services | Bookkeeping, Payroll & Tax | Azul Integrity CPA",
  description: "Comprehensive accounting services for small businesses. Expert bookkeeping, payroll processing, tax preparation, and CPA consulting. Licensed in Florida and New Mexico. Get professional financial solutions.",
  keywords: ["accounting services", "bookkeeping services", "payroll processing", "tax preparation", "CPA services", "small business accounting", "QuickBooks", "financial consulting", "GAAP compliance", "Florida CPA", "New Mexico CPA"],
});

// Structured data schemas
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://azulintegritycpa.com/"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Services",
      "item": "https://azulintegritycpa.com/services"
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Accounting Services",
  "description": "Comprehensive accounting, bookkeeping, payroll, and tax services for small businesses",
  "provider": {
    "@type": "Organization",
    "name": "Azul Integrity Accounting Services LLC"
  },
  "areaServed": ["Florida", "New Mexico"],
  "serviceType": ["Bookkeeping", "Accounting", "Payroll", "Tax Preparation"]
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <ServicesPageClient />
    </>
  );
}