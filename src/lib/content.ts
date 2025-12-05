import fs from 'fs';
import { promises as fsAsync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Import types from types.ts
import type {
  AboutPageHeader,
  AboutProfile,
  AboutCredentials,
  AboutPageCta,
  AboutPageData,
  FooterData,
  TermsPageHeader,
  TermsPageMeta,
  TermsSection,
  TermsPageData,
  PrivacyPageHeader,
  PrivacyPageMeta,
  PrivacySection,
  PrivacyPageData,
  SitemapPageHeader,
  SitemapPageMeta,
  SitemapSection,
  SitemapPageData,
  HomePageSeo,
  ServicesPageSeo,
  AboutPageSeo,
  ContactPageSeo
} from './types';

// Re-export types for backward compatibility
export * from './types';

// TypeScript interfaces for content structure
export interface HeroContent {
  title: string;
  subtitle: string;
  cta_text: string;
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

export interface CertificationsContent {
  section_title: string;
  section_subtitle: string;
  badges: CertificationBadge[];
}

export interface CtaContent {
  heading: string;
  description: string;
  button_text: string;
}

export interface HomepageContent {
  hero: HeroContent;
  seoSection: SeoSectionContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  certifications: CertificationsContent;
  cta: CtaContent;
}

// Services Page Interfaces
export interface ServicePackage {
  name: string;
  description: string;
}

export interface ServiceContent {
  description: string;
  whatWeDo: string[];
  packages: ServicePackage[];
}

export interface ServiceCategory {
  key: string;
  title: string;
  displayTitle: string;
  content: ServiceContent;
}

export interface ServicesPageHeader {
  title: string;
  displayTitle: string;
  description: string;
}

export interface ServicesPageCta {
  heading: string;
  description: string;
  button_text: string;
}

export interface ServicesPageData {
  pageHeader: ServicesPageHeader;
  serviceCategories: ServiceCategory[];
  cta: ServicesPageCta;
}

// Base directory for content files
const contentDirectory = path.join(process.cwd(), 'content');

// Generic function to read and parse markdown files
function getContentFromFile<T>(filePath: string): T {
  const fullPath = path.join(contentDirectory, filePath);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Content file not found: ${fullPath}`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);
  
  return data as T;
}

// Individual content loading functions
export function getHeroContent(): HeroContent {
  return getContentFromFile<HeroContent>('homepage/hero.md');
}

export function getSeoSectionContent(): SeoSectionContent {
  return getContentFromFile<SeoSectionContent>('homepage/seo-section.md');
}

export function getServicesContent(): ServicesContent {
  return getContentFromFile<ServicesContent>('homepage/services.md');
}

export function getTestimonialsContent(): TestimonialsContent {
  return getContentFromFile<TestimonialsContent>('homepage/testimonials.md');
}

export function getCertificationsContent(): CertificationsContent {
  return getContentFromFile<CertificationsContent>('homepage/certifications.md');
}

export function getCtaContent(): CtaContent {
  return getContentFromFile<CtaContent>('homepage/cta.md');
}

// Main function to load all homepage content
export function getHomepageContent(): HomepageContent {
  try {
    return {
      hero: getHeroContent(),
      seoSection: getSeoSectionContent(),
      services: getServicesContent(),
      testimonials: getTestimonialsContent(),
      certifications: getCertificationsContent(),
      cta: getCtaContent(),
    };
  } catch (error) {
    console.error('Error loading homepage content:', error);
    throw error;
  }
}

// Services Page content loading functions
export function getServicesPageHeader(): ServicesPageHeader {
  return getContentFromFile<ServicesPageHeader>('services/service_page_header.md');
}

export function getServiceCategory(serviceKey: string): ServiceCategory {
  return getContentFromFile<ServiceCategory>(`services/service_${serviceKey}.md`);
}

export function getServicesPageCta(): ServicesPageCta {
  return getContentFromFile<ServicesPageCta>('services/service_page_cta.md');
}

// Main function to load all services page content
export function getServicesPageContent(): ServicesPageData {
  try {
    const serviceKeys = [
      '01_bookkeeping',
      '02_accounting', 
      '03_payroll',
      '04_taxes',
      '05_additional'
    ];

    const serviceCategories = serviceKeys.map(key => getServiceCategory(key));

    return {
      pageHeader: getServicesPageHeader(),
      serviceCategories,
      cta: getServicesPageCta(),
    };
  } catch (error) {
    console.error('Error loading services page content:', error);
    throw error;
  }
}

// Utility function to check if content files exist
export function validateContentFiles(): { valid: boolean; missing: string[] } {
  const requiredFiles = [
    'homepage/hero.md',
    'homepage/seo-section.md',
    'homepage/services.md',
    'homepage/testimonials.md',
    'homepage/certifications.md',
    'homepage/cta.md',
  ];
  
  const missing: string[] = [];
  
  for (const file of requiredFiles) {
    const fullPath = path.join(contentDirectory, file);
    if (!fs.existsSync(fullPath)) {
      missing.push(file);
    }
  }
  
  return {
    valid: missing.length === 0,
    missing,
  };
}

// About Page content loading functions
export function getAboutPageHeader(): AboutPageHeader {
  return getContentFromFile<AboutPageHeader>('about_page_header.md');
}

export function getAboutPageProfile(): AboutProfile {
  return getContentFromFile<AboutProfile>('about_profile.md');
}

export function getAboutPageCredentials(): AboutCredentials {
  return getContentFromFile<AboutCredentials>('about_credentials.md');
}

export function getAboutPageCta(): AboutPageCta {
  return getContentFromFile<AboutPageCta>('about_page_cta.md');
}

// Main function to load all about page content
export function getAboutPageContent(): AboutPageData {
  try {
    return {
      pageHeader: getAboutPageHeader(),
      profile: getAboutPageProfile(),
      credentials: getAboutPageCredentials(),
      cta: getAboutPageCta(),
    };
  } catch (error) {
    console.error('Error loading about page content:', error);
    throw error;
  }
}

// Utility function to check if Services page content files exist
export function validateServicesContentFiles(): { valid: boolean; missing: string[] } {
  const requiredFiles = [
    'services/service_page_header.md',
    'services/service_01_bookkeeping.md',
    'services/service_02_accounting.md',
    'services/service_03_payroll.md',
    'services/service_04_taxes.md',
    'services/service_05_additional.md',
    'services/service_page_cta.md',
  ];
  
  const missing: string[] = [];
  
  for (const file of requiredFiles) {
    const fullPath = path.join(contentDirectory, file);
    if (!fs.existsSync(fullPath)) {
      missing.push(file);
    }
  }
  
  return {
    valid: missing.length === 0,
    missing,
  };
}

// Utility function to check if About page content files exist
export function validateAboutContentFiles(): { valid: boolean; missing: string[] } {
  const requiredFiles = [
    'about_page_header.md',
    'about_profile.md',
    'about_credentials.md',
    'about_page_cta.md',
  ];
  
  const missing: string[] = [];
  
  for (const file of requiredFiles) {
    const fullPath = path.join(contentDirectory, file);
    if (!fs.existsSync(fullPath)) {
      missing.push(file);
    }
  }
  
  return {
    valid: missing.length === 0,
    missing,
  };
}

// Footer content loading function
export function getFooterContent(): FooterData {
  return getContentFromFile<FooterData>('footer.md');
}

// Terms Page content loading functions
export function getTermsPageHeader(): TermsPageHeader {
  return getContentFromFile<TermsPageHeader>('terms_page_header.md');
}

export function getTermsPageMeta(): TermsPageMeta {
  return getContentFromFile<TermsPageMeta>('terms_page_meta.md');
}

export function getTermsPageSections(): TermsSection[] {
  return getContentFromFile<{ sections: TermsSection[] }>('terms_page_content.md').sections;
}

// Main function to load all terms page content
export function getTermsPageContent(): TermsPageData {
  try {
    return {
      header: getTermsPageHeader(),
      meta: getTermsPageMeta(),
      sections: getTermsPageSections(),
    };
  } catch (error) {
    console.error('Error loading terms page content:', error);
    throw error;
  }
}

// Utility function to check if Terms page content files exist
export function validateTermsContentFiles(): { valid: boolean; missing: string[] } {
  const requiredFiles = [
    'terms_page_header.md',
    'terms_page_meta.md',
    'terms_page_content.md',
  ];
  
  const missing: string[] = [];
  
  for (const file of requiredFiles) {
    const fullPath = path.join(contentDirectory, file);
    if (!fs.existsSync(fullPath)) {
      missing.push(file);
    }
  }
  
  return {
    valid: missing.length === 0,
    missing,
  };
}

// Privacy Policy content loading functions
export function getPrivacyPageHeader(): PrivacyPageHeader {
  return getContentFromFile<PrivacyPageHeader>('privacy_page_header.md');
}

export function getPrivacyPageMeta(): PrivacyPageMeta {
  return getContentFromFile<PrivacyPageMeta>('privacy_page_meta.md');
}

export function getPrivacyPageSections(): { introduction: string[]; sections: PrivacySection[] } {
  return getContentFromFile<{ introduction: string[]; sections: PrivacySection[] }>('privacy_page_content.md');
}

// Main function to load all Privacy Policy content
export function getPrivacyPageContent(): PrivacyPageData {
  try {
    const contentData = getPrivacyPageSections();
    return {
      header: getPrivacyPageHeader(),
      meta: getPrivacyPageMeta(),
      introduction: contentData.introduction,
      sections: contentData.sections,
    };
  } catch (error) {
    console.error('Error loading Privacy Policy content:', error);
    throw error;
  }
}

// Utility function to check if Privacy Policy content files exist
export function validatePrivacyContentFiles(): { valid: boolean; missing: string[] } {
  const requiredFiles = [
    'privacy_page_header.md',
    'privacy_page_meta.md', 
    'privacy_page_content.md',
  ];
  
  const missing: string[] = [];
  
  for (const file of requiredFiles) {
    const fullPath = path.join(contentDirectory, file);
    if (!fs.existsSync(fullPath)) {
      missing.push(file);
    }
  }
  
  return {
    valid: missing.length === 0,
    missing,
  };
}

// Site Map Page Functions
export function getSitemapPageHeader(): SitemapPageHeader {
  return getContentFromFile<SitemapPageHeader>('sitemap_page_header.md');
}

export function getSitemapPageMeta(): SitemapPageMeta {
  return getContentFromFile<SitemapPageMeta>('sitemap_page_meta.md');
}

export function getSitemapPageSections(): { sections: SitemapSection[] } {
  return getContentFromFile<{ sections: SitemapSection[] }>('sitemap_page_content.md');
}

export function getSitemapPageContent(): SitemapPageData {
  const header = getSitemapPageHeader();
  const meta = getSitemapPageMeta();
  const { sections } = getSitemapPageSections();
  
  return {
    header,
    meta,
    sections
  };
}

// Utility function to check if Site Map content files exist
export function validateSitemapContentFiles(): { valid: boolean; missing: string[] } {
  const requiredFiles = [
    'sitemap_page_header.md',
    'sitemap_page_meta.md', 
    'sitemap_page_content.md',
  ];
  
  const missing: string[] = [];
  
  for (const file of requiredFiles) {
    const fullPath = path.join(contentDirectory, file);
    if (!fs.existsSync(fullPath)) {
      missing.push(file);
    }
  }
  
  return {
    valid: missing.length === 0,
    missing,
  };
}

// SEO loaders
export async function loadHomePageSeo(): Promise<HomePageSeo> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'seo', 'home_page_seo.md');
    const fileContent = await fsAsync.readFile(filePath, 'utf8');
    const { data } = matter(fileContent);

    return data as HomePageSeo;
  } catch (error) {
    console.error('Error loading home page SEO data:', error);
    throw error;
  }
}

export async function loadServicesPageSeo(): Promise<ServicesPageSeo> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'seo', 'services_page_seo.md');
    const fileContent = await fsAsync.readFile(filePath, 'utf8');
    const { data } = matter(fileContent);

    return data as ServicesPageSeo;
  } catch (error) {
    console.error('Error loading services page SEO data:', error);
    throw error;
  }
}

export async function loadAboutPageSeo(): Promise<AboutPageSeo> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'seo', 'about_page_seo.md');
    const fileContent = await fsAsync.readFile(filePath, 'utf8');
    const { data } = matter(fileContent);

    return data as AboutPageSeo;
  } catch (error) {
    console.error('Error loading about page SEO data:', error);
    throw error;
  }
}

export async function loadContactPageSeo(): Promise<ContactPageSeo> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'seo', 'contact_page_seo.md');
    const fileContent = await fsAsync.readFile(filePath, 'utf8');
    const { data } = matter(fileContent);

    return data as ContactPageSeo;
  } catch (error) {
    console.error('Error loading contact page SEO data:', error);
    throw error;
  }
}