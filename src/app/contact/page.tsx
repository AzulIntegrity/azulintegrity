"use client";

import React from "react";
import { Header, Footer } from "@/components";
import styles from "../page.module.css";


export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Header>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Azul Integrity Logo" className={styles.logoImage} />
        </div>
        <nav className={styles.navigation}>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </Header>
      <main>
        <section className={styles.contactSection}>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
