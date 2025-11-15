import { generateMetadata } from "@/components";
import SitemapPageClient from './SitemapPageClient';
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Site Map | Azul Integrity Accounting Services Navigation",
  description: "Complete sitemap for Azul Integrity Accounting Services. Navigate through all our services, pages, and resources for professional accounting help.",
  keywords: ["sitemap", "navigation", "accounting services map", "site structure"],
  canonicalUrl: "/site-map",
  noIndex: true,
});

export default function SitemapPage() {
  return <SitemapPageClient />;
}