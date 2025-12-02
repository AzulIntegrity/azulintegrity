"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useState, useEffect } from "react";
import { Header, Footer, headerStyles } from "@/components";
import styles from "../page.module.css";


export default function ContactPageClient() {
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
        <nav className={headerStyles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className={headerStyles.active}>Contact</Link>
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
          <Link href="/contact" className={headerStyles.active} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </Header>
      <main>
        <section id="contact-form" className={styles.contactSectionWrap}>
          <div className={styles.contactSection}>
            <h1>Get In Touch </h1>
            <span className={styles.contactHeadingLine}></span>
            <p id="form-description" className={styles.srOnly}>
              Contact form to reach Azul Integrity Accounting Services. All fields marked with asterisk are required.
            </p>
                <form
                name="contact"
                action="/success"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className={styles.contactForm}
                suppressHydrationWarning={true}
                aria-label="Contact form"
                role="form"
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
              <button 
                type="submit" 
                className={styles.submitButton}
                aria-describedby="form-description"
              >
                Send Message
              </button>
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
