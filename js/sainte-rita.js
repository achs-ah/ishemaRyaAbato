// Ishema Ry'Abato Academy School - SPA Page Router & Interactive Engine

document.addEventListener('DOMContentLoaded', () => {
  initSpaRouter();
  initMobileMenu();
  initGalleryFilter();
  initForms();
});

// ==========================================================================
// 1. SPA Page Router (Single Page Application - Dedicated Page Views)
// ==========================================================================
function initSpaRouter() {
  // Listen for clicks on any link or button with data-page attribute
  document.addEventListener('click', (e) => {
    const targetLink = e.target.closest('[data-page]');
    if (targetLink) {
      e.preventDefault();
      const pageId = targetLink.getAttribute('data-page');
      showPage(pageId);
    }
  });

  // Handle URL hash on initial load or browser back/forward buttons
  window.addEventListener('hashchange', handleHashRouting);
  handleHashRouting();
}

function handleHashRouting() {
  const hash = window.location.hash.replace('#', '').trim();
  const validPages = ['home', 'services', 'about', 'gallery', 'contact', 'join'];
  if (hash && validPages.includes(hash)) {
    showPage('page-' + hash, false);
  } else {
    showPage('page-home', false);
  }
}

function showPage(pageId, updateHash = true) {
  const pages = document.querySelectorAll('.page-view');
  let targetPage = document.getElementById(pageId);
  
  if (!targetPage) {
    targetPage = document.getElementById('page-home');
    pageId = 'page-home';
  }

  // Deactivate all pages and activate the target page view
  pages.forEach(p => p.classList.remove('active'));
  targetPage.classList.add('active');

  // Update navbar active state
  document.querySelectorAll('nav a.nav-link').forEach(link => {
    const linkPage = link.getAttribute('data-page');
    link.classList.toggle('active', linkPage === pageId);
  });

  // Update URL hash without re-triggering hashchange
  if (updateHash) {
    const rawName = pageId.replace('page-', '');
    history.pushState(null, null, '#' + rawName);
  }

  // Scroll smoothly to top of page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.showPage = showPage;

// ==========================================================================
// 2. Mobile Navigation Menu Toggle
// ==========================================================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('menuToggle');
  const navContainer = document.querySelector('.nav-container');

  if (toggleBtn && navContainer) {
    toggleBtn.addEventListener('click', () => {
      navContainer.classList.toggle('nav-active');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-link, .btn-join').forEach(link => {
      link.addEventListener('click', () => {
        navContainer.classList.remove('nav-active');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }
}

// ==========================================================================
// 3. Photo Gallery Filtering & Lightbox Preview
// ==========================================================================
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox click preview
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-overlay h4')?.textContent || 'Ishema Ry\'Abato Academy School';
      const subtitle = item.querySelector('.gallery-overlay span')?.textContent || '';

      if (lightboxModal && lightboxImg && img) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.innerHTML = `<strong>${title}</strong> - ${subtitle}`;
        }
        lightboxModal.style.display = 'flex';
      }
    });
  });
}

function closeLightbox() {
  const lightboxModal = document.getElementById('lightboxModal');
  if (lightboxModal) lightboxModal.style.display = 'none';
}
window.closeLightbox = closeLightbox;

// ==========================================================================
// 4. Form Submissions (English)
// ==========================================================================
function initForms() {
  // Contact Message Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || 'Dear Parent';
      alert(`Thank you, ${name}! Your message has been received at Ishema Ry'Abato Academy School. Our administration will contact you shortly.`);
      contactForm.reset();
    });
  }

  // Student Admission Pre-Registration Form
  const joinPageForm = document.getElementById('joinPageForm');
  if (joinPageForm) {
    joinPageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const studentName = document.getElementById('joinChildName')?.value || 'Student';
      const grade = document.getElementById('joinClassSelect')?.value || 'Selected Grade';
      const randomRef = 'IRA-2026-' + Math.floor(1000 + Math.random() * 9000);

      alert(`Thank you! Pre-registration for ${studentName} in (${grade}) has been successfully received at Ishema Ry'Abato Academy School.\n\nApplication Reference: ${randomRef}\nCampus Hotline: +250 788 456 677\n\nOur admissions registrar will contact you within 24 hours to finalize enrollment.`);
      joinPageForm.reset();
    });
  }
}
