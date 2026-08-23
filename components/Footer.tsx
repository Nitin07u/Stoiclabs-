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
              <a href="https://www.linkedin.com/in/nitin07u/" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2"/></svg>
              </a>
              <a href="https://www.instagram.com/nitin_07u/" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://wa.me/qr/RXQXLNZ5UY5UA1" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.075-2.072-.496-1.503-.623-2.457-2.146-2.531-2.247-.074-.101-.605-.806-.605-1.537 0-.73.383-1.09.519-1.238.136-.148.297-.186.396-.186.099 0 .198.001.284.005.091.004.213-.035.333.253.124.298.423 1.03.46 1.104.037.075.062.162.012.26-.049.099-.074.161-.148.247-.074.086-.156.192-.223.258-.074.074-.151.155-.065.303.086.148.384.633.824 1.025.567.505 1.045.662 1.194.736.148.074.235.062.321-.037.086-.099.371-.433.47-.581.099-.148.198-.124.334-.074.136.049.864.408 1.013.482.148.074.247.111.284.173.037.062.037.359-.107.764zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.402A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
              </a>
              <a href="#" className="footer__social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
              <li><a href="tel:+919810656348" className="footer__col-link">+91 9810656348</a></li>
              <li><a href="mailto:hello@stoiclabs.dev" className="footer__col-link">hello@stoiclabs.dev</a></li>
              <li><a href="#" className="footer__col-link">New Delhi, Delhi</a></li>
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
