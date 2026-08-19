# STOICLABS CSS Architecture Reference

This is the shared contract for all CSS class names, design tokens, and conventions. 
All HTML and CSS files MUST follow this reference exactly.

## File Structure

All CSS files go in: `/Users/nitinupadhyaya/.gemini/antigravity/scratch/stoiclabs/css/`
All JS files go in: `/Users/nitinupadhyaya/.gemini/antigravity/scratch/stoiclabs/js/`
All HTML files go in: `/Users/nitinupadhyaya/.gemini/antigravity/scratch/stoiclabs/`

HTML files should include CSS in this order:
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/navigation.css">
<link rel="stylesheet" href="css/sections.css">
<link rel="stylesheet" href="css/footer.css">
<link rel="stylesheet" href="css/responsive.css">
```

JS files should be included at end of body:
```html
<script src="js/navigation.js"></script>
<script src="js/faq.js"></script>
<script src="js/animations.js"></script>
<script src="js/main.js"></script>
```

## Design Tokens

```css
:root {
  /* ===== COLORS ===== */
  --color-black: #010205;
  --color-white: #FFFFFF;
  --color-gray-600: #878C91;
  --color-gray-400: #C6C6C6;
  --color-gray-200: #E8E8E8;
  --color-gray-100: #F5F5F5;
  --color-gray-50: #F9F9F9;
  --color-accent: #99CF63;
  --color-accent-hover: #8BC455;
  --color-overlay: rgba(0, 0, 0, 0.2);

  /* ===== TYPOGRAPHY ===== */
  --font-family: 'Plus Jakarta Sans', sans-serif;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;
  --fw-extrabold: 800;

  --fs-xs: 0.75rem;      /* 12px */
  --fs-sm: 0.875rem;     /* 14px */
  --fs-base: 1rem;       /* 16px */
  --fs-lg: 1.125rem;     /* 18px */
  --fs-xl: 1.25rem;      /* 20px */
  --fs-2xl: 1.5rem;      /* 24px */
  --fs-3xl: 2rem;        /* 32px */
  --fs-4xl: 2.5rem;      /* 40px */
  --fs-5xl: 3rem;        /* 48px */
  --fs-6xl: 3.5rem;      /* 56px */
  --fs-7xl: 4.5rem;      /* 72px */

  --lh-tight: 1.1;
  --lh-snug: 1.25;
  --lh-normal: 1.5;
  --lh-relaxed: 1.7;

  --ls-tight: -0.02em;
  --ls-normal: 0;
  --ls-wide: 0.05em;
  --ls-wider: 0.1em;

  /* ===== SPACING ===== */
  --space-1: 0.5rem;     /* 8px */
  --space-2: 1rem;       /* 16px */
  --space-3: 1.5rem;     /* 24px */
  --space-4: 2rem;       /* 32px */
  --space-6: 3rem;       /* 48px */
  --space-8: 4rem;       /* 64px */
  --space-10: 5rem;      /* 80px */
  --space-12: 6rem;      /* 96px */
  --space-15: 7.5rem;    /* 120px */

  /* ===== BORDER RADIUS ===== */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-pill: 999px;
  --radius-circle: 50%;

  /* ===== SHADOWS ===== */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.08);

  /* ===== CONTAINER ===== */
  --container-max: 1240px;
  --container-padding: 2rem;

  /* ===== TRANSITIONS ===== */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: 150ms var(--ease-out);
  --transition-base: 300ms var(--ease-out);
  --transition-slow: 500ms var(--ease-out);
}
```

## Complete Class Reference

### Layout
```
.container              - max-width: var(--container-max); margin: 0 auto; padding: 0 var(--container-padding);
.section                - padding: var(--space-12) 0;  (96px vertical)
.section--dark          - background: var(--color-black); color: var(--color-white);
.section--gray          - background: var(--color-gray-100);
.section--flush         - padding: 0;
.grid                   - display: grid; grid-template-columns: repeat(12, 1fr);
.grid--2                - grid-template-columns: repeat(2, 1fr);
.grid--3                - grid-template-columns: repeat(3, 1fr);
.grid--gap-sm           - gap: var(--space-2);
.grid--gap-md           - gap: var(--space-3);
.grid--gap-lg           - gap: var(--space-6);
```

### Typography
```
.heading-display        - font-size: var(--fs-7xl); font-weight: var(--fw-bold); line-height: var(--lh-tight); letter-spacing: var(--ls-tight);
.heading-xl             - font-size: var(--fs-5xl); font-weight: var(--fw-bold); line-height: var(--lh-tight);
.heading-lg             - font-size: var(--fs-4xl); font-weight: var(--fw-bold); line-height: var(--lh-snug);
.heading-md             - font-size: var(--fs-3xl); font-weight: var(--fw-bold); line-height: var(--lh-snug);
.heading-sm             - font-size: var(--fs-2xl); font-weight: var(--fw-semibold); line-height: var(--lh-snug);
.text-xl                - font-size: var(--fs-xl);
.text-lg                - font-size: var(--fs-lg);
.text-base              - font-size: var(--fs-base);
.text-sm                - font-size: var(--fs-sm);
.text-xs                - font-size: var(--fs-xs); font-weight: var(--fw-medium);
.text-gray              - color: var(--color-gray-600);
.text-white             - color: var(--color-white);
.text-accent            - color: var(--color-accent);
.text-center            - text-align: center;
.text-uppercase         - text-transform: uppercase; letter-spacing: var(--ls-wider);
```

### Navigation
```
.nav                    - position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px);
.nav__inner             - display: flex; align-items: center; justify-content: space-between; height: 72px; max-width: var(--container-max); margin: 0 auto; padding: 0 var(--container-padding);
.nav__logo              - display: flex; align-items: center; gap: 8px; font-weight: var(--fw-bold); font-size: var(--fs-lg);
.nav__logo-icon         - 32x32 dark rounded square with lightning bolt or abstract mark
.nav__links             - display: flex; align-items: center; gap: var(--space-4);
.nav__link              - font-size: var(--fs-sm); font-weight: var(--fw-medium); color: var(--color-black); text-decoration: none;
.nav__link:hover        - color: var(--color-gray-600);
.nav__actions           - display: flex; align-items: center; gap: var(--space-2);
.nav__cta               - (uses .btn--secondary styling)
.nav__icon-btn          - (uses .btn--icon styling) 40x40 black circle with white arrow
.nav__hamburger         - display: none; (visible on mobile)
.mobile-menu            - position: fixed; inset: 0; background: white; z-index: 999; transform: translateX(100%); transition: var(--transition-base);
.mobile-menu--open      - transform: translateX(0);
```

### Buttons
```
.btn                    - display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-family); font-weight: var(--fw-semibold); font-size: var(--fs-sm); border: none; cursor: pointer; transition: var(--transition-fast); text-decoration: none;
.btn--primary           - background: var(--color-black); color: var(--color-white); padding: 14px 28px; border-radius: var(--radius-pill);
.btn--primary:hover     - background: #1a1a1f; transform: translateY(-1px); box-shadow: var(--shadow-md);
.btn--secondary         - background: var(--color-white); color: var(--color-black); padding: 10px 24px; border-radius: var(--radius-pill); border: 1.5px solid var(--color-gray-400);
.btn--secondary:hover   - border-color: var(--color-black);
.btn--outline           - background: transparent; color: var(--color-white); padding: 10px 24px; border-radius: var(--radius-pill); border: 1.5px solid rgba(255,255,255,0.3);
.btn--outline:hover     - border-color: var(--color-white);
.btn--text              - background: none; color: var(--color-black); padding: 0; border: none;
.btn--text:hover        - color: var(--color-gray-600);
.btn--icon              - width: 44px; height: 44px; border-radius: var(--radius-circle); padding: 0; display: flex; align-items: center; justify-content: center;
.btn--white             - background: var(--color-white); color: var(--color-black); padding: 14px 28px; border-radius: var(--radius-pill);
.btn--white:hover       - background: var(--color-gray-100); transform: translateY(-1px);
.btn--sm                - padding: 8px 18px; font-size: var(--fs-xs);
.btn--lg                - padding: 18px 36px; font-size: var(--fs-base);
```

### Cards
```
.card                   - background: var(--color-white); border-radius: var(--radius-xl); padding: var(--space-4); position: relative;
.card--dark             - background: var(--color-black); color: var(--color-white);
.card--bordered         - border: 1px solid var(--color-gray-200);
.card--stat             - (specific stat card styling, see Stat Card below)
.card--hover            - transition: var(--transition-base);
.card--hover:hover      - transform: translateY(-4px); box-shadow: var(--shadow-lg);
```

### Hero Section
```
.hero                   - padding-top: calc(72px + var(--space-8)); /* nav height + spacing */
.hero .container        - (standard container)
.hero__inner            - display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-8); align-items: center; min-height: 70vh;
.hero__content          - (left column)
.hero__title            - font-size: var(--fs-7xl); font-weight: var(--fw-bold); line-height: var(--lh-tight); letter-spacing: var(--ls-tight); margin-bottom: var(--space-3);
.hero__text             - font-size: var(--fs-base); color: var(--color-gray-600); line-height: var(--lh-relaxed); margin-bottom: var(--space-4); max-width: 420px;
.hero__actions          - display: flex; align-items: center; gap: var(--space-2);
.hero__visual           - position: relative; min-height: 500px;
.hero__geo-block        - position: absolute; background: var(--color-gray-100); border-radius: var(--radius-xl); (large background shape)
.hero__arrow-icon       - position: absolute; (small black circle with green upward arrow)
.hero__stat-card        - position: absolute; (floating card with "230+" stat)
.hero__project-card     - position: absolute; (dark card with "Drive more traffic" + green bars)
```

### Trust Strip
```
.trust-strip            - padding: var(--space-6) 0; border-top: 1px solid var(--color-gray-200); border-bottom: 1px solid var(--color-gray-200);
.trust-strip__inner     - display: flex; align-items: center; justify-content: space-between; gap: var(--space-6);
.trust-strip__text      - font-size: var(--fs-sm); color: var(--color-gray-600); white-space: nowrap;
.trust-strip__logos     - display: flex; align-items: center; gap: var(--space-6); flex: 1; justify-content: flex-end;
.trust-strip__logo      - height: 24px; opacity: 0.5; filter: grayscale(100%);
```

### Services Intro
```
.services-intro         - (uses .section padding)
.services-intro__inner  - display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-8); align-items: start;
.services-intro__statement - font-size: var(--fs-2xl); font-weight: var(--fw-bold); line-height: var(--lh-snug);
.services-intro__text   - font-size: var(--fs-base); color: var(--color-gray-600); line-height: var(--lh-relaxed);
```

### Stats + How We Work
```
.stats-how              - (uses .section padding)
.stats-how__inner       - display: grid; grid-template-columns: 1fr 1.5fr; gap: var(--space-3); align-items: stretch;
.stats-card             - background: var(--color-black); color: var(--color-white); border-radius: var(--radius-xl); padding: var(--space-4); display: flex; flex-direction: column; justify-content: space-between;
.stats-card__number     - font-size: var(--fs-6xl); font-weight: var(--fw-extrabold); line-height: 1; color: var(--color-accent);
.stats-card__label      - font-size: var(--fs-base); color: rgba(255,255,255,0.7); margin-top: var(--space-1);
.stats-card__dots       - display: flex; gap: 8px; margin-top: auto; padding-top: var(--space-4);
.stats-card__dot        - width: 28px; height: 28px; border-radius: var(--radius-circle); background: var(--color-gray-600);
.stats-card__plus       - width: 28px; height: 28px; border-radius: var(--radius-circle); border: 1.5px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; color: white;
.how-we-work            - background: var(--color-gray-100); border-radius: var(--radius-xl); padding: var(--space-8); display: flex; align-items: center; justify-content: space-between; position: relative;
.how-we-work__title     - font-size: var(--fs-3xl); font-weight: var(--fw-bold); text-transform: uppercase; letter-spacing: var(--ls-wide);
.play-btn               - width: 80px; height: 80px; border-radius: var(--radius-circle); background: var(--color-accent); display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 0 0 8px rgba(153, 207, 99, 0.2); transition: var(--transition-base);
.play-btn:hover         - transform: scale(1.05); box-shadow: 0 0 0 12px rgba(153, 207, 99, 0.25);
.play-btn__icon         - (black play triangle SVG)
```

### Case Studies
```
.case-studies           - background: var(--color-black); border-radius: var(--radius-xl); padding: var(--space-10) var(--space-6); margin: 0 var(--space-2);
.case-studies__heading  - font-size: var(--fs-3xl); font-weight: var(--fw-bold); color: var(--color-white); text-align: center; max-width: 700px; margin: 0 auto var(--space-6);
.case-studies__filters  - display: flex; justify-content: center; gap: var(--space-1); margin-bottom: var(--space-8);
.filter-pill            - padding: 8px 20px; border-radius: var(--radius-pill); font-size: var(--fs-sm); font-weight: var(--fw-medium); border: 1px solid rgba(255,255,255,0.2); background: transparent; color: var(--color-white); cursor: pointer; transition: var(--transition-fast);
.filter-pill:hover      - border-color: rgba(255,255,255,0.5);
.filter-pill--active    - background: var(--color-accent); color: var(--color-black); border-color: var(--color-accent);
.case-studies__grid     - display: grid; grid-template-columns: auto 1fr 1fr; gap: var(--space-3); align-items: stretch;
.cs-card                - border-radius: var(--radius-lg); overflow: hidden; position: relative;
.cs-card__image         - width: 100%; aspect-ratio: 4/3; background: var(--color-gray-600); border-radius: var(--radius-lg);
.cs-card__content       - padding: var(--space-2) 0;
.cs-card__meta          - font-size: var(--fs-xs); color: rgba(255,255,255,0.5);
.cs-card__title         - font-size: var(--fs-lg); font-weight: var(--fw-semibold); color: var(--color-white);
.cs-card--circle        - width: 200px; height: 200px; border-radius: var(--radius-circle); overflow: hidden; display: flex; align-items: flex-end; padding: var(--space-3);
```

### Testimonial
```
.testimonial            - (uses .section, centered, generous spacing)
.testimonial__inner     - text-align: center; max-width: 900px; margin: 0 auto;
.testimonial__quote     - font-size: var(--fs-xl); font-weight: var(--fw-medium); line-height: var(--lh-relaxed); margin-bottom: var(--space-6); position: relative;
.testimonial__quote::before - content: '"'; (decorative large quote mark)
.testimonial__author-wrap - display: flex; align-items: center; justify-content: center; gap: var(--space-2);
.testimonial__avatar    - width: 48px; height: 48px; border-radius: var(--radius-circle); background: var(--color-gray-200);
.testimonial__author    - text-align: left;
.testimonial__name      - font-size: var(--fs-sm); font-weight: var(--fw-semibold);
.testimonial__role      - font-size: var(--fs-xs); color: var(--color-gray-600);
.testimonial__nav       - display: flex; align-items: center; justify-content: center; gap: var(--space-3); margin-top: var(--space-6);
.testimonial__dots      - display: flex; gap: 6px;
.testimonial__dot       - width: 8px; height: 8px; border-radius: var(--radius-circle); background: var(--color-gray-400);
.testimonial__dot--active - background: var(--color-black);
.testimonial__arrow     - width: 40px; height: 40px; border-radius: var(--radius-circle); border: 1px solid var(--color-gray-400); display: flex; align-items: center; justify-content: center; cursor: pointer;
```

### FAQ
```
.faq                    - (uses .section)
.faq__inner             - display: grid; grid-template-columns: 1fr 1.5fr; gap: var(--space-8); background: var(--color-white); border-radius: var(--radius-xl); padding: var(--space-8); border: 1px solid var(--color-gray-200);
.faq__left              - (heading + description + buttons)
.faq__heading           - font-size: var(--fs-3xl); font-weight: var(--fw-bold); margin-bottom: var(--space-2);
.faq__description       - font-size: var(--fs-sm); color: var(--color-gray-600); margin-bottom: var(--space-4);
.faq__buttons           - display: flex; gap: var(--space-2);
.faq__right             - (accordion list)
.faq__item              - border-bottom: 1px solid var(--color-gray-200); padding: var(--space-3) 0;
.faq__item:first-child  - padding-top: 0;
.faq__question          - display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: var(--fs-base); font-weight: var(--fw-medium);
.faq__toggle            - width: 28px; height: 28px; border-radius: var(--radius-circle); border: 1px solid var(--color-gray-400); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: var(--transition-fast);
.faq__item--open .faq__toggle - background: var(--color-black); border-color: var(--color-black); color: var(--color-white); transform: rotate(45deg);
.faq__answer            - max-height: 0; overflow: hidden; transition: max-height 0.3s ease; font-size: var(--fs-sm); color: var(--color-gray-600); line-height: var(--lh-relaxed);
.faq__item--open .faq__answer - max-height: 200px; padding-top: var(--space-2);
```

### Blog / Insights
```
.blog-section           - (uses .section)
.blog-section__header   - display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-8); align-items: end; margin-bottom: var(--space-6);
.blog-section__title    - font-size: var(--fs-4xl); font-weight: var(--fw-bold); line-height: var(--lh-snug);
.blog-section__meta     - display: flex; flex-direction: column; gap: var(--space-2);
.blog-section__text     - font-size: var(--fs-sm); color: var(--color-gray-600);
.blog-section__link     - (uses .btn--text)
.blog-section__cards    - display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3);
.blog-card              - background: var(--color-white); border: 1px solid var(--color-gray-200); border-radius: var(--radius-lg); padding: var(--space-3); display: flex; flex-direction: column;
.blog-card__image       - width: 100%; aspect-ratio: 16/10; background: var(--color-gray-100); border-radius: var(--radius-md); margin-bottom: var(--space-2);
.blog-card__category    - display: inline-block; font-size: var(--fs-xs); font-weight: var(--fw-medium); color: var(--color-gray-600); margin-bottom: var(--space-1);
.blog-card__title       - font-size: var(--fs-base); font-weight: var(--fw-semibold); line-height: var(--lh-snug); margin-bottom: var(--space-1);
.blog-card__excerpt     - font-size: var(--fs-sm); color: var(--color-gray-600); line-height: var(--lh-normal); margin-bottom: var(--space-3); flex: 1;
.blog-card__arrow       - width: 40px; height: 40px; border-radius: var(--radius-circle); background: var(--color-black); color: var(--color-white); display: flex; align-items: center; justify-content: center; align-self: flex-start;
```

### CTA Banner
```
.cta-banner             - background: var(--color-black); border-radius: var(--radius-xl); padding: var(--space-10) var(--space-8); margin: 0 var(--space-2); margin-bottom: var(--space-12);
.cta-banner__inner      - display: flex; align-items: center; justify-content: space-between; max-width: var(--container-max); margin: 0 auto;
.cta-banner__heading    - font-size: var(--fs-5xl); font-weight: var(--fw-bold); color: var(--color-white); line-height: var(--lh-tight);
.cta-banner__action     - (uses .btn--white)
```

### Footer
```
.footer                 - padding: var(--space-8) 0 var(--space-4);
.footer__inner          - display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: var(--space-6); padding-bottom: var(--space-6); border-bottom: 1px solid var(--color-gray-200);
.footer__brand          - (logo + description + social)
.footer__logo           - display: flex; align-items: center; gap: 8px; font-weight: var(--fw-bold); font-size: var(--fs-lg); margin-bottom: var(--space-2);
.footer__text           - font-size: var(--fs-sm); color: var(--color-gray-600); line-height: var(--lh-relaxed); margin-bottom: var(--space-3);
.footer__social         - display: flex; gap: var(--space-2);
.footer__social-icon    - width: 36px; height: 36px; border-radius: var(--radius-circle); background: var(--color-gray-100); display: flex; align-items: center; justify-content: center;
.footer__col            - (navigation column)
.footer__col-title      - font-size: var(--fs-sm); font-weight: var(--fw-semibold); margin-bottom: var(--space-3);
.footer__col-links      - list-style: none; padding: 0;
.footer__col-link       - font-size: var(--fs-sm); color: var(--color-gray-600); text-decoration: none; display: block; padding: 4px 0;
.footer__col-link:hover - color: var(--color-black);
.footer__bottom         - display: flex; justify-content: space-between; padding-top: var(--space-3); font-size: var(--fs-xs); color: var(--color-gray-600);
```

### Responsive Breakpoints
```
/* Laptop: max-width 1280px */
/* Tablet: max-width 768px */
/* Mobile: max-width 390px */
```

### Scroll Animations
```
.fade-in                - opacity: 0; transform: translateY(20px); transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
.fade-in--visible       - opacity: 1; transform: translateY(0);
.fade-in-left           - opacity: 0; transform: translateX(-20px); transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
.fade-in-left--visible  - opacity: 1; transform: translateX(0);
.fade-in-right          - opacity: 0; transform: translateX(20px); transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
.fade-in-right--visible - opacity: 1; transform: translateX(0);
```

### Utility Classes
```
.sr-only                - screen reader only (visually hidden)
.flex                   - display: flex;
.flex-center            - display: flex; align-items: center; justify-content: center;
.flex-between           - display: flex; align-items: center; justify-content: space-between;
.gap-1                  - gap: var(--space-1);
.gap-2                  - gap: var(--space-2);
.gap-3                  - gap: var(--space-3);
.gap-4                  - gap: var(--space-4);
.mt-auto                - margin-top: auto;
.mb-2                   - margin-bottom: var(--space-2);
.mb-4                   - margin-bottom: var(--space-4);
.mb-6                   - margin-bottom: var(--space-6);
```
