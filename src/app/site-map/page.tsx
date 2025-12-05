import { generateMetadata as createMetadata } from "@/components";
import { getSitemapPageContent, getFooterContent } from "@/lib/content";
import SitemapPageClient from './SitemapPageClient';
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const sitemapData = getSitemapPageContent();
  
  return createMetadata({
    title: sitemapData.meta.title,
    description: sitemapData.meta.description,
    keywords: sitemapData.meta.keywords,
    canonicalUrl: "/site-map",
    noIndex: true, // Keep technical SEO under developer control
  });
}

export default async function SitemapPage() {
  const [sitemapData, footerData] = await Promise.all([
    getSitemapPageContent(),
    getFooterContent()
  ]);

  return <SitemapPageClient sitemapData={sitemapData} footerData={footerData} />;
}