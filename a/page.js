/* Variant A — Station Sign: list renderers and the nameplate flip. */
window.EVEREST_LISTS = {
  lunchSets: function (t, lang, esc) {
    return t.lunchSets.map(function (s) {
      return '<div class="fare"><div class="fare-name"><span class="n">' + esc(s.name) + '</span><span class="lat a">' + esc(s.nameAlt) + '</span>' +
        (s.note ? '<span class="note-red">' + esc(s.note) + '</span>' : '') + '</div>' +
        '<div class="fare-items">' + s.items.map(function (i) { return '<span class="chip">' + esc(i) + '</span>'; }).join('') + '</div>' +
        '<div class="lat fare-price"><span class="yen">¥</span><span class="num">' + esc(s.price) + '</span></div></div>';
    }).join('');
  },
  curries: function (t, lang, esc) { return t.curries.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join(''); },
  drinks: function (t, lang, esc) { return t.drinks.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join(''); },
  naan: function (t, lang, esc) { return t.naan.map(function (n) { return '<li><span>' + esc(n.name) + '</span><span class="lat b">' + esc(n.price) + '</span></li>'; }).join(''); },
  spice: function (t, lang, esc) {
    return '<div class="spice-line" aria-hidden="true"></div>' + t.spice.map(function (s) {
      return '<div class="sp"><span class="lat sp-n">' + esc(s.n) + '</span><span class="sp-l">' + esc(s.label) + '</span></div>';
    }).join('');
  },
  dinnerSets: function (t, lang, esc) {
    return t.dinnerSets.map(function (s) {
      return '<div class="dset"><span class="dset-n">' + esc(s.name) + '</span><span class="dset-i">' + esc(s.items.join(lang === 'ja' ? ' ／ ' : ' / ')) + '</span><span class="lat dset-p">¥' + esc(s.price) + '</span></div>';
    }).join('');
  },
  alaCarte: function (t, lang, esc) {
    return t.alaCarte.map(function (a) {
      return '<div class="ala-row"><span class="ala-n">' + esc(a.name) + '</span><span class="ala-d">' + esc(a.desc) + '</span><span class="lat ala-p">¥' + esc(a.price) + '</span></div>';
    }).join('');
  },
  courses: function (t, lang, esc) {
    return t.courses.map(function (c) {
      return '<div class="course"><div class="course-body"><div class="course-h"><span class="course-n">' + esc(c.name) + '</span><span class="lat course-t">' + esc(c.time) + '</span></div><ul>' +
        c.notes.map(function (n) { return '<li><span class="dash">—</span>' + esc(n) + '</li>'; }).join('') + '</ul></div>' +
        '<div class="lat course-price"><span class="v">¥' + esc(c.price) + '</span></div></div>';
    }).join('');
  },
  accessRows: function (t, lang, esc) {
    return t.access.rows.map(function (r) { return '<div class="kv"><div class="k">' + esc(r.k) + '</div><div class="v">' + esc(r.v) + '</div></div>'; }).join('');
  }
};

// The route-map marker slides along the line to the current station.
(function () {
  var route = document.querySelector('.route'), marker = document.querySelector('.route-marker'); if (!route || !marker) return;
  function moveTo(link) {
    var dot = link.querySelector('.dot'); if (!dot) return;
    // Offset geometry relative to .route: independent of scroll position and viewport size.
    var x = dot.offsetWidth / 2, y = dot.offsetHeight / 2, n = dot;
    while (n && n !== route) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
    marker.style.left = x + 'px'; marker.style.top = y + 'px'; marker.classList.add('on');
  }
  document.addEventListener('everest:section', function (e) { moveTo(e.detail.link); });
  window.addEventListener('resize', function () { var c = route.querySelector('.station.cur'); if (c) moveTo(c); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { var c = route.querySelector('.station.cur'); if (c) moveTo(c); });
})();

// The nameplate flips when the language changes (the signature moment).
(function () {
  var first = true;
  document.addEventListener('everest:lang', function (e) {
    var plate = document.getElementById('plate'); if (!plate) return;
    if (first) { first = false; return; }
    plate.classList.remove('flip-ja', 'flip-en'); void plate.offsetWidth;
    plate.classList.add(e.detail.lang === 'ja' ? 'flip-ja' : 'flip-en');
  });
})();
