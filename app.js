const cursor = document.querySelector('.cursor-orb');
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  setTimeout(() => preloader.classList.add('done'), 350);
});

window.addEventListener('pointermove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

document.querySelectorAll('a, .project').forEach((element) => {
  element.addEventListener('mouseenter', () => cursor.classList.add('is-link'));
  element.addEventListener('mouseleave', () => cursor.classList.remove('is-link'));
});

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('in-view'));
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => reveal.observe(element));

const parallaxItems = document.querySelectorAll('[data-parallax]');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.parallax);
    item.style.translate = `0 ${y * speed}px`;
  });
}, { passive: true });
