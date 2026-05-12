/* ═══════════════════════════════════════════
   main.js — App bootstrap
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Init Controls (sync — no await needed) ── */
  initTheme();
  initLanguage();

  /* ── Stars canvas on intro bg ─────────────── */
  initStars();

  /* ═══ SEAL CLICK → CURTAIN OPEN → REVEAL APP ═══ */
  const sealBtn  = document.getElementById('seal-btn');
  const introContent = document.getElementById('intro-content');
  const app      = document.getElementById('app');
  const curtainL = document.getElementById('curtain-left');
  const curtainR = document.getElementById('curtain-right');

  const curtainWrap = document.getElementById('curtain-wrap');

  sealBtn.addEventListener('click', () => {
    if (sealBtn.classList.contains('breaking')) return; // prevent double click

    // 1. Press animation on seal
    sealBtn.classList.add('breaking');

    // 2. Try to play music
    tryPlayMusic();

    // 3. Fade out intro content (names + seal label)
    introContent.style.transition = 'opacity 0.4s ease';
    introContent.style.opacity = '0';
    introContent.style.pointerEvents = 'none';

    // 4. Open curtains after seal starts breaking
    setTimeout(() => {
      curtainL.classList.add('open');
      curtainR.classList.add('open');

    }, 350);

    // 5. Show main app as curtains open
    setTimeout(() => {
      app.classList.add('visible');
      initCountdown();
      initAnimations();
      initHeroParticles();
      initPetals();
    }, 1400);

    // 6. Cleanup after everything is done
    setTimeout(() => {
      curtainWrap.remove();

      introContent.remove();
      document.getElementById('stars-canvas')?.remove();
    }, 2400);
  });

  /* ── Music Button ─────────────────────────── */
  const audio    = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-btn');
  const playIcon  = `<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
  const pauseIcon = `<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;

  musicBtn.innerHTML = playIcon;

  musicBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(() => {
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = pauseIcon;
      }).catch(() => {});
    } else {
      audio.pause();
      musicBtn.classList.remove('playing');
      musicBtn.innerHTML = playIcon;
    }
  });

  function tryPlayMusic() {
    audio.play().then(() => {
      musicBtn.classList.add('playing');
      musicBtn.innerHTML = pauseIcon;
    }).catch(() => {});
  }
});
