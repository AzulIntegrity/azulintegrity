'use client';
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { Header, Footer } from "@/components";
import styles from "./page.module.css";

// Service data
const serviceCategories = [
  {
    key: 'bookkeeping',
    title: 'Bookkeeping',
    valueProp: '<strong>Clarity for Decisions</strong> <br />We keep your ledgers accurate, reconciled, and audit-ready every month.',
    bullets: [
      'Monthly bank and credit card reconciliation.',
      'Management of payables and receivables.',
      'Delivery of all core reports (P&L, Balance Sheet, etc.).',
    ],
  },
  {
    key: 'accounting',
    title: 'Accounting/CPA Services',
    valueProp: '<strong>Insight for Growth</strong> <br />Go beyond data entry with high-level financial analysis and strategic reporting. <br /> New Mexico and Florida clients only.',
    bullets: [
      'Annual budget creation and actual-to-budget reporting.',
      'Monthly strategic analysis and statement review.',
      'Custom profitability tracking and forecasting.',
    ],
  },
  {
    key: 'taxes',
    title: 'Small Business Taxes',
    valueProp: '<strong>Compliance with Confidence</strong> <br /> Ensure your entity and state filings are handled accurately and on time.',
    bullets: [
      'Full preparation and filing of entity tax returns (1120, 1065, Schedule C).',
      'Specialized preparation for per-state and prior-year filings.',
      'Receipt organization and documentation services.',
    ],
  },
  {
    key: 'payroll',
    title: 'Payroll',
    valueProp: '<strong>Seamless & Stress-Free</strong> <br /> We handle the entire payroll lifecycle so you can focus on your team.',
    bullets: [
      'Complete payroll system setup and configuration.',
      'Ongoing payroll processing, direct deposit, and tax filings.',
      'Full-service annual 1099 preparation.',
    ],
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].key);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeService = serviceCategories.find(s => s.key === activeTab);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={styles.page}>
      <Header>
     <div className={styles.logoContainer}>
  <Image src="/logo.png" alt="Azul Integrity Logo" className={styles.logoImage} width={60} height={60} />
  

</div>
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      </Header>
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageBg}></div>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>You Grow Your Business. <br />I&apos;ll Handle the Numbers</h1>
              <p className={styles.heroSubtext}>
                Your Virtual CPA - Clarity at Every Click, Rooted in Trust.
              </p>
              <Link href="/contact#contact-form" className={styles.ctaButton}>
                Get Your Free Consultation
              </Link>
            </div>
          </div>
        </section>

      
        <section className={styles.seoBlock}>
          <h2 className={styles.sectionHeading}>
            Why Choose Azul Integrity as Your Virtual CPA? <br />
            Expert Bookkeeping, Tax, Payroll & Accounting Services for Small Businesses
          </h2>
          <p className={styles.sectionSubtext}>
            Get trusted financial guidance, accurate records, and stress-free compliance from a licensed CPA with 25+ years of experience. We help small businesses grow with clarity, confidence, and personalized support. Experience peace of mind knowing your books are done right, make better business decisions with clear, accurate financials, and enjoy less stress around tax time with experience you can trust and support you&apos;ll actually enjoy.
          </p>
        </section>

        <section className={styles.services}>
          <h2 className={styles.sectionHeading}>Our Four Pillars of Service</h2>
          
          <div className={styles.tabsHeader}>
            {serviceCategories.map((category) => (
              <button
                key={category.key}
                className={`${styles.tabButton} ${activeTab === category.key ? styles.active : ''}`}
                onClick={() => setActiveTab(category.key)}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          {activeService && (
            <div className={styles.serviceDetails}>
              <p className={styles.serviceValueProp} dangerouslySetInnerHTML={{ __html: activeService.valueProp }}></p>
              <ul className={styles.serviceList}>
                {activeService.bullets.map((bullet, index) => (
                  <li key={index}>✓ {bullet}</li>
                ))}
              </ul>
              <Link href="/services" className={styles.serviceCta}>
                View All Services and Packages
              </Link>
            </div>
          )}
        </section>

        {/* Software Badges Section */}
        <section className={styles.softwareBadges}>
          <h2 className={styles.badgesHeading}>Certified in Industry-Leading Software</h2>
          <p className={styles.badgesSubtext}>Professional certifications and partnerships with the tools you trust</p>
          <div className={styles.badgesGrid}>
            <div className={styles.badgeItem}>
              <Image src="/badges/xero-badge.png" alt="Xero Certified" className={styles.badgeImage} width={160} height={120} />
              <span className={styles.badgeLabel}>Xero Certified</span>
            </div>
            <div className={styles.badgeItem}>
              <Image src="/badges/quickbooks-proadvisor.png" alt="QuickBooks ProAdvisor" className={styles.badgeImage} width={160} height={120} />
              <span className={styles.badgeLabel}>QuickBooks ProAdvisor</span>
            </div>
            <div className={styles.badgeItem}>
              <Image src="/badges/arx-badge.jpg" alt="ARX Certified" className={styles.badgeImage} width={160} height={120} />
              <span className={styles.badgeLabel}>ARX Certified</span>
            </div>
            <div className={styles.badgeItem}>
              <Image src="/badges/intuit-proconnect.jpg" alt="Intuit ProConnect" className={styles.badgeImage} width={160} height={120} />
              <span className={styles.badgeLabel}>Intuit ProConnect</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer>
  <footer className={styles.footerColumns}>
    <div className={styles.footerGrid}>
      <div className={styles.footerCol}>
        <h4>Quick Links</h4>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={styles.footerCol}>
        <h4>Contact</h4>
        <span>Email: <Link href="mailto:info@azulintegrity.com">info@azulintegrity.com</Link></span>
        <span>Phone: <Link href="tel:+15555555555">(904) 476-4732</Link></span>
<div className={styles.footerSocial}>
  <Link
    href="https://www.facebook.com/people/Azul-Integrity-Accounting-Services-LLC/61581436237919/#"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src="/facebookIcon.png" alt="Facebook" className={styles.socialIcon} width={28} height={28} />
  </Link>
  <Link
    href="https://www.linkedin.com/in/heather-duran-2ba29045"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src="/linkedInIcon.png" alt="LinkedIn" className={styles.socialIcon} width={28} height={28} />
  </Link>
</div>
      </div>
      <div className={styles.footerCol}>
        <h4>Legal Pages</h4>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/sitemap">Site Map</Link>
      </div>
    </div>
    <div className={styles.footerCopyright}>
      &copy; {new Date().getFullYear()} Azul Integrity Accounting Services. All rights reserved.
    </div>
  </footer>
</Footer>
    </div>
  );
}
