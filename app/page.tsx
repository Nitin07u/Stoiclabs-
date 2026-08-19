import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stoiclabs — Digital Solutions & Software Engineering Agency",
  description: "Stoiclabs delivers precision-engineered digital products, enterprise web platforms, and growth engines for modern companies.",
};

export default function HomePage() {
  return (
    <>

    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">Design. Develop.<br />Deploy. Scale.</h1>
            <p className="hero__text">We create custom websites and digital solutions for finance, healthcare, hospitals, clinics, manufacturers, and retail businesses. From modern web design to full-stack development, we build digital experiences that are fast, secure, and built to grow with your business.</p>
            <div className="hero__actions">
              <a href="/contact" className="hero__btn-consult">
                <span>Book a Consultation</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="/solution" className="hero__link-explore">Explore Services</a>
            </div>
            
            
            <div className="hero__trust-strip">
              <div className="hero__trust-label">Trusted by the world's<br />biggest brands</div>
              <div className="hero__trust-logos">
                
                <div className="hero__brand-logo hero__brand-logo--afterpay">
                  <span className="brand-text">afterpay</span>
                  <svg width="22" height="14" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 3l-5 5 5 5"></path>
                    <path d="M17 3l5 5-5 5"></path>
                  </svg>
                </div>
                
                <div className="hero__brand-logo hero__brand-logo--basecamp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 18c2-4 5-8 8-8s6 4 8 8"></path>
                    <path d="M8 18c1.5-2.5 2.5-4 4-4s2.5 1.5 4 4"></path>
                  </svg>
                  <span className="brand-text">Basecamp</span>
                </div>
                
                <div className="hero__brand-logo hero__brand-logo--maze">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                  <span className="brand-text">maze</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__visual" aria-label="Stoiclabs Performance Highlights">
            
            <div className="hero__arch-block"></div>

            
            <div className="hero__trend-circle" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>

            
            <div className="hero__stat-card">
              <div className="hero__stat-card-top">
                <div className="hero__stat-num">230+</div>
                <div className="hero__stat-desc">some big companies that we work with, and trust us very much</div>
              </div>
              <div className="hero__stat-bar">
                <div className="hero__stat-bar-fill"></div>
              </div>
            </div>

            
            <div className="hero__traffic-card">
              <div className="hero__traffic-left">
                <div className="hero__traffic-tag">
                  <span className="hero__traffic-line"></span>
                  <span className="hero__traffic-tag-text">Drive More Traffic and Sales</span>
                </div>
                <h3 className="hero__traffic-title">Drive more traffic<br />and product sales</h3>
              </div>
              <div className="hero__traffic-bars" aria-hidden="true">
                <div className="hero__traffic-bar hero__traffic-bar--1"></div>
                <div className="hero__traffic-bar hero__traffic-bar--2"></div>
                <div className="hero__traffic-bar hero__traffic-bar--3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="services-intro section fade-in">
      <div className="container">
        <div className="services-intro__inner">
          <h2 className="services-intro__statement">Our services also include content distribution, podcasting, blockchain-based solutions, and AI & ML product development.</h2>
          <div className="services-intro__text">
            <p>We are a digital solutions company focused on helping businesses build a stronger online presence through strategic design and development. Our approach combines creativity, technology, and business thinking to deliver websites and products that not only look great but also perform well.</p>
            <p>Whether you need a custom website designed with platforms for your brand, a scalable web application, or help integrating advanced technologies into your workflow, we build solutions tailored to your goals.</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="stats-how section fade-in">
      <div className="container">
        <div className="stats-how__inner">
          
          <div className="stats-card">
            <div className="stats-card__top">
              <div className="stats-card__number">
                <span className="stats-card__digits">920</span><span className="stats-card__plus-green">+</span>
              </div>
              <div className="stats-card__label">Project finish with superbly</div>
            </div>
            <div className="stats-card__circles-row">
              <div className="stats-card__avatar-circle"></div>
              <div className="stats-card__avatar-circle"></div>
              <div className="stats-card__avatar-circle"></div>
              <div className="stats-card__avatar-circle"></div>
              <div className="stats-card__plus-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>
          </div>

          
          <div className="how-we-work">
            <h2 className="how-we-work__title">HOW WE WORK</h2>
            <button className="how-we-work__play-btn" aria-label="Play how we work video">
              <div className="how-we-work__play-circle">
                <svg className="how-we-work__play-icon" width="22" height="22" viewBox="0 0 24 24" fill="#010205">
                  <polygon points="6 4 20 12 6 20 6 4"></polygon>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    
    <section className="case-studies fade-in" id="case-studies">
      <div className="container">
        <h2 className="case-studies__heading">Real-world examples of how we have helped companies achieve their Digital objectives.</h2>
        
        
        <div className="case-studies__filters">
          <button className="cs-filter-pill" data-filter="all">All Work [20]</button>
          <button className="cs-filter-pill cs-filter-pill--active" data-filter="ui-ux">UI/UX Design [10]</button>
          <button className="cs-filter-pill" data-filter="digital">Digital Solution [5]</button>
          <button className="cs-filter-pill" data-filter="branding">Branding [5]</button>
        </div>

        
        <div className="case-studies__showcase">
          
          <div className="cs-concentric-circle" role="button" tabIndex={0} aria-label="See Details">
            <div className="cs-concentric-circle__inner-btn">
              <span>See Details</span>
            </div>
          </div>

          
          <div className="cs-project-card" data-category="ui-ux">
            <div className="cs-project-card__header">
              <span className="cs-project-card__line"></span>
              <span className="cs-project-card__client">Ai Corporation. 2023</span>
            </div>
            <div className="cs-project-card__footer">
              <h3 className="cs-project-card__title">Ai Wave – Ai Chatbot Mobile App</h3>
            </div>
          </div>

          
          <div className="cs-project-card" data-category="ui-ux">
            <div className="cs-project-card__header">
              <span className="cs-project-card__line"></span>
              <span className="cs-project-card__client">Lancer Corporation. 2023</span>
            </div>
            <div className="cs-project-card__footer">
              <h3 className="cs-project-card__title">App Lancer – Freelance M</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="testimonial section fade-in">
      <div className="container">
        <div className="testimonial__inner">
          <p className="testimonial__quote">"Careful observation teaches me that with the exception of crystals, nothing in nature admits of a straight line. The universe itself is made of curves and I can only obey the laws of nature."</p>
          <div className="testimonial__author-wrap">
            <div className="testimonial__avatar"></div>
            <div className="testimonial__author">
              <div className="testimonial__name">Marcus Aurelius</div>
              <div className="testimonial__role">CEO, Digital Ventures</div>
            </div>
          </div>
          <div className="testimonial__nav">
            <button className="testimonial__arrow" aria-label="Previous testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#878C91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <div className="testimonial__dots">
              <div className="testimonial__dot testimonial__dot--active"></div>
              <div className="testimonial__dot"></div>
              <div className="testimonial__dot"></div>
            </div>
            <span style={{ fontSize: "14px", fontWeight: "500", color: "#878C91", margin: "0 8px" }}>01 / 03</span>
            <button className="testimonial__arrow" aria-label="Next testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#010205" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    
    <section className="faq section fade-in">
      <div className="container">
        <div className="faq__inner">
          <div className="faq__left">
            <h2 className="faq__heading">Digital Solutions FAQs</h2>
            <p className="faq__description">Find answers to common questions about our digital solutions and services.</p>
            <div className="faq__buttons">
              <button className="btn btn--primary btn--sm">More Questions</button>
              <button className="btn btn--secondary btn--sm">Contact Us</button>
            </div>
          </div>
          <div className="faq__right">
            <div className="faq__item faq__item--open">
              <div className="faq__question">
                Why is digital solution important for my business?
                <div className="faq__toggle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </div>
              <div className="faq__answer">
                Digital solutions are essential for modern businesses to stay competitive. They help streamline operations, improve customer engagement, and drive growth through technology-enabled strategies.
              </div>
            </div>
            <div className="faq__item">
              <div className="faq__question">
                How can digital solution help improve my website's visibility?
                <div className="faq__toggle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </div>
              <div className="faq__answer">
                Through comprehensive SEO strategies, performance optimization, and engaging user experiences, we ensure your digital presence is highly visible to your target audience.
              </div>
            </div>
            <div className="faq__item">
              <div className="faq__question">
                How long does it take to see results from digital solutions efforts?
                <div className="faq__toggle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </div>
              <div className="faq__answer">
                Results vary depending on the specific strategies deployed. While some technical improvements show immediate results, comprehensive digital transformation typically takes 3-6 months to yield significant ROI.
              </div>
            </div>
            <div className="faq__item">
              <div className="faq__question">
                How do you measure the success of digital solution campaigns?
                <div className="faq__toggle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </div>
              <div className="faq__answer">
                We use key performance indicators (KPIs) tailored to your business goals, such as conversion rates, user engagement metrics, organic traffic growth, and overall return on investment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="blog-section section fade-in">
      <div className="container">
        <div className="blog-section__header">
          <h2 className="blog-section__title">Digital Solution & SEO Services<br />That Grow Traffic & Increase Revenue</h2>
          <div className="blog-section__meta">
            <p className="blog-section__text">Stay updated with our latest thoughts and insights on digital transformation and growth strategies.</p>
            <a href="#" className="btn btn--text blog-section__link">See more →</a>
          </div>
        </div>
        <div className="blog-section__cards">
          <article className="blog-card card--hover">
            <div className="blog-card__image" style={{ background: "#C6C6C6" }}></div>
            <span className="blog-card__category">Digital Strategy</span>
            <h3 className="blog-card__title">How a Digital Solution Can Boost Your Business</h3>
            <p className="blog-card__excerpt">Discover the key strategies and implementation techniques that can accelerate your company's growth in the modern landscape.</p>
            <a href="#" className="blog-card__arrow" aria-label="Read article">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </a>
          </article>
          <article className="blog-card card--hover">
            <div className="blog-card__image" style={{ background: "#C6C6C6" }}></div>
            <span className="blog-card__category">Industry Trends</span>
            <h3 className="blog-card__title">The Latest Trends and Strategies with a Digital Solution Agency</h3>
            <p className="blog-card__excerpt">Stay ahead of the curve by understanding the technological shifts that are redefining how businesses connect with their audiences.</p>
            <a href="#" className="blog-card__arrow" aria-label="Read article">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </a>
          </article>
          <article className="blog-card card--hover">
            <div className="blog-card__image" style={{ background: "#C6C6C6" }}></div>
            <span className="blog-card__category">ROI & Growth</span>
            <h3 className="blog-card__title">Maximizing ROI with the Expertise of a Digital Solution Agency</h3>
            <p className="blog-card__excerpt">Learn how to maximize your digital investments through data-driven approaches and targeted resource allocation.</p>
            <a href="#" className="blog-card__arrow" aria-label="Read article">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>

    
    <div className="container">
      <section className="cta-banner fade-in">
        <div className="cta-banner__inner">
          <h2 className="cta-banner__heading">Ready to work with us ?</h2>
          <a href="#" className="btn btn--white cta-banner__action">Get Started →</a>
        </div>
      </section>
    </div>
    </>
  );
}
