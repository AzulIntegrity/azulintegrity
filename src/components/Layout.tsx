"use client";
import React, { useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
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

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
}

export function Footer({  className = '' }: FooterProps) {
  const [year, setYear] = useState("");
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);
  return (
     <footer className={`footer ${className}`}>
      <div className="footer-container">
        <div className="footerGrid">
          <div className="footerCol">
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footerCol">
            <h4>Contact</h4>
            <span> <Image 
              src="/emailIcon.webp" 
              alt="Email Azul Integrity CPA - azulintegritycpa@gmail.com" 
              className="contactIcon" 
              width={20} 
              height={20}
              loading="lazy"
              sizes="20px"
            /> <Link href="mailto:azulintegritycpa@gmail.com">azulintegritycpa@gmail.com</Link></span>
            <span> <Image 
              src="/phoneIcon.webp" 
              alt="Call Azul Integrity CPA - (904) 476-4732" 
              className="contactIcon" 
              width={20} 
              height={20}
              loading="lazy"
              sizes="20px"
            /> <Link href="tel:+119044764732">(904) 476-4732</Link></span>
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
          &copy; {year} Azul Integrity Accounting Services. All rights reserved.
          <br />
          <span style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '0.5rem', display: 'inline-block' }}>
            Crafted by <a href="https://scarletcodes.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--light-blue)', textDecoration: 'none' }}>Scarlet Codes</a>
          </span>
        </div>
      </div>
    </footer>
  );
}