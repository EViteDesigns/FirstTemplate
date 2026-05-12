/* ═══════════════════════════════════════════
   particles.js — Stars canvas + hero dots
═══════════════════════════════════════════ */

/* ── Intro Stars Canvas ────────────────── */
function initStars() {
  const canvas = document.getElementById('stars-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let stars = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random(),
      speed: Math.random() * 0.4 + 0.1,
      twinkle: Math.random() * Math.PI * 2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.twinkle += s.speed * 0.04;
      const alpha = s.a * (0.5 + 0.5 * Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

/* ── Hero Floating Particles ───────────── */
function initHeroParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;

  for (let i = 0; i < 18; i++) {
    const dot = document.createElement('div');
    dot.className = 'p-dot';
    const size = Math.random() * 4 + 2;
    dot.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${Math.random() * 100}%;
      bottom: ${Math.random() * 30}%;
      animation-duration: ${Math.random() * 8 + 6}s;
      animation-delay: ${Math.random() * 8}s;
    `;
    container.appendChild(dot);
  }
}

/* ── Floating Rose Petals (message) ────── */
function initPetals() {
  const section = document.getElementById('message');
  if (!section) return;

  const glyphs = ['🌸', '🌺', '🌹', '✿', '❀'];
  for (let i = 0; i < 8; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.textContent = glyphs[i % glyphs.length];
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 12 + 10}s;
      animation-delay: ${Math.random() * 10}s;
      font-size: ${Math.random() * 1 + 1}rem;
    `;
    section.appendChild(p);
  }
}
