import { generateMetadata } from "@/components";
import ContactPageClient from './ContactPageClient';

export const metadata = generateMetadata({
  title: "Contact Azul Integrity CPA | Professional Accounting Services",
  description: "Get in touch with Heather Duran, CPA at Azul Integrity. Professional accounting, bookkeeping, payroll, and tax services for small businesses. Licensed CPA in Florida and New Mexico.",
  keywords: ["contact CPA", "accounting services contact", "bookkeeping contact", "tax preparation contact", "Heather Duran CPA", "Florida CPA", "New Mexico CPA", "small business accountant"],
});

export default function ContactPage() {
  return <ContactPageClient />;
}