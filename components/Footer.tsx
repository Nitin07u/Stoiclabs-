import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {/* Col 1: Brand & Mission */}
          <div className="footer__brand">
            <Link href="/" className="footer__logo">
              <img src="/assets/logo.png" alt="Stoiclabs Logo" className="footer__logo-icon" />
              <span>Stoiclabs</span>
            </Link>
            <p className="footer__text">
              Stoiclabs delivers high-performance digital solutions, helping modern businesses scale through precision-crafted software and design.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="footer__social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2"/></svg>
              </a>
              <a href="#" className="footer__social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="#" className="footer__social-icon" aria-label="Dribbble">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm6.78 5.72a8.038 8.038 0 0 1 1.22 4.28 9.53 9.53 0 0 0-4.04-.63 15.63 15.63 0 0 0-.8-1.93 8.06 8.06 0 0 1 3.62-1.72zM12 4.02a7.97 7.97 0 0 1 4.79 1.6 9.87 9.87 0 0 0-3.37 1.63 24.27 24.27 0 0 0-2.73-3.2 7.78 7.78 0 0 1 1.31-.03zM8.9 4.77a22.25 22.25 0 0 1 2.66 3.12 13.9 13.9 0 0 0-6.78 2.6 8.02 8.02 0 0 1 4.12-5.72zm-4.9 7.23a8.88 8.88 0 0 1 .32-1.63 12.06 12.06 0 0 1 6.57-2.48c.17.41.33.83.47 1.25a17.26 17.26 0 0 1-5.78 6.42 8.1 8.1 0 0 1-1.58-3.56zm4.6 5.86a15.42 15.42 0 0 0 5.16-5.83 17.44 17.44 0 0 1 1.63 4.8 8.01 8.01 0 0 1-6.79 1.03zm8.39-.77a19.26 19.26 0 0 0-1.46-4.32 7.8 7.8 0 0 1 3.73.54 8.02 8.02 0 0 1-2.27 3.78z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__col-links">
              <li><Link href="/" className="footer__col-link">Home</Link></li>
              <li><Link href="/case-study" className="footer__col-link">Case Study</Link></li>
              <li><Link href="/resources" className="footer__col-link">Resources</Link></li>
              <li><Link href="/contact" className="footer__col-link">Career</Link></li>
            </ul>
          </div>

          {/* Col 3: Licence / Legal */}
          <div className="footer__col">
            <h4 className="footer__col-title">Licence</h4>
            <ul className="footer__col-links">
              <li><a href="#" className="footer__col-link">Privacy Policy</a></li>
              <li><a href="#" className="footer__col-link">Terms of Service</a></li>
              <li><a href="#" className="footer__col-link">Security</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__col-links">
              <li><a href="tel:+15551234567" className="footer__col-link">+1 (555) 123–4567</a></li>
              <li><a href="mailto:hello@stoiclabs.com" className="footer__col-link">hello@stoiclabs.com</a></li>
              <li><a href="#" className="footer__col-link">New York, NY</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <span>&copy; 2024 Stoiclabs. All rights reserved.</span>
          <span>Designed with precision.</span>
        </div>

        {/* Powered by Stoiclabs */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px", paddingBottom: "12px" }}>
          <Link
            href="/"
            style={{
              width: "152px",
              height: "28px",
              background: "#F5F0E8",
              border: "1px solid #2a2a2a",
              borderRadius: "999px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              textDecoration: "none",
              color: "#1a1a1a",
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              boxSizing: "border-box",
              lineHeight: 1,
            }}
          >
            <img
              src="/assets/logo-badge.png"
              alt="Stoiclabs"
              width="14"
              height="14"
              style={{
                width: "14px",
                height: "14px",
                maxWidth: "14px",
                maxHeight: "14px",
                objectFit: "contain",
                display: "block",
                flexShrink: 0,
              }}
            />
            <span style={{ whiteSpace: "nowrap" }}>Powered by Stoiclabs</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
