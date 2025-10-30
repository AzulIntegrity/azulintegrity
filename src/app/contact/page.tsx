"use client";
import Link from "next/link";
import Image from "next/image";


import React from "react";
import { Header, Footer } from "@/components";
import styles from "../page.module.css";


export default function ContactPage() {
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
          <div className={styles.contactCard}>
            <Image src="/Headshot.jpg" alt="Heather Duran" className={styles.cardPhoto} width={80} height={80} />
            <h2 className={styles.cardName}>Heather Duran</h2>
            <p className={styles.cardTitle}>Owner &amp; Certified Public Accountant</p>
            <p className={styles.cardEmail}><Link href="mailto:info@azulintegrity.com">info@azulintegrity.com</Link></p>
            <p className={styles.cardPhone}><Link href="tel:+119044764732">(904) 476-4732</Link></p>
          </div>
          <div className={styles.contactSection}>
            <h1>Get In Touch </h1>
            <span className={styles.contactHeadingLine}></span>
            <form name="contact" method="POST" data-netlify="true" className={styles.contactForm}>
              <input type="hidden" name="form-name" value="contact" />
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required placeholder="Enter Your First Name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required placeholder="Enter Your Last Name" />
                </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Enter Your Email" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Enter Your Message"></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
