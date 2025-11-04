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
    valueProp: '<strong>Insight for Growth</strong> <br />Go beyond data entry with high-level financial analysis and strategic reporting. NM and Florida Clients only.',
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

// Testimonial data
const testimonials = [
  { quote: "Azul Integrity transformed our year-end process. The best CPA experience we've ever had.", name: "Jane D., Tech CEO" },
  { quote: "Seamless virtual service. Everything is handled with professionalism and incredible speed.", name: "Mark S., Restaurant Owner" },
  { quote: "Clarity at Every Click is true! Their monthly reports are easy to understand and act on.", name: "Sarah K., Freelancer" },
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
              <h1>You Grow Your Business. <br />I’ll Handle the Numbers</h1>
              <p className={styles.heroSubtext}>
                Your Virtual CPA - Clarity at Every Click, Rooted in Trust.
              </p>
              <button className={styles.ctaButton}>
                Schedule Your Discovery Call
              </button>
            </div>
          </div>
        </section>

      
        <section className={styles.seoBlock}>
          <h2 className={styles.sectionHeading}>
            Why Choose Azul Integrity as Your Virtual CPA? <br />
            Expert Bookkeeping, Tax, Payroll & Accounting Services for Small Businesses Nationwide
          </h2>
          <p className={styles.sectionSubtext}>
            Get trusted financial guidance, accurate records, and stress-free compliance from a licensed CPA with 25+ years of experience. We help small businesses grow with clarity, confidence, and personalized support—no matter where you’re located.
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
                View All Packages & Pricing
              </Link>
            </div>
          )}
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <h2 className={styles.testimonialsHeading}>Trusted by Business Owners Nationwide</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
                <p className={styles.clientName}>&mdash; {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about}>
          <Image
  src="/Headshot.jpg"
  alt="Lead Accountant Profile Photo"
  className={styles.expertPhoto}
  width={80}
  height={80}
/>
          <div className={styles.expertContent}>
            <h2>Meet the Expert Behind Azul Integrity Accounting Services</h2>
            <p>
              Hi, I&apos;m <strong>Heather Duran</strong>, your dedicated Virtual CPA and founder of Azul Integrity. With <strong>over 25 years</strong> in corporate finance, accounting, and financial systems, I bring a unique blend of corporate discipline and entrepreneurial focus to your business. My goal is to deliver clear, actionable financial guidance.
            </p>
            <p>
              I specialize in helping small to medium-sized businesses turn complex books into confident growth strategies. I use my deep expertise in GAAP and process automation to implement streamlined systems, ensuring you get accurate records and the <strong>insights</strong> you need to stop worrying about spreadsheets and focus on your vision.
            </p>
            <ul>
              <li>Licensed CPA in New Mexico and Florida.</li>
              <li>25+ years of experience in corporate finance and financial systems.</li>
              <li>Committed to translating complex numbers into confident business strategy.</li>
            </ul>
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
