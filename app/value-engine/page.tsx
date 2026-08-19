import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Value Engine & Framework — Stoiclabs",
  description: "Our proprietary value engine framework for building high-leverage digital systems and software architectures.",
};

export default function ValueEnginePage() {
  return (
    <>

    <section className="agency-hero">
      <div className="container">
        <div className="agency-hero__grid">
          
          <div className="agency-hero__left">
            <h1 className="agency-hero__title">Our Network of<br />Experts</h1>
            <p className="agency-hero__desc">Discover a premium marketplace of trusted specialists. We curate the top agencies across digital Solution, development, and design to ensure your next project is executed with precision and innovation.</p>
            <div className="agency-hero__actions">
              <a href="#partner" className="btn-agency-primary">
                <span>Become a Partner</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#agencies" className="btn-agency-secondary">Explore Agencies</a>
            </div>
          </div>

          
          <div className="agency-hero__right">
            <div className="agency-hero__placeholder"></div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="agency-filters-section" id="agencies">
      <div className="container">
        <div className="agency-filters" role="tablist">
          <button className="agency-filter-pill agency-filter-pill--active" data-filter="all">All Agencies</button>
          <button className="agency-filter-pill" data-filter="solution">Digital Solution</button>
          <button className="agency-filter-pill" data-filter="seo">SEO & Content</button>
          <button className="agency-filter-pill" data-filter="uiux">UI/UX Design</button>
          <button className="agency-filter-pill" data-filter="development">Web Development</button>
          <button className="agency-filter-pill" data-filter="blockchain">Blockchain</button>
        </div>
      </div>
    </section>

    
    <section className="featured-partners-section">
      <div className="container">
        <div className="featured-partners__header">
          <h2 className="featured-partners__title">Featured Partners</h2>
          <a href="#all" className="featured-partners__view-all">
            <span>View all</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
        <div className="featured-partners__divider"></div>

        <div className="featured-partners__grid">
          
          
          <article className="partner-card partner-card--dark" data-category="seo solution">
            <div className="partner-card__bg-overlay"></div>
            
            <div className="partner-card__top">
              <div className="partner-card__icon-box partner-card__icon-box--white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#010205" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div className="partner-card__rating">
                <span className="partner-card__star">★</span>
                <span>4.9</span>
              </div>
            </div>

            <div className="partner-card__body">
              <span className="partner-card__category">GLOBAL REACH</span>
              <h3 className="partner-card__title">Nexus Digital Group</h3>
              <p className="partner-card__desc">Enterprise-grade SEO and holistic digital Solution strategies for Fortune 500 companies.</p>
            </div>

            <div className="partner-card__stats">
              <div className="partner-card__stat">
                <span className="partner-card__stat-val">10+</span>
                <span className="partner-card__stat-label">Years Exp.</span>
              </div>
              <div className="partner-card__stat">
                <span className="partner-card__stat-val">24</span>
                <span className="partner-card__stat-label">Countries Served</span>
              </div>
            </div>
          </article>

          
          <article className="partner-card partner-card--light" data-category="uiux">
            <div className="partner-card__bg-geometric"></div>

            <div className="partner-card__top">
              <div className="partner-card__icon-box partner-card__icon-box--black">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="partner-card__rating partner-card__rating--light">
                <span className="partner-card__star">★</span>
                <span>4.8</span>
              </div>
            </div>

            <div className="partner-card__body">
              <span className="partner-card__category partner-card__category--dark">UI/UX INNOVATION</span>
              <h3 className="partner-card__title partner-card__title--dark">Studio Vant</h3>
              <p className="partner-card__desc partner-card__desc--dark">Award-winning product design agency focusing on conversion-optimized user experiences and modern interfaces.</p>
            </div>

            <div className="partner-card__stats">
              <div className="partner-card__stat">
                <span className="partner-card__stat-val partner-card__stat-val--dark">85%</span>
                <span className="partner-card__stat-label partner-card__stat-label--dark">Avg. Conversion Lift</span>
              </div>
              <div className="partner-card__stat">
                <span className="partner-card__stat-val partner-card__stat-val--dark">Fintech</span>
                <span className="partner-card__stat-label partner-card__stat-label--dark">Primary Industry</span>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    
    <section className="why-choose-section">
      <div className="container">
        <div className="why-choose-card">
          
          <div className="why-choose__left">
            <h2 className="why-choose__title">Why choose a<br />networked agency?</h2>
            <p className="why-choose__desc">Stop managing multiple vendors. StoicLabs provides a single point of contact while giving you access to a specialized, pre-vetted network of top-tier agencies.</p>

            <div className="why-choose__benefits">
              <div className="benefit-row">
                <div className="benefit-row__check">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#010205" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="benefit-row__text">
                  <h4 className="benefit-row__title">Unified Strategy</h4>
                  <p className="benefit-row__desc">One cohesive plan executed by experts in every discipline.</p>
                </div>
              </div>

              <div className="benefit-row">
                <div className="benefit-row__check">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#010205" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="benefit-row__text">
                  <h4 className="benefit-row__title">Pre-Vetted Quality</h4>
                  <p className="benefit-row__desc">Only the top 1% of agencies make it into our partner network.</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="why-choose__right">
            <div className="growth-card">
              <div className="growth-card__glow"></div>
              <h3 className="growth-card__title">Consolidated Growth</h3>

              <div className="growth-card__rows">
                <div className="growth-card__row">
                  <span className="growth-card__label">Project Management</span>
                  <span className="growth-card__arrow">→</span>
                  <span className="growth-pill growth-pill--green">StoicLabs</span>
                </div>

                <div className="growth-card__row">
                  <span className="growth-card__label">Specialized Execution</span>
                  <span className="growth-card__arrow">→</span>
                  <span className="growth-pill growth-pill--gray">Partner Net</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="agency-cta-section">
      <div className="container">
        <div className="agency-cta-banner">
          <div className="agency-cta-banner__glow"></div>
          <h2 className="agency-cta-banner__title">Ready to work with us ?</h2>
          <a href="/contact" className="agency-cta-banner__btn">
            <span>Get Started</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
