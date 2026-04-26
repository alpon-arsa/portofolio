/* ===== LOADER ===== */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initReveal();
  }, 1800);
});

/* ===== STAR CANVAS ===== */
(function initStars() {
  const canvas = document.getElementById('starCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  let shootingStars = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); buildStars(); });

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function buildStars() {
    stars = [];
    const count = Math.floor((W * H) / 4000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: rand(0, W),
        y: rand(0, H),
        r: rand(0.3, 1.6),
        alpha: rand(0.2, 1),
        speed: rand(0.0003, 0.001),
        phase: rand(0, Math.PI * 2),
        // subtle drift
        dx: rand(-0.04, 0.04),
        dy: rand(-0.02, 0.02),
      });
    }
  }
  buildStars();

  function spawnShootingStar() {
    const startX = rand(W * 0.1, W * 0.9);
    const startY = rand(0, H * 0.4);
    shootingStars.push({
      x: startX, y: startY,
      len: rand(80, 180),
      speed: rand(6, 14),
      angle: rand(Math.PI / 6, Math.PI / 3),
      alpha: 1,
      life: 0,
      maxLife: rand(40, 80),
    });
  }

  // Spawn shooting stars periodically
  setInterval(() => {
    if (Math.random() < 0.6) spawnShootingStar();
  }, 2800);

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    frame++;

    // Draw regular stars
    stars.forEach(s => {
      s.x += s.dx;
      s.y += s.dy;
      if (s.x < 0) s.x = W;
      if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H;
      if (s.y > H) s.y = 0;

      const twinkle = 0.5 + 0.5 * Math.sin(frame * s.speed * 60 + s.phase);
      const a = s.alpha * (0.4 + 0.6 * twinkle);

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,220,255,${a})`;
      ctx.fill();

      // Occasional bright star with glow
      if (s.r > 1.2) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150,200,255,${a * 0.15})`;
        ctx.fill();
      }
    });

    // Draw shooting stars
    shootingStars = shootingStars.filter(ss => ss.life < ss.maxLife);
    shootingStars.forEach(ss => {
      ss.life++;
      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.alpha = 1 - ss.life / ss.maxLife;

      const tailX = ss.x - Math.cos(ss.angle) * ss.len;
      const tailY = ss.y - Math.sin(ss.angle) * ss.len;

      const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
      grad.addColorStop(0, `rgba(180,220,255,0)`);
      grad.addColorStop(0.7, `rgba(200,230,255,${ss.alpha * 0.6})`);
      grad.addColorStop(1, `rgba(255,255,255,${ss.alpha})`);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(ss.x, ss.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Head glow
      ctx.beginPath();
      ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${ss.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

/* ===== CUSTOM CURSOR ===== */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top  = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .tool-card, .project-large, .project-small').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    follower.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    follower.classList.remove('hover');
  });
});

/* ===== NAV SCROLL ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveNav();
  toggleBackToTop();
});

/* ===== HAMBURGER MENU ===== */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ===== SCROLL REVEAL ===== */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger counter animation when about section is visible
        if (entry.target.classList.contains('about-card')) {
          animateCounters();
        }
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

/* ===== COUNTER ANIMATION ===== */
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    if (el.dataset.animated) return;
    el.dataset.animated = 'true';

    const target  = parseInt(el.dataset.target) || 0;
    const suffix  = el.dataset.suffix || '';
    let current   = 0;
    const step    = Math.max(1, target / 60);

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 25);
  });
}

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ===== ACTIVE NAV LINK ===== */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === '#' + current;
    link.style.color = isActive ? 'var(--text)' : '';
  });
}

/* ===== BACK TO TOP ===== */
const backToTopBtn = document.getElementById('backToTop');

function toggleBackToTop() {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn     = contactForm.querySelector('.btn-transmit');
    const btnText = btn.querySelector('.btn-text');
    const original = btnText.textContent;

    btn.style.background = '#22c55e';
    btnText.textContent  = 'TRANSMISI BERHASIL ✓';
    btn.disabled = true;

    setTimeout(() => {
      btn.style.background = '';
      btnText.textContent  = original;
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}

/* ===== LOGO GLITCH EFFECT ===== */
const logo = document.querySelector('.logo-text');
if (logo) {
  logo.addEventListener('mouseenter', () => {
    logo.style.animation = 'glitch 0.3s ease';
    setTimeout(() => { logo.style.animation = ''; }, 300);
  });
}

// Inject glitch keyframes
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
  @keyframes glitch {
    0%   { transform: translate(0); }
    20%  { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
    40%  { transform: translate(2px, -2px); filter: hue-rotate(180deg); }
    60%  { transform: translate(-1px, 1px); filter: hue-rotate(270deg); }
    80%  { transform: translate(1px, -1px); filter: hue-rotate(360deg); }
    100% { transform: translate(0); filter: none; }
  }
`;
document.head.appendChild(glitchStyle);

/* ===== PARALLAX BLOBS ===== */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const blobTR  = document.querySelector('.hero-blob--tr');
  const blobBL  = document.querySelector('.hero-blob--bl');
  if (blobTR) blobTR.style.transform = `translateY(${scrollY * 0.2}px)`;
  if (blobBL) blobBL.style.transform = `translateY(${scrollY * 0.15}px)`;
});
