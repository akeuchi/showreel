/* ============================================
   STUDIO FORM — Interactions & Motion
   ============================================ */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window);

  /* ============================================
     Loader
     ============================================ */
  const loader = document.getElementById('loader');
  const loaderCount = document.getElementById('loaderCount');
  const loaderBar = document.getElementById('loaderBar');

  function runLoader() {
    if (prefersReducedMotion) {
      finishLoader();
      return;
    }
    let current = 0;
    const target = 100;
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(eased * target);
      loaderCount.textContent = current;
      loaderBar.style.width = current + '%';
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(finishLoader, 200);
      }
    }
    requestAnimationFrame(tick);
  }

  function finishLoader() {
    loader.classList.add('is-done');
    document.body.style.overflow = '';
    // Trigger initial reveals
    initReveals();
  }

  // Prevent scroll during load
  document.body.style.overflow = 'hidden';

  /* ============================================
     Custom Cursor
     ============================================ */
  const cursor = document.getElementById('cursor');
  const cursorDot = cursor.querySelector('.cursor__dot');
  const cursorRing = document.getElementById('cursorRing');

  if (!isTouch) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover states
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-cursor]');
      if (!target) return;
      const type = target.getAttribute('data-cursor');
      cursor.classList.remove('is-hover', 'is-view');
      if (type === 'hover') cursor.classList.add('is-hover');
      if (type === 'view') cursor.classList.add('is-view');
    });
    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) cursor.classList.remove('is-hover', 'is-view');
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
  } else {
    cursor.style.display = 'none';
  }

  /* ============================================
     Navigation — hide on scroll down, show on scroll up
     ============================================ */
  const nav = document.getElementById('nav');
  let lastScroll = 0;
  let ticking = false;

  function onScroll() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 200) {
      nav.classList.add('is-hidden');
    } else {
      nav.classList.remove('is-hidden');
    }
    lastScroll = currentScroll;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ============================================
     Menu Toggle
     ============================================ */
  const navToggle = document.getElementById('navToggle');
  const navToggleText = document.getElementById('navToggleText');
  const menu = document.getElementById('menu');
  let menuOpen = false;

  function toggleMenu(force) {
    menuOpen = force !== undefined ? force : !menuOpen;
    navToggle.classList.toggle('is-open', menuOpen);
    menu.classList.toggle('is-open', menuOpen);
    navToggleText.textContent = menuOpen ? '关闭' : '菜单';
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }

  navToggle.addEventListener('click', () => toggleMenu());

  // Close menu on link click
  menu.querySelectorAll('.menu__link').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) toggleMenu(false);
  });

  /* ============================================
     Works Data & Rendering
     ============================================ */
  const works = [
    { id: 1, title: 'Aether', titleEm: 'Studio', cat: 'branding', year: '2025', client: 'Aether Studio', size: 'wide', visual: 1, sub: 'BRAND IDENTITY' },
    { id: 2, title: '静默之声', cat: 'poster', year: '2025', client: '上海当代艺术馆', size: 'normal', visual: 2, sub: 'POSTER SERIES' },
    { id: 3, title: 'Type<em>form</em>', cat: 'type', year: '2024', client: 'Self-Initiated', size: 'narrow', visual: 3, sub: 'TYPEFACE' },
    { id: 4, title: '季刊·第三期', cat: 'editorial', year: '2025', client: 'Form Press', size: 'normal', visual: 4, sub: 'EDITORIAL' },
    { id: 5, title: 'Mira', titleEm: 'Lab', cat: 'branding', year: '2024', client: 'Mira Lab', size: 'normal', visual: 5, sub: 'BRAND IDENTITY' },
    { id: 6, title: '光与影', cat: 'poster', year: '2024', client: '光影艺术节', size: 'wide', visual: 6, sub: 'POSTER' },
    { id: 7, title: 'Form<em>Press</em>', cat: 'editorial', year: '2024', client: 'Form Press', size: 'normal', visual: 7, sub: 'BOOK DESIGN' },
    { id: 8, title: 'NEUE', cat: 'type', year: '2023', client: 'Self-Initiated', size: 'narrow', visual: 8, sub: 'TYPEFACE' },
    { id: 9, title: '茶语', cat: 'branding', year: '2024', client: '茶语 Tea Talk', size: 'normal', visual: 9, sub: 'BRAND IDENTITY' },
    { id: 10, title: '城市纹理', cat: 'poster', year: '2023', client: '城市建筑双年展', size: 'normal', visual: 10, sub: 'POSTER' },
    { id: 11, title: 'Paper<em>cut</em>', cat: 'editorial', year: '2023', client: 'Independent', size: 'normal', visual: 11, sub: 'EDITORIAL' },
    { id: 12, title: 'Verde', titleEm: 'Co.', cat: 'branding', year: '2023', client: 'Verde Coffee', size: 'normal', visual: 12, sub: 'BRAND IDENTITY' },
  ];

  const worksGrid = document.getElementById('worksGrid');

  function renderWorks(filter = 'all') {
    worksGrid.innerHTML = '';
    const filtered = filter === 'all' ? works : works.filter((w) => w.cat === filter);

    filtered.forEach((work, index) => {
      const card = document.createElement('article');
      card.className = `work-card work-card--${work.size}`;
      card.setAttribute('data-category', work.cat);
      card.setAttribute('data-cursor', 'view');

      const titleHTML = work.titleEm
        ? `${work.title.replace(/<em>.*<\/em>/, '')}<em>${work.titleEm}</em>`
        : work.title;

      card.innerHTML = `
        <div class="work-card__visual">
          <div class="work-card__visual-inner visual--${work.visual}">
            <span class="work-card__visual-text">${titleHTML}</span>
            <span class="work-card__visual-sub">${work.sub} · ${work.year}</span>
          </div>
          <div class="work-card__overlay">查看项目 →</div>
        </div>
        <div class="work-card__info">
          <h3 class="work-card__title">${titleHTML}</h3>
          <div class="work-card__meta">${work.client}<br>${work.year}</div>
        </div>
      `;
      worksGrid.appendChild(card);

      // Stagger reveal
      setTimeout(() => {
        card.classList.add('is-visible');
      }, 80 * index);
    });
  }

  renderWorks();

  /* ============================================
     Filter
     ============================================ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderWorks(filter);
    });
  });

  /* ============================================
     Reveal on Scroll (IntersectionObserver)
     ============================================ */
  function initReveals() {
    const revealUps = document.querySelectorAll('.reveal-up');
    const revealTexts = document.querySelectorAll('.reveal-text');
    const revealLines = document.querySelectorAll('.reveal-line');

    // Hero text — reveal immediately
    revealTexts.forEach((el, i) => {
      setTimeout(() => el.classList.add('is-visible'), 100 + i * 120);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    revealUps.forEach((el) => observer.observe(el));

    // Manifesto / contact reveal-line — wrap inner content for slide-up
    revealLines.forEach((line) => {
      const inner = line.innerHTML;
      line.innerHTML = `<span class="reveal-line__inner" style="display:inline-block;transform:translateY(110%);transition:transform 0.9s cubic-bezier(0.16,1,0.3,1);">${inner}</span>`;
      const innerEl = line.querySelector('.reveal-line__inner');
      const lineObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              innerEl.style.transform = 'translateY(0)';
              lineObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      lineObserver.observe(line);
    });
  }

  /* ============================================
     Number Counters
     ============================================ */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => counterObserver.observe(c));

  /* ============================================
     Parallax on featured visual
     ============================================ */
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (!isTouch && !prefersReducedMotion) {
    let parallaxTicking = false;
    window.addEventListener('scroll', () => {
      if (!parallaxTicking) {
        requestAnimationFrame(() => {
          parallaxEls.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight && rect.bottom > 0) {
              const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
              const offset = (progress - 0.5) * 60;
              el.style.transform = `translateY(${offset}px)`;
            }
          });
          parallaxTicking = false;
        });
        parallaxTicking = true;
      }
    }, { passive: true });
  }

  /* ============================================
     Magnetic Buttons
     ============================================ */
  const magnetics = document.querySelectorAll('.magnetic');
  if (!isTouch) {
    magnetics.forEach((el) => {
      const strength = parseFloat(el.getAttribute('data-strength')) || 0.3;
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
      });
    });
  }

  /* ============================================
     Footer Time (Shanghai)
     ============================================ */
  const footerTime = document.getElementById('footerTime');
  function updateTime() {
    const now = new Date();
    const shanghai = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
    const hh = String(shanghai.getHours()).padStart(2, '0');
    const mm = String(shanghai.getMinutes()).padStart(2, '0');
    const ss = String(shanghai.getSeconds()).padStart(2, '0');
    footerTime.textContent = `SHANGHAI — ${hh}:${mm}:${ss}`;
  }
  updateTime();
  setInterval(updateTime, 1000);

  /* ============================================
     Smooth anchor scroll (offset for nav)
     ============================================ */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ============================================
     Init
     ============================================ */
  let loaderStarted = false;
  function startLoader() {
    if (loaderStarted || loader.classList.contains('is-done')) return;
    loaderStarted = true;
    runLoader();
  }

  if (document.readyState === 'complete') {
    setTimeout(startLoader, 100);
  } else {
    window.addEventListener('load', () => setTimeout(startLoader, 100));
  }

  // Fallback: if load takes too long, start loader anyway
  setTimeout(startLoader, 1500);

})();
