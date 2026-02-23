// main.js — configura ScrollReveal e pequenas interações

// Default ScrollReveal configuration
const sr = ScrollReveal({
  distance: '40px',
  duration: 700,
  easing: 'cubic-bezier(.2,.9,.3,1)',
  origin: 'bottom',
  interval: 80,
  reset: false
});

// Reveal groups
sr.reveal('.cabecalho_brand, .cabecalho_link', { origin: 'top', distance: '20px', interval: 30 });
sr.reveal('.hero_content', { origin: 'left', distance: '40px' });
sr.reveal('.apresentacao_imagem__wrap', { origin: 'right', distance: '40px' });
sr.reveal('.apresentacao__botao, .cta_group a', { scale: 0.98, origin: 'bottom' });
sr.reveal('.bento, .bento-aside', { interval: 60 });

// Add small interactive focus for keyboard users
document.querySelectorAll('.apresentacao__botao').forEach(btn => {
  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') btn.classList.add('glow');
  });
  btn.addEventListener('blur', () => btn.classList.remove('glow'));
});

// Optional: reduce motion respects
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  sr.destroy();
}
