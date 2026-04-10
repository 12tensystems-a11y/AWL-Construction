// Nav scroll effect
window.addEventListener('scroll', () =>
  document.getElementById('nav').classList.toggle('on', scrollY > 70)
);

// Smooth scroll
function g(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Mobile menu
function toggleMenu() {
  const burger = document.getElementById('burger');
  const navR = document.getElementById('nav-r');
  burger.classList.toggle('open');
  navR.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('burger').classList.remove('open');
  document.getElementById('nav-r').classList.remove('open');
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  const navR = document.getElementById('nav-r');
  const burger = document.getElementById('burger');
  if (navR.classList.contains('open') && !navR.contains(e.target) && !burger.contains(e.target)) {
    closeMenu();
  }
});

// Reveal on scroll
const obs = new IntersectionObserver(
  es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      obs.unobserve(e.target);
    }
  }),
  { threshold: 0.07 }
);
document.querySelectorAll('.R').forEach(el => obs.observe(el));

// Form submit
function sub() {
  if (
    document.getElementById('fn').value.trim() &&
    document.getElementById('fe').value.trim()
  ) {
    document.getElementById('form-area').style.display = 'none';
    document.getElementById('fok').style.display = 'block';
  }
}
