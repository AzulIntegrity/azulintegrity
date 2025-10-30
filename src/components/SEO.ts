import { Metadata } from 'next';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title = 'Azul Integrity',
  description = 'A Next.js React application with SEO optimization',
  keywords = ['nextjs', 'react', 'seo', 'typescript'],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  noIndex = false,
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
  };
}