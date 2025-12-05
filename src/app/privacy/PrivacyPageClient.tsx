"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer, headerStyles } from "@/components";
import type { PrivacyPageData, FooterData } from "@/lib/types";
import styles from "../shared/legal-pages.module.css";

interface PrivacyPageClientProps {
  privacyData: PrivacyPageData;
  footerData: FooterData;
}

export default function PrivacyPageClient({ privacyData, footerData }: PrivacyPageClientProps) {
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
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className={headerStyles.phoneContact}>
          <Link href="tel:+19044764732" className={headerStyles.phoneLink}>
            <Image 
              src="/phoneIcon.webp" 
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
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </Header>

      <main className={styles.main}>
        {/* Privacy Page Header */}
        <section className={styles.pageHeader}>
          <div className={styles.headerContent}>
            <h1>{privacyData.header.title}</h1>
            <p>{privacyData.header.subtitle}</p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className={styles.termsContent}>
          <div className={styles.termsContainer}>
            
            <div className={styles.termsEffectiveDate}>
              <p><strong>Effective Date: {privacyData.meta.effective_date}</strong></p>
            </div>

            {/* Introduction Paragraph */}
            {privacyData.introduction.map((paragraph, index) => (
              <div key={index} className={styles.termsSection}>
                <p>{paragraph}</p>
              </div>
            ))}

            {/* Privacy Policy Sections */}
            {privacyData.sections.map((section, index) => (
              <div key={index} className={styles.termsSection}>
                <h2>{section.heading}</h2>
                
                {/* Render paragraphs */}
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
                
                {/* Render lists if they exist */}
                {section.lists && section.lists.map((list, listIndex) => (
                  <ul key={listIndex} className={styles.termsList}>
                    {list.list_items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                ))}
                
                {/* Special handling for Contact Information section (section 11) */}
                {section.heading.includes('Contact Us') && (
                  <div className={styles.contactInfo}>
                    <p><Image 
                      src="/emailblue.png" 
                      alt="Email Azul Integrity CPA" 
                      className={styles.contactIcon} 
                      width={20} 
                      height={20}
                      loading="lazy"
                      sizes="20px"
                    /> <a href={`mailto:${footerData?.contact?.email || 'azulintegritycpa@gmail.com'}`}>
                      {footerData?.contact?.email || 'azulintegritycpa@gmail.com'}
                    </a></p>
                    <p><Image 
                      src="/phoneblue.png" 
                      alt="Call Azul Integrity CPA" 
                      className={styles.contactIcon} 
                      width={20} 
                      height={20}
                      loading="lazy"
                      sizes="20px"
                    /> <a href={`tel:+1${(footerData?.contact?.phone || '(904) 476-4732').replace(/\D/g, '')}`}>
                      {footerData?.contact?.phone || '(904) 476-4732'}
                    </a></p>
                  </div>
                )}
              </div>
            ))}

          </div>
        </section>
      </main>

      <Footer footerData={footerData} />
    </div> 
  );
}