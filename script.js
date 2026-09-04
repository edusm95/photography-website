// Mobile menu
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');
hamburger.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

// Close mobile menu on link click
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMobile.classList.remove('open'));
});

// Package tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// Form submit (placeholder)
document.getElementById('form-reserva').addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Gracias! Tu solicitud fue enviada. Pamela se pondrá en contacto contigo pronto.');
  e.target.reset();
});

// Smooth navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(138, 158, 135, 1)';
  } else {
    navbar.style.background = 'rgba(138, 158, 135, 0.97)';
  }
});
