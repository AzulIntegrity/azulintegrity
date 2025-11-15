import { generateMetadata } from "@/components";
import TermsPageClient from './TermsPageClient';

export const metadata = generateMetadata({
  title: "Terms of Service | Azul Integrity CPA | Professional Accounting Agreement",
  description: "Terms and conditions for Azul Integrity CPA professional accounting services. Review our service agreements, client responsibilities, and business policies for bookkeeping and tax services.",
  keywords: ["terms of service", "accounting agreement", "CPA terms", "service conditions", "professional accounting", "client agreement", "business policies"],
});

export default function TermsPage() {
  return <TermsPageClient />;
}