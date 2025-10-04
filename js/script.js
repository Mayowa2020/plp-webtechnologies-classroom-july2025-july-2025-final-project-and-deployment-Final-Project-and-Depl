// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = btn.nextElementSibling;
      if (nav) nav.classList.toggle('open');
    });
  });

  document.querySelectorAll('[id^=year]').forEach(el => el.textContent = new Date().getFullYear());

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('active');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail');
      const msg = document.getElementById('newsletterMsg');
      if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        msg.textContent = 'Please enter a valid email.';
        return;
      }
      msg.textContent = 'Thanks! You are subscribed.';
      email.value = '';
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const out = document.getElementById('contactMsg');

      if (!name.value.trim() || !/\S+@\S+\.\S+/.test(email.value) || !message.value.trim()) {
        out.textContent = 'Please fill all fields correctly.';
        return;
      }
      out.textContent = 'Sending...';
      setTimeout(() => {
        out.textContent = 'Message sent — we will reply soon.';
        contactForm.reset();
      }, 800);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
