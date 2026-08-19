"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    // Header shadow on scroll
    const header = document.querySelector(".header");
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll(
      ".feature-card, .service-card, .value-card, .testimonial-card, .stat-card, .work-card, .badge"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
