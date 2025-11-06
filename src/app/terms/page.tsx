"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components";
import styles from "../page.module.css";

export default function TermsPage() {
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
        {/* Terms Page Header */}
        <section className={styles.pageHeader}>
          <div className={styles.headerContent}>
            <h1>Terms and Conditions</h1>
            <p>Azul Integrity Accounting Services LLC</p>
          </div>
        </section>

        {/* Terms Content */}
        <section className={styles.termsContent}>
          <div className={styles.termsContainer}>
            
            <div className={styles.termsEffectiveDate}>
              <p><strong>Effective Date: November 1, 2025</strong></p>
            </div>

            <div className={styles.termsSection}>
              <h2>1. Introduction and Acceptance of Terms</h2>
              <p>By accessing or using the Azul Integrity Accounting Services LLC website (the &ldquo;Site&rdquo;), you agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;). &ldquo;We,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to Azul Integrity Accounting Services LLC. If you do not agree to these Terms, do not use the Site.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>2. Definitions</h2>
              <p>&ldquo;User&rdquo; means any person who accesses or uses the Site. &ldquo;Content&rdquo; means text, images, audio, video, software, data, and other materials made available on or through the Site.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>3. Information Is Not Advice; No Accountant-Client Relationship</h2>
              <p>Information on the Site is provided for general informational purposes only and does not constitute professional accounting, tax, legal, or financial advice. Use of the Site does not create an accountant-client relationship. You should not act or refrain from acting based on Site content without seeking professional advice tailored to your situation. Any U.S. federal tax information on the Site is not intended to be used to avoid penalties under U.S. federal tax law.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>4. Eligibility and User Obligations</h2>
              <p>You represent that you are at least 18 years old and have the legal capacity to enter into these Terms. You agree not to:</p>
              <ul className={styles.termsList}>
                <li>(a) use the Site for unlawful purposes;</li>
                <li>(b) attempt to gain unauthorized access to any part of our systems;</li>
                <li>(c) interfere with the security or integrity of the Site;</li>
                <li>(d) scrape, copy, or commercially exploit any Site content without prior written consent.</li>
              </ul>
            </div>

            <div className={styles.termsSection}>
              <h2>5. Use of Services</h2>
              <p>If you engage our accounting or consulting services through the Site, additional terms or engagement letters may apply. Those terms will govern in the event of any conflict with these Terms.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>6. User Submissions</h2>
              <p>Any information you submit through the Site, including messages or uploaded documents, must be accurate and free of harmful code. You retain ownership of your content but grant us a nonexclusive right to use it as needed to operate the Site or provide requested services.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>7. Electronic Communications and Consent</h2>
              <p>By providing your contact information or interacting with the Site, you consent to receive electronic communications from us, including emails, SMS messages, and notices posted on the Site, in accordance with applicable law. You may withdraw consent for marketing messages as described in our Privacy Policy; however, transactional or service-related messages may still be sent as necessary.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>8. Accuracy of Information; No Warranties</h2>
              <p>We make reasonable efforts to ensure the accuracy and timeliness of Site content but do not warrant that information is complete, reliable, or error-free. The Site and all Content are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind, express or implied. To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>9. Links to Third-Party Sites and Tools</h2>
              <p>The Site may link to third-party websites, tools, or services. We do not control or endorse, and are not responsible for, the content, policies, or practices of any third-party site. Your use of third-party sites and tools is subject to their respective terms and privacy policies.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>10. Intellectual Property and Copyright Policy</h2>
              <p>All content on the Site is owned or licensed by Azul Integrity Accounting Services LLC and protected by copyright, trademark, and other intellectual property laws. You may use Site content solely for personal, noncommercial purposes. Unauthorized use is prohibited.</p>
              <p>To report alleged copyright infringement, please email azulintegrity@gmail.com with sufficient information to support a valid DMCA takedown request.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>11. Trademarks</h2>
              <p>Azul Integrity Accounting Services&rsquo;s trademarks and trade dress may not be used in connection with any product or service that is not Azul Integrity Accounting Services&rsquo;s, or in any manner likely to cause confusion or disparage Azul Integrity Accounting Services. All other trademarks appearing on the Site are the property of their respective owners.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>12. Product and Service Descriptions</h2>
              <p>We strive to ensure that all product and service descriptions are accurate; however, we do not warrant that descriptions or other content on the Site are error-free or complete. If a service you purchase from us is not as described, your sole remedy is to cancel your service by contacting us at azulintegrity@gmail.com or (904) 476-4732.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>13. Limitation of Liability; Indemnification</h2>
              <p>To the fullest extent permitted by law, in no event shall Azul Integrity Accounting Services LLC or its affiliates, officers, employees, or agents be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages arising out of or related to your use of the Site.</p>
              <p>Your sole and exclusive remedy for dissatisfaction with the Site is to stop using it. Our total liability to you for any claim shall not exceed the greater of $100 or the amount you paid to us for services in the six months preceding the event giving rise to the claim.</p>
              <p>You agree to indemnify and hold harmless Azul Integrity Accounting Services LLC and its representatives from any claims, losses, or damages arising from your use of the Site or your violation of these Terms.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>14. Data Collection and Privacy</h2>
              <p>Our Privacy Policy describes how we collect, use, and disclose personal information. By using the Site, you consent to our data practices as described in that policy.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>15. Governing Law; Dispute Resolution</h2>
              <p>These Terms are governed by the laws of the State of Florida, without regard to conflict-of-law principles.</p>
              <p>You agree that any dispute shall first be subject to good-faith negotiation. If unresolved, it shall be submitted to binding arbitration in Duval County, Florida, under the rules of the American Arbitration Association. Judgment on the arbitration award may be entered in any court of competent jurisdiction.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>16. Termination</h2>
              <p>We reserve the right to suspend or terminate your access to the Site at any time, without notice, if we believe you have violated these Terms or engaged in conduct harmful to other users or our business.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>17. Changes to Terms</h2>
              <p>We may modify these Terms at any time by posting the updated version on the Site. The &ldquo;Effective Date&rdquo; above reflects the latest revision. Your continued use after any changes constitutes acceptance of the revised Terms.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>18. Accessibility</h2>
              <p>We are committed to making our Site accessible to all users. If you encounter any accessibility barriers, please contact us at azulintegrity@gmail.com for assistance.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>19. Severability and Waiver</h2>
              <p>If any provision of these Terms is found invalid or unenforceable, the remaining provisions shall continue in full force and effect. Our failure to enforce any provision shall not constitute a waiver of that provision or any other.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>20. Entire Agreement</h2>
              <p>These Terms, together with our Privacy Policy and any applicable engagement agreements, constitute the entire agreement between you and Azul Integrity Accounting Services LLC regarding your use of the Site.</p>
            </div>

            <div className={styles.termsSection}>
              <h2>21. Contact Information</h2>
              <p>Questions about these Terms or the Site may be directed to:</p>
              <div className={styles.contactInfo}>
                <p><Image 
                  src="/emailblue.png" 
                  alt="Email" 
                  className={styles.contactIcon} 
                  width={20} 
                  height={20}
                  loading="lazy"
                  sizes="20px"
                /> <a href="mailto:azulintegrity@gmail.com">azulintegrity@gmail.com</a></p>
                <p><Image 
                  src="/phoneblue.png" 
                  alt="Phone" 
                  className={styles.contactIcon} 
                  width={20} 
                  height={20}
                  loading="lazy"
                  sizes="20px"
                /> <a href="tel:+19044764732">(904) 476-4732</a></p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}