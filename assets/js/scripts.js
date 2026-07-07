document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => observer.observe(el));

  const duration = 800;
  const navbar = document.querySelector('.navbar');
  const navbarHeight = () => (navbar ? navbar.getBoundingClientRect().height : 0);

  function easeInOutQuad(t) { return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t; }
  function animateScroll(start, end, duration) {
    const startTime = performance.now();
    return new Promise(resolve => {
      function frame(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutQuad(progress);
        window.scrollTo(0, Math.round(start + (end - start) * eased));
        if (progress < 1) requestAnimationFrame(frame); else resolve();
      }
      requestAnimationFrame(frame);
    });
  }
  document.querySelectorAll('.content table').forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-responsive-wrapper';
    wrapper.style.overflowX = 'auto';
    wrapper.style.maxWidth = '100%';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  document.querySelectorAll('.content pre').forEach(pre => {
    const wrapper = document.createElement('div');
    wrapper.className = 'code-copy-wrapper';
    wrapper.style.position = 'relative';

    const btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.setAttribute('aria-label', 'Copy code');
    btn.innerHTML = '<i class="bi bi-clipboard"></i>';

    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      const text = code ? code.textContent : pre.textContent;
      navigator.clipboard.writeText(text.trim()).then(() => {
        btn.innerHTML = '<i class="bi bi-check-lg"></i>';
        setTimeout(() => {
          btn.innerHTML = '<i class="bi bi-clipboard"></i>';
        }, 2000);
      });
    });

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    pre.appendChild(btn);
  });

  const logo = document.getElementById('logo');
  if (logo) {
    const letters = logo.querySelectorAll('.letter:not(.visible)');
    letters.forEach((letter, i) => {
      letter.style.transitionDelay = `${i * 40}ms`;
    });
    logo.addEventListener('mouseenter', () => {
      logo.classList.add('expanded');
    });
    logo.addEventListener('mouseleave', () => {
      letters.forEach((letter, i) => {
        letter.style.transitionDelay = `${(letters.length - i) * 30}ms`;
      });
      logo.classList.remove('expanded');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#' || href === '#0') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const start = window.scrollY || window.pageYOffset;
      const targetRect = target.getBoundingClientRect();
      const offset = navbarHeight();
      const end = start + targetRect.top - offset;
      animateScroll(start, end, duration).then(() => history.pushState(null, '', href));
    }, { passive: false });
  });

});
