/* ============================================
   Main JS — Sidebar Toggle, Nav Highlight,
   Smooth Scroll
   ============================================ */

(function () {
  'use strict';

  const hamburger = document.querySelector('.hamburger');
  const sidebar   = document.querySelector('.sidebar');
  const overlay   = document.querySelector('.overlay');
  const navItems  = document.querySelectorAll('.nav-item[data-target]');
  const sections  = document.querySelectorAll('.project-section[id]');

  // ---- Sidebar toggle (mobile) ----

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    hamburger.classList.add('open');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    hamburger.classList.remove('open');
  }

  hamburger.addEventListener('click', function () {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  overlay.addEventListener('click', closeSidebar);

  // ---- Smooth scroll on nav click ----

  navItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('data-target');
      var target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        closeSidebar();
      }
    });
  });

  // ---- Highlight active nav item on scroll ----

  function highlightNav() {
    var scrollY = window.scrollY + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollY >= top && scrollY < bottom) {
        navItems.forEach(function (item) {
          item.classList.toggle('active', item.getAttribute('data-target') === id);
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();
})();
