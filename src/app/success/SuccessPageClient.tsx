"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components";
import styles from "./success.module.css";

export default function SuccessPageClient() {

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
      </Header>
      <main>
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