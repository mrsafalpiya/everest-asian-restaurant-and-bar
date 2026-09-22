/* Variant C — Hikifuda broadside: list renderers, the off-register word, and per-language hero words. */
window.EVEREST_LISTS = {
  lunchSets: function (t, lang, esc) {
    return t.lunchSets.map(function (s) {
      return '<div class="fare"><div class="fare-l"><div class="fare-h"><span class="wood n">' + esc(s.name) + '</span><span class="cond a">' + esc(s.nameAlt) + '</span>' +
        (s.note ? '<span class="note">' + esc(s.note) + '</span>' : '') + '</div><div class="chips">' + s.items.map(function (i) { return '<span class="chip">' + esc(i) + '</span>'; }).join('') + '</div></div>' +
        '<div class="cond pr"><span class="yen">¥</span><span class="num">' + esc(s.price) + '</span></div></div>';
    }).join('');
  },
  curries: function (t, lang, esc) { return t.curries.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join(''); },
  drinks: function (t, lang, esc) { return t.drinks.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join(''); },
  naan: function (t, lang, esc) { return t.naan.map(function (n) { return '<li><span>' + esc(n.name) + '</span><span class="cond b">' + esc(n.price) + '</span></li>'; }).join(''); },
  spice: function (t, lang, esc) {
    return t.spice.map(function (s, i) {
      return '<div class="sp"><span class="cond sp-n">' + esc(s.n) + '</span><span class="sp-bar" style="width:' + (20 + i * 22) + 'px"></span><span class="sp-l">' + esc(s.label) + '</span></div>';
    }).join('');
  },
  dinnerSets: function (t, lang, esc) {
    return t.dinnerSets.map(function (s) {
      return '<div class="dset"><span class="wood dset-n">' + esc(s.name) + '</span><span class="dset-i">' + esc(s.items.join(lang === 'ja' ? ' ／ ' : ' / ')) + '</span><span class="cond dset-p">¥' + esc(s.price) + '</span></div>';
    }).join('');
  },
  alaCarte: function (t, lang, esc) {
    return t.alaCarte.map(function (a) { return '<div class="ala-row"><span class="ala-n">' + esc(a.name) + '</span><span class="cond ala-p">¥' + esc(a.price) + '</span></div>'; }).join('');
  },
  courses: function (t, lang, esc) {
    return t.courses.map(function (c) {
      return '<div class="course"><div class="course-h"><span class="wood course-n">' + esc(c.name) + '</span><span class="cond course-p">¥' + esc(c.price) + '</span></div><div class="cond course-t">' + esc(c.time) + '</div><ul>' +
        c.notes.map(function (n) { return '<li>— ' + esc(n) + '</li>'; }).join('') + '</ul></div>';
    }).join('');
  },
  accessRows: function (t, lang, esc) {
    return t.access.rows.map(function (r) { return '<div class="kv"><div class="wood k">' + esc(r.k) + '</div><div class="v">' + esc(r.v) + '</div></div>'; }).join('');
  }
};

// Keep the off-register ghost in sync with the word, and fit the word to the band.
(function () {
  function fit() {
    var h = document.getElementById('regword'); if (!h) return;
    var band = h.parentElement; var avail = band.clientWidth - 40;
    h.style.fontSize = ''; // reset to CSS clamp, then shrink if it overflows
    var w = h.scrollWidth; if (w > avail) { var cur = parseFloat(getComputedStyle(h).fontSize); h.style.fontSize = Math.floor(cur * avail / w) + 'px'; }
  }
  document.addEventListener('everest:lang', function (e) {
    var h = document.getElementById('regword'); if (h) h.setAttribute('data-w', e.detail.t.brand.short);
    fit();
  });
  window.addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
})();
