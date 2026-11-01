// EN / TR toggle. Every text exists in both languages; CSS hides the other one.
(function () {
  var KEY = 'swekit-lang';
  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function set(lang) {
    document.documentElement.lang = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    var buttons = document.querySelectorAll('.lang button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', buttons[i].dataset.set === lang ? 'true' : 'false');
    }
  }
  var initial = saved() || ((navigator.language || 'en').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en');
  set(initial);
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.lang button');
    if (b) set(b.dataset.set);
  });
})();
