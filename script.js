document.getElementById('year').textContent = new Date().getFullYear();

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate([
        { opacity: 0, transform: 'translateY(28px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' });
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: .08 });

document.querySelectorAll('.project,.experience-row,.skill-list>div,.stats,.about-copy').forEach(el => {
  el.style.opacity = 0;
  reveal.observe(el);
});
