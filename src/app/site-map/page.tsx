import Link from "next/link";
import Image from "next/image";
import { Header, Footer, generateMetadata } from "@/components";
import headerStyles from "../page.module.css";
import styles from "./sitemap.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Site Map | Azul Integrity Accounting Services Navigation",
  description: "Complete sitemap for Azul Integrity Accounting Services. Navigate through all our services, pages, and resources for professional accounting help.",
  keywords: ["sitemap", "navigation", "accounting services map", "site structure"],
  canonicalUrl: "/site-map",
  noIndex: true,
});

export default function SitemapPage() {
  return (
    <div className={headerStyles.page}>
      <Header>
        <nav className={headerStyles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
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
      </Header>
      <main className={styles.main} id="main-content">
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Site Map</h1>
            <p className={styles.description}>
              Navigate through all pages and sections of Azul Integrity CPA
            </p>

            <div className={styles.sitemapGrid}>
              {/* Main Pages */}
              <div className={styles.sitemapSection}>
                <h2 className={styles.sectionTitle}>Main Pages</h2>
                <ul className={styles.linkList}>
                  <li>
                    <Link href="/" className={styles.link}>
                      🏠 Home
                    </Link>
                    <span className={styles.linkDescription}>Four Pillars of service and company overview</span>
                  </li>
                  <li>
                    <Link href="/services" className={styles.link}>
                      💼 Services
                    </Link>
                    <span className={styles.linkDescription}>Detailed breakdown of all our professional services</span>
                  </li>
                  <li>
                    <Link href="/contact" className={styles.link}>
                      📞 Contact
                    </Link>
                    <span className={styles.linkDescription}>Get in touch and learn about our team</span>
                  </li>
                </ul>
              </div>

              {/* Services Breakdown */}
              <div className={styles.sitemapSection}>
                <h2 className={styles.sectionTitle}>Our Services</h2>
                <ul className={styles.linkList}>
                  <li>
                    <Link href="/services#bookkeeping" className={styles.link}>
                      🧾 Bookkeeping Services
                    </Link>
                    <span className={styles.linkDescription}>Accurate record-keeping and financial management</span>
                  </li>
                  <li>
                    <Link href="/services#accounting" className={styles.link}>
                      📊 Accounting Services
                    </Link>
                    <span className={styles.linkDescription}>Strategic financial analysis and consulting</span>
                  </li>
                  <li>
                    <Link href="/services#payroll" className={styles.link}>
                      💰 Payroll Services
                    </Link>
                    <span className={styles.linkDescription}>Complete payroll processing and compliance</span>
                  </li>
                  <li>
                    <Link href="/services#taxes" className={styles.link}>
                      📋 Tax Services
                    </Link>
                    <span className={styles.linkDescription}>Tax preparation and planning services</span>
                  </li>
                  <li>
                    <Link href="/services#additional" className={styles.link}>
                      🔧 Additional Support
                    </Link>
                    <span className={styles.linkDescription}>Technology setup and specialized consulting</span>
                  </li>
                </ul>
              </div>

              {/* Legal & Information */}
              <div className={styles.sitemapSection}>
                <h2 className={styles.sectionTitle}>Legal & Information</h2>
                <ul className={styles.linkList}>
                  <li>
                    <Link href="/privacy" className={styles.link}>
                      🔒 Privacy Policy
                    </Link>
                    <span className={styles.linkDescription}>How we protect and handle your information</span>
                  </li>
                  <li>
                    <Link href="/terms" className={styles.link}>
                      📄 Terms of Service
                    </Link>
                    <span className={styles.linkDescription}>Terms and conditions for our services</span>
                  </li>
                  <li>
                    <Link href="/site-map" className={styles.link}>
                      🗺️ Site Map
                    </Link>
                    <span className={styles.linkDescription}>This page - complete site navigation</span>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className={styles.sitemapSection}>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <Image src="/emailblue.png" alt="Email" width={20} height={20} />
                    <a href="mailto:azulintegritycpa@gmail.com" className={styles.contactLink}>
                      azulintegritycpa@gmail.com
                    </a>
                  </div>
                  <div className={styles.contactItem}>
                    <Image src="/phoneblue.png" alt="Phone" width={20} height={20} />
                    <a href="tel:+19044764732" className={styles.contactLink}>
                      (904) 476-4732
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className={styles.additionalInfo}>
              <h3 className={styles.infoTitle}>About This Site</h3>
              <p className={styles.infoText}>
                Azul Integrity Accounting Services provide comprehensive financial services for small to medium businesses. 
                We specialize in bookkeeping, accounting, payroll, tax services, and business consulting. 
                A commitment to delivering accurate, timely, and strategic 
                financial solutions tailored to your business needs is the foundation of our services.
              </p>
              <p className={styles.infoText}>
                <strong>Certifications & Software:</strong> We are certified in industry-leading software 
                including Intuit ProConnect, QuickBooks ProAdvisor, Xero, and IRS e-file systems to 
                ensure the highest quality of service delivery.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}