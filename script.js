// ============ Mobile nav ============
const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============ Lazy-load + play-in-view for project/about videos ============
// Performance-conscious: only load and play videos once they're on screen,
// pause the moment they leave, so we're never running a dozen loops at once.
const lazyVideos = document.querySelectorAll('.lazy-video');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;
    if (entry.isIntersecting) {
      if (!video.src && video.dataset.src) {
        video.src = video.dataset.src;
      }
      if (!reducedMotion) {
        video.play().catch(() => {});
      }
    } else {
      video.pause();
    }
  });
}, { threshold: 0.25 });

lazyVideos.forEach(v => io.observe(v));

// Hero video: respect reduced motion (pause the big autoplay loop)
if (reducedMotion) {
  const hero = document.querySelector('.hero-video');
  if (hero) hero.pause();
}

// ============ Copy email ============
const emailBtn = document.getElementById('email-copy');
const copyConfirm = document.getElementById('copy-confirm');

emailBtn.addEventListener('click', async () => {
  const email = emailBtn.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
  } catch (e) {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = email;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  copyConfirm.classList.add('show');
  setTimeout(() => copyConfirm.classList.remove('show'), 2000);
});

// ============ Full-sequence video modal ============
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');

document.querySelectorAll('[data-open-full]').forEach(btn => {
  btn.addEventListener('click', () => {
    modalVideo.src = btn.dataset.openFull;
    modal.hidden = false;
    modalVideo.play().catch(() => {});
  });
});

document.querySelectorAll('[data-close-modal]').forEach(el => {
  el.addEventListener('click', () => {
    modal.hidden = true;
    modalVideo.pause();
    modalVideo.src = '';
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hidden) {
    modal.hidden = true;
    modalVideo.pause();
    modalVideo.src = '';
  }
});

// ============ Footer year ============
document.getElementById('year').textContent = new Date().getFullYear();
