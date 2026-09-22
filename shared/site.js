/* Everest: shared language switch, list rendering and small behaviours. */
(function () {
  var T = window.EVEREST_T, L = window.EVEREST_LINKS;
  function get(o, p) { return p.split('.').reduce(function (a, k) { return a == null ? undefined : a[k]; }, o); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function apply(lang) {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var v = get(t, el.getAttribute('data-t'));
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-t-attr]').forEach(function (el) {
      // data-t-attr="aria-label:nav.reserve"
      el.getAttribute('data-t-attr').split(';').forEach(function (pair) {
        var kv = pair.split(':'); var v = get(t, kv[1]); if (v != null) el.setAttribute(kv[0], v);
      });
    });
    document.querySelectorAll('[data-list]').forEach(function (el) {
      var fn = window.EVEREST_LISTS && window.EVEREST_LISTS[el.getAttribute('data-list')];
      if (fn) el.innerHTML = fn(t, lang, esc);
    });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.title = (lang === 'ja' ? 'エベレスト アジアンレストラン＆バー｜栃木市樋ノ口町のインドカレー' : 'Everest Asian Restaurant & Bar | Indian curry in Tochigi City');
    try { localStorage.setItem('everest-lang', lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent('everest:lang', { detail: { lang: lang, t: t } }));
  }

  window.EVEREST = { apply: apply, esc: esc, get: get, links: L };

  document.addEventListener('DOMContentLoaded', function () {
    var lang = 'ja';
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'ja') lang = q;
    else { try { lang = localStorage.getItem('everest-lang') || 'ja'; } catch (e) {} }
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
    });
    document.querySelectorAll('[data-href]').forEach(function (a) { a.href = L[a.getAttribute('data-href')]; });
    apply(lang);

    // Current-section tracking for navs that mark the visible section.
    var links = document.querySelectorAll('[data-nav]');
    if (links.length && 'IntersectionObserver' in window) {
      var map = {};
      links.forEach(function (a) { map[a.getAttribute('data-nav')] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            links.forEach(function (a) { a.classList.remove('cur'); a.removeAttribute('aria-current'); });
            var a = map[e.target.id]; if (a) { a.classList.add('cur'); a.setAttribute('aria-current', 'true'); document.dispatchEvent(new CustomEvent('everest:section', { detail: { id: e.target.id, link: a } })); }
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }

    // One-time reveals.
    var rev = document.querySelectorAll('[data-reveal]');
    if (rev.length && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
      }, { threshold: 0.15 });
      rev.forEach(function (el) { ro.observe(el); });
    } else { rev.forEach(function (el) { el.classList.add('in'); }); }
  });
})();
