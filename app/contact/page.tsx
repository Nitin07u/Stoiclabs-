"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>

    <section className="contact-hero">
      <div className="container">
        <div className="contact-hero__grid">
          <div className="contact-hero__left">
            <h1 className="contact-hero__title">Let’s Build<br />Together</h1>
            <p className="contact-hero__text">Ready to transform your digital presence? Our team of experts is here to turn your forward-thinking ideas into reality. Reach out and let's start the conversation.</p>
          </div>
          <div className="contact-hero__right">
            <div className="contact-hero__placeholder-outer">
              <div className="contact-hero__placeholder-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="contact-main">
      <div className="container">
        <div className="contact-main__grid">
          
          
          <div className="contact-form-card">
            <h2 className="contact-form-card__title">Send us a message</h2>
            
            <form id="contactForm" action="#" method="POST" className="contact-form">
              
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="userName" className="contact-form__label">Name</label>
                  <input type="text" id="userName" name="name" className="contact-form__input" placeholder="John Doe" required />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="userEmail" className="contact-form__label">Email</label>
                  <input type="email" id="userEmail" name="email" className="contact-form__input" placeholder="john@company.com" required />
                </div>
              </div>

              
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="userCompany" className="contact-form__label">Company</label>
                  <input type="text" id="userCompany" name="company" className="contact-form__input" placeholder="Your Company" />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="userBudget" className="contact-form__label">Budget</label>
                  <div className="contact-form__select-wrap">
                    <select id="userBudget" name="budget" className="contact-form__select">
                      <option value="$10k-$25k" selected>$10k - $25k</option>
                      <option value="$25k-$50k">$25k - $50k</option>
                      <option value="$50k-$100k">$50k - $100k</option>
                      <option value="$100k+">$100k+</option>
                    </select>
                    <svg className="contact-form__select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              
              <div className="contact-form__group contact-form__group--full">
                <label className="contact-form__label">Service of Interest</label>
                <div className="contact-form__pills">
                  <button type="button" className="contact-pill" data-service="digital-solution">Digital Solution</button>
                  <button type="button" className="contact-pill contact-pill--active" data-service="ui-ux-design">UI/UX Design</button>
                  <button type="button" className="contact-pill" data-service="development">Development</button>
                </div>
                <input type="hidden" name="service" id="selectedService" value="UI/UX Design" />
              </div>

              
              <div className="contact-form__group contact-form__group--full">
                <label htmlFor="userMessage" className="contact-form__label">Message</label>
                <textarea id="userMessage" name="message" className="contact-form__textarea" placeholder="Tell us about your project..." rows={5} required></textarea>
              </div>

              
              <div className="contact-form__actions">
                <button type="submit" className="contact-form__btn-submit">
                  <span>Send Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          
          <div className="contact-side-col">
            
            
            <div className="contact-info-card">
              <h3 className="contact-info-card__title">Contact Information</h3>
              <div className="contact-info-card__list">
                
                
                <div className="contact-info-row">
                  <div className="contact-info-row__icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-info-row__content">
                    <span className="contact-info-row__label">Email Us</span>
                    <a href="mailto:hello@stoiclabs.dev" className="contact-info-row__val">hello@stoiclabs.dev</a>
                  </div>
                </div>

                {/* Phone Row */}
                <div className="contact-info-row">
                  <div className="contact-info-row__icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-info-row__content">
                    <span className="contact-info-row__label">Call Us</span>
                    <a href="tel:+919810656348" className="contact-info-row__val">+91 9810656348</a>
                  </div>
                </div>

                {/* WhatsApp Row */}
                <div className="contact-info-row">
                  <div className="contact-info-row__icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <div className="contact-info-row__content">
                    <span className="contact-info-row__label">WhatsApp</span>
                    <a href="https://wa.me/qr/RXQXLNZ5UY5UA1" target="_blank" rel="noopener noreferrer" className="contact-info-row__val">Chat on WhatsApp</a>
                  </div>
                </div>

                {/* Headquarters Location Row */}
                <div className="contact-info-row">
                  <div className="contact-info-row__icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#99CF63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-info-row__content">
                    <span className="contact-info-row__label">Headquarters</span>
                    <div className="contact-info-row__val">Office -129, Ground Floor, World Trade Center,<br />Fire Brigade Lane, Barakhamba, New Delhi, Delhi</div>
                  </div>
                </div>

              </div>
            </div>

            
            <div className="contact-book-card">
              <h3 className="contact-book-card__title">Book a Meeting</h3>
              <p className="contact-book-card__text">Skip the email back-and-forth and jump straight on a call with our strategy team.</p>
              <a href="#discovery-call" className="contact-book-card__btn">
                <span>Schedule Discovery Call</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </a>
            </div>

          </div>
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
