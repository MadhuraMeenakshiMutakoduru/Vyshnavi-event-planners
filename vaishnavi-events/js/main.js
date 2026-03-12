/* ================================================
   Vaishnavi Event Planners - Main JavaScript
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------
     NAVBAR: Scroll effect & active link tracking
  ----------------------------------------------- */
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* -----------------------------------------------
     HAMBURGER MENU: Mobile nav toggle
  ----------------------------------------------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* -----------------------------------------------
     ACTIVE NAV LINK: Highlight section in view
  ----------------------------------------------- */
  const sections   = document.querySelectorAll('section[id], div[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActiveLink() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.getAttribute('id');
      }
    });
    navAnchors.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* -----------------------------------------------
     SCROLL REVEAL: Animate elements on scroll
  ----------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* -----------------------------------------------
     COUNTER ANIMATION: Stats section
  ----------------------------------------------- */
  const counters = document.querySelectorAll('[data-count]');

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => countObserver.observe(c));

  function animateCounter(el) {
    const target   = parseInt(el.getAttribute('data-count'));
    const suffix   = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const step     = Math.ceil(duration / target);
    let current    = 0;

    const timer = setInterval(() => {
      current += Math.ceil(target / 60);
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current + suffix;
    }, step);
  }

  /* -----------------------------------------------
     LIGHTBOX: Gallery image modal
  ----------------------------------------------- */
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightbox-img');
  const lightboxCap  = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      if (lightboxCap) lightboxCap.textContent = img.alt || 'Event Gallery';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* -----------------------------------------------
     SMOOTH SCROLL: For anchor buttons outside nav
  ----------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  /* -----------------------------------------------
     GALLERY PLACEHOLDER IMAGES
     (unsplash images for visual richness)
  ----------------------------------------------- */
  const galleryData = [
    { src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80', alt: 'Wedding Decoration' },
    { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80', alt: 'Wedding Ceremony' },
    { src: 'https://images.unsplash.com/photo-1561494283-6e4db5e07a5d?w=800&q=80', alt: 'Floral Arrangements' },
    { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80', alt: 'Birthday Celebration' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Event Hall Setup' },
    { src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80', alt: 'Entertainment Show' },
    { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80', alt: 'Mehendi Ceremony' },
    { src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80', alt: 'Catering Spread' },
    { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80', alt: 'Corporate Event' },
  ];

  const galleryGrid = document.querySelector('.gallery-grid');
  if (galleryGrid) {
    galleryGrid.innerHTML = galleryData.map((item, i) => `
      <div class="gallery-item reveal reveal-delay-${(i % 4) + 1}">
        <img src="${item.src}" alt="${item.alt}" loading="lazy" />
        <div class="gallery-overlay">
          <div class="gallery-overlay-text">
            <span>🔍</span> ${item.alt}
          </div>
        </div>
      </div>
    `).join('');

    // Re-observe new elements
    galleryGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Re-attach lightbox click events
    galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        if (lightboxCap) lightboxCap.textContent = img.alt || 'Event Gallery';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  console.log('✨ Vaishnavi Event Planners website loaded!');
});
