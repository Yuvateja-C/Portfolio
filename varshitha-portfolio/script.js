/* ═══════════════════════════════════════════════════════════════
   VARSHITHA KOTHAKOTA — PORTFOLIO INTERACTIONS
   GSAP, ScrollTrigger, Lenis, SplitType, Typed.js, AOS
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── LOADING SCREEN ──────────────────────────────────────── */
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loaderBar');
  let loadProgress = 0;

  function advanceLoader() {
    if (loadProgress < 90) {
      loadProgress += Math.random() * 15 + 5;
      loadProgress = Math.min(loadProgress, 90);
      loaderBar.style.width = loadProgress + '%';
      requestAnimationFrame(function () {
        setTimeout(advanceLoader, 100 + Math.random() * 200);
      });
    }
  }

  advanceLoader();

  window.addEventListener('load', function () {
    loadProgress = 100;
    loaderBar.style.width = '100%';

    setTimeout(function () {
      loader.classList.add('loaded');
      document.body.style.overflow = '';
      initPortfolio();
    }, 600);
  });

  /* ── MAIN INIT ───────────────────────────────────────────── */
  function initPortfolio() {
    initLenis();
    initGSAP();
    initHeroAnimations();
    initTyped();
    initNavbar();
    initMobileMenu();
    initScrollProgress();
    initCaseStudies();
    initAOS();
  }

  /* ── LENIS SMOOTH SCROLL ─────────────────────────────────── */
  var lenis;

  function initLenis() {
    /* Check for reduced motion preference */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    lenis = new Lenis({
      duration: 1.2,
      easing: function (t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    /* Integrate Lenis with GSAP ScrollTrigger */
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(function (time) {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    /* Handle anchor links */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          lenis.scrollTo(target, {
            offset: -80,
            duration: 1.5
          });
        }
      });
    });
  }

  /* ── GSAP SETUP ──────────────────────────────────────────── */
  function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    /* Section fade-in animations for elements without AOS */
    gsap.utils.toArray('.timeline-item').forEach(function (item) {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    /* Timeline line draw animation */
    var timelineLine = document.querySelector('.timeline::before');
    if (document.querySelector('.timeline')) {
      gsap.fromTo('.timeline', {
        '--line-height': '0%'
      }, {
        '--line-height': '100%',
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      });
    }

    /* Stat cards counter animation */
    gsap.utils.toArray('.stat-number').forEach(function (el) {
      var endValue = el.textContent.replace('+', '');
      var hasPlus = el.textContent.includes('+');
      var numValue = parseInt(endValue);

      if (!isNaN(numValue)) {
        var obj = { val: 0 };
        gsap.to(obj, {
          val: numValue,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          onUpdate: function () {
            el.textContent = Math.floor(obj.val) + (hasPlus ? '+' : '');
          }
        });
      }
    });

    /* Skill cards stagger */
    gsap.utils.toArray('.skill-card').forEach(function (card, i) {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power3.out'
      });
    });

    /* Process steps animation */
    gsap.utils.toArray('.process-step').forEach(function (step, i) {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power3.out'
      });
    });

    /* Project cards */
    gsap.utils.toArray('.project-card').forEach(function (card) {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: 'power3.out'
      });
    });

    /* Cert cards */
    gsap.utils.toArray('.cert-card').forEach(function (card, i) {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        delay: i * 0.08,
        ease: 'power3.out'
      });
    });
  }

  /* ── HERO ANIMATIONS ─────────────────────────────────────── */
  function initHeroAnimations() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      /* Just show everything */
      document.getElementById('heroEyebrow').style.opacity = '1';
      document.getElementById('heroTagline').style.opacity = '1';
      document.getElementById('heroTyped').style.opacity = '1';
      document.getElementById('heroCTAs').style.opacity = '1';
      var scrollHint = document.getElementById('heroScroll');
      if (scrollHint) scrollHint.style.opacity = '1';
      return;
    }

    var tl = gsap.timeline({ delay: 0.3 });

    /* Hero name text split animation */
    try {
      var heroNameEl = document.getElementById('heroName');
      var splitName = new SplitType(heroNameEl, {
        types: 'chars',
        tagName: 'span'
      });

      tl.to(splitName.chars, {
        y: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power4.out'
      }, 0);
    } catch (e) {
      /* Fallback if SplitType fails */
      tl.fromTo('#heroName', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0);
    }

    /* Eyebrow */
    tl.to('#heroEyebrow', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, 0.2);

    /* Tagline */
    tl.to('#heroTagline', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, 0.5);

    /* Typed wrapper */
    tl.to('#heroTyped', {
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out'
    }, 0.7);

    /* CTAs */
    tl.to('#heroCTAs', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, 0.9);

    /* Scroll hint */
    tl.to('#heroScroll', {
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out'
    }, 1.2);
  }

  /* ── TYPED.JS ────────────────────────────────────────────── */
  function initTyped() {
    var targetEl = document.getElementById('typedTarget');
    if (!targetEl) return;

    new Typed('#typedTarget', {
      strings: [
        'Product Manager who builds.',
        'Founder of Glyphora.',
        'AI Researcher at DST-CURIE.',
        'Data-Driven Product Strategist.',
        'GenAI Certified Builder.',
        'Turning ideas into shipped products.'
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 2000,
      startDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true
    });
  }

  /* ── NAVBAR ──────────────────────────────────────────────── */
  function initNavbar() {
    var navbar = document.getElementById('navbar');
    var lastScrollY = 0;
    var ticking = false;

    function updateNavbar() {
      var currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

      /* Add scrolled class */
      if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      /* Hide/show on scroll direction */
      if (currentScrollY > 300) {
        if (currentScrollY > lastScrollY + 5) {
          navbar.classList.add('hidden');
        } else if (currentScrollY < lastScrollY - 5) {
          navbar.classList.remove('hidden');
        }
      } else {
        navbar.classList.remove('hidden');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }, { passive: true });

    /* Active nav link based on scroll position */
    var navLinks = document.querySelectorAll('.nav-links a');
    var sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
      var scrollPos = window.pageYOffset + 200;

      sections.forEach(function (section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', function () {
      requestAnimationFrame(updateActiveLink);
    }, { passive: true });
  }

  /* ── MOBILE MENU ─────────────────────────────────────────── */
  function initMobileMenu() {
    var hamburger = document.getElementById('navHamburger');
    var mobileMenu = document.getElementById('mobileMenu');
    var menuLinks = mobileMenu.querySelectorAll('a');

    function toggleMenu() {
      var isOpen = mobileMenu.classList.contains('open');

      if (isOpen) {
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        if (lenis) lenis.start();
      } else {
        mobileMenu.classList.add('open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        if (lenis) lenis.stop();
      }
    }

    hamburger.addEventListener('click', toggleMenu);

    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        toggleMenu();
      });
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
  }

  /* ── SCROLL PROGRESS ─────────────────────────────────────── */
  function initScrollProgress() {
    var progressBar = document.getElementById('scrollProgress');

    window.addEventListener('scroll', function () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var progress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }

  /* ── CASE STUDIES ACCORDION ──────────────────────────────── */
  function initCaseStudies() {
    /* Keyboard support for case study headers */
    document.querySelectorAll('.case-study-header').forEach(function (header) {
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleCaseStudy(this);
        }
      });
    });
  }

  /* ── AOS INIT ────────────────────────────────────────────── */
  function initAOS() {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  }

  /* ── GLOBAL: Case Study Toggle ───────────────────────────── */
  window.toggleCaseStudy = function (headerEl) {
    var caseStudy = headerEl.closest('.case-study');
    var isOpen = caseStudy.classList.contains('open');

    /* Close all other case studies */
    document.querySelectorAll('.case-study.open').forEach(function (openCS) {
      if (openCS !== caseStudy) {
        openCS.classList.remove('open');
        openCS.querySelector('.case-study-header').setAttribute('aria-expanded', 'false');
      }
    });

    /* Toggle current */
    if (isOpen) {
      caseStudy.classList.remove('open');
      headerEl.setAttribute('aria-expanded', 'false');
    } else {
      caseStudy.classList.add('open');
      headerEl.setAttribute('aria-expanded', 'true');

      /* Scroll to case study with offset */
      setTimeout(function () {
        var headerRect = headerEl.getBoundingClientRect();
        var scrollTarget = window.pageYOffset + headerRect.top - 100;

        if (lenis) {
          lenis.scrollTo(scrollTarget, { duration: 0.8 });
        } else {
          window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  /* ── MOUSE GLOW EFFECT ON CARDS ──────────────────────────── */
  document.addEventListener('mousemove', function (e) {
    var cards = document.querySelectorAll('.skill-card, .stat-card, .cert-card, .project-card');

    cards.forEach(function (card) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;

      /* Only apply if mouse is near the card */
      if (x >= -50 && x <= rect.width + 50 && y >= -50 && y <= rect.height + 50) {
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
      }
    });
  });

})();
