"use client";
import Link from "next/link";
import Image from "next/image";


import React, { useCallback, useState, useEffect } from "react";
import { Header, Footer } from "@/components";
import styles from "../page.module.css";


export default function ContactPage() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // JS submit handler for Netlify Forms migration — show in-page modal on success
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const params: [string, string][] = Array.from(formData.entries()).map(([key, value]) => [key, typeof value === 'string' ? value : '']);
    const body = new URLSearchParams(params).toString();
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (response.ok) {
        // Show an in-page modal thanking the user instead of redirecting
        setShowModal(true);
        form.reset();
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Network or submission error:', error);
    }
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    if (showModal) {
      window.addEventListener('keydown', onKey);
    }
    return () => window.removeEventListener('keydown', onKey);
  }, [showModal]);

  // auto-close modal after 5 seconds
  useEffect(() => {
    if (!showModal) return;
    const t = window.setTimeout(() => setShowModal(false), 5000);
    return () => clearTimeout(t);
  }, [showModal]);
  return (
    <div className={styles.page}>
      <Header>
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className={styles.phoneContact}>
          <Link href="tel:+19044764732" className={styles.phoneLink}>
            <Image 
              src="/phoneicon.png" 
              alt="Call us" 
              className={styles.phoneIcon}
              width={20} 
              height={20}
            />
            <span className={styles.phoneText}>
              <span className={styles.callNow}>Call Now</span>
              <span className={styles.phoneNumber}>(904) 476-4732</span>
            </span>
          </Link>
        </div>
        <div className={styles.logoContainer}>
          <Image 
            src="/tree.png" 
            alt="Azul Integrity Tree Logo" 
            className={styles.logoImage} 
            width={50} 
            height={50}
            priority
            sizes="(max-width: 768px) 40px, 50px"
          />
          <div className={styles.logoText}>
            <div className={styles.companyName}>Azul Integrity</div>
            <div className={styles.companySubtitle}>Accounting Services</div>
          </div>
        </div>
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
      <main>
        {/* About Section - Modern Card Layout */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutImageSection}>
              <Image
                src="/Headshot.png"
                alt="Heather Duran - Lead Accountant"
                className={styles.aboutPhoto}
                width={300}
                height={300}
                priority
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
              />
              <div className={styles.aboutContactInfo}>
                <h4>Contact Information</h4>
                <p><Link href="mailto:azulintegritycpa@gmail.com">azulintegritycpa@gmail.com</Link></p>
                <p><Link href="tel:+119044764732">(904) 476-4732</Link></p>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutHeading}>Heather Duran, CPA</h2>
              <h3 className={styles.aboutSubheading}>Founder of Azul Integrity — Your Virtual CPA — Rooted in Trust, Partner in Growth</h3>
              <div className={styles.aboutText}>
                <p>
                  <strong>If you&apos;re allergic to accounting and taxes, call me — I&apos;ve got the antidote.</strong>
                </p>
                <p>
                  After 25+ years in corporate finance, accounting, insurance, and financial systems, I founded Azul Integrity to bring big-company clarity and efficiency to growing entrepreneurs — without the corporate headaches.
                </p>
                <p>
                  I help business owners turn messy books into meaningful insight. Using GAAP best practices, smart automation, and plain-language explanations, I make your numbers reliable, understandable, and actionable.
                </p>
                <p><strong>When we work together, you get:</strong></p>
                <ul style={{ paddingLeft: '2rem' }}>
                  <li>Tidy, accurate books that tell your business&apos;s true story</li>
                  <li>Taxes handled on time — no last-minute chaos</li>
                  <li>Reports that drive smarter decisions</li>
                  <li>A partner who cares about your goals, not just your numbers</li>
                </ul>
                <div className={styles.credentialsList}>
                  <h4>Credentials & Experience</h4>
                  <ul>
                    <li>Licensed CPA — New Mexico & Florida</li>
                    <li>25+ years in corporate finance, accounting, insurance, and systems</li>
                    <li>Expertise in GAAP compliance, automation, and audit readiness</li>
                    <li>Trusted by small businesses, startups, and local nonprofits</li>
                  </ul>
                </div>
                <p>
                  At Azul Integrity, I combine technical rigor with genuine care — creating financial systems that reduce stress and build confidence.
                </p>
                <p>
                  <strong>You grow your business. I&apos;ll handle the numbers.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-form" className={styles.contactSectionWrap}>
          <div className={styles.contactSection}>
            <h1>Get In Touch </h1>
            <span className={styles.contactHeadingLine}></span>
            <form
              name="contact"
              action="/success"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className={styles.contactForm}
            >
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot field for spam prevention, Netlify migration best practice */}
              <p style={{ display: 'none' }}>
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required placeholder="Enter Your First Name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required placeholder="Enter Your Last Name" />
                </div>
              </div>
              
              <div className={styles.formRowThree}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="Enter Your Email" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="bestTimeToCall">Best Time to Call</label>
                  <input type="text" id="bestTimeToCall" name="bestTimeToCall" placeholder="e.g., Weekday mornings, Evenings after 6pm" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Enter Your Message"></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
            {/* Modal popup */}
            {showModal && (
              <div className={styles.modalOverlay} role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}>
                <div className={styles.modal}>
                  <button className={styles.modalClose} aria-label="Close" onClick={() => setShowModal(false)}>×</button>
                  <h2>Thank you for your message</h2>
                  <p>Azul Integrity Accounting will be in touch shortly.</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
