"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer, headerStyles } from "@/components";
import styles from "./success.module.css";

export default function SuccessPageClient() {

  return (
    <div className={styles.page}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header>
        <nav className={headerStyles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className={headerStyles.logoContainer}>
          <Image src="/tree.webp" alt="Azul Integrity Tree Logo" className={headerStyles.logoImage} width={50} height={50} />
          <div className={headerStyles.logoText}>
            <div className={headerStyles.companyName}>Azul Integrity</div>
            <div className={headerStyles.companySubtitle}>Accounting Services</div>
          </div>
        </div>
      </Header>
      <main id="main-content">
        <section className={styles.contactSectionWrap}>
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✓</div>
            <h1 className={styles.successTitle}>Message Received!</h1>
            <p className={styles.successText}>
              Thank you for contacting Azul Integrity CPA. We&apos;ve received your message and will respond promptly to discuss your accounting and bookkeeping needs.
            </p>
            <div className={styles.successActions}>
              <Link href="/" className={styles.successButton}>
                ← Return to Home
              </Link>
              <Link href="/services" className={styles.secondaryButton}>
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}