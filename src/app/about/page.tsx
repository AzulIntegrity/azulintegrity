import { generateMetadata } from "@/components";
import { getAboutPageContent, getFooterContent, loadAboutPageSeo } from "@/lib/content";
import AboutPageClient from "./AboutPageClient";

// Core SEO keywords for About page (protected)
const coreAboutKeywords = [
  "CPA services",
  "accounting services",
  "virtual CPA",
  "remote CPA services",
  "about CPA"
];

// Load About SEO data and generate metadata
async function getAboutPageMetadata() {
  try {
    const seoData = await loadAboutPageSeo();
    
    // Combine core keywords with CMS flexible keywords
    const allKeywords = [...coreAboutKeywords, ...(seoData.flexible_keywords || [])];
    
    return generateMetadata({
      title: seoData.title,
      description: seoData.description,
      keywords: allKeywords,
    });
  } catch (error) {
    console.error('Failed to load About SEO data, using fallback:', error);
    
    // Fallback metadata if CMS fails
    return generateMetadata({
      title: "About Heather Duran CPA | Virtual CPA | Azul Integrity Accounting",
      description: "Meet Heather Duran, CPA with 25+ years of corporate accounting experience. Licensed in Florida and New Mexico. Professional credentials include CPA certification and extensive financial management expertise.",
      keywords: [...coreAboutKeywords, "licensed CPA", "corporate accounting experience", "CPA credentials", "accounting professional", "financial management"],
    });
  }
}

export const metadata = await getAboutPageMetadata();

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
      "name": "About",
      "item": "https://azulintegritycpa.com/about"
    }
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Heather Duran",
  "jobTitle": "Certified Public Accountant (CPA)",
  "worksFor": {
    "@type": "Organization",
    "name": "Azul Integrity Accounting Services LLC"
  },
  "hasCredential": "Certified Public Accountant (CPA)",
  "knowsAbout": ["Accounting", "Bookkeeping", "Tax Preparation", "Payroll", "Financial Analysis"],
  "areaServed": ["Florida", "New Mexico"]
};

export default function AboutPage() {
  const aboutData = getAboutPageContent();
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
          __html: JSON.stringify(personSchema),
        }}
      />
      <AboutPageClient aboutData={aboutData} footerData={footerData} />
    </>
  );
}