/* ═══════════════════════════════════════════
   animations.js — Scroll reveal + misc
═══════════════════════════════════════════ */

function initAnimations() {
  // Intersection Observer for .reveal elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          observer.unobserve(e.target); // fire once
        }
      });
    },
    { threshold: 0.12 }
  );

  function observeAll() {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  observeAll();

  // Re-observe whenever DOM might change (lang switch injects nothing dynamic here,
  // but kept for extensibility)
  return { observeAll };
}
