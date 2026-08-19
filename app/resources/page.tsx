import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Insights — Stoiclabs",
  description: "Technical insights, software engineering guides, and product scaling playbooks from the Stoiclabs team.",
};

export default function ResourcesPage() {
  return (
    <>

    <section className="resources-hero">
      <div className="container">
        <h1 className="resources-hero__title">Learn. Build. Scale.</h1>
        <p className="resources-hero__subtitle">Dive into our curated library of resources. We share actionable insights, industry trends, and technical deep-dives to help your agency thrive in the digital landscape.</p>
      </div>
    </section>

    
    <section className="resources-filters-section">
      <div className="container">
        <div className="resources-filters" role="tablist">
          <button className="res-filter-pill res-filter-pill--active" data-filter="all">All</button>
          <button className="res-filter-pill" data-filter="design">Design</button>
          <button className="res-filter-pill" data-filter="development">Development</button>
          <button className="res-filter-pill" data-filter="solution">Solution</button>
          <button className="res-filter-pill" data-filter="blockchain">Blockchain</button>
        </div>
      </div>
    </section>

    
    <section className="resources-featured-section">
      <div className="container">
        <article className="featured-card" data-category="design">
          
          <div className="featured-card__content">
            <div className="featured-card__top">
              <span className="badge-guide">Guide</span>
              <div className="featured-card__read-time">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>12 min read</span>
              </div>
            </div>

            <h2 className="featured-card__title">The Future of<br />Generative UI in<br />Enterprise<br />Applications</h2>

            <p className="featured-card__description">Explore how AI-driven interfaces are reshaping user experiences, allowing for dynamic, context-aware layouts that adapt in real-time to user intent and data structures.</p>

            <div className="featured-card__footer">
              <div className="featured-card__author">
                <div className="featured-card__avatar"></div>
                <span className="featured-card__author-name">Sarah Jenkins</span>
              </div>
              <button className="featured-card__bookmark" aria-label="Bookmark this article">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            </div>
          </div>

          
          <div className="featured-card__visual">
            <div className="featured-card__visual-placeholder"></div>
          </div>
        </article>
      </div>
    </section>

    
    <section className="resources-grid-section">
      <div className="container">
        <div className="resources-grid">
          
          
          <article className="resource-card" data-category="design">
            <div className="resource-card__image-wrap resource-card__image-wrap--design">
              
              <div className="resource-card__mockup-design">
                <div className="mockup-screen mockup-screen--1">
                  <div className="mockup-bar"></div>
                  <div className="mockup-box"></div>
                </div>
                <div className="mockup-screen mockup-screen--2">
                  <div className="mockup-circle"></div>
                  <div className="mockup-lines"></div>
                </div>
              </div>
            </div>
            <div className="resource-card__body">
              <div className="resource-card__meta">
                <span className="resource-card__category">Design</span>
                <div className="resource-card__time">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>5 min</span>
                </div>
              </div>
              <h3 className="resource-card__title">Mastering Asymmetrical<br />Layouts in 2024</h3>
              <p className="resource-card__desc">Break free from the standard grid and create engaging, unexpected user journeys.</p>
              <div className="resource-card__divider"></div>
              <div className="resource-card__footer">
                <span className="resource-card__author">David Kim</span>
                <button className="resource-card__bookmark" aria-label="Bookmark article">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          
          <article className="resource-card" data-category="development">
            <div className="resource-card__image-wrap resource-card__image-wrap--dev">
              
              <div className="resource-card__dev-visual">
                <div className="resource-card__code-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div className="resource-card__body">
              <div className="resource-card__meta">
                <span className="resource-card__category">Development</span>
                <div className="resource-card__time">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>8 min</span>
                </div>
              </div>
              <h3 className="resource-card__title">Optimizing React<br />Rendering for High-Traffic<br />Sites</h3>
              <p className="resource-card__desc">Advanced techniques to keep your massive applications performant and...</p>
              <div className="resource-card__divider"></div>
              <div className="resource-card__footer">
                <span className="resource-card__author">Elena Rodriguez</span>
                <button className="resource-card__bookmark" aria-label="Bookmark article">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          
          <article className="resource-card" data-category="blockchain">
            <div className="resource-card__image-wrap resource-card__image-wrap--blockchain">
              
              <div className="resource-card__blockchain-visual">
                <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="45" r="8" fill="#71767B" opacity="0.6"/>
                  <circle cx="60" cy="25" r="10" fill="#99CF63"/>
                  <circle cx="90" cy="45" r="8" fill="#71767B" opacity="0.6"/>
                  <circle cx="60" cy="65" r="9" fill="#010205"/>
                  <line x1="30" y1="45" x2="60" y2="25" stroke="#A0A5AA" strokeWidth="1.5" stroke-dasharray="3 3"/>
                  <line x1="60" y1="25" x2="90" y2="45" stroke="#A0A5AA" strokeWidth="1.5" stroke-dasharray="3 3"/>
                  <line x1="30" y1="45" x2="60" y2="65" stroke="#A0A5AA" strokeWidth="1.5" stroke-dasharray="3 3"/>
                  <line x1="60" y1="65" x2="90" y2="45" stroke="#A0A5AA" strokeWidth="1.5" stroke-dasharray="3 3"/>
                </svg>
              </div>
            </div>
            <div className="resource-card__body">
              <div className="resource-card__meta">
                <span className="resource-card__category">Blockchain</span>
                <div className="resource-card__time">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>15 min</span>
                </div>
              </div>
              <h3 className="resource-card__title">Web3 UX Patterns:<br />Bridging the Gap</h3>
              <p className="resource-card__desc">How to design intuitive experiences for decentralized applications without alienating Web2 users.</p>
              <div className="resource-card__divider"></div>
              <div className="resource-card__footer">
                <span className="resource-card__author">Marcus Chen</span>
                <button className="resource-card__bookmark" aria-label="Bookmark article">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    
    <section className="contact-newsletter-section">
      <div className="container">
        <div className="newsletter-banner">
          <div className="newsletter-banner__left">
            <h2 className="newsletter-banner__title">Join the Network</h2>
            <p className="newsletter-banner__text">Get a weekly digest of our best content, curated resources, and agency insights delivered straight to your inbox.</p>
          </div>
          <div className="newsletter-banner__right">
            <form className="newsletter-banner__form" action="#" method="POST">
              <input type="email" className="newsletter-banner__input" placeholder="Enter your email" required />
              <button type="submit" className="newsletter-banner__btn">
                <span>Subscribe</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
