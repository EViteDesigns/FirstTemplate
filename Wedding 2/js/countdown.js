/* ═══════════════════════════════════════════
   countdown.js — Live countdown timer
   Edit WEDDING_DATE to change the target
═══════════════════════════════════════════ */

const WEDDING_DATE = new Date('2026-10-15T20:00:00');

function initCountdown() {
  const els = {
    days:    document.getElementById('cd-days'),
    hours:   document.getElementById('cd-hours'),
    minutes: document.getElementById('cd-minutes'),
    seconds: document.getElementById('cd-seconds'),
  };

  function tick() {
    const diff = WEDDING_DATE - Date.now();
    if (diff <= 0) { _setAll(els, 0); return; }

    const d = Math.floor(diff / 864e5);
    const h = Math.floor((diff % 864e5) / 36e5);
    const m = Math.floor((diff % 36e5) / 6e4);
    const s = Math.floor((diff % 6e4) / 1e3);

    _update(els.days,    d);
    _update(els.hours,   h);
    _update(els.minutes, m);
    _update(els.seconds, s);
  }

  tick();
  setInterval(tick, 1000);
}

function _update(el, val) {
  if (!el) return;
  const str = String(val).padStart(2, '0');
  if (el.textContent !== str) {
    el.textContent = str;
    el.classList.remove('tick');
    // Force reflow for animation restart
    void el.offsetWidth;
    el.classList.add('tick');
  }
}

function _setAll(els, val) {
  Object.values(els).forEach(el => { if (el) el.textContent = '00'; });
}
