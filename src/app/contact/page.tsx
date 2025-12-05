import { generateMetadata } from "@/components";
import ContactPageClient from './ContactPageClient';
import { loadContactPageSeo } from '@/lib/content';

// Core SEO keywords for Contact page (protected)
const coreContactKeywords = [
  "CPA services",
  "accounting services",
  "virtual CPA",
  "remote CPA services",
  "contact CPA"
];

// Load Contact SEO data and generate metadata
async function getContactPageMetadata() {
  try {
    const seoData = await loadContactPageSeo();
    
    // Combine core keywords with CMS flexible keywords
    const allKeywords = [...coreContactKeywords, ...(seoData.flexible_keywords || [])];
    
    return generateMetadata({
      title: seoData.title,
      description: seoData.description,
      keywords: allKeywords,
    });
  } catch (error) {
    console.error('Failed to load Contact SEO data, using fallback:', error);
    
    // Fallback metadata if CMS fails
    return generateMetadata({
      title: "Contact Azul Integrity CPA | Professional Accounting Services",
      description: "Get in touch with Heather Duran, CPA at Azul Integrity. Professional accounting, bookkeeping, payroll, and tax services for small businesses. Licensed CPA in Florida and New Mexico.",
      keywords: [...coreContactKeywords, "accounting services contact", "bookkeeping contact", "tax preparation contact", "small business accountant"],
    });
  }
}

export const metadata = await getContactPageMetadata();

export default function ContactPage() {
  return <ContactPageClient />;
}