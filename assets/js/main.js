(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('nav-open', !open);
      document.body.classList.toggle('nav-open', !open);
      toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('nav-open'); document.body.classList.remove('nav-open');
    }));
  }
  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get('subject').trim());
    const body = encodeURIComponent(`Name: ${data.get('name').trim()}\nEmail: ${data.get('email').trim()}\n\n${data.get('message').trim()}`);
    const feedback = document.getElementById('formFeedback');
    if (feedback) feedback.textContent = 'Opening your email application. Review the message and press Send to contact Shanti.';
    window.location.href = `mailto:katuashanti@gmail.com?subject=${subject}&body=${body}`;
  });
})();
