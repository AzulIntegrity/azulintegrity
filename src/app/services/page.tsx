import { generateMetadata } from "@/components";
import ServicesPageClient from './ServicesPageClient';

export const metadata = generateMetadata({
  title: "Professional Accounting Services | Bookkeeping, Payroll & Tax | Azul Integrity CPA",
  description: "Comprehensive accounting services for small businesses. Expert bookkeeping, payroll processing, tax preparation, and CPA consulting. Licensed in Florida and New Mexico. Get professional financial solutions.",
  keywords: ["accounting services", "bookkeeping services", "payroll processing", "tax preparation", "CPA services", "small business accounting", "QuickBooks", "financial consulting", "GAAP compliance", "Florida CPA", "New Mexico CPA"],
});

export default function ServicesPage() {
  return <ServicesPageClient />;
}