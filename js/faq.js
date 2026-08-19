/**
 * STOICLABS - FAQ Accordion Module
 * 
 * Manages interactive accordion behavior for the FAQ section:
 * - Single-open accordion pattern (collapsing others upon expansion)
 * - Smooth scrollHeight-based height animations
 * - Plus/minus toggle icon rotation state
 * - Full accessibility attributes (aria-expanded, aria-controls, aria-hidden)
 * - Window resize recalculation for responsive line wrapping
 * 
 * @module faq
 */

(function () {
  'use strict';

  /**
   * FAQ Configuration Selectors and Classes
   */
  const CONFIG = {
    containerSelector: '.faq, .faq__inner, .faq__right',
    itemSelector: '.faq__item',
    itemOpenClass: 'faq__item--open',
    questionSelector: '.faq__question',
    answerSelector: '.faq__answer',
    toggleSelector: '.faq__toggle',
  };

  /**
   * FAQ Accordion Controller
   */
  class FAQController {
    constructor() {
      this.faqItems = document.querySelectorAll(CONFIG.itemSelector);
      if (!this.faqItems.length) return;

      this.init();
    }

    /**
     * Initialize FAQ listeners, attributes, and default open item
     */
    init() {
      this.setupAccessibility();
      this.bindEvents();
      this.initDefaultState();
      this.initResizeListener();
    }

    /**
     * Setup accessibility attributes for questions and answers
     */
    setupAccessibility() {
      this.faqItems.forEach((item, index) => {
        const question = item.querySelector(CONFIG.questionSelector);
        const answer = item.querySelector(CONFIG.answerSelector);

        if (question && answer) {
          const questionId = question.id || `faq-question-${index + 1}`;
          const answerId = answer.id || `faq-answer-${index + 1}`;

          question.id = questionId;
          answer.id = answerId;

          question.setAttribute('aria-controls', answerId);
          answer.setAttribute('aria-labelledby', questionId);
          answer.setAttribute('role', 'region');

          // Make focusable if not a native button
          if (question.tagName.toLowerCase() !== 'button') {
            question.setAttribute('role', 'button');
            question.setAttribute('tabindex', '0');
          }
        }
      });
    }

    /**
     * Bind click and keyboard interaction events
     */
    bindEvents() {
      this.faqItems.forEach((item) => {
        const question = item.querySelector(CONFIG.questionSelector);
        if (!question) return;

        // Click event
        question.addEventListener('click', (event) => {
          event.preventDefault();
          this.toggleItem(item);
        });

        // Keyboard navigation (Enter & Space for accessible non-button elements)
        question.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.toggleItem(item);
          }
        });
      });
    }

    /**
     * Ensure initial state reflects HTML markup or opens first item
     */
    initDefaultState() {
      let hasOpenItem = false;

      this.faqItems.forEach((item, index) => {
        const answer = item.querySelector(CONFIG.answerSelector);
        const question = item.querySelector(CONFIG.questionSelector);
        const isOpen = item.classList.contains(CONFIG.itemOpenClass);

        if (isOpen) {
          hasOpenItem = true;
          this.openItem(item, false);
        } else {
          if (answer) {
            answer.style.maxHeight = '0px';
            answer.setAttribute('aria-hidden', 'true');
          }
          if (question) {
            question.setAttribute('aria-expanded', 'false');
          }
        }
      });

      // If no item has open class in markup, open the first item by default
      if (!hasOpenItem && this.faqItems.length > 0) {
        this.openItem(this.faqItems[0], false);
      }
    }

    /**
     * Toggle a specific FAQ item
     * 
     * @param {HTMLElement} targetItem - The .faq__item element to toggle
     */
    toggleItem(targetItem) {
      const isOpen = targetItem.classList.contains(CONFIG.itemOpenClass);

      if (isOpen) {
        this.closeItem(targetItem);
      } else {
        // Single accordion rule: close all other open items
        this.faqItems.forEach((item) => {
          if (item !== targetItem && item.classList.contains(CONFIG.itemOpenClass)) {
            this.closeItem(item);
          }
        });

        this.openItem(targetItem, true);
      }
    }

    /**
     * Open an FAQ item with smooth max-height animation
     * 
     * @param {HTMLElement} item - The .faq__item element
     * @param {boolean} [animate=true] - Whether to animate transition
     */
    openItem(item, animate = true) {
      const answer = item.querySelector(CONFIG.answerSelector);
      const question = item.querySelector(CONFIG.questionSelector);

      item.classList.add(CONFIG.itemOpenClass);

      if (question) {
        question.setAttribute('aria-expanded', 'true');
      }

      if (answer) {
        answer.setAttribute('aria-hidden', 'false');
        // Calculate scrollHeight for fluid CSS max-height transition
        const height = answer.scrollHeight;
        answer.style.maxHeight = `${height}px`;
      }
    }

    /**
     * Close an FAQ item
     * 
     * @param {HTMLElement} item - The .faq__item element
     */
    closeItem(item) {
      const answer = item.querySelector(CONFIG.answerSelector);
      const question = item.querySelector(CONFIG.questionSelector);

      item.classList.remove(CONFIG.itemOpenClass);

      if (question) {
        question.setAttribute('aria-expanded', 'false');
      }

      if (answer) {
        answer.style.maxHeight = '0px';
        answer.setAttribute('aria-hidden', 'true');
      }
    }

    /**
     * Recalculate heights on window resize for open items
     */
    initResizeListener() {
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          this.faqItems.forEach((item) => {
            if (item.classList.contains(CONFIG.itemOpenClass)) {
              const answer = item.querySelector(CONFIG.answerSelector);
              if (answer) {
                // Temporarily remove max-height constraint to measure updated scrollHeight
                answer.style.maxHeight = 'none';
                const newHeight = answer.scrollHeight;
                answer.style.maxHeight = `${newHeight}px`;
              }
            }
          });
        }, 150);
      }, { passive: true });
    }
  }

  // Self-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.StoicFAQ = new FAQController();
    });
  } else {
    window.StoicFAQ = new FAQController();
  }
})();
