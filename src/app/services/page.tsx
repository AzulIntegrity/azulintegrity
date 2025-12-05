import { generateMetadata } from "@/components";
import ServicesPageClient from './ServicesPageClient';
import { getServicesPageContent, getFooterContent, loadServicesPageSeo } from "@/lib/content";

// Core SEO keywords for services (protected)
const coreServicesKeywords = [
  "CPA services",
  "accounting services",
  "bookkeeping services", 
  "virtual CPA",
  "remote CPA services"
];

// Load services SEO data and generate metadata
async function getServicesPageMetadata() {
  try {
    const seoData = await loadServicesPageSeo();
    
    // Combine core keywords with CMS flexible keywords
    const allKeywords = [...coreServicesKeywords, ...(seoData.flexible_keywords || [])];
    
    return generateMetadata({
      title: seoData.title,
      description: seoData.description,
      keywords: allKeywords,
    });
  } catch (error) {
    console.error('Failed to load services SEO data, using fallback:', error);
    
    // Fallback metadata if CMS fails
    return generateMetadata({
      title: "Professional Accounting Services | Bookkeeping, Payroll & Tax | Azul Integrity CPA",
      description: "Comprehensive accounting services for small businesses. Expert bookkeeping, payroll processing, tax preparation, and CPA consulting. Licensed in Florida and New Mexico. Get professional financial solutions.",
      keywords: [...coreServicesKeywords, "payroll processing", "tax preparation", "small business accounting", "QuickBooks", "financial consulting"],
    });
  }
}

export const metadata = await getServicesPageMetadata();

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

export default async function ServicesPage() {
  const servicesData = getServicesPageContent();
  const footerData = getFooterContent();

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
      <ServicesPageClient servicesData={servicesData} footerData={footerData} />
    </>
  );
}