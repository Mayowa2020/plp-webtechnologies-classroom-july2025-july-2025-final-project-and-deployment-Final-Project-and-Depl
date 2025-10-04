
document.addEventListener('DOMContentLoaded', () => {
  // nav toggle for small screens
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = document.querySelector('.site-nav');
      if(!nav) return;
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
      btn.setAttribute('aria-expanded', nav.style.display === 'block');
    });
  });

  // set year
  document.querySelectorAll('[id^="year"]').forEach(el => el.textContent = new Date().getFullYear());

  // reveal on scroll
  const revealElems = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('active'); });
    }, {threshold:0.12});
    revealElems.forEach(el => obs.observe(el));
  } else {
    const onScroll = () => {
      revealElems.forEach(el => {
        const r = el.getBoundingClientRect();
        if(r.top < window.innerHeight - 80) el.classList.add('active');
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // newsletter
  const newsletter = document.getElementById('newsletterForm');
  if(newsletter){
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail');
      const msg = document.getElementById('newsletterMsg');
      if(!email.value || !/\S+@\S+\.\S+/.test(email.value)){
        msg.textContent = 'Please enter a valid email.';
        return;
      }
      msg.textContent = 'Thanks — you are subscribed!';
      newsletter.reset();
    });
  }

  // contact form simulation
  const contact = document.getElementById('contactForm');
  if(contact){
    contact.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you — we received your message!');
      contact.reset();
    });
  }
});
