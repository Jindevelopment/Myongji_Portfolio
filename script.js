/* ═══════════════════════════════════════
   AlM — Algorithm Myongji
   script.js
═══════════════════════════════════════ */

/* ── Custom cursor ── */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  if (themeToggle) {
    const label = theme === 'dark' ? '화이트 모드' : '다크 모드';
    themeToggle.setAttribute(
      'aria-label',
      `${label}로 변경`
    );
    themeToggle.setAttribute('title', label);
    const themeToggleText = themeToggle.querySelector('.theme-toggle-text');
    if (themeToggleText) themeToggleText.textContent = label;
  }
}

if (themeToggle) {
  setTheme(document.documentElement.dataset.theme || 'dark');

  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });
}

document.addEventListener('mousemove', e => {
  cursor.style.transform     = `translate(${e.clientX - 5}px,  ${e.clientY - 5}px)`;
  cursorRing.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
});

/* ── Floating particles ── */
const pContainer = document.getElementById('particles');

for (let i = 0; i < 18; i++) {
  const p    = document.createElement('div');
  p.className = 'particle';
  const size  = Math.random() * 3 + 1;
  p.style.cssText = `
    width:              ${size}px;
    height:             ${size}px;
    left:               ${Math.random() * 100}%;
    animation-duration: ${Math.random() * 20 + 15}s;
    animation-delay:    ${Math.random() * 15}s;
    opacity:            ${Math.random() * 0.4 + 0.1};
  `;
  pContainer.appendChild(p);
}

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Spec tabs ── */
function switchSpec(id, btn) {
  document.querySelectorAll('.spec-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.spec-tab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

/* ── SWOT tabs ── */
function switchSwot(id, btn) {
  document.querySelectorAll('.swot-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.swot-tab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}
