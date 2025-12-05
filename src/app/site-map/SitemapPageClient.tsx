"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer, headerStyles } from "@/components";
import { SitemapPageData, FooterData } from "@/lib/content";
import pageStyles from "../shared/legal-pages.module.css";
import styles from "./sitemap.module.css";

interface SitemapPageClientProps {
  sitemapData: SitemapPageData;
  footerData: FooterData;
}

export default function SitemapPageClient({ sitemapData, footerData }: SitemapPageClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={pageStyles.page}>
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
      
      <main className={styles.main} id="main-content">
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{sitemapData.header.title}</h1>
            <p className={styles.description}>
              {sitemapData.header.description}
            </p>

            <div className={styles.sitemap}>
              {sitemapData.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className={styles.sitemapSection}>
                  <h2 className={styles.sectionTitle}>{section.section_title}</h2>
                  <ul className={styles.sitemapList}>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.url ? (
                          <Link href={item.url}>{item.title}</Link>
                        ) : (
                          <span>{item.title}</span>
                        )}
                        {item.description && (
                          <span className={styles.linkDescription}>{item.description}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer footerData={footerData} />
    </div>
  );
}