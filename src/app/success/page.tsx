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
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="Azul Integrity Logo" className={styles.logoImage} width={60} height={60} />
        </div>
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </Header>
      <main>
        <section className={styles.contactSectionWrap}>
          <div className={styles.contactSection} style={{ maxWidth: 800, margin: '3rem auto', textAlign: 'center' }}>
            <h1>Thanks — message received</h1>
            <p style={{ marginTop: '1rem' }}>We received your message. We'll be in touch shortly.</p>
            <p style={{ marginTop: '1.5rem' }}><Link href="/">Return to Home</Link></p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
