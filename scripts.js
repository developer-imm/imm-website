// Interactive MM — shared client scripts
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const buildTag = document.getElementById('build-tag');
  if (buildTag) {
    const applyBuildLabel = (value) => {
      buildTag.textContent = `Build ${value}`;
    };
    applyBuildLabel('local');

    const repo = buildTag.dataset.repo;
    if (repo && window.fetch) {
      fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`, {
        headers: { Accept: 'application/vnd.github+json' }
      })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          const latest = Array.isArray(data) ? data[0] : null;
          if (latest && latest.sha) applyBuildLabel(latest.sha.slice(0, 7));
        })
        .catch(() => {});
    }
  }

  // Mobile menu
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const navId = menuToggle ? menuToggle.getAttribute('aria-controls') : null;
  const nav = navId ? document.getElementById(navId) : null;

  if (menuToggle && nav) {
    let pendingCloseHandler = null;

    const clearPendingCloseHandler = () => {
      if (pendingCloseHandler) {
        nav.removeEventListener('transitionend', pendingCloseHandler);
        pendingCloseHandler = null;
      }
    };

    const finishClose = () => {
      if (window.innerWidth < 640) {
        nav.classList.add('hidden');
        nav.classList.remove('flex');
      }
    };

    const openMenu = () => {
      clearPendingCloseHandler();
      nav.classList.remove('hidden');
      nav.classList.add('flex');
      menuToggle.setAttribute('aria-expanded', 'true');
      if (!nav.classList.contains('mobile-menu--open')) {
        requestAnimationFrame(() => nav.classList.add('mobile-menu--open'));
      }
    };

    const closeMenu = ({ immediate = false } = {}) => {
      clearPendingCloseHandler();
      menuToggle.setAttribute('aria-expanded', 'false');

      if (immediate) {
        nav.classList.remove('mobile-menu--open');
        finishClose();
        return;
      }
      if (!nav.classList.contains('mobile-menu--open')) {
        finishClose();
        return;
      }
      nav.classList.remove('mobile-menu--open');
      pendingCloseHandler = (event) => {
        if (event.target !== nav) return;
        finishClose();
        clearPendingCloseHandler();
      };
      nav.addEventListener('transitionend', pendingCloseHandler);
    };

    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      expanded ? closeMenu() : openMenu();
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a') && window.innerWidth < 640) closeMenu();
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuToggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 640) {
        clearPendingCloseHandler();
        nav.classList.remove('hidden', 'mobile-menu--open');
        menuToggle.setAttribute('aria-expanded', 'false');
        return;
      }
      if (menuToggle.getAttribute('aria-expanded') === 'true') openMenu();
      else closeMenu({ immediate: true });
    });
  }

  // Traction waitlist form (Google Forms POST, no-cors)
  const waitlistForm = document.getElementById('traction-waitlist-form');
  const waitlistSuccess = document.getElementById('traction-waitlist-success');
  const waitlistError = document.getElementById('traction-waitlist-error');
  if (waitlistForm && waitlistSuccess && waitlistError && window.fetch) {
    waitlistForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      waitlistSuccess.classList.add('hidden');
      waitlistError.classList.add('hidden');
      const formData = new FormData(waitlistForm);
      try {
        await fetch(waitlistForm.action, { method: 'POST', mode: 'no-cors', body: formData });
        waitlistForm.reset();
        waitlistSuccess.classList.remove('hidden');
      } catch (err) {
        waitlistError.classList.remove('hidden');
      }
    });
  }
})();
