// Interactive MM — shared client scripts
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Hairline under the header once the page scrolls
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // English / Spanish switch on the legal pages. The inline script in <head> has
  // already set <html lang>; here the reader can change it, and the choice is remembered.
  const langButtons = document.querySelectorAll('[data-set-lang]');
  if (langButtons.length) {
    const root = document.documentElement;
    const titles = { en: document.title, es: root.dataset.titleEs || document.title };

    const applyLang = (lang) => {
      root.lang = lang;
      document.title = titles[lang];
      langButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setLang === lang)));
    };

    // Spanish section ids are the English ones with an "es-" prefix; follow a
    // section link to its counterpart in whichever language is showing.
    const followHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      if (!id) return;
      const shown = root.lang === 'es' ? (id.startsWith('es-') ? id : 'es-' + id) : id.replace(/^es-/, '');
      const target = shown !== id && document.getElementById(shown);
      if (target) target.scrollIntoView();
    };

    langButtons.forEach((button) => button.addEventListener('click', () => {
      const lang = button.dataset.setLang;
      if (lang === root.lang) return;
      try { localStorage.setItem('lang', lang); } catch (e) { /* private mode: still switch for this visit */ }
      const url = new URL(location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url);
      }
      applyLang(lang);
    }));

    applyLang(root.lang === 'es' ? 'es' : 'en');
    followHash();
    window.addEventListener('hashchange', followHash);
  }

  // Mobile menu
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = toggle ? document.getElementById(toggle.getAttribute('aria-controls')) : null;
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !nav.contains(event.target) && !toggle.contains(event.target)) {
      setOpen(false);
    }
  });

  window.matchMedia('(min-width: 721px)').addEventListener('change', (mq) => {
    if (mq.matches) setOpen(false);
  });
})();
