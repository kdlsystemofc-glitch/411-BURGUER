/**
 * 411 BURGUER — Production Interactive Engine
 * Client: 411 Burguer (Vila Mariana, SP)
 * High-performance vanilla JavaScript interaction suite
 */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================================
  // 1. SCROLL-DRIVEN HEADER MORPHING & PINNING
  // ============================================================
  const headerPill = document.querySelector('.header-pill');
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateHeaderOnScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 35) {
      headerPill?.classList.add('scrolled');
    } else {
      headerPill?.classList.remove('scrolled');
    }
    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeaderOnScroll);
      ticking = true;
    }
  }, { passive: true });

  updateHeaderOnScroll();


  // ============================================================
  // 2. MOBILE DRAWER NAVIGATION
  // ============================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }


  // ============================================================
  // 3. HERO 3D SLIDE CONTROLLER & CROSS-FADE CHOREOGRAPHY
  // ============================================================
  const slides = [
    {
      line1: "SUPER BURGUER",
      line2: "& BACON ARTESANAL",
      adjLeft: ["BATATA", "FRITA"],
      adjRight: ["SMASH", "CRISPY"],
      imgSrc: "assets/hero-burger-cutout.png",
      imgAlt: "411 Super Burguer Artesanal: Pão Brioche, Blend 140g, Cheddar Derretido, Bacon Crocante",
      stickerText: "140G"
    },
    {
      line1: "BATATA FRITA",
      line2: "& MAIONESE VERDE",
      adjLeft: ["SMASH", "CRISPY"],
      adjRight: ["SUPER", "BURGUER"],
      imgSrc: "assets/hero-fries-cutout.png",
      imgAlt: "Porção de Batata Frita Crocante com Maionese Verde de Ervas",
      stickerText: "RÚSTICA"
    },
    {
      line1: "DOUBLE SMASH",
      line2: "& CHEESE CRISPY",
      adjLeft: ["SUPER", "BURGUER"],
      adjRight: ["BATATA", "FRITA"],
      imgSrc: "assets/hero-smash-cutout.png",
      imgAlt: "Double Smash Burger 411 com Crosta Crocante de Queijo e Molho Especial",
      stickerText: "DUPLO"
    }
  ];

  let currentHeroSlide = 0;
  const headlineEl = document.getElementById('hero-headline');
  const productImg = document.getElementById('hero-main-img');
  const leftAdj = document.querySelector('.adjacent-left');
  const rightAdj = document.querySelector('.adjacent-right');
  const stickerCenter = document.querySelector('.sticker-center-text');
  const heroDots = document.querySelectorAll('.hero-pagination-dots .dot');

  function setHeroSlide(index) {
    if (!slides[index] || !headlineEl || !productImg) return;
    
    currentHeroSlide = index;
    const slide = slides[index];

    headlineEl.style.transition = 'opacity 0.2s cubic-bezier(0.2, 1, 0.2, 1), transform 0.2s cubic-bezier(0.2, 1, 0.2, 1)';
    productImg.style.transition = 'opacity 0.2s cubic-bezier(0.2, 1, 0.2, 1), transform 0.2s cubic-bezier(0.2, 1, 0.2, 1)';
    headlineEl.style.opacity = '0';
    headlineEl.style.transform = 'translateY(12px)';
    productImg.style.opacity = '0';
    productImg.style.transform = 'scale(0.92)';

    setTimeout(() => {
      headlineEl.innerHTML = `
        <span class="hero-headline-line1">${slide.line1}</span>
        <span class="hero-headline-line2">${slide.line2}</span>
      `;
      
      if (leftAdj) {
        leftAdj.innerHTML = `<span>${slide.adjLeft[0]}</span><span>${slide.adjLeft[1]}</span>`;
      }
      if (rightAdj) {
        rightAdj.innerHTML = `<span>${slide.adjRight[0]}</span><span>${slide.adjRight[1]}</span>`;
      }
      if (stickerCenter) {
        stickerCenter.textContent = slide.stickerText;
      }

      productImg.src = slide.imgSrc;
      productImg.alt = slide.imgAlt;

      headlineEl.style.opacity = '1';
      headlineEl.style.transform = 'translateY(0)';
      productImg.style.opacity = '1';
      productImg.style.transform = 'scale(1)';
    }, 180);

    heroDots.forEach((dot, dIdx) => {
      dot.classList.toggle('active', dIdx === index);
    });
  }

  heroDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      setHeroSlide(idx);
    });
  });


  // ============================================================
  // 4. HERO 3D MOUSE PARALLAX (SUBTLE DESKTOP INTERACTION)
  // ============================================================
  const heroSection = document.querySelector('.hero-section');
  const heroProductFrame = document.querySelector('.hero-centerpiece-wrapper');
  const floatingSticker = document.querySelector('.floating-sticker-badge');

  if (heroSection && heroProductFrame && !prefersReducedMotion && window.innerWidth > 1024) {
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 24; // max 24px drift
      mouseY = y * 24;
    });

    heroSection.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
    });

    function animateHeroParallax() {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (heroProductFrame) {
        heroProductFrame.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      if (floatingSticker) {
        floatingSticker.style.transform = `rotate(-14deg) translate3d(${currentX * 1.4}px, ${currentY * 1.4}px, 0)`;
      }

      requestAnimationFrame(animateHeroParallax);
    }
    animateHeroParallax();
  }


  // ============================================================
  // 5. GPU SCROLL REVEAL (INTERSECTION OBSERVER ENGINE)
  // ============================================================
  const revealElements = document.querySelectorAll('.reveal-init, .reveal-stagger');
  const isHeadless = navigator.userAgent.toLowerCase().includes('headless');

  if ('IntersectionObserver' in window && !prefersReducedMotion && !isHeadless) {
    document.documentElement.classList.add('js-interactive');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }


  // ============================================================
  // 6. CATEGORY FILTER CHIPS (SCENE 2 FLUID TRANSITIONS)
  // ============================================================
  const filterChips = document.querySelectorAll('.filter-chip');
  const productItems = document.querySelectorAll('.product-spec-item');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const cat = chip.getAttribute('data-cat');
      productItems.forEach((item, index) => {
        const matches = (cat === 'all' || item.getAttribute('data-cat') === cat);
        if (matches) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = item.classList.contains('active-center-item') ? 'scale(1.08)' : 'translateY(0)';
          }, index * 40);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(10px) scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });


  // ============================================================
  // 7. PRODUCT SPECTRUM HORIZONTAL CONTROLS (SCENE 2)
  // ============================================================
  const sliderTrack = document.getElementById('spectrum-track');
  const sliderPrev = document.getElementById('slider-prev');
  const sliderNext = document.getElementById('slider-next');

  if (sliderTrack && sliderPrev && sliderNext) {
    sliderPrev.addEventListener('click', () => {
      sliderTrack.parentElement.scrollBy({ left: -320, behavior: 'smooth' });
    });
    sliderNext.addEventListener('click', () => {
      sliderTrack.parentElement.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }


  // ============================================================
  // 8. HORIZONTAL FOLDER ACCORDION INTERACTION (SCENE 6)
  // ============================================================
  const accordionPanels = document.querySelectorAll('.services-accordion-panel');

  accordionPanels.forEach(panel => {
    panel.addEventListener('click', () => {
      if (panel.classList.contains('active')) return;
      accordionPanels.forEach(p => p.classList.remove('active'));
      panel.classList.add('active');
    });
  });


  // ============================================================
  // 9. NEWSLETTER FORM SUBMIT FEEDBACK INTERACTION (SCENE 8)
  // ============================================================
  const newsForm = document.querySelector('.vip-newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = newsForm.querySelector('.btn-pill-news-submit');
      const inputs = newsForm.querySelectorAll('.news-input');
      
      if (submitBtn) {
        submitBtn.textContent = "✔ Cadastrado com Sucesso!";
        submitBtn.style.backgroundColor = "#2D6A4F";
        submitBtn.style.color = "#FFFFFF";

        setTimeout(() => {
          submitBtn.textContent = "Cadastrar ›";
          submitBtn.style.backgroundColor = "#1A1A1A";
          submitBtn.style.color = "#FFFFFF";
          inputs.forEach(input => input.value = '');
        }, 3000);
      }
    });
  }


  // ============================================================
  // 10. SMOOTH LINK ANCHOR SCROLLING WITH OFFSET
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

});
