'use client';

import React, { useState} from 'react';
import { Header, Footer } from "@/components";
import styles from "./services.module.css";

// Service categories with detailed information
const serviceCategories = [
  {
    key: 'bookkeeping',
    title: 'Bookkeeping',
    content: {
      description: 'We keep your books accurate and audit-ready so you can make faster, smarter decisions.',
      whatWeDo: [
        'Record sales, purchases, payroll, and receipts.',
        'Reconcile bank and credit card accounts monthly.',
        'Manage payables and receivables.',
        'Post depreciation, prepaids, and month‑end journal entries.',
        'Deliver core reports: general ledger, trial balance, balance sheet, and profit & loss.'
      ],
      packages: [
        {
          name: 'Azul Basic',
          description: 'Monthly bookkeeping for very small operations (under 50 transactions/month); ideal for freelancers and micro-businesses.'
        },
        {
          name: 'Azul Core',
          description: 'Monthly bookkeeping for moderate activity (51–200 transactions/month).'
        },
        {
          name: 'Azul Growth',
          description: 'Monthly bookkeeping for multi-channel or expanding operations (251–400 transactions/month).'
        },
        {
          name: 'Azul Scale',
          description: 'High-volume and multi-entity bookkeeping (401+ transactions/month). Additional fee will apply for every 100 transactions above 501.'
        },
        {
          name: 'Integrity Reset',
          description: 'Bookkeeping catch-up and clean-up to bring ledgers and financial reports current.'
        },
        {
          name: 'Integrity Onboarding',
          description: 'Chart of Accounts, bank and credit card setup, invoice & purchase templates, fixed asset tracking, standard financial close reports, and closing checklist.'
        }
      ]
    }
  },
  {
    key: 'accounting',
    title: 'Accounting / CPA Services',
    content: {
      description: 'Professional CPA services to take your financial management to the next level. Only available for clients in Florida and New Mexico.',
      whatWeDo: [
        'Create comprehensive annual budgets with actual-to-budget reporting.',
        'Conduct monthly financial statement reviews and analysis.',
        'Provide strategic recommendations through monthly consultations.',
        'Design custom KPI dashboards and forecasting models.',
        'Perform compilation, review, and attest services.',
        'Implement internal controls and compliance monitoring.'
      ],
      packages: [
        {
          name: 'Integrity Blueprint',
          description: 'Annual budget with actual-to-budget reporting.'
        },
        {
          name: 'Azul Insight',
          description: 'Financial statement review, aged receivables analysis, recommended adjusting entries and a 30-minute monthly strategy session.'
        },
        {
          name: 'Azul Metrics',
          description: 'Choose your need: Custom reporting, KPI dashboards, forecasting, pricing reviews, profitability by product or location or presentation‑ready board decks.'
        },
        {
          name: 'Integrity Attest',
          description: 'Compilation, review, or attest services for Florida and New Mexico clients only.'
        },
        {
          name: 'Integrity Safeguards',
          description: 'Internal control design, monitoring recommendations, and compliance alignment.'
        }
      ]
    }
  },
  {
    key: 'payroll',
    title: 'Payroll',
    content: {
      description: 'Complete payroll solutions from setup to ongoing processing.',
      whatWeDo: [
        'Set up complete payroll systems and employee configurations.',
        'Process payroll runs with direct deposit and tax filings.',
        'Handle all payroll tax deposits and compliance requirements.',
        'Prepare and file year-end 1099 forms for contractors.',
        'Manage employee onboarding and payroll documentation.',
        'Provide full-service payroll lifecycle management.'
      ],
      packages: [
        {
          name: 'Pay Roots Setup',
          description: 'Complete payroll system setup and initial configuration for employees.'
        },
        {
          name: 'Clarity Pay Runs',
          description: 'Ongoing payroll processing; billed per payroll run plus a per‑employee fee. Includes direct deposit and tax filings.'
        },
        {
          name: '1099 Essentials',
          description: 'Year‑end 1099 preparation.'
        },
        {
          name: 'Integrity Payroll Suite',
          description: 'Full service payroll lifecycle. Setup, pay runs, and tax deposits. Receive 10% discount by signing up for the Suite.'
        }
      ]
    }
  },
  {
    key: 'taxes',
    title: 'Small Business Taxes',
    content: {
      description: 'Comprehensive tax preparation and filing services for small businesses.',
      whatWeDo: [
        'Prepare and file entity tax returns (1120, 1065, Schedule C).',
        'Handle quarterly 941 filings and tax compliance.',
        'Manage multi-state tax return preparation and filing.',
        'Complete prior year tax return preparation and amendments.',
        'Organize and document receipts for tax preparation.',
        'File tax extensions and handle IRS correspondence.'
      ],
      packages: [
        {
          name: 'Azul Tax Prep',
          description: 'Entity tax return preparation: 1120, 1065, 990, 941 quarterly, Schedule C, and extension filings.'
        },
        {
          name: 'Integrity State Filings',
          description: 'Per-state return preparation and filing.'
        },
        {
          name: 'Prior Year Rescue',
          description: 'Complete preparation and filing of prior year returns.'
        },
        {
          name: 'Receipt Ready',
          description: 'Organize receipts and documentation for your tax professional.'
        }
      ]
    }
  },
  {
    key: 'additional',
    title: 'Additional Support',
    content: {
      description: 'Specialized services to enhance your financial operations.',
      whatWeDo: [
        'Provide personalized bookkeeping training and workflows.',
        'Create step-by-step procedures and checklists.',
        'Develop custom job aids for recurring financial tasks.',
        'Integrate systems to reduce manual data entry.',
        'Automate financial processes and controls.',
        'Design efficient workflows for your specific business needs.'
      ],
      packages: [
        {
          name: 'Bookkeeper Training Lab',
          description: 'Personalized, hands‑on training to keep books accurate and consistent. Includes custom workflows and one page checklist. Up to 4 hours.'
        },
        {
          name: 'Procedure Playbook',
          description: 'Clear, step‑by‑step procedures, checklists, or one‑page job aids for recurring tasks.'
        },
        {
          name: 'Azul Automate',
          description: 'Systems integration and control automation to reduce manual touchpoints.'
        }
      ]
    }
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].key);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeService = serviceCategories.find(s => s.key === activeTab);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
        <div className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
          <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      </Header>
      
      <main className={styles.main}>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className={styles.headerContent}>
            <h1>Find Your Financial Solution</h1>
            <p>All services include a one-time 15‑minute consultation to find the package that fits your business and get a fast high-level estimate. <br /> Choose standalone services or bundle for a discounted, streamlined experience.<br /> For custom needs not listed, call Azul Integrity Accounting Services for a tailored quote.
</p>
          </div>
        </section>

        {/* Services Section with Tabs */}
        <section className={styles.services}>
          <div className={styles.tabsHeader}>
            {serviceCategories.map((category) => (
              <button
                key={category.key}
                className={`${styles.tabButton} ${activeTab === category.key ? styles.active : ''}`}
                onClick={() => setActiveTab(category.key)}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          {activeService && (
            <div className={styles.serviceDetails}>
              <h2>{activeService.title}</h2>
              <p className={styles.serviceDescription}>{activeService.content.description}</p>
              
              {/* What We Do Section (for Bookkeeping) */}
              {activeService.content.whatWeDo && (
                <div className={styles.whatWeDo}>
                  <h3>What I Do For You: </h3>
                  <ul>
                    {activeService.content.whatWeDo.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Packages Section */}
              {activeService.content.packages && activeService.content.packages.length > 0 && (
                <div className={styles.packages}>
                  <h3>Service Packages</h3>
                  <div className={styles.packageGrid}>
                    {activeService.content.packages.map((pkg, index) => (
                      <div key={index} className={styles.packageCard}>
                        <h4>{pkg.name}</h4>
                        <p>{pkg.description}</p>
                      </div>
                    ))}
                  </div>
                   {activeService.key === 'bookkeeping' && (
    <div className={styles.packageBanner}>
      10% Discount for Annual Contracts with All Packages
    </div>
  )}
                </div>
              )}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Get Started?</h2>
            <p>Call Azul Integrity Accounting Services for a personalized quote or submit your details for a high‑level estimate by clicking the button below.</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCta}>Get Your Free Consultation</button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}