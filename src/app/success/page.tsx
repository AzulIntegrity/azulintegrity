import { generateMetadata } from "@/components";
import SuccessPageClient from './SuccessPageClient';

export const metadata = generateMetadata({
  title: "Thank You | Azul Integrity CPA | Message Received",
  description: "Thank you for contacting Azul Integrity CPA. We've received your message and will respond promptly to discuss your accounting and bookkeeping needs.",
  keywords: ["contact success", "message received", "CPA contact", "accounting inquiry"],
});

export default function SuccessPage() {
  return <SuccessPageClient />;
}