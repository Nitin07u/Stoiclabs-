import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Problem We Solve — Stoiclabs",
  description: "Why traditional agencies fail and how Stoiclabs provides high-velocity, high-conviction engineering partnerships.",
};

export default function ProblemPage() {
  return (
    <>

  <section className="hero section fade-in">
    <div className="container">
      <div className="hero__inner" style={{ minHeight: "50vh", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "center", paddingTop: "40px" }}>
        <div className="hero__content" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 className="hero__title">The Digital Gap Is<br />Costing You Growth.</h1>
          <p className="hero__text" style={{ maxWidth: "600px", margin: "0 auto 32px auto" }}>Most businesses struggle with outdated digital infrastructure, fragmented tools, and strategies that don't scale. The cost of inaction compounds daily.</p>
          <div className="hero__actions flex-center">
            <a href="/solution" className="btn btn--primary">
              See Our Solution 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="section section--dark fade-in" style={{ margin: "0 var(--space-2)", borderRadius: "var(--radius-xl)" }}>
    <div className="container">
      <div className="grid grid--3 grid--gap-lg text-center">
        <div>
          <h3 className="heading-xl text-accent mb-2">73%</h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>of businesses fail to achieve digital transformation goals</p>
        </div>
        <div>
          <h3 className="heading-xl text-accent mb-2">$4.2M</h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>average annual cost of digital inefficiency per enterprise</p>
        </div>
        <div>
          <h3 className="heading-xl text-accent mb-2">68%</h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>of customers leave due to poor digital experiences</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="section fade-in">
    <div className="container">
      <h2 className="heading-lg text-center mb-6">Core Problems</h2>
      <div className="grid grid--2 grid--gap-md">
        <div className="card card--bordered">
          <div className="text-accent heading-md mb-2">01</div>
          <h3 className="text-xl mb-2" style={{ fontWeight: "var(--fw-bold)" }}>Fragmented Digital Presence</h3>
          <p className="text-gray text-sm">Your website, apps, and digital touchpoints don't work together, creating a disjointed customer experience.</p>
        </div>
        <div className="card card--bordered">
          <div className="text-accent heading-md mb-2">02</div>
          <h3 className="text-xl mb-2" style={{ fontWeight: "var(--fw-bold)" }}>Outdated Technology Stack</h3>
          <p className="text-gray text-sm">Legacy systems slow innovation and create security vulnerabilities that put your business at risk.</p>
        </div>
        <div className="card card--bordered">
          <div className="text-accent heading-md mb-2">03</div>
          <h3 className="text-xl mb-2" style={{ fontWeight: "var(--fw-bold)" }}>No Scalable Strategy</h3>
          <p className="text-gray text-sm">Growth hits a ceiling when your digital infrastructure can't scale with demand.</p>
        </div>
        <div className="card card--bordered">
          <div className="text-accent heading-md mb-2">04</div>
          <h3 className="text-xl mb-2" style={{ fontWeight: "var(--fw-bold)" }}>Poor Conversion Rates</h3>
          <p className="text-gray text-sm">Traffic without conversion is wasted investment. Most businesses leave 60-80% of potential revenue on the table.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="section section--gray fade-in">
    <div className="container text-center">
      <h2 className="heading-lg mb-6">Every Day Without a Digital Strategy<br />Is a Day of Lost Revenue</h2>
      <div className="card card--dark" style={{ maxWidth: "800px", margin: "0 auto 32px auto", padding: "48px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "24px", height: "200px" }}>
          
          <div style={{ width: "60px", height: "100%", background: "#E8E8E8", borderRadius: "8px 8px 0 0" }}></div>
          <div style={{ width: "60px", height: "75%", background: "#C6C6C6", borderRadius: "8px 8px 0 0" }}></div>
          <div style={{ width: "60px", height: "50%", background: "#878C91", borderRadius: "8px 8px 0 0" }}></div>
          <div style={{ width: "60px", height: "25%", background: "#e74c3c", borderRadius: "8px 8px 0 0" }}></div>
        </div>
      </div>
      <div className="grid grid--3 grid--gap-sm" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="card card--bordered text-center">
          <p className="text-base" style={{ fontWeight: "var(--fw-bold)" }}>47% lower engagement</p>
        </div>
        <div className="card card--bordered text-center">
          <p className="text-base" style={{ fontWeight: "var(--fw-bold)" }}>3x higher churn</p>
        </div>
        <div className="card card--bordered text-center">
          <p className="text-base" style={{ fontWeight: "var(--fw-bold)" }}>2.5x slower growth</p>
        </div>
      </div>
    </div>
  </section>

  
  <div className="cta-banner fade-in mt-auto" style={{ marginTop: "64px" }}>
    <div className="cta-banner__inner">
      <h2 className="cta-banner__heading">There is a better way.</h2>
      <a href="/solution" className="btn btn--white">Explore Solutions →</a>
    </div>
  </div>

    
    </>
  );
}
