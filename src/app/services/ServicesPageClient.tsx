"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { Header, Footer, headerStyles } from "@/components";
import { ServicesPageData, FooterData } from "@/lib/content";
import styles from "./services.module.css";

interface ServicesPageClientProps {
  servicesData: ServicesPageData;
  footerData: FooterData;
}

export default function ServicesPageClient({ servicesData, footerData }: ServicesPageClientProps) {
  const { pageHeader, serviceCategories, cta } = servicesData;
  const [activeTab, setActiveTab] = useState(serviceCategories[0]?.key || '');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeService = serviceCategories.find(s => s.key === activeTab);

  // Handle URL hash to set active tab
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash && serviceCategories.some(cat => cat.key === hash)) {
        setActiveTab(hash);
      }
    }
  }, [serviceCategories]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={styles.page}>
      <Header>
        <nav className={headerStyles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/services" className={headerStyles.active}>Services</Link>
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
        <div className={`${headerStyles.hamburger} ${mobileMenuOpen ? headerStyles.active : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${headerStyles.mobileMenu} ${mobileMenuOpen ? headerStyles.active : ''}`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" className={headerStyles.active} onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      </Header>
      
      <main className={styles.main} id="main-content">
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className={styles.headerContent}>
            <h1 className={styles.visuallyHidden}>{pageHeader.title}</h1>
            <h1 role="presentation">{pageHeader.displayTitle}</h1>
            <p>{pageHeader.description}</p>
          </div>
        </section>

        {/* Services Section with Tabs */}
        <section className={styles.services}>
          <div className={styles.tabsHeader}>
            {serviceCategories.map((category) => (
              <button
                key={category.key}
                className={`${styles.tabButton} ${activeTab === category.key ? styles.active : ''}`}
                onClick={() => setActiveTab(category.key)}
              >
                {category.displayTitle}
              </button>
            ))}
          </div>
          
          {activeService && (
            <div className={styles.serviceDetails}>
              <h2 className={styles.visuallyHidden}>{activeService.title}</h2>
              <div className={styles.displayTitle} role="presentation">{activeService.displayTitle}</div>
              <p className={styles.serviceDescription}>{activeService.content.description}</p>
              
              {/* What We Do Section */}
              {activeService.content.whatWeDo && (
                <section className={styles.whatWeDo}>
                  <div className={styles.whatWeDoContent}>
                    <div className={styles.whatWeDoTextSection}>
                      <h3>What I Do For You: </h3>
                      <ul className={styles.whatWeDoList}>
                        {activeService.content.whatWeDo.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.whatWeDoImage}>
                      <Image 
                        src={`/M${activeService.key === 'additional' ? 'support' : activeService.key}.webp`}
                        alt={`${activeService.title} illustration`}
                        width={300}
                        height={200}
                        className={styles.placeholderImage}
                        priority={activeService.key === 'bookkeeping'}
                      />
                    </div>
                  </div>
                </section>
              )}

              {/* Packages Section */}
              {activeService.content.packages && activeService.content.packages.length > 0 && (
                <section className={styles.packages}>
                  <h3>Service Packages</h3>
                  <div className={styles.packageGrid}>
                    {activeService.content.packages.map((pkg, index) => (
                      <div key={index} className={styles.packageCard}>
                        <h4>{pkg.name}</h4>
                        <p>{pkg.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>{cta.heading}</h2>
            <p>{cta.description}</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact#contact-form" className={styles.primaryCta}>{cta.button_text}</Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer footerData={footerData} />
    </div>
  );
}