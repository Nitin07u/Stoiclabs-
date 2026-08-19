"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <Link href="/" className="nav__logo" onClick={closeMobileMenu}>
            <img src="/assets/logo.png" alt="Stoiclabs Logo" className="nav__logo-icon" />
            <span>Stoiclabs</span>
          </Link>
          <div className="nav__links">
            <div className="nav__item has-dropdown">
              <Link href="/solution" className={`nav__link ${pathname === "/solution" ? "active" : ""}`}>
                Service
              </Link>
              <svg className="nav__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className="nav__item has-dropdown">
              <Link href="/value-engine" className={`nav__link ${pathname === "/value-engine" ? "active" : ""}`}>
                Agency
              </Link>
              <svg className="nav__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className="nav__item has-dropdown">
              <Link href="/case-study" className={`nav__link ${pathname === "/case-study" || pathname === "/case-studies" || pathname === "/work" ? "active" : ""}`}>
                Case study
              </Link>
              <svg className="nav__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className="nav__item has-dropdown">
              <Link href="/resources" className={`nav__link ${pathname === "/resources" ? "active" : ""}`}>
                Resources
              </Link>
              <svg className="nav__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className="nav__item">
              <Link href="/contact" className={`nav__link ${pathname === "/contact" ? "active" : ""}`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="nav__actions">
            <Link href="/contact" className="nav__cta-btn">
              Get started
            </Link>
            <button className="nav__notify-btn" aria-label="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
            <button
              className={`nav__hamburger ${mobileMenuOpen ? "active" : ""}`}
              aria-label="Toggle navigation menu"
              onClick={toggleMobileMenu}
            >
              <span className="nav__hamburger-line"></span>
              <span className="nav__hamburger-line"></span>
              <span className="nav__hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`} id="mobileMenu">
        <div className="mobile-menu__links">
          <Link href="/" className="mobile-menu__link" onClick={closeMobileMenu}>Home</Link>
          <Link href="/problem" className="mobile-menu__link" onClick={closeMobileMenu}>Problem</Link>
          <Link href="/solution" className="mobile-menu__link" onClick={closeMobileMenu}>Service</Link>
          <Link href="/value-engine" className="mobile-menu__link" onClick={closeMobileMenu}>Agency</Link>
          <Link href="/case-study" className="mobile-menu__link" onClick={closeMobileMenu}>Case study</Link>
          <Link href="/resources" className="mobile-menu__link" onClick={closeMobileMenu}>Resources</Link>
          <Link href="/contact" className="mobile-menu__link" onClick={closeMobileMenu}>Contact</Link>
          <Link href="/cms" className="mobile-menu__link" onClick={closeMobileMenu}>Photo CMS</Link>
        </div>
        <div className="mobile-menu__actions">
          <Link href="/contact" className="btn btn--primary" style={{ justifyContent: "center" }} onClick={closeMobileMenu}>
            Get started &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
