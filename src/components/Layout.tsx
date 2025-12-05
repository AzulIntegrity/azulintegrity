"use client";
import React, { useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import headerStyles from "./header.module.css";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function Header({ children, className = '' }: HeaderProps) {
  return (
    <header className={`header ${className}`}>
      <div className="nav-container">
        {children}
      </div>
    </header>
  );
}

// Export header styles for use in page components
export { headerStyles };

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
  footerData?: {
    contact: {
      email: string;
      phone: string;
    };
  };
}

export function Footer({ className = '', footerData }: FooterProps) {
  const [year, setYear] = useState("2024");
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);
  
  // Use CMS data if available, otherwise fallback to defaults
  const email = footerData?.contact?.email || "azulintegritycpa@gmail.com";
  const phone = footerData?.contact?.phone || "(904) 476-4732";
  
  return (
     <footer className={`footer ${className}`}>
      <div className="footer-container">
        <div className="footerGrid">
          <div className="footerCol">
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footerCol">
            <h4>Contact</h4>
            <span> <Image 
              src="/emailIcon.webp" 
              alt={`Email Azul Integrity CPA - ${email}`}
              className="contactIcon" 
              width={20} 
              height={20}
              loading="lazy"
              sizes="20px"
            /> <Link href={`mailto:${email}`}>{email}</Link></span>
            <span> <Image 
              src="/phoneIcon.webp" 
              alt={`Call Azul Integrity CPA - ${phone}`}
              className="contactIcon" 
              width={20} 
              height={20}
              loading="lazy"
              sizes="20px"
            /> <Link href={`tel:+1${phone.replace(/[^\d]/g, '')}`}>{phone}</Link></span>
            <div className="footerSocial">
              <Link href="https://www.linkedin.com/company/azul-integrity-accounting-services/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/linkedInIcon.png" 
                  alt="Follow Azul Integrity CPA on LinkedIn" 
                  className="socialIcon" 
                  width={20} 
                  height={20}
                  loading="lazy"
                  sizes="20px"
                />
              </Link>
              <Link href="https://www.facebook.com/people/Azul-Integrity-Accounting-Services-LLC/61581436237919/#" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/facebookIcon.png" 
                  alt="Like Azul Integrity CPA on Facebook" 
                  className="socialIcon" 
                  width={20} 
                  height={20}
                  loading="lazy"
                  sizes="20px"
                />
              </Link>
            </div>
          </div>
          <div className="footerCol">
            <h4>Legal Pages</h4>
            <Link href="/terms">Terms and Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/site-map">Site Map</Link>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; <span suppressHydrationWarning>{year}</span> Azul Integrity Accounting Services. All rights reserved.
          <br />
          <span style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '0.5rem', display: 'inline-block' }}>
            Crafted by <a href="https://scarletcodes.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--light-blue)', textDecoration: 'none' }}>Scarlet Codes</a>
          </span>
        </div>
      </div>
    </footer>
  );
}