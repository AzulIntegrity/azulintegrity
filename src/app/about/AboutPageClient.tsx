'use client';
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { Header, Footer, headerStyles } from "@/components";
import styles from "../page.module.css";

const AboutPageClient = React.memo(function AboutPageClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={styles.page}>
      <Header>
        <nav className={headerStyles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about" className={headerStyles.active}>About</Link>
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
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/about" className={headerStyles.active} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </Header>
      
      <main className={styles.main}>
        {/* About Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutImageSection}>
              <Image 
                src="/Headshot.webp" 
                alt="Heather Duran, CPA - Azul Integrity Accounting Services"
                className={styles.aboutPhoto}
                width={200}
                height={200}
                priority
                sizes="(max-width: 768px) 150px, 200px"
              />
              
              <div className={styles.aboutContactInfo}>
                <h3>Contact Information</h3>
                <h4>Heather Duran, CPA</h4>
                <p>Azul Integrity Accounting Services LLC</p>
                <p>Email: <Link href="mailto:azulintegritycpa@gmail.com">azulintegritycpa@gmail.com</Link></p>
                <p>Phone: <Link href="tel:+19044764732">(904) 476-4732</Link></p>
              </div>
            </div>
            
            <div className={styles.aboutContent}>
              <h1 className={styles.aboutHeading}>Professional Background</h1>
              <h2 className={styles.aboutSubheading}>Your Virtual CPA Partner</h2>
              
              <div className={styles.aboutText}>
                <p>
                  With over 25 years of corporate accounting experience, I bring deep expertise in financial management, 
                  compliance, and strategic business guidance to small business owners who need reliable, professional support.
                </p>
                
                <p>
                  My background spans across multiple industries, giving me the versatility to understand your unique 
                  business challenges and provide tailored solutions that drive growth and ensure compliance.
                </p>
                
                <p>
                  As a licensed CPA in both Florida and New Mexico, I combine technical expertise with a personal 
                  approach, ensuring you receive the individual attention your business deserves while maintaining 
                  the highest professional standards.
                </p>
              </div>
              
              <div className={styles.credentialsList}>
                <h3>Professional Credentials & Expertise</h3>
                <ul>
                  <li>Certified Public Accountant (CPA) - Licensed in Florida and New Mexico</li>
                  <li>25+ years of corporate accounting and financial management experience</li>
                  <li>Expert in QuickBooks, Xero, and professional accounting software</li>
                  <li>Specialized in small business accounting, bookkeeping, and tax preparation</li>
                  <li>Extensive experience in payroll processing and compliance</li>
                  <li>Advanced knowledge of GAAP and financial reporting standards</li>
                
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Work Together?</h2>
            <p>Experience the difference that personalized, professional accounting services can make for your business. Let&apos;s discuss how I can help you achieve your financial goals.</p>
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
              <Link href="/about">About</Link>
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

export default AboutPageClient;