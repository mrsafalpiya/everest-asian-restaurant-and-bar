/* Variant B — Noren: list renderers and the curtain that parts on scroll. */
window.EVEREST_LISTS = {
  lunchSets: function (t, lang, esc) {
    var sep = lang === 'ja' ? '・' : ' · ';
    return t.lunchSets.map(function (s) {
      return '<div class="row"><div class="row-l"><div class="row-h"><span class="n">' + esc(s.name) + '</span><span class="cz a">' + esc(s.nameAlt) + '</span></div>' +
        '<div class="ui items">' + esc(s.items.join(sep)) + '</div>' + (s.note ? '<div class="ui note">' + esc(s.note) + '</div>' : '') + '</div>' +
        '<div class="gar price"><span class="yen">¥</span><span class="num">' + esc(s.price) + '</span></div></div>';
    }).join('');
  },
  curries: function (t, lang, esc) { return t.curries.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join(''); },
  drinks: function (t, lang, esc) { return t.drinks.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join(''); },
  naan: function (t, lang, esc) { return t.naan.map(function (n) { return '<li><span>' + esc(n.name) + '</span><span class="leader"></span><span class="gar b">' + esc(n.price) + '</span></li>'; }).join(''); },
  spice: function (t, lang, esc) {
    return t.spice.map(function (s, i) {
      var d = 10 + i * 5;
      return '<div class="sp"><span class="sp-dot" style="width:' + d + 'px;height:' + d + 'px"></span><span class="ui sp-l">' + esc(s.n) + ' ' + esc(s.label) + '</span></div>';
    }).join('');
  },
  dinnerSets: function (t, lang, esc) {
    var sep = lang === 'ja' ? '・' : ' · ';
    return t.dinnerSets.map(function (s) {
      return '<div class="dset"><span class="dset-n">' + esc(s.name) + '</span><span class="ui dset-i">' + esc(s.items.join(sep)) + '</span><span class="gar dset-p">¥' + esc(s.price) + '</span></div>';
    }).join('');
  },
  alaCarte: function (t, lang, esc) {
    return t.alaCarte.map(function (a) { return '<div class="ala-row"><span>' + esc(a.name) + '</span><span class="leader"></span><span class="gar p">¥' + esc(a.price) + '</span></div>'; }).join('');
  },
  courses: function (t, lang, esc) {
    return t.courses.map(function (c) {
      return '<div class="course"><div class="course-h"><span class="course-n">' + esc(c.name) + '</span><span class="gar course-p">¥' + esc(c.price) + '</span></div><div class="cz course-t">' + esc(c.time) + '</div><ul class="ui">' +
        c.notes.map(function (n) { return '<li>・' + esc(n) + '</li>'; }).join('') + '</ul></div>';
    }).join('');
  },
  accessRows: function (t, lang, esc) {
    return t.access.rows.map(function (r) { return '<div class="kv"><div class="k">' + esc(r.k) + '</div><div class="v">' + esc(r.v) + '</div></div>'; }).join('');
  }
};

// The curtain parts as you scroll into the page (and on hover on desktop).
(function () {
  var hero = document.querySelector('.noren'); if (!hero) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var ticking = false;
  function update() {
    ticking = false;
    var h = hero.offsetHeight || 1;
    var p = Math.min(1, Math.max(0, window.scrollY / (h * 0.7)));
    hero.style.setProperty('--part', p.toFixed(3));
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
})();
