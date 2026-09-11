// ---------------------------------------------------
// Footer year
// ---------------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------------------------------------------
// Hero: drifting perspective grid (single orchestrated motion)
// ---------------------------------------------------
(function heroGrid(){
  const canvas = document.getElementById('grid-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w, h, dpr;
  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  const horizon = () => h * 0.42;
  let offset = 0;

  function draw(){
    ctx.clearRect(0, 0, w, h);

    const hz = horizon();
    const spacingBase = 46;
    const vanishX = w * 0.5;

    // vertical converging lines
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    const cols = 22;
    for(let i = -cols; i <= cols; i++){
      const xBottom = vanishX + i * spacingBase * 2.6;
      ctx.beginPath();
      ctx.moveTo(vanishX, hz);
      ctx.lineTo(xBottom, h);
      ctx.stroke();
    }

    // horizontal lines, receding toward horizon, drifting
    const rows = 14;
    for(let i = 0; i < rows; i++){
      const t = (i + (offset % 1)) / rows;
      const easedT = Math.pow(t, 2.2);
      const y = hz + easedT * (h - hz);
      const alpha = 0.14 * (1 - t) + 0.02;
      ctx.strokeStyle = `rgba(255,122,51,${alpha.toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    if(!prefersReduced){
      offset += 0.0022;
      requestAnimationFrame(draw);
    }
  }
  draw();
})();

// ---------------------------------------------------
// Work videos: lazy-load source, play only while in view
// ---------------------------------------------------
(function workVideos(){
  const videos = document.querySelectorAll('.work-media video');
  if(!videos.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if(entry.isIntersecting){
        if(!video.src && video.dataset.src){
          video.src = video.dataset.src;
          video.addEventListener('loadeddata', () => video.classList.add('is-ready'), { once: true });
        }
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.35 });

  videos.forEach((v) => io.observe(v));
})();

// ---------------------------------------------------
// Copy email button
// ---------------------------------------------------
(function copyEmail(){
  const btn = document.getElementById('email-copy');
  if(!btn) return;
  const label = btn.querySelector('.email-copy-label');
  const defaultLabel = label.textContent;

  btn.addEventListener('click', async () => {
    const email = btn.dataset.email;
    try{
      await navigator.clipboard.writeText(email);
      label.textContent = 'Copied!';
    }catch(e){
      // fallback: select-friendly
      label.textContent = email;
    }
    setTimeout(() => { label.textContent = defaultLabel; }, 1800);
  });
})();
