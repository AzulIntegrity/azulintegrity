// TypeScript interfaces for content structure
export interface HeroContent {
  title: string;
  subtitle: string;
  cta_text: string;
  cta_link: string;
  background_image: string;
  background_alt: string;
}

export interface SeoSectionContent {
  heading: string;
  subheading: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  key: string;
  heading: string;
  description: string;
  bullets: string[];
}

export interface ServicesContent {
  section_title: string;
  services: ServiceItem[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  business: string;
}

export interface TestimonialsContent {
  section_title: string;
  section_subtitle: string;
  testimonials: TestimonialItem[];
}

export interface CertificationBadge {
  name: string;
  image: string;
  alt: string;
}

export interface BadgesContent {
  section_title: string;
  badges: CertificationBadge[];
}

export interface AboutPageContact {
  name: string;
  company: string;
  email: string;
  phone: string;
}

export interface AboutProfile {
  contact: AboutPageContact;
  biography: string[];
}

export interface AboutPageCredential {
  summary: string;
}

export interface AboutCredentials {
  title: string;
  credentials: AboutPageCredential[];
}

export interface AboutPageHeader {
  title: string;
  subtitle: string;
}

export interface AboutPageCta {
  heading: string;
  description: string;
  button_text: string;
  button_link: string;
}

export interface AboutPageData {
  pageHeader: AboutPageHeader;
  profile: AboutProfile;
  credentials: AboutCredentials;
  cta: AboutPageCta;
}

export interface FooterContact {
  email: string;
  phone: string;
}

export interface FooterData {
  contact: FooterContact;
}

// Terms Page Interfaces
export interface TermsPageHeader {
  title: string;
  subtitle: string;
}

export interface TermsPageMeta {
  effective_date: string;
  last_modified?: string;
}

export interface TermsListItem {
  list_items: string[];
}

export interface TermsSection {
  heading: string;
  content: string[];
  lists?: TermsListItem[];
}

export interface TermsPageData {
  header: TermsPageHeader;
  meta: TermsPageMeta;
  sections: TermsSection[];
}

// Privacy Policy Interfaces
export interface PrivacyPageHeader {
  title: string;
  subtitle: string;
}

export interface PrivacyPageMeta {
  effective_date: string;
  last_modified?: string;
}

export interface PrivacyListItem {
  list_items: string[];
}

export interface PrivacySection {
  heading: string;
  content: string[];
  lists?: PrivacyListItem[];
}

export interface PrivacyPageData {
  header: PrivacyPageHeader;
  meta: PrivacyPageMeta;
  introduction: string[];
  sections: PrivacySection[];
}

// Site Map Page Interfaces
export interface SitemapPageHeader {
  title: string;
  description: string;
}

export interface SitemapPageMeta {
  title: string;           // SEO title for search results
  description: string;     // Meta description for search snippets
  keywords: string[];      // SEO keywords - client controlled
}

export interface SitemapLinkItem {
  title: string;
  url?: string;           // Optional - for non-linked items like service categories
  description?: string;   // Optional description for the link
}

export interface SitemapSection {
  section_title: string;
  items: SitemapLinkItem[];
}

export interface SitemapPageData {
  header: SitemapPageHeader;
  meta: SitemapPageMeta;
  sections: SitemapSection[];
}

// SEO Management Interfaces - Hybrid System
export interface HomePageSeo {
  title: string;                    // SEO title for browser tab
  description: string;              // Meta description for search results
  flexible_keywords: string[];      // Client-controlled keywords (max 5)
}

export interface ServicesPageSeo {
  title: string;                    // SEO title for browser tab
  description: string;              // Meta description for search results  
  flexible_keywords: string[];      // Client-controlled keywords (max 5)
}

export interface AboutPageSeo {
  title: string;                    // SEO title for browser tab
  description: string;              // Meta description for search results
  flexible_keywords: string[];      // Client-controlled keywords (max 5)
}

export interface ContactPageSeo {
  title: string;                    // SEO title for browser tab
  description: string;              // Meta description for search results
  flexible_keywords: string[];      // Client-controlled keywords (max 5)
}