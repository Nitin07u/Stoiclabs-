import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Solutions & Services — Stoiclabs",
  description: "Enterprise software development, full-stack web applications, AI automation, and scalable digital architecture.",
};

export default function SolutionPage() {
  return (
    <>

  <section className="hero section fade-in">
    <div className="container">
      <div className="hero__inner" style={{ minHeight: "50vh", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "center", paddingTop: "40px" }}>
        <div className="hero__content" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 className="hero__title">Strategic Digital<br />Solutions That Scale.</h1>
          <p className="hero__text" style={{ maxWidth: "600px", margin: "0 auto 32px auto" }}>We don't just build websites. We architect complete digital ecosystems that drive growth, efficiency, and competitive advantage.</p>
          <div className="hero__actions flex-center">
            <a href="/contact" className="btn btn--primary">
              Start Your Project 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/case-study" className="btn btn--text">View Case Studies</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="section fade-in">
    <div className="container">
      <h2 className="heading-lg text-center mb-6">What We Do</h2>
      <div className="grid grid--3 grid--gap-md">
        <div className="card card--bordered card--hover">
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(153, 207, 99, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>
          <h3 style={{ fontWeight: "var(--fw-bold)", fontSize: "20px", marginBottom: "12px" }}>Web Design & Development</h3>
          <p className="text-gray text-sm mb-4">Custom websites built for performance, conversion, and scale.</p>
          <a href="#" style={{ color: "var(--color-black)", textDecoration: "none", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-sm)", display: "flex", alignItems: "center", gap: "4px" }}>Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
        </div>
        <div className="card card--bordered card--hover">
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(153, 207, 99, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
          </div>
          <h3 style={{ fontWeight: "var(--fw-bold)", fontSize: "20px", marginBottom: "12px" }}>Mobile Applications</h3>
          <p className="text-gray text-sm mb-4">Native and cross-platform apps that users love.</p>
          <a href="#" style={{ color: "var(--color-black)", textDecoration: "none", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-sm)", display: "flex", alignItems: "center", gap: "4px" }}>Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
        </div>
        <div className="card card--bordered card--hover">
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(153, 207, 99, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 2a10 10 0 0 1 10 10h-10V2z"></path></svg>
          </div>
          <h3 style={{ fontWeight: "var(--fw-bold)", fontSize: "20px", marginBottom: "12px" }}>AI & ML Solutions</h3>
          <p className="text-gray text-sm mb-4">Intelligent automation and data-driven decision making.</p>
          <a href="#" style={{ color: "var(--color-black)", textDecoration: "none", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-sm)", display: "flex", alignItems: "center", gap: "4px" }}>Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
        </div>
        <div className="card card--bordered card--hover">
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(153, 207, 99, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          </div>
          <h3 style={{ fontWeight: "var(--fw-bold)", fontSize: "20px", marginBottom: "12px" }}>Blockchain Development</h3>
          <p className="text-gray text-sm mb-4">Decentralized solutions for trust and transparency.</p>
          <a href="#" style={{ color: "var(--color-black)", textDecoration: "none", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-sm)", display: "flex", alignItems: "center", gap: "4px" }}>Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
        </div>
        <div className="card card--bordered card--hover">
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(153, 207, 99, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <h3 style={{ fontWeight: "var(--fw-bold)", fontSize: "20px", marginBottom: "12px" }}>Digital Strategy</h3>
          <p className="text-gray text-sm mb-4">Comprehensive roadmaps for digital transformation.</p>
          <a href="#" style={{ color: "var(--color-black)", textDecoration: "none", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-sm)", display: "flex", alignItems: "center", gap: "4px" }}>Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
        </div>
        <div className="card card--bordered card--hover">
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(153, 207, 99, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="6.5"></line></svg>
          </div>
          <h3 style={{ fontWeight: "var(--fw-bold)", fontSize: "20px", marginBottom: "12px" }}>Brand Identity</h3>
          <p className="text-gray text-sm mb-4">Visual systems that communicate your value instantly.</p>
          <a href="#" style={{ color: "var(--color-black)", textDecoration: "none", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-sm)", display: "flex", alignItems: "center", gap: "4px" }}>Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="section section--dark fade-in" style={{ margin: "0 var(--space-2)", borderRadius: "var(--radius-xl)" }}>
    <div className="container">
      <h2 className="heading-lg text-center mb-6 text-white">Our Proven Process</h2>
      <div style={{ display: "flex", gap: "24px", position: "relative" }}>
        
        <div style={{ position: "absolute", top: "24px", left: "40px", right: "40px", height: "2px", borderTop: "2px dashed rgba(255,255,255,0.2)", zIndex: "1" }}></div>
        
        <div style={{ flex: "1", position: "relative", zIndex: "2" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--color-accent)", color: "var(--color-black)", fontWeight: "var(--fw-bold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>1</div>
          <h3 className="text-xl mb-2 text-white" style={{ fontWeight: "var(--fw-bold)" }}>Discover</h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Deep dive into your business, market, and objectives.</p>
        </div>
        <div style={{ flex: "1", position: "relative", zIndex: "2" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--color-black)", border: "2px solid var(--color-accent)", color: "var(--color-white)", fontWeight: "var(--fw-bold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>2</div>
          <h3 className="text-xl mb-2 text-white" style={{ fontWeight: "var(--fw-bold)" }}>Design</h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Create strategic blueprints and visual prototypes.</p>
        </div>
        <div style={{ flex: "1", position: "relative", zIndex: "2" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--color-black)", border: "2px solid var(--color-accent)", color: "var(--color-white)", fontWeight: "var(--fw-bold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>3</div>
          <h3 className="text-xl mb-2 text-white" style={{ fontWeight: "var(--fw-bold)" }}>Develop</h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Build with modern tech stacks and best practices.</p>
        </div>
        <div style={{ flex: "1", position: "relative", zIndex: "2" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--color-black)", border: "2px solid var(--color-accent)", color: "var(--color-white)", fontWeight: "var(--fw-bold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>4</div>
          <h3 className="text-xl mb-2 text-white" style={{ fontWeight: "var(--fw-bold)" }}>Deploy & Scale</h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Launch, monitor, optimize, and grow.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="section fade-in">
    <div className="container">
      <h2 className="heading-lg text-center mb-6">Technologies We Use</h2>
      <div className="grid grid--2 grid--gap-md" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="card card--bordered">
          <h3 className="text-lg mb-4" style={{ fontWeight: "var(--fw-bold)" }}>Frontend</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>React</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>Next.js</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>Vue</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>Angular</span>
          </div>
        </div>
        <div className="card card--bordered">
          <h3 className="text-lg mb-4" style={{ fontWeight: "var(--fw-bold)" }}>Backend</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>Node.js</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>Python</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>Go</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>Rust</span>
          </div>
        </div>
        <div className="card card--bordered">
          <h3 className="text-lg mb-4" style={{ fontWeight: "var(--fw-bold)" }}>Cloud</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>AWS</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>GCP</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>Azure</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>Vercel</span>
          </div>
        </div>
        <div className="card card--bordered">
          <h3 className="text-lg mb-4" style={{ fontWeight: "var(--fw-bold)" }}>Data</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>PostgreSQL</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>MongoDB</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>Redis</span>
            <span style={{ padding: "6px 16px", borderRadius: "999px", background: "var(--color-gray-100)", fontSize: "var(--fs-sm)" }}>GraphQL</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="section fade-in">
    <div className="container">
      <h2 className="heading-lg text-center mb-6">Featured Work</h2>
      <div className="grid grid--2 grid--gap-md">
        <div className="cs-card">
          <div className="cs-card__image" style={{ background: "var(--color-gray-200)", aspectRatio: "16/9", marginBottom: "16px" }}></div>
          <div className="cs-card__meta mb-1 text-accent" style={{ fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-xs)" }}>E-Commerce Platform</div>
          <h3 className="text-xl" style={{ fontWeight: "var(--fw-bold)" }}>Increased revenue by 340% through complete digital transformation</h3>
        </div>
        <div className="cs-card">
          <div className="cs-card__image" style={{ background: "var(--color-gray-200)", aspectRatio: "16/9", marginBottom: "16px" }}></div>
          <div className="cs-card__meta mb-1 text-accent" style={{ fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-xs)" }}>FinTech Dashboard</div>
          <h3 className="text-xl" style={{ fontWeight: "var(--fw-bold)" }}>Reduced processing time by 85% with AI-powered automation</h3>
        </div>
      </div>
    </div>
  </section>

  
  <div className="cta-banner fade-in mt-auto" style={{ marginTop: "64px" }}>
    <div className="cta-banner__inner">
      <h2 className="cta-banner__heading">Let's build your solution.</h2>
      <a href="/contact" className="btn btn--white">Get Started →</a>
    </div>
  </div>

    
    </>
  );
}
