import { generateMetadata } from "@/components";
import PrivacyPageClient from './PrivacyPageClient';

export const metadata = generateMetadata({
  title: "Privacy Policy | Azul Integrity CPA | Data Protection & Client Confidentiality",
  description: "Learn how Azul Integrity CPA protects your personal and financial information. Our comprehensive privacy policy outlines data collection, usage, and security practices for accounting services.",
  keywords: ["privacy policy", "data protection", "client confidentiality", "CPA privacy", "financial data security", "accounting privacy", "GDPR compliance"],
});

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}