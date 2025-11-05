"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components";
import styles from "../page.module.css";

export default function SuccessPage() {
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
          <div className={`${styles.contactSection} ${styles.successBox}`}>
            <h1 className={styles.successTitle}>Thanks — Message Received</h1>
            <p className={styles.successText}>We received your message. We&apos;ll be in touch shortly.</p>
            <p style={{ marginTop: '1.5rem' }}><Link href="/">Return to Home</Link></p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
