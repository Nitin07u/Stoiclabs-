/**
 * STOICLABS - Main Application JavaScript
 * 
 * Core interactive components:
 * 1. Case Study Filter Pills (category filtering with smooth fade transitions)
 * 2. Testimonial Slider (carousel rotation, pagination, dots, and fade transitions)
 * 3. Smooth Anchor Scrolling (72px fixed navigation offset compensation)
 * 4. Contact Form Validation (inline field errors, regex checks, and success state)
 * 
 * @module main
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. CASE STUDY FILTER PILLS
  // =========================================================================

  /**
   * Initializes interactive filter pills for portfolio/case studies
   */
  function initCaseStudyFilters() {
    const filterPills = document.querySelectorAll('.filter-pill, .cs-filter-pill');
    const cards = document.querySelectorAll('.cs-card, .cs-project-card, [data-category]');

    if (!filterPills.length || !cards.length) return;

    filterPills.forEach((pill) => {
      pill.addEventListener('click', (event) => {
        event.preventDefault();

        // Update active class on pills
        filterPills.forEach((p) => {
          p.classList.remove('filter-pill--active', 'cs-filter-pill--active');
          p.setAttribute('aria-pressed', 'false');
        });
        pill.classList.add(pill.classList.contains('cs-filter-pill') ? 'cs-filter-pill--active' : 'filter-pill--active');
        pill.setAttribute('aria-pressed', 'true');

        // Determine filter criteria
        const filterValue = (
          pill.dataset.filter ||
          pill.dataset.category ||
          pill.textContent.trim().toLowerCase()
        ).toLowerCase();

        // Apply filter to cards
        cards.forEach((card) => {
          const cardCategory = (card.dataset.category || '').toLowerCase();
          const matches =
            filterValue === 'all' ||
            filterValue === '*' ||
            cardCategory === filterValue ||
            cardCategory.includes(filterValue);

          if (matches) {
            card.style.display = '';
            // Force browser reflow then transition in
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
              card.style.pointerEvents = 'auto';
            });
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px) scale(0.98)';
            card.style.pointerEvents = 'none';
            setTimeout(() => {
              if (
                pill.classList.contains('filter-pill--active') &&
                !matches
              ) {
                card.style.display = 'none';
              }
            }, 250);
          }
        });
      });
    });
  }

  // =========================================================================
  // 2. TESTIMONIAL SLIDER
  // =========================================================================

  /**
   * Testimonials dataset used for dynamic rotation when static markup is simple
   */
  const TESTIMONIALS_DATA = [
    {
      quote:
        'STOICLABS transformed our digital flagship completely. Their attention to detail, Swiss precision, and minimalist aesthetic elevated our brand beyond expectations.',
      name: 'Alexander Wright',
      role: 'CEO & Founder, Nexa Dynamics',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    {
      quote:
        'The strategic clarity and futuristic execution delivered measurable ROI within the first quarter. Working with STOICLABS is a standard for excellence.',
      name: 'Elena Rostova',
      role: 'Head of Product, Veloce AI',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
    {
      quote:
        'Their engineering rigor and bespoke digital craft helped us close our Series B. STOICLABS is not just an agency, they are an innovation partner.',
      name: 'Marcus Chen',
      role: 'Managing Director, Horizon Labs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
  ];

  /**
   * Initializes testimonial slider controls, pagination dots, counter, and touch/keyboard events
   */
  function initTestimonialSlider() {
    const testimonialSection = document.querySelector('.testimonial');
    if (!testimonialSection) return;

    const quoteEl = testimonialSection.querySelector('.testimonial__quote');
    const nameEl = testimonialSection.querySelector('.testimonial__name');
    const roleEl = testimonialSection.querySelector('.testimonial__role');
    const avatarEl = testimonialSection.querySelector('.testimonial__avatar');
    const dots = testimonialSection.querySelectorAll('.testimonial__dot');
    const counterEl = testimonialSection.querySelector('.testimonial__counter, .testimonial__pagination');
    const prevBtn = testimonialSection.querySelector(
      '.testimonial__arrow--prev, .testimonial__arrow[data-dir="prev"], .testimonial__arrow:first-of-type'
    );
    const nextBtn = testimonialSection.querySelector(
      '.testimonial__arrow--next, .testimonial__arrow[data-dir="next"], .testimonial__arrow:last-of-type'
    );

    let currentIndex = 0;
    const totalSlides = Math.max(dots.length, TESTIMONIALS_DATA.length);
    let isTransitioning = false;

    /**
     * Updates testimonial UI to specific slide index
     * 
     * @param {number} index - Index to display
     */
    function showSlide(index) {
      if (isTransitioning) return;
      isTransitioning = true;

      // Wrap-around math
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      const currentData = TESTIMONIALS_DATA[currentIndex % TESTIMONIALS_DATA.length];

      // Fade out quote container smoothly
      if (quoteEl) {
        quoteEl.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        quoteEl.style.opacity = '0';
        quoteEl.style.transform = 'translateY(-6px)';
      }
      if (nameEl) nameEl.style.opacity = '0';
      if (roleEl) roleEl.style.opacity = '0';

      setTimeout(() => {
        // Update content
        if (quoteEl && currentData) quoteEl.textContent = currentData.quote;
        if (nameEl && currentData) nameEl.textContent = currentData.name;
        if (roleEl && currentData) roleEl.textContent = currentData.role;
        if (avatarEl && currentData && avatarEl.tagName.toLowerCase() === 'img') {
          avatarEl.src = currentData.avatar;
          avatarEl.alt = currentData.name;
        }

        // Update dots
        if (dots.length) {
          dots.forEach((dot, dotIdx) => {
            if (dotIdx === currentIndex) {
              dot.classList.add('testimonial__dot--active');
              dot.setAttribute('aria-current', 'true');
            } else {
              dot.classList.remove('testimonial__dot--active');
              dot.removeAttribute('aria-current');
            }
          });
        }

        // Update counter e.g. "01 / 03"
        if (counterEl) {
          const currentFormatted = String(currentIndex + 1).padStart(2, '0');
          const totalFormatted = String(totalSlides).padStart(2, '0');
          counterEl.textContent = `${currentFormatted} / ${totalFormatted}`;
        }

        // Fade in
        if (quoteEl) {
          quoteEl.style.opacity = '1';
          quoteEl.style.transform = 'translateY(0)';
        }
        if (nameEl) nameEl.style.opacity = '1';
        if (roleEl) roleEl.style.opacity = '1';

        isTransitioning = false;
      }, 250);
    }

    // Attach arrow buttons
    if (prevBtn) {
      prevBtn.setAttribute('aria-label', 'Previous testimonial');
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.setAttribute('aria-label', 'Next testimonial');
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex + 1);
      });
    }

    // Attach pagination dots
    dots.forEach((dot, idx) => {
      dot.style.cursor = 'pointer';
      dot.setAttribute('role', 'button');
      dot.setAttribute('aria-label', `Go to testimonial slide ${idx + 1}`);
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(idx);
      });
    });

    // Keyboard navigation when focused on testimonial section
    testimonialSection.setAttribute('tabindex', '0');
    testimonialSection.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        showSlide(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        showSlide(currentIndex + 1);
      }
    });

    // Initial counter display
    if (counterEl) {
      const currentFormatted = String(currentIndex + 1).padStart(2, '0');
      const totalFormatted = String(totalSlides).padStart(2, '0');
      counterEl.textContent = `${currentFormatted} / ${totalFormatted}`;
    }
  }

  // =========================================================================
  // 3. SMOOTH SCROLL FOR ANCHOR LINKS
  // =========================================================================

  /**
   * Initializes smooth scrolling behavior for in-page anchor links with nav offset
   */
  function initSmoothScroll() {
    const NAV_HEIGHT = 72; // Fixed navbar height in px

    document.addEventListener('click', (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      // Skip empty hash or non-targets
      if (!href || href === '#' || href === '#!') return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        event.preventDefault();

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - NAV_HEIGHT;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Update URL hash without abrupt browser jump
        if (history.pushState) {
          history.pushState(null, '', href);
        }
      }
    });
  }

  // =========================================================================
  // 4. FORM VALIDATION
  // =========================================================================

  /**
   * Validates email format using standard RFC 5322 compatible regex
   * 
   * @param {string} email - Email address to test
   * @returns {boolean} True if email is valid
   */
  function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase().trim());
  }

  /**
   * Shows inline error message below an input field
   * 
   * @param {HTMLElement} input - Target input element
   * @param {string} message - Validation message
   */
  function showError(input, message) {
    clearError(input);

    input.classList.add('input--error');
    input.setAttribute('aria-invalid', 'true');

    const errorContainer = document.createElement('div');
    errorContainer.className = 'form-error';
    errorContainer.style.color = '#e53e3e';
    errorContainer.style.fontSize = '0.75rem';
    errorContainer.style.fontWeight = '500';
    errorContainer.style.marginTop = '4px';
    errorContainer.textContent = message;

    const errorId = `${input.id || input.name || 'field'}-error`;
    errorContainer.id = errorId;
    input.setAttribute('aria-describedby', errorId);

    const parent = input.closest('.form-group') || input.parentElement;
    parent.appendChild(errorContainer);
  }

  /**
   * Removes inline error state from an input field
   * 
   * @param {HTMLElement} input - Target input element
   */
  function clearError(input) {
    input.classList.remove('input--error');
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');

    const parent = input.closest('.form-group') || input.parentElement;
    const existingError = parent.querySelector('.form-error');
    if (existingError) {
      existingError.remove();
    }
  }

  /**
   * Initializes contact forms with validation and submission feedback
   */
  function initFormValidation() {
    const forms = document.querySelectorAll('form.contact-form, .contact__form, form[data-validate], #contact-form');
    if (!forms.length) return;

    forms.forEach((form) => {
      // Find form inputs
      const nameInput = form.querySelector('input[name="name"], #name, input[placeholder*="Name" i]');
      const emailInput = form.querySelector('input[name="email"], #email, input[type="email"]');
      const messageInput = form.querySelector('textarea[name="message"], textarea[name="details"], #message, #project-details, textarea');

      // Clear error on input
      [nameInput, emailInput, messageInput].forEach((input) => {
        if (input) {
          input.addEventListener('input', () => clearError(input));
          input.addEventListener('change', () => clearError(input));
        }
      });

      // Submit listener
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        // 1. Validate Name
        if (nameInput) {
          if (!nameInput.value.trim()) {
            showError(nameInput, 'Please enter your name.');
            isValid = false;
          } else if (nameInput.value.trim().length < 2) {
            showError(nameInput, 'Name must be at least 2 characters.');
            isValid = false;
          } else {
            clearError(nameInput);
          }
        }

        // 2. Validate Email
        if (emailInput) {
          if (!emailInput.value.trim()) {
            showError(emailInput, 'Please enter your email address.');
            isValid = false;
          } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
          } else {
            clearError(emailInput);
          }
        }

        // 3. Validate Project Details / Message
        if (messageInput) {
          if (!messageInput.value.trim()) {
            showError(messageInput, 'Please provide details about your project.');
            isValid = false;
          } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'Please provide at least 10 characters.');
            isValid = false;
          } else {
            clearError(messageInput);
          }
        }

        // If form has errors, focus the first invalid element
        if (!isValid) {
          const firstError = form.querySelector('.input--error');
          if (firstError) firstError.focus();
          return;
        }

        // Form is valid: show loading and success states
        const submitBtn = form.querySelector('button[type="submit"], .btn--submit, .btn--primary');
        const originalBtnText = submitBtn ? submitBtn.textContent : 'Submit';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';
          submitBtn.style.opacity = '0.7';
          submitBtn.style.cursor = 'not-allowed';
        }

        // Simulate network submission
        setTimeout(() => {
          form.reset();

          // Create or show success banner
          let successMessage = form.querySelector('.form-success');
          if (!successMessage) {
            successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.style.background = '#010205';
            successMessage.style.color = '#FFFFFF';
            successMessage.style.padding = '1.5rem';
            successMessage.style.borderRadius = '14px';
            successMessage.style.marginTop = '1.5rem';
            successMessage.style.textAlign = 'center';
            successMessage.style.border = '1px solid rgba(153, 207, 99, 0.4)';
            successMessage.innerHTML = `
              <div style="color: #99CF63; font-size: 1.5rem; margin-bottom: 0.5rem;">✓</div>
              <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Message Received</h4>
              <p style="color: #878C91; font-size: 0.875rem; margin: 0;">Thank you for reaching out. A partner from STOICLABS will respond within 24 hours.</p>
            `;
            form.appendChild(successMessage);
          } else {
            successMessage.style.display = 'block';
          }

          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
          }

          // Smoothly scroll success message into view if needed
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 600);
      });
    });
  }

  // =========================================================================
  // 5. MASTER INITIALIZATION
  // =========================================================================

  function initApp() {
    initCaseStudyFilters();
    initTestimonialSlider();
    initSmoothScroll();
    initFormValidation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
