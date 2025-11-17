'use client';
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { Header, Footer, headerStyles } from "@/components";
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
    key: 'payroll',
    title: 'Payroll',
    valueProp: '<strong>Seamless & Stress-Free</strong> <br /> We handle the entire payroll lifecycle so you can focus on your team.',
    bullets: [
      'Complete payroll system setup and configuration.',
      'Ongoing payroll processing, direct deposit, and tax filings.',
      'Full-service annual 1099 preparation.',
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
];

const HomePageClient = React.memo(function HomePageClient() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].key);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shouldLoadBadges, setShouldLoadBadges] = useState(false);
  const activeService = serviceCategories.find(s => s.key === activeTab);

  // Defer badge loading for mobile performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadBadges(true);
    }, 1000); // Load badges after 1 second
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Optimize tab switching for mobile
  const handleTabClick = (key: string) => {
    if (key !== activeTab) {
      setActiveTab(key);
    }
  };

  return (
    <div className={styles.page}>
      <Header>
        <nav className={headerStyles.navigation}>
          <Link href="/" className={headerStyles.active}>Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className={headerStyles.phoneContact}>
          <Link href="tel:+19044764732" className={headerStyles.phoneLink}>
            <Image 
              src="/phoneicon.webp" 
              alt="Phone icon - Call Azul Integrity Accounting at (904) 476-4732" 
              className={headerStyles.phoneIcon}
              width={20} 
              height={20}
            />
            <span className={headerStyles.phoneText}>
              <span className={headerStyles.callNow}>Call Now</span>
              <span className={headerStyles.phoneNumber}>(904) 476-4732</span>
            </span>
          </Link>
        </div>
        <div className={headerStyles.logoContainer}>
          <Image 
            src="/tree.png" 
            alt="Azul Integrity Tree Logo" 
            className={headerStyles.logoImage} 
            width={50} 
            height={50}
            priority
            sizes="(max-width: 768px) 40px, 50px"
          />
          <div className={headerStyles.logoText}>
            <div className={headerStyles.companyName}>Azul Integrity</div>
            <div className={headerStyles.companySubtitle}>Accounting Services</div>
          </div>
        </div>
        <button 
          className={`${headerStyles.hamburger} ${mobileMenuOpen ? headerStyles.active : ''}`} 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav 
          className={`${headerStyles.mobileMenu} ${mobileMenuOpen ? headerStyles.active : ''}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          role="navigation"
        >
          <Link href="/" className={headerStyles.active} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </Header>
      
      <main className={styles.main}>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageBg}>
            <Image 
              src="/trusttree.webp" 
              alt="Azul Integrity Trust Tree - Professional CPA Services" 
              fill
              priority
              quality={75}
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 60vw"
              style={{ 
                objectFit: 'cover', 
                objectPosition: 'center',
                transform: 'translate3d(0,0,0)',
                backfaceVisibility: 'hidden'
              }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx//2wBDAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRobHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyxxkNzxQJVqTX0zUKNRfq/aqWD+FLpVMskPnYfFGKN8iZNEjAe2pHYdJNNfKBEyabH7L2j+zb7KlrBE0gFRFH6nOT5Cr7wgIUGP+vYDbFBAIhGFCgGOASDJEGj+EhUJzHdddUabadCh6e4/GNVGhRt2EfWoNKhUOw8RKGrjrQoUJIrZWgMl6k+1ChFXb0rXrQoGJ4/+R+sKFGgUKFCj//Z"
            />
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>You Grow Your Business. <br />I&apos;ll Handle the Numbers</h1>
              <p className={styles.heroSubtext}>
                Your Virtual CPA - Rooted in Trust, Partner in Growth.
              </p>
              <Link href="/contact#contact-form" className={styles.ctaButton}>
                Get Your Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* --- UPDATED SEO BLOCK --- */}
        <section className={styles.seoBlock}>
          <h2 className={styles.sectionHeading}>
            Why Choose Azul Integrity as Your Virtual CPA? <br />
            Expert Bookkeeping, Tax, Payroll & Accounting Services for Small Businesses
          </h2>
          <p className={styles.sectionSubtext}>
            Get trusted financial guidance, accurate records, and stress-free compliance from a licensed CPA with 25+ years of experience. We help small businesses grow with clarity, confidence, and personalized support. Experience peace of mind knowing your books are done right, make better business decisions with clear, accurate financials, and enjoy less stress around tax time with experience you can trust and support you&apos;ll actually enjoy.
          </p>
        </section>
        <section className={styles.services} suppressHydrationWarning>
          <h2 className={styles.sectionHeading}>Our Four Pillars of Service</h2>
          <div className={styles.tabsHeader}>
            {serviceCategories.map((category) => (
              <button
                key={category.key}
                className={`${styles.tabButton} ${activeTab === category.key ? styles.active : ''}`}
                onClick={() => handleTabClick(category.key)}
                type="button"
                aria-pressed={activeTab === category.key}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          {activeService && (
            <div className={styles.serviceDetails}>
              {/* NOTE: valueProp uses dangerouslySetInnerHTML, ensure content is clean */}
              <p className={styles.serviceValueProp} dangerouslySetInnerHTML={{ __html: activeService.valueProp }}></p>
              
              <ul className={styles.serviceList}>
                {activeService.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <Link href="/services" className={styles.serviceCta}>
                Learn More
              </Link>
            </div>
          )}
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.testimonialsContent}>
            <h2 className={styles.testimonialsHeading}>What Our Clients Say</h2>
            <p className={styles.testimonialsSubtext}>Trusted by small business owners for over 25 years</p>
            
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  &quot;I wholeheartedly recommend the services of Heather Duran. I have known Heather for the past 25 years and have consistently been impressed by her exceptional skills and professionalism.&quot;
                </div>
                <div className={styles.testimonialAuthor}>
                  <strong>Beth M.</strong>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  &quot;Heather is an extremely competent and reliable accountant. She is very thorough with your tax information. Heather will also look for the greatest number of deductions for filing your taxes and is very easy to work with.&quot;
                </div>
                <div className={styles.testimonialAuthor}>
                  <strong>John P.</strong>
                  <span className={styles.testimonialBusiness}>Lawn Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Software Badges Section - Deferred for mobile performance */}
        {shouldLoadBadges && (
          <section className={styles.softwareBadges} style={{ contentVisibility: 'auto', containIntrinsicSize: '400px' }}>
            <h2 className={styles.badgesHeading}>Certified in Industry-Leading Software</h2>
            <p className={styles.badgesSubtext}>Professional certifications and partnerships with the tools you trust</p>
            <div className={styles.badgesGrid}>
            <div className={styles.badgeItem}>
              <Image 
                src="/badges/logo_inTuit.webp" 
                alt="Intuit Certified" 
                className={styles.badgeImage} 
                width={300} 
                height={150}
                loading="lazy"
                sizes="(max-width: 480px) 280px, (max-width: 768px) 250px, 300px"
              />
            </div>
            <div className={styles.badgeItem}>
              <Image 
                src="/badges/logo_quickbooks.webp" 
                alt="QuickBooks ProAdvisor" 
                className={styles.badgeImage} 
                width={300} 
                height={150}
                loading="lazy"
                sizes="(max-width: 480px) 280px, (max-width: 768px) 250px, 300px"
              />
            </div>
             <div className={styles.badgeItem}>
              <Image 
                src="/badges/intuit-proconnect.jpg" 
                alt="Intuit ProConnect" 
                className={styles.badgeImage} 
                width={300} 
                height={150}
                loading="lazy"
                sizes="(max-width: 480px) 280px, (max-width: 768px) 250px, 300px"
              />
            </div>
            <div className={styles.badgeItem}>
              <Image 
                src="/badges/logo_efile.webp" 
                alt="E-File Authorized" 
                className={styles.badgeImage} 
                width={300} 
                height={150}
                loading="lazy"
                sizes="(max-width: 480px) 280px, (max-width: 768px) 250px, 300px"
              />
           
            </div>
            <div className={styles.badgeItem}>
             <Image 
                src="/badges/xero-badge.webp" 
                alt="Xero Certified" 
                className={styles.badgeImage} 
                width={300} 
                height={150}
                loading="lazy"
                sizes="(max-width: 480px) 280px, (max-width: 768px) 250px, 300px"
              />
            </div>
          </div>
        </section>
        )}

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Get Started?</h2>
            <p>Join the small business owners who trust Azul Integrity for their accounting needs. Get your free consultation today and discover how we can transform your workload.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact#contact-form" className={styles.primaryCta}>Get Your Free Consultation</Link>
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
              <span>Email: <Link href="mailto:azulintegritycpa@gmail.com">azulintegritycpa@gmail.com</Link></span>
              <span>Phone: <Link href="tel:+19044764732">(904) 476-4732</Link></span>
              <div className={styles.footerSocial}>
                <Link
                  href="https://www.facebook.com/people/Azul-Integrity-Accounting-Services-LLC/61581436237919/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src="/facebookIcon.webp" 
                    alt="Follow Azul Integrity CPA on Facebook" 
                    className={styles.socialIcon} 
                    width={28} 
                    height={28}
                    loading="lazy"
                    sizes="(max-width: 768px) 24px, 28px"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/heather-duran-2ba29045"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src="/linkedInIcon.webp" 
                    alt="Connect with Azul Integrity CPA on LinkedIn" 
                    className={styles.socialIcon} 
                    width={28} 
                    height={28}
                    loading="lazy"
                    sizes="(max-width: 768px) 24px, 28px"
                  />
                </Link>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4>Legal Pages</h4>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/privacy">Privacy Policy</Link>
            <Link href="/site-map">Site Map</Link>
            </div>
          </div>
          <div className={styles.footerCopyright}>
            &copy; 2024 Azul Integrity Accounting Services. All rights reserved.
            <br />
            <span style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '0.5rem', display: 'inline-block' }}>
              Crafted by <a href="https://scarletcodes.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--light-blue)', textDecoration: 'none' }}>Scarlet Codes</a>
            </span>
          </div>
        </footer>
      </Footer>
    </div>
  );
});

export default HomePageClient;