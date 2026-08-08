/* ==========================================================================
   Varshitha Kothakota — Portfolio interactions
   ========================================================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  initNav();
  initParticles();
  initTyped();
  initAOS();
  initHeroReveal();
  initCounters();
  initTilt();
  initContactForm();
});

/* ---------- Nav ---------- */
function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle.addEventListener('click', () => {
    const isOpen = mobile.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobile.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Hero particle network ---------- */
function initParticles() {
  if (prefersReducedMotion || typeof particlesJS === 'undefined') return;

  particlesJS('particles-hero', {
    particles: {
      number: { value: 46, density: { enable: true, value_area: 900 } },
      color: { value: ['#4338CA', '#3B6EF6', '#06AED4', '#9061F9'] },
      shape: { type: 'circle' },
      opacity: { value: 0.45, random: true, anim: { enable: true, speed: 0.4, opacity_min: 0.1 } },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 140, color: '#C7CBF5', opacity: 0.35, width: 1 },
      move: { enable: true, speed: 0.9, direction: 'none', random: true, straight: false, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: false },
        resize: true
      },
      modes: { grab: { distance: 160, line_linked: { opacity: 0.5 } } }
    },
    retina_detect: true
  });
}

/* ---------- Typed.js hero headline ---------- */
function initTyped() {
  const el = document.getElementById('typed-headline');
  if (!el) return;

  const strings = [
    'Product manager for AI-native products.',
    'Turns fragmented data into decisions.',
    'Builds tools that meet people where they\u2019re stuck.'
  ];

  if (prefersReducedMotion || typeof Typed === 'undefined') {
    el.textContent = strings[0];
    return;
  }

  new Typed('#typed-headline', {
    strings,
    typeSpeed: 38,
    backSpeed: 22,
    backDelay: 1900,
    startDelay: 300,
    loop: true,
    showCursor: false
  });
}

/* ---------- AOS scroll reveal ---------- */
function initAOS() {
  if (typeof AOS === 'undefined') return;
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
    disable: prefersReducedMotion
  });
}

/* ---------- Hero load-in sequence (GSAP) ---------- */
function initHeroReveal() {
  const items = document.querySelectorAll('.hero [data-reveal]');
  if (!items.length) return;

  if (prefersReducedMotion || typeof gsap === 'undefined') {
    items.forEach(el => { el.style.opacity = 1; });
    return;
  }

  gsap.set(items, { opacity: 0, y: 22 });
  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12,
    delay: 0.15
  });
}

/* ---------- Animated stat counters ---------- */
function initCounters() {
  const counters = document.querySelectorAll('.stat__num[data-count]');
  if (!counters.length) return;

  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    if (prefersReducedMotion) { el.textContent = target; return; }

    const duration = 1100;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(el => observer.observe(el));
}

/* ---------- Subtle card tilt on pointer move ---------- */
function initTilt() {
  if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll('.skill-card, .project-mini, .process__step, .achieve__card');

  cards.forEach(card => {
    let frame;
    card.style.transformStyle = 'preserve-3d';
    card.style.willChange = 'transform';

    card.addEventListener('mousemove', (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-6px)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      cancelAnimationFrame(frame);
      card.style.transform = '';
    });
  });
}

/* ---------- Contact form -> mailto ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:varshithakothakota@gmail.com?subject=${subject}&body=${body}`;
  });
}
