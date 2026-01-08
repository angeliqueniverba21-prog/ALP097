const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const reveals = document.querySelectorAll('.reveal');

// Hamburger toggle
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Scroll reveal
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
