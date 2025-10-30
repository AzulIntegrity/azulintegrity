"use client";
import React, { useState, useEffect} from "react";
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

export function Footer({ children, className = '' }: FooterProps) {
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
            
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footerCol">
            <h4>Contact</h4>
         
            <span> <img src="/emailIcon.png" alt="Email" className="contactIcon" /> <a href="mailto:info@azulintegrity.com">info@azulintegrity.com</a></span>
            <span> <img src="/phoneIcon.png" alt="Phone" className="contactIcon" /> <a href="tel:+119044764732">(904) 476-4732</a></span>
            <div className="footerSocial">
              <a href="https://www.linkedin.com/company/azul-integrity-accounting-services/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedInIcon.png" alt="LinkedIn" className="socialIcon" />
              </a>
              <a href="https://www.facebook.com/people/Azul-Integrity-Accounting-Services-LLC/61581436237919/#" target="_blank" rel="noopener noreferrer">
                <img src="/facebookIcon.png" alt="Facebook" className="socialIcon" />
              </a>
            </div>
          </div>
          <div className="footerCol">
            <h4>Legal Pages</h4>
          
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          
            <a href="/sitemap">Site Map</a>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; {year} Azul Integrity Accounting Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}