import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Work — Stoiclabs",
  description: "Explore how Stoiclabs crafts high-performance digital products, web apps, and enterprise systems that deliver measurable business impact.",
};

export default function CaseStudyPage() {
  return (
    <>

    <section className="work-hero">
      <div className="container">
        <div className="work-hero__inner">
          
          <div className="work-hero__content">
            <h1 className="work-hero__title">Our Work</h1>
            <p className="work-hero__desc">Discover how our forward-thinking digital Solution, design, and development strategies have driven measurable success for industry leaders worldwide.</p>
            <a href="/contact" className="work-hero__cta">
              <span>Start a Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          
          <div className="work-stats-grid">
            <div className="work-stats-grid__top">
              
              <div className="work-stat-card work-stat-card--dark">
                <div className="work-stat-card__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <div>
                  <div className="work-stat-card__num">98%</div>
                  <div className="work-stat-card__label">Client Satisfaction</div>
                </div>
              </div>

              
              <div className="work-stat-card work-stat-card--dark">
                <div className="work-stat-card__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="work-stat-card__num">250+</div>
                  <div className="work-stat-card__label">Projects Completed</div>
                </div>
              </div>
            </div>

            
            <div className="work-stat-card work-stat-card--gray">
              <div className="work-stat-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <div>
                <div className="work-stat-card__num">M+</div>
                <div className="work-stat-card__label">Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="work-intro">
      <div className="container">
        <h2 className="work-intro__title">Real-world examples of how we<br />have helped companies achieve<br />their objectives.</h2>
      </div>
    </section>

    
    <section className="work-projects">
      <div className="container">
        
        <div className="work-projects__row--large">
          
          <article className="work-card work-card--light">
            <div className="work-card__media work-card__media--large">
              <div className="work-card__tags">
                <span className="work-tag work-tag--light">Healthcare</span>
                <span className="work-tag work-tag--light">Web Design</span>
              </div>
            </div>
            <div className="work-card__body">
              <div>
                <h3 className="work-card__title">MedTech Health Portal</h3>
                <p className="work-card__desc">Revitalizing patient engagement through a streamlined, accessible healthcare portal, increasing appointments by 45%.</p>
              </div>
              <div className="work-card__icons">
                <span className="work-tech-icon" title="Code / Web Development">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </span>
                <span className="work-tech-icon" title="Cloud Infrastructure">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </article>

          
          <article className="work-card work-card--dark">
            <div className="work-card__media work-card__media--large">
              <div className="work-card__tags">
                <span className="work-tag work-tag--dark">Web3</span>
                <span className="work-tag work-tag--dark">DApp</span>
              </div>
            </div>
            <div className="work-card__body">
              <div>
                <h3 className="work-card__title">Aura Blockchain Protocol</h3>
                <p className="work-card__desc">Designing a secure, intuitive decentralized application that simplified token staking and yielded M in TVL in 30 days.</p>
              </div>
              <div className="work-card__icons">
                <span className="work-tech-icon" title="Blockchain Protocol">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </span>
                <span className="work-tech-icon" title="Smart Contract Code">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </div>

        
        <div className="work-projects__row--small">
          
          <article className="work-card work-card--light">
            <div className="work-card__media work-card__media--small"></div>
            <div className="work-card__body work-card__body--small">
              <div>
                <h3 className="work-card__title work-card__title--small">Global Finance Corp</h3>
                <p className="work-card__desc">Complete digital transformation for a legacy financial institution.</p>
              </div>
              <div className="work-card__icons">
                <span className="work-tech-icon" title="Enterprise Systems">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </article>

          
          <article className="work-card work-card--light">
            <div className="work-card__media work-card__media--small"></div>
            <div className="work-card__body work-card__body--small">
              <div>
                <h3 className="work-card__title work-card__title--small">Agency OS in Notion</h3>
                <p className="work-card__desc">Architecting a scalable operating system to manage 50+ concurrent projects.</p>
              </div>
              <div className="work-card__icons">
                <span className="work-tech-icon" title="Workspace & OS Architecture">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </span>
              </div>
            </div>
          </article>

          
          <article className="work-card work-card--dark">
            <div className="work-card__media work-card__media--small work-card__media--dark-tint"></div>
            <div className="work-card__body work-card__body--small">
              <div>
                <h3 className="work-card__title work-card__title--small">MetricFlow SaaS</h3>
                <p className="work-card__desc">Redesigning core analytics dashboards to reduce user churn by 22%.</p>
              </div>
              <div className="work-card__icons">
                <span className="work-tech-icon" title="Analytics & Metrics">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    
    <section className="work-testimonial">
      <div className="container">
        <div className="work-testimonial__inner">
          <div className="work-testimonial__quote-mark" aria-hidden="true">&ldquo;</div>
          <blockquote className="work-testimonial__quote">
            "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition."
          </blockquote>
          <div className="work-testimonial__author">
            <img src="/assets/michael-kaizer.png" alt="Michael Kaizer" className="work-testimonial__avatar" />
            <div>
              <div className="work-testimonial__name">Michael Kaizer</div>
              <div className="work-testimonial__role">CEO of Basecamp Corp</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="agency-cta-section">
      <div className="container">
        <div className="agency-cta-banner">
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
