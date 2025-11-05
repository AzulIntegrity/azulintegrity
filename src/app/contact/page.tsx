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
        <div className={styles.logoContainer}>
          <Image src="/tree.png" alt="Azul Integrity Tree Logo" className={styles.logoImage} width={50} height={50} />
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
                src="/Headshot.jpg"
                alt="Heather Duran - Lead Accountant"
                className={styles.aboutPhoto}
                width={300}
                height={300}
              />
              <div className={styles.aboutContactInfo}>
                <h4>Contact Information</h4>
                <p><Link href="mailto:azulintegrity@gmail.com">azulintegrity@gmail.com</Link></p>
                <p><Link href="tel:+119044764732">(904) 476-4732</Link></p>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutHeading}>Meet the Expert Behind Azul Integrity Accounting Services</h2>
              <h3 className={styles.aboutSubheading}>Heather Duran, Owner and Certified Public Accountant</h3>
              <div className={styles.aboutText}>
                <p>
                  I&apos;m <strong>Heather Duran</strong>, founder of Azul Integrity and your Virtual CPA. After 25 years working in corporate finance, accounting, and financial systems, I bring corporate rigor with a practical, small‑business mindset. I make finances simple so you can focus on what you do best: growing your business.
                </p>
                <p>
                  I help small and medium‑sized businesses turn messy books into clear, actionable plans. Using GAAP best practices and smart process automation, I build streamlined systems that give you accurate records and timely insights. No more wrestling with numbers — just dependable numbers and guidance you can act on.
                </p>
                <div className={styles.credentialsList}>
                  <h4>Credentials & Experience</h4>
                  <ul>
                    <li>Licensed CPA in New Mexico and Florida</li>
                    <li>25+ years of corporate and financial systems experience</li>
                    <li>What I do: bookkeeping, accounting, taxes, payroll, and virtual CPA support for small businesses</li>
                  </ul>
                </div>
                <p>
                  I care about clarity, reliability, and helping you feel confident about your financial decisions. If you want bookkeeping that&apos;s tidy, taxes that are handled, and financial reports that actually help you grow, let&apos;s talk.
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
