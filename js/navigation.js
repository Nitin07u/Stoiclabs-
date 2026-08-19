/**
 * STOICLABS - Navigation Module
 * 
 * Handles mobile navigation drawer, hamburger icon toggle, body scroll lock,
 * outside-click dismissal, keyboard escape handling, and scroll-triggered navbar styling.
 * 
 * @module navigation
 */

(function () {
  'use strict';

  /**
   * Configuration options for navigation behavior
   */
  const CONFIG = {
    scrollThreshold: 100,
    mobileBreakpoint: 768,
    navSelector: '.nav',
    navScrolledClass: 'nav--scrolled',
    hamburgerSelector: '.nav__hamburger',
    hamburgerActiveClass: 'nav__hamburger--active',
    mobileMenuSelector: '.mobile-menu',
    mobileMenuOpenClass: 'mobile-menu--open',
    mobileLinkSelector: '.mobile-menu a, .mobile-menu__link, .mobile-menu .btn',
  };

  /**
   * Navigation Controller
   */
  class NavigationController {
    constructor() {
      this.nav = document.querySelector(CONFIG.navSelector);
      this.hamburger = document.querySelector(CONFIG.hamburgerSelector);
      this.mobileMenu = document.querySelector(CONFIG.mobileMenuSelector);
      this.mobileLinks = document.querySelectorAll(CONFIG.mobileLinkSelector);
      this.isOpen = false;
      this.ticking = false;

      this.init();
    }

    /**
     * Initialize all navigation features and event listeners
     */
    init() {
      this.initScrollHandler();
      this.initMobileMenu();
      this.initKeyboardAccessibility();
      this.initResizeHandler();
    }

    /**
     * Set up scroll handler for .nav--scrolled class
     */
    initScrollHandler() {
      if (!this.nav) return;

      const updateNavScroll = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollY > CONFIG.scrollThreshold) {
          this.nav.classList.add(CONFIG.navScrolledClass);
        } else {
          this.nav.classList.remove(CONFIG.navScrolledClass);
        }
        this.ticking = false;
      };

      // Initial check on load
      updateNavScroll();

      // Throttled scroll listener using requestAnimationFrame
      window.addEventListener('scroll', () => {
        if (!this.ticking) {
          window.requestAnimationFrame(updateNavScroll);
          this.ticking = true;
        }
      }, { passive: true });
    }

    /**
     * Set up mobile menu toggle, link clicks, and outside click dismissal
     */
    initMobileMenu() {
      if (!this.hamburger || !this.mobileMenu) return;

      // Set initial ARIA attributes
      this.hamburger.setAttribute('aria-expanded', 'false');
      this.hamburger.setAttribute('aria-controls', 'mobile-menu');
      this.hamburger.setAttribute('aria-label', 'Toggle navigation menu');
      this.mobileMenu.setAttribute('aria-hidden', 'true');
      if (!this.mobileMenu.id) {
        this.mobileMenu.id = 'mobile-menu';
      }

      // Hamburger button click
      this.hamburger.addEventListener('click', (event) => {
        event.stopPropagation();
        this.toggleMenu();
      });

      // Close menu when any link inside mobile menu is clicked
      this.mobileMenu.addEventListener('click', (event) => {
        const link = event.target.closest('a, button:not(.nav__hamburger)');
        if (link) {
          this.closeMenu();
        }
      });

      // Close menu when clicking outside mobile menu and hamburger
      document.addEventListener('click', (event) => {
        if (!this.isOpen) return;

        const isInsideMenu = this.mobileMenu.contains(event.target);
        const isInsideHamburger = this.hamburger.contains(event.target);

        if (!isInsideMenu && !isInsideHamburger) {
          this.closeMenu();
        }
      });
    }

    /**
     * Open the mobile navigation drawer
     */
    openMenu() {
      if (this.isOpen || !this.mobileMenu) return;

      this.isOpen = true;
      this.mobileMenu.classList.add(CONFIG.mobileMenuOpenClass);
      this.mobileMenu.setAttribute('aria-hidden', 'false');

      if (this.hamburger) {
        this.hamburger.classList.add(CONFIG.hamburgerActiveClass);
        this.hamburger.classList.add('is-active');
        this.hamburger.setAttribute('aria-expanded', 'true');
      }

      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      // Focus first focusable link in menu for accessibility
      const firstFocusable = this.mobileMenu.querySelector('a, button, [tabindex="0"]');
      if (firstFocusable) {
        setTimeout(() => firstFocusable.focus(), 150);
      }
    }

    /**
     * Close the mobile navigation drawer
     */
    closeMenu() {
      if (!this.isOpen || !this.mobileMenu) return;

      this.isOpen = false;
      this.mobileMenu.classList.remove(CONFIG.mobileMenuOpenClass);
      this.mobileMenu.setAttribute('aria-hidden', 'true');

      if (this.hamburger) {
        this.hamburger.classList.remove(CONFIG.hamburgerActiveClass);
        this.hamburger.classList.remove('is-active');
        this.hamburger.setAttribute('aria-expanded', 'false');
      }

      // Restore background scrolling
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    /**
     * Toggle the mobile menu state
     */
    toggleMenu() {
      if (this.isOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    }

    /**
     * Handle keyboard navigation (Escape key to close menu)
     */
    initKeyboardAccessibility() {
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && this.isOpen) {
          this.closeMenu();
          if (this.hamburger) {
            this.hamburger.focus();
          }
        }
      });
    }

    /**
     * Automatically close mobile menu if resized to desktop viewport
     */
    initResizeHandler() {
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (window.innerWidth > CONFIG.mobileBreakpoint && this.isOpen) {
            this.closeMenu();
          }
        }, 100);
      }, { passive: true });
    }
  }

  // Self-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.StoicNavigation = new NavigationController();
    });
  } else {
    window.StoicNavigation = new NavigationController();
  }
})();
