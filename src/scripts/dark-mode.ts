const THEME_KEY = 'zadost106_theme';

function getPreferredTheme(): 'light' | 'dark' {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: 'light' | 'dark') {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim');
  }
}

function initDarkMode() {
  applyTheme(getPreferredTheme());

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Respect system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

initDarkMode();
