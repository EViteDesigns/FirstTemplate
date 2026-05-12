/* ═══════════════════════════════════════════
   language.js — i18n using embedded LOCALES
   No fetch / No CORS issues
═══════════════════════════════════════════ */

let _lang = 'ar';

function initLanguage() {
  _lang = localStorage.getItem('w-lang') || 'ar';
  _applyAll();

  document.getElementById('lang-btn').addEventListener('click', () => {
    _lang = _lang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('w-lang', _lang);
    _applyAll();
  });
}

function _applyAll() {
  const html  = document.documentElement;
  const isRTL = _lang === 'ar';
  const dict  = LOCALES[_lang] || LOCALES.ar;

  html.setAttribute('lang', _lang);
  html.setAttribute('dir',  isRTL ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = isRTL ? 'EN' : 'عربي';
}

function t(key) {
  return (LOCALES[_lang] || LOCALES.ar)[key] || key;
}
function getCurrentLang() { return _lang; }
