/**
 * STOICLABS - Scroll Animations Module
 * 
 * Uses IntersectionObserver for scroll-triggered animations:
 * - Observes .fade-in, .fade-in-left, .fade-in-right elements
 * - Adds corresponding .fade-in--visible, .fade-in-left--visible, .fade-in-right--visible classes
 * - Calculates staggered transition delays (100ms increments) for sibling/section elements
 * - Unobserves elements once revealed (single execution)
 * - Full support for prefers-reduced-motion accessibility setting
 * - Graceful fallback when IntersectionObserver is not supported
 * - Animated number counter support for statistics
 * 
 * @module animations
 */

(function () {
  'use strict';

  /**
   * Animation Configuration
   */
  const CONFIG = {
    animatedSelectors: ['.fade-in', '.fade-in-left', '.fade-in-right', '.fade-in-up', '.fade-in-down'],
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    staggerDelayMs: 100,
    counterSelector: '[data-count]',
  };

  /**
   * Scroll Animation Controller
   */
  class AnimationController {
    constructor() {
      this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.init();
    }

    /**
     * Initialize animation observation or trigger immediate reveal for reduced motion
     */
    init() {
      const combinedSelector = CONFIG.animatedSelectors.join(', ');
      const elements = document.querySelectorAll(combinedSelector);

      if (!elements.length && !document.querySelectorAll(CONFIG.counterSelector).length) {
        return;
      }

      // Check for user preference for reduced motion or missing IntersectionObserver
      if (this.prefersReducedMotion || !('IntersectionObserver' in window)) {
        this.revealAllImmediately(elements);
        this.runCountersImmediately();
        return;
      }

      this.setupStaggeredDelays();
      this.initIntersectionObserver(elements);
      this.initCounterObserver();
    }

    /**
     * Reveal all elements without animation for accessibility / fallback
     * 
     * @param {NodeList|Array} elements - Animated DOM elements
     */
    revealAllImmediately(elements) {
      elements.forEach((el) => {
        CONFIG.animatedSelectors.forEach((selector) => {
          const className = selector.replace('.', '');
          if (el.classList.contains(className)) {
            el.classList.add(`${className}--visible`);
          }
        });
      });
    }

    /**
     * Calculate and assign staggered transition delays based on DOM structure
     */
    setupStaggeredDelays() {
      const combinedSelector = CONFIG.animatedSelectors.join(', ');
      
      // Find grouping containers: sections, grids, cards containers, hero visuals
      const containers = document.querySelectorAll(
        'section, .section, .grid, .hero__visual, .case-studies__grid, .blog-section__cards, .stats-how__inner, .faq__inner, .footer__inner'
      );

      const processedElements = new Set();

      containers.forEach((container) => {
        const animatedChildren = Array.from(container.querySelectorAll(combinedSelector))
          // Only take direct or first-level animated children to avoid deep nesting issues
          .filter((el) => !processedElements.has(el));

        if (animatedChildren.length > 1) {
          animatedChildren.forEach((child, index) => {
            // Only set if not already manually styled with inline transitionDelay
            if (!child.style.transitionDelay) {
              const delay = index * CONFIG.staggerDelayMs;
              child.style.transitionDelay = `${delay}ms`;
            }
            processedElements.add(child);
          });
        }
      });
    }

    /**
     * Initialize IntersectionObserver for scroll-triggered visual animations
     * 
     * @param {NodeList} elements - Elements to observe
     */
    initIntersectionObserver(elements) {
      const observerOptions = {
        threshold: CONFIG.threshold,
        rootMargin: CONFIG.rootMargin,
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;

            // Apply visible class for all matching animation classes
            CONFIG.animatedSelectors.forEach((selector) => {
              const className = selector.replace('.', '');
              if (target.classList.contains(className)) {
                target.classList.add(`${className}--visible`);
              }
            });

            // Single execution: unobserve once revealed
            obs.unobserve(target);
          }
        });
      }, observerOptions);

      elements.forEach((el) => observer.observe(el));
    }

    /**
     * Initialize counter animations when statistics enter viewport
     */
    initCounterObserver() {
      const counters = document.querySelectorAll(CONFIG.counterSelector);
      if (!counters.length) return;

      const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            this.animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      counters.forEach((counter) => counterObserver.observe(counter));
    }

    /**
     * Animate numeric values smoothly
     * 
     * @param {HTMLElement} counterElement - Element with data-count attribute
     */
    animateCounter(counterElement) {
      const rawCount = counterElement.dataset.count;
      const target = parseInt(rawCount, 10);
      if (isNaN(target)) return;

      const prefix = counterElement.dataset.prefix || '';
      const suffix = counterElement.dataset.suffix || '';
      const duration = parseInt(counterElement.dataset.duration, 10) || 1200; // ms
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quadratic
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentCount = Math.floor(easeProgress * target);

        counterElement.textContent = `${prefix}${currentCount.toLocaleString()}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counterElement.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
        }
      };

      requestAnimationFrame(updateCount);
    }

    /**
     * Run all numeric counters immediately without animation
     */
    runCountersImmediately() {
      const counters = document.querySelectorAll(CONFIG.counterSelector);
      counters.forEach((counter) => {
        const rawCount = counter.dataset.count;
        const prefix = counter.dataset.prefix || '';
        const suffix = counter.dataset.suffix || '';
        if (rawCount) {
          counter.textContent = `${prefix}${rawCount}${suffix}`;
        }
      });
    }
  }

  // Self-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.StoicAnimations = new AnimationController();
    });
  } else {
    window.StoicAnimations = new AnimationController();
  }
})();
