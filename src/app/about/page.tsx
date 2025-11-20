import { generateMetadata } from "@/components";
import AboutPageClient from "./AboutPageClient";

export const metadata = generateMetadata({
  title: "About Heather Duran CPA | 25+ Years Experience | Azul Integrity Accounting",
  description: "Meet Heather Duran, CPA with 25+ years of corporate accounting experience. Licensed in Florida and New Mexico. Professional credentials include CPA certification and extensive financial management expertise.",
  keywords: ["Heather Duran CPA", "about CPA", "Florida CPA", "New Mexico CPA", "corporate accounting experience", "CPA credentials", "accounting professional", "financial management", "small business accounting expert"],
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
      <AboutPageClient />
    </>
  );
}