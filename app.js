document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Dynamic text animation for the hero section
  const texts = ["Web Developer", "Competitive Programmer", "Tech Enthusiast"];
  let index = 0;
  const span = document.querySelector(".hero-subtitle-highlight");

  if (span) {
    setInterval(() => {
      span.style.opacity = 0; // fade out
      setTimeout(() => {
        index = (index + 1) % texts.length;
        span.textContent = texts[index];
        span.style.opacity = 1; // fade in
      }, 500);
    }, 2500);
  }

  // Intersection Observer for scroll-in effects
  const slideInElements = document.querySelectorAll('.slide-in-element');
  const observerOptions = {
    root: null, // relative to viewport
    rootMargin: '0px',
    threshold: 0.1 // trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  slideInElements.forEach(element => {
    observer.observe(element);
  });

  // Theme toggle functionality
  const themeToggleBtn = document.querySelector('.theme-toggle-btn');
  const body = document.body;

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
  }

  themeToggleBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
      body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
});