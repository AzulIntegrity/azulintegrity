import type { Metadata } from "next";
import { generateMetadata } from "@/components";
import { Open_Sans } from 'next/font/google';
import "./globals.css";

// Optimize Google Fonts loading with Next.js
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
  preload: true,
});

export const metadata: Metadata = generateMetadata({
  title: "Azul Integrity CPA | Professional Accounting & Bookkeeping Services",
  description: "Professional CPA and accounting services for small businesses. Expert bookkeeping, payroll processing, tax preparation, and financial consulting. Licensed CPA in Florida and New Mexico.",
  keywords: ["CPA services", "accounting services", "bookkeeping", "virtual bookkeeping", "Xero bookkeeper", "QuickBooks bookkeeping expert", "payroll processing", "tax preparation", "small business accounting", "financial consulting", "virtual CPA", "remote CPA services", "QuickBooks", "GAAP compliance"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        {/* Preload critical fonts for better performance */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          as="style"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" href="/favicon.ico/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="AZUL INTEGRITY ACCOUNTING SERVICES" />
        <link rel="manifest" href="/favicon.ico/site.webmanifest" />
        <meta name="theme-color" content="#005B99" />
    <meta name="theme-color" content="#005B99" media="(prefers-color-scheme: light)" />
    <meta name="theme-color" content="#003B66" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#005B99" />
        
       
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://azulcpa.com/#website",
              "url": "https://azulcpa.com",
              "name": "Azul Integrity Accounting Services",
              "description": "Professional CPA and accounting services for small businesses. Expert bookkeeping, payroll, tax preparation, and financial consulting by licensed CPA Heather Duran.",
              "publisher": {
                "@type": "Organization",
                "@id": "https://azulcpa.com/#organization"
              },
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://azulcpa.com/services?search={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              ],
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [".aboutHeading", ".aboutSubheading", ".serviceTitle", ".contactSection h1"]
              }
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://azulcpa.com/#organization",
              "name": "Azul Integrity Accounting Services",
              "alternateName": "Azul Integrity CPA",
              "url": "https://azulcpa.com",
              "logo": "https://azulcpa.com/tree.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-904-476-4732",
                "contactType": "customer service",
                "email": "azulintegritycpa@gmail.com",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/azul-integrity-accounting",
                "https://www.facebook.com/azulintegritycpa"
              ]
            })
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://azulcpa.com",
              "name": "Azul Integrity Accounting Services",
              "alternateName": "Azul Integrity CPA",
              "description": "Professional CPA and accounting services for small businesses. Expert bookkeeping, payroll processing, tax preparation, and financial consulting.",
              "url": "https://azulcpa.com",
              "telephone": "+1-904-476-4732",
              "email": "azulintegritycpa@gmail.com",
              "foundingDate": "2023",
              "founder": {
                "@type": "Person",
                "name": "Heather Duran",
                "jobTitle": "Certified Public Accountant",
                "alumniOf": "CPA License - Florida & New Mexico"
              },
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "FL",
                "addressCountry": "US",
                "addressLocality": "Jacksonville"
              },
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Florida"
                },
                {
                  "@type": "State",
                  "name": "New Mexico"
                }
              ],
              "serviceType": "Accounting Services",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Accounting Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bookkeeping Services",
                      "description": "Professional bookkeeping and financial record management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tax Preparation",
                      "description": "Individual and business tax preparation and filing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Payroll Processing",
                      "description": "Comprehensive payroll management and processing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Financial Consulting",
                      "description": "Strategic financial planning and business consulting"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.linkedin.com/company/azul-integrity-accounting",
                "https://www.facebook.com/azulintegritycpa"
              ],
              "logo": "https://azulcpa.com/tree.webp",
              "image": "https://azulcpa.com/ogCard.png",
              "priceRange": "$$",
              "paymentAccepted": ["Credit Card", "Check", "Electronic Transfer"],
              "currenciesAccepted": "USD",
              "openingHours": "Mo-Fr 09:00-17:00",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "25",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        {/* Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://azulcpa.com/#service",
              "name": "Azul Integrity CPA Services",
              "image": "https://azulcpa.com/servicehero.webp",
              "description": "Professional CPA services including bookkeeping, tax preparation, payroll processing, and financial consulting for small businesses.",
              "provider": {
                "@type": "Organization",
                "@id": "https://azulcpa.com/#organization"
              },
              "areaServed": ["Florida", "New Mexico"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "CPA Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Monthly Bookkeeping",
                      "description": "Comprehensive monthly bookkeeping services to keep your financial records accurate and up-to-date."
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tax Preparation & Filing",
                      "description": "Professional tax preparation and filing services for individuals and businesses."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Payroll Management",
                      "description": "Complete payroll processing and management services for small businesses."
                    }
                  }
                ]
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [".serviceTitle", ".serviceDescription"]
              }
            })
          }}
        />

        {/* Person Schema for Heather Duran */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://azulcpa.com/#founder",
              "name": "Heather Duran",
              "jobTitle": "Certified Public Accountant",
              "description": "Licensed CPA with 25+ years of experience in corporate finance, accounting, and financial systems. Founder of Azul Integrity Accounting Services.",
              "image": "https://azulcpa.com/Headshot.webp",
              "url": "https://azulcpa.com/contact",
              "sameAs": [
                "https://www.linkedin.com/in/heather-duran-cpa"
              ],
              "worksFor": {
                "@type": "Organization",
                "@id": "https://azulcpa.com/#organization"
              },
              "hasCredential": [
                "CPA License - Florida",
                "CPA License - New Mexico"
              ],
              "knowsAbout": [
                "Accounting",
                "Bookkeeping", 
                "Tax Preparation",
                "Financial Planning",
                "GAAP Compliance",
                "Payroll Processing"
              ],
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [".aboutHeading", ".aboutSubheading", ".credentialsList"]
              }
            })
          }}
        />
      
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
