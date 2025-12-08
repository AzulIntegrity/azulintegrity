'use client';
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { Header, Footer, headerStyles } from "@/components";
import { HomepageContent, FooterData } from '@/lib/content';
import styles from "./page.module.css";

interface HomePageClientProps {
  homepageContent: HomepageContent;
  footerData: FooterData;
}

const HomePageClient = React.memo(function HomePageClient({ homepageContent, footerData }: HomePageClientProps) {
  const [activeTab, setActiveTab] = useState(homepageContent.services.services[0].key);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shouldLoadBadges, setShouldLoadBadges] = useState(false);
  const activeService = homepageContent.services.services.find(s => s.key === activeTab);

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
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header>
        <nav className={headerStyles.navigation}>
          <Link href="/" className={headerStyles.active}>Home</Link>
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
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcSet="/tree-mobile.webp"
            />
            <Image 
              src="/tree.webp" 
              alt="Azul Integrity Tree Logo" 
              className={headerStyles.logoImage} 
              width={50} 
              height={50}
              priority
              sizes="(max-width: 768px) 40px, 50px"
            />
          </picture>
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
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </Header>
      
      <main className={styles.main} id="main-content">

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageBg}>
            {/* Mobile-optimized hero image */}
            <picture>
              <source 
                media="(max-width: 768px)" 
                srcSet="/trusttree-mobile.webp"
              />
              <Image 
                src={homepageContent.hero.background_image} 
                alt={homepageContent.hero.background_alt} 
                fill
                priority
                fetchPriority="high"
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
                style={{ 
                  objectFit: 'cover', 
                  objectPosition: '25% center',
                  transform: 'translate3d(0,0,0)',
                  backfaceVisibility: 'hidden'
                }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx//2wBDAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRobHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyxxkNzxQJVqTX0zUKNRfq/aqWD+FLpVMskPnYfFGKN8iZNEjAe2pHYdJNNfKBEyabH7L2j+zb7KlrBE0gFRFH6nOT5Cr7wgIUGP+vYDbFBAIhGFCgGOASDJEGj+EhUJzHdddUabadCh6e4/GNVGhRt2EfWoNKhUOw8RKGrjrQoUJIrZWgMl6k+1ChFXb0rXrQoGJ4/+R+sKFGgUKFCj//Z"
              />
            </picture>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 dangerouslySetInnerHTML={{ __html: homepageContent.hero.title.replace(/\n/g, '<br />') }} />
              <p className={styles.heroSubtext}>
                {homepageContent.hero.subtitle}
              </p>
              <Link 
                href="/contact#contact-form" 
                className={styles.ctaButton}
                aria-label={`${homepageContent.hero.cta_text} - Schedule your free CPA consultation with Azul Integrity Accounting`}
              >
                {homepageContent.hero.cta_text}
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.seoBlock}>
          <h2 className={styles.sectionHeading}>
            {homepageContent.seoSection.heading} <br />
            {homepageContent.seoSection.subheading}
          </h2>
          <p className={styles.sectionSubtext}>
            {homepageContent.seoSection.description}
          </p>
        </section>
        <section className={styles.services} suppressHydrationWarning>
          <h2 className={styles.sectionHeading}>{homepageContent.services.section_title}</h2>
          <div className={styles.tabsHeader}>
            {homepageContent.services.services.map((category) => (
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
              <h3 className={styles.serviceHeading}>{activeService.heading}</h3>
              <p className={styles.serviceDescription}>{activeService.description}</p>
              
              <ul className={styles.serviceList}>
                {activeService.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <Link 
                href={`/services#${activeService.key}`} 
                className={styles.serviceCta}
                aria-label={`Learn more about ${activeService.title} services - view detailed information, pricing, and how we can help your business`}
              >
                Learn More
              </Link>
            </div>
          )}
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.testimonialsContent}>
            <h2 className={styles.testimonialsHeading}>{homepageContent.testimonials.section_title}</h2>
            <p className={styles.testimonialsSubtext}>{homepageContent.testimonials.section_subtitle}</p>
            
            <div className={styles.testimonialsGrid}>
              {homepageContent.testimonials.testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <div className={styles.testimonialQuote}>
                    &quot;{testimonial.quote}&quot;
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.author}</strong>
                    {testimonial.business && (
                      <span className={styles.testimonialBusiness}>{testimonial.business}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Badges Section - Deferred for mobile performance */}
        {shouldLoadBadges && (
          <section className={styles.softwareBadges} style={{ contentVisibility: 'auto', containIntrinsicSize: '400px' }}>
            <h2 className={styles.badgesHeading}>{homepageContent.certifications.section_title}</h2>
            <p className={styles.badgesSubtext}>{homepageContent.certifications.section_subtitle}</p>
            <div className={styles.badgesGrid}>
              {homepageContent.certifications.badges.map((badge, index) => (
                <div key={index} className={styles.badgeItem}>
                  <Image 
                    src={badge.image} 
                    alt={badge.alt} 
                    className={styles.badgeImage} 
                    width={300} 
                    height={150}
                    loading="lazy"
                    sizes="(max-width: 480px) 280px, (max-width: 768px) 250px, 300px"
                  />
                </div>
              ))}
          </div>
        </section>
        )}

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>{homepageContent.cta.heading}</h2>
            <p>{homepageContent.cta.description}</p>
            <div className={styles.ctaButtons}>
              <Link 
                href="/contact#contact-form" 
                className={styles.primaryCta}
                aria-label={`${homepageContent.cta.button_text} - Contact Heather Duran CPA for professional accounting services`}
              >
                {homepageContent.cta.button_text}
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer>
        <footer className={styles.footerColumns}>
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <h3>Quick Links</h3>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.footerCol}>
              <h3>Contact</h3>
              <span>Email: <Link 
                href={`mailto:${footerData.contact.email}`}
                aria-label={`Send email to Azul Integrity CPA at ${footerData.contact.email}`}
              >
                {footerData.contact.email}
              </Link></span>
              <span>Phone: <Link 
                href={`tel:+1${footerData.contact.phone.replace(/[^\d]/g, '')}`}
                aria-label={`Call Azul Integrity CPA at ${footerData.contact.phone}`}
              >
                {footerData.contact.phone}
              </Link></span>
              <div className={styles.footerSocial}>
                <Link
                  href="https://www.facebook.com/people/Azul-Integrity-Accounting-Services-LLC/61581436237919/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Azul Integrity CPA on Facebook"
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
                  aria-label="Connect with Azul Integrity CPA on LinkedIn"
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
              <h3>Legal Pages</h3>
              <Link href="/terms" aria-label="View Terms of Service and legal policies">Terms of Service</Link>
              <Link href="/privacy" aria-label="Read Privacy Policy and data protection information">Privacy Policy</Link>
              <Link href="/site-map" aria-label="View complete site map and page directory">Site Map</Link>
            </div>
          </div>
          <div className={styles.footerCopyright}>
            &copy; 2024 Azul Integrity Accounting Services. All rights reserved.
            <br />
            <span style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '0.5rem', display: 'inline-block' }}>
              Crafted by <a href="https://scarletcodes.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Scarlet Codes website - Web development services" style={{ color: 'var(--light-blue)', textDecoration: 'none' }}>Scarlet Codes</a>
            </span>
          </div>
        </footer>
      </Footer>
    </div>
  );
});

export default HomePageClient;