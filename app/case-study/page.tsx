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
          
          <a href="https://curativoclinic.com" target="_blank" rel="noopener noreferrer" className="work-card work-card--light">
            <div className="work-card__media work-card__media--large">
              <img
                src="/assets/curativo-clinic.jpg"
                alt="Curativo Clinic Rehabilitation Platform"
                className="work-card__img"
              />
              <div className="work-card__tags">
                <span className="work-tag work-tag--light">Healthcare</span>
                <span className="work-tag work-tag--light">Web Design</span>
              </div>
            </div>
            <div className="work-card__body">
              <div>
                <h3 className="work-card__title">Curativo Clinic — Excellence in Rehabilitation ↗</h3>
                <p className="work-card__desc">A movement towards pain-free living and faster recovery founded by Dr. Vikas Lamba. Scaled into a trusted network of 7 advanced clinics with 30+ professionals through modern digital care and streamlined appointment scheduling.</p>
              </div>
              <div className="work-card__icons">
                <span className="work-tech-icon" title="Healthcare Platform">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </span>
                <span className="work-tech-icon" title="Booking & Cloud Systems">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          
          <a href="https://phymed.in" target="_blank" rel="noopener noreferrer" className="work-card work-card--dark">
            <div className="work-card__media work-card__media--large">
              <img
                src="/assets/phymed.jpg"
                alt="Phymed Medical Equipment Platform"
                className="work-card__img"
              />
              <div className="work-card__tags">
                <span className="work-tag work-tag--dark">MedTech</span>
                <span className="work-tag work-tag--dark">B2B & B2C</span>
              </div>
            </div>
            <div className="work-card__body">
              <div>
                <h3 className="work-card__title">Phymed — Medical Equipment & Laser Platform ↗</h3>
                <p className="work-card__desc">A comprehensive B2B/B2C medical distribution platform sourcing advanced physiotherapy equipment, laser therapy systems (iLux PLUS), and rehabilitation tech for clinics, hospitals, and practitioners.</p>
              </div>
              <div className="work-card__icons">
                <span className="work-tech-icon" title="E-Commerce & B2B Distribution">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </span>
                <span className="work-tech-icon" title="Medical Tech Catalog">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>

        
        <div className="work-projects__row--small">
          
          <a href="https://navyamerchandise.com" target="_blank" rel="noopener noreferrer" className="work-card work-card--light">
            <div className="work-card__media work-card__media--small">
              <img
                src="/assets/navya-merchandise.jpg"
                alt="Navya Merchandise Platform"
                className="work-card__img"
              />
              <div className="work-card__tags">
                <span className="work-tag work-tag--light">Enterprise</span>
              </div>
            </div>
            <div className="work-card__body work-card__body--small">
              <div>
                <h3 className="work-card__title work-card__title--small">Navya Merchandise ↗</h3>
                <p className="work-card__desc">Scalable digital infrastructure and enterprise services for global businesses.</p>
              </div>
              <div className="work-card__icons">
                <span className="work-tech-icon" title="Global Business Solution">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          
          <a href="https://play.google.com/store/apps/details?id=gujaratipanchang.gujaraticalendar" target="_blank" rel="noopener noreferrer" className="work-card work-card--light">
            <div className="work-card__media work-card__media--small">
              <img
                src="/assets/gujarati-calendar-app.jpg"
                alt="Gujarati Calendar & Panchang App"
                className="work-card__img"
                style={{ objectFit: 'contain', background: '#F56E24' }}
              />
              <div className="work-card__tags">
                <span className="work-tag work-tag--light">Android App</span>
              </div>
            </div>
            <div className="work-card__body work-card__body--small">
              <div>
                <h3 className="work-card__title work-card__title--small">Gujarati Calendar App ↗</h3>
                <p className="work-card__desc">Comprehensive Android app with daily panchang, choghadiya, and festival calendar.</p>
              </div>
              <div className="work-card__icons">
                <span className="work-tech-icon" title="Mobile App & Play Store">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          
          <a href="https://purejonafresh.com" target="_blank" rel="noopener noreferrer" className="work-card work-card--dark">
            <div className="work-card__media work-card__media--small work-card__media--dark-tint">
              <img
                src="/assets/purejona-fresh.jpg"
                alt="Purejona Fresh - Coming Soon"
                className="work-card__img"
              />
              <div className="work-card__tags">
                <span className="work-tag work-tag--dark">Coming Soon</span>
              </div>
            </div>
            <div className="work-card__body work-card__body--small">
              <div>
                <h3 className="work-card__title work-card__title--small">Purejona Fresh ↗</h3>
                <p className="work-card__desc">Upcoming farm-to-table organic produce & D2C health food supply platform.</p>
              </div>
              <div className="work-card__icons">
                <span className="work-tech-icon" title="D2C Platform">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>
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
