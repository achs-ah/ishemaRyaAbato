// Main Application Controller for Ishema rya Abato School Website

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initMobileMenu();
  initStickyHeader();
  initStatsCounter();
  initGalleryFilter();
  initModals();
  initContactForm();
  initToast();

  // Initialize sub-modules
  if (window.initFeeCalculator) window.initFeeCalculator();
  if (window.initAdmissionsWizard) window.initAdmissionsWizard();
  if (window.initParentPortal) window.initParentPortal();
});

// Toast System
function initToast() {
  window.showToast = function (message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const bgColors = {
      success: 'bg-emerald-600 text-white',
      error: 'bg-red-600 text-white',
      info: 'bg-slate-900 text-white'
    };
    const icons = {
      success: 'fa-circle-check',
      error: 'fa-triangle-exclamation',
      info: 'fa-circle-info'
    };

    toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl transition-all duration-300 transform translate-y-2 opacity-0 text-sm font-medium ${bgColors[type] || bgColors.info}`;
    toast.innerHTML = `
      <i class="fas ${icons[type] || icons.info} text-lg"></i>
      <span class="flex-1">${message}</span>
      <button class="opacity-75 hover:opacity-100 ml-2" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    });

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  };
}

// Multilingual Switcher
function initLanguageSwitcher() {
  const currentLang = localStorage.getItem('ira_lang') || 'en';
  setLanguage(currentLang);

  const langSelects = document.querySelectorAll('.lang-selector-btn');
  langSelects.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });
}

function setLanguage(lang) {
  if (!window.translations || !window.translations[lang]) return;
  localStorage.setItem('ira_lang', lang);

  const dict = window.translations[lang];

  // Update text content of elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Highlight active language button
  document.querySelectorAll('.lang-selector-btn').forEach(btn => {
    const bLang = btn.getAttribute('data-lang');
    if (bLang === lang) {
      btn.classList.add('bg-amber-400', 'text-slate-900', 'font-bold');
      btn.classList.remove('text-slate-300', 'hover:text-white');
    } else {
      btn.classList.remove('bg-amber-400', 'text-slate-900', 'font-bold');
      btn.classList.add('text-slate-300', 'hover:text-white');
    }
  });

  // Active label
  const langLabel = document.getElementById('current-lang-code');
  if (langLabel) langLabel.textContent = lang.toUpperCase();
}

// Mobile Menu Toggle
function initMobileMenu() {
  const btnOpen = document.getElementById('btn-mobile-menu');
  const btnClose = document.getElementById('btn-close-mobile-menu');
  const drawer = document.getElementById('mobile-menu-drawer');
  const overlay = document.getElementById('mobile-menu-overlay');

  function openMenu() {
    if (drawer && overlay) {
      drawer.classList.remove('translate-x-full');
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    if (drawer && overlay) {
      drawer.classList.add('translate-x-full');
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (btnOpen) btnOpen.addEventListener('click', openMenu);
  if (btnClose) btnClose.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Close when clicking nav links inside mobile menu
  document.querySelectorAll('#mobile-menu-drawer a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Sticky Header & Back to top
function initStickyHeader() {
  const header = document.getElementById('main-header');
  const backToTop = document.getElementById('btn-back-to-top');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 80;
    if (header) {
      header.classList.toggle('bg-slate-900/95', scrolled);
      header.classList.toggle('backdrop-blur-md', scrolled);
      header.classList.toggle('shadow-lg', scrolled);
      header.classList.toggle('py-2', scrolled);
      header.classList.toggle('py-3.5', !scrolled);
    }
    if (backToTop) {
      backToTop.classList.toggle('opacity-100', window.scrollY > 400);
      backToTop.classList.toggle('pointer-events-auto', window.scrollY > 400);
      backToTop.classList.toggle('opacity-0', window.scrollY <= 400);
      backToTop.classList.toggle('pointer-events-none', window.scrollY <= 400);
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Stats Counter Animation
function initStatsCounter() {
  const statElements = document.querySelectorAll('.counter-val');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      statElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let current = 0;
        const step = Math.max(1, Math.floor(target / 45));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target + suffix;
            clearInterval(timer);
          } else {
            el.textContent = current + suffix;
          }
        }, 30);
      });
    }
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-counter-section');
  if (statsSection) observer.observe(statsSection);
}

// Gallery Filter & Lightbox
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-900', 'font-bold');
        b.classList.add('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
      });
      btn.classList.add('bg-amber-500', 'text-slate-900', 'font-bold');
      btn.classList.remove('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');

      const filter = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
          item.classList.add('animate-fade-in');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Lightbox click
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title')?.textContent || '';
      const caption = item.querySelector('.gallery-caption')?.textContent || '';

      const lightboxModal = document.getElementById('gallery-lightbox-modal');
      const lightboxImg = document.getElementById('lightbox-image');
      const lightboxTitle = document.getElementById('lightbox-title');
      const lightboxCaption = document.getElementById('lightbox-caption');

      if (lightboxModal && lightboxImg && img) {
        lightboxImg.src = img.src;
        if (lightboxTitle) lightboxTitle.textContent = title;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightboxModal.classList.remove('hidden');
        lightboxModal.classList.add('flex');
      }
    });
  });
}

function closeLightbox() {
  const modal = document.getElementById('gallery-lightbox-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
window.closeLightbox = closeLightbox;

// General Modals (Tour Booking, etc.)
function initModals() {
  const tourBtns = document.querySelectorAll('.btn-open-tour-modal');
  const tourModal = document.getElementById('tour-booking-modal');

  tourBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (tourModal) {
        tourModal.classList.remove('hidden');
        tourModal.classList.add('flex');
      }
    });
  });
}

function closeTourModal() {
  const modal = document.getElementById('tour-booking-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
window.closeTourModal = closeTourModal;

// Contact Form submission simulation
function initContactForm() {
  const form = document.getElementById('contact-us-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value || 'Friend';
      window.showToast?.(`Murakoze cyane, ${name}! Your inquiry has been received. Our admissions team will contact you shortly.`, 'success');
      form.reset();
    });
  }

  const tourForm = document.getElementById('tour-booking-form');
  if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.showToast?.('Your campus visit has been scheduled! A confirmation SMS and email have been sent.', 'success');
      closeTourModal();
      tourForm.reset();
    });
  }
}
