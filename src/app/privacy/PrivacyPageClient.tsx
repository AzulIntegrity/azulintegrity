"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components";
import styles from "../shared/legal-pages.module.css";

export default function PrivacyPageClient() {
  return (
    <div className={styles.page}>
      <Header>
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
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
      </Header>

      <main className={styles.main}>
        {/* Privacy Page Header */}
        <section className={styles.pageHeader}>
          <div className={styles.headerContent}>
            <h1>Privacy Policy</h1>
            <p>Azul Integrity Accounting Services LLC</p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className={styles.termsContent}>
          <div className={styles.termsContainer}>
            
            <div className={styles.termsEffectiveDate}>
              <p><strong>Effective Date: November 1, 2025</strong></p>
            </div>

            <div className={styles.termsSection}>
              <p>Azul Integrity Accounting Services LLC respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what information we collect, how we protect it, your rights, and how the policy applies when you visit our website, interact with our social media pages, engage with our marketing, or become a client. By using our website, social media pages, or services, you agree to this Privacy Policy.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>1. Scope and Controlling Documents</h2>
              <p><strong>Scope:</strong> This Privacy Policy governs personal information collected through our website, social media, marketing, and other non‑engagement interactions unless we state otherwise.</p>
              <p><strong>Client Engagements Control:</strong> For information collected in the context of a client relationship, the terms of your signed engagement letter, any client‑specific privacy addendum, and applicable professional and legal obligations (including the AICPA Code of Professional Conduct, IRS regulations, and relevant state privacy laws) govern and take precedence over this Privacy Policy where there is a conflict. We will clearly state in engagement documents if this policy applies to those engagement activities.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>2. Information We Collect</h2>
              <p>Azul Integrity Accounting Services LLC and its Members are bound by professional standards and ethics. We strive to ensure that your information is always protected and your right to privacy is honored and respected. We will not collect any personal information about our website visitors unless it is voluntarily submitted, in which case we will act in a responsible manner to protect your personal information.</p>
              
              <h3>Personal Information</h3>
              <p>The personal information identifies, relates to, describes, is capable of being associated with, or could be reasonably linked, directly or indirectly, with you or your household, such as your name, email address, telephone number, mailing address, business information, and broader categories of information.</p>
              <p>We do not collect sensitive personal information (e.g. race, religion, biometric data) unless required for legal compliance or accounting purposes.</p>
              <p>We may collect your Personal Information from third-party sources, such as social media platforms (if you interact with us through your social media account), and third parties to whom you direct us to collect your personal information. Information may also be automatically collected through computer hardware and software. This information can include: IP address, browser type and version, domain names, pages visited and time spent on the website, cookies and similar tracking technologies. This information is used for the operation of the website, to maintain quality of the service and to provide general statistics.</p>
              
              <h3>Engagement Services for Clients</h3>
              <p>Unless we state otherwise in our communications with you or in client engagement documents, this Privacy Policy does not apply to the Personal Information we collect in the context of our client relationships.</p>
              <p>All client information is handled in accordance with applicable professional standards, including the AICPA Code of Professional Conduct, IRS regulations, and any relevant state privacy laws. As part of the services that we provide, we do collect nonpublic information from you from the following sources:</p>
              <ul className={styles.termsList}>
                <li>Information requested during the onboarding process</li>
                <li>Information from you on tax organizers, worksheets and other financial documents</li>
                <li>Information about your transactions with others</li>
                <li>Information about investments and financial advising services that impact company&rsquo;s financial and tax records</li>
                <li>Legal information and/or agreements related to the company incorporation, financial loans, or other required services that impact company&rsquo;s financial and tax records</li>
              </ul>
              <p>We use secure, encrypted platforms for document exchange, e-signatures, and cloud storage to protect sensitive financial data</p>
            </div>

            <div className={styles.termsSection}>
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className={styles.termsList}>
                <li>Communicate with you about appointments, updates, or resources</li>
                <li>Improve our services and website performance</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Develop engagement letters</li>
                <li>Provide bookkeeping, accounting, payroll, tax, and CPA services upon signed engagement letter</li>
              </ul>
              <p>The email address you provide may be used to send you information, respond to inquiries, and/or other requests or questions.</p>
              <p>We do not disclose any nonpublic personal information about our clients or former clients to anyone, except as permitted by law. We provide users with choices regarding how their personal information is used and honor requests to opt out or delete their information where legally permitted.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>4. How We Share Your Information</h2>
              <p>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased service requested. We share personal information only as reasonably necessary for the purposes described in this policy.</p>
              <p><strong>Service Providers:</strong> With trusted vendors who perform services on our behalf (e.g., scheduling, payment processing, secure data storage). All service providers are contractually required to protect your information and use it only for the purpose of providing services to Azul Integrity Accounting Services LLC.</p>
              <p><strong>Legal Obligations:</strong> When required by law, regulation, or legal process</p>
              <p><strong>IRS Regulations:</strong> Certain information we collect and retain may be subject to IRS regulations, including IRC §7216, which governs the use and disclosure of tax return information.</p>
              <p><strong>Consent:</strong> With your explicit consent for specific purposes.</p>
              <p><strong>Cookies and Other Technologies:</strong> We use cookies and similar technologies to enhance your experience on our website. Cookies are small files stored on your device that help us understand how you interact with our site—such as which pages you visit and how long you stay. This may allow us to connect your site usage with other personal information you&rsquo;ve shared. Most browsers let you manage cookie settings, including blocking or deleting them. While disabling cookies typically won&rsquo;t affect your ability to use our site, it may limit certain features or functionality. We may also use web beacons (also known as pixel tags or clear GIFs) to monitor site traffic, personalize content, and confirm receipt of communications. These tools may collect data like your browser type and IP address, and may work with cookies to link usage data to your personal information. We do not use cookies for advertising or tracking across third-party websites.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>5. Data Security</h2>
              <p>We implement reasonable technical, administrative, and physical safeguards to protect your personal and financial information from unauthorized access, disclosure, alteration, or destruction. However, no system can be guaranteed 100% secure.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>6. Data Retention</h2>
              <p>We generally retain client and tax-related information for at least seven (7) years, or as required by IRS and AICPA recordkeeping standards, unless a longer retention period is required by law.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>7. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className={styles.termsList}>
                <li>Access, correct, or update your personal information</li>
                <li>Request deletion of your information</li>
                <li>Restrict or object to certain processing activities</li>
                <li>Withdraw consent (where applicable)</li>
              </ul>
              <p>This Privacy Policy is governed by the laws of the State of Florida, without regard to its conflict of law principles.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>8. Children&rsquo;s Privacy</h2>
              <p>We do not knowingly collect or maintain information from anyone under 18 without verifiable parental consent.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>9. Third-Party Links</h2>
              <p>Our Sites, services and materials may contain references or links to third-party websites and services. Except as described above regarding Service Providers, we do not control what information third parties track or collect. Any access to and use of such third-party websites and services is not governed by this Privacy Policy but instead is governed by the privacy policies of those third parties.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>10. Updates to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. The updated version will be indicated by the &ldquo;Effective Date&rdquo; and will be effective once posted. We encourage you to periodically review this page for the latest information on our privacy practices.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>11. Contact Us</h2>
              <p>Reading this Privacy Policy will help you understand your privacy rights and choices. If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
              <div className={styles.contactInfo}>
                <p><strong>Azul Integrity Accounting Services LLC</strong></p>
                <p>6999 Merrill Road, STE 2 #313<br />Jacksonville, FL 32277</p>
                <p><Image src="/emailblue.png" alt="Email Azul Integrity CPA" className={styles.contactIcon} width={20} height={20} /> <a href="mailto:azulintegritycpa@gmail.com">azulintegritycpa@gmail.com</a></p>
                <p><Image src="/phoneblue.png" alt="Call Azul Integrity CPA" className={styles.contactIcon} width={20} height={20} /><a href="tel:+19044764732">(904) 476-4732</a></p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div> 
  );
}