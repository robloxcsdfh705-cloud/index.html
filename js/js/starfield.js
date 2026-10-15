// 星空 Canvas 動畫
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let w, h, stars = [];
function resizeCanvas() {
  w = canvas.width = innerWidth; h = canvas.height = innerHeight; stars = [];
  for (let i = 0; i < w * h / 4000; i++)
    stars.push({ x: Math.random()*w, y: Math.random()*h, r: Math.random()*1.5+.3, t: Math.random()*6.28, s: Math.random()*.03+.01, d: Math.random()*.5+.5 });
}
function drawStars() {
  ctx.clearRect(0,0,w,h);
  const g = ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,Math.max(w,h));
  g.addColorStop(0,'#0a0a2e'); g.addColorStop(.5,'#030014'); g.addColorStop(1,'#000');
  ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
  stars.forEach(s => {
    s.t += s.s; const a = (Math.sin(s.t)*.5+.5)*s.d;
    ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,6.28);
    ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill();
    if (s.r > 1) { ctx.beginPath(); ctx.arc(s.x,s.y,s.r*3,0,6.28); ctx.fillStyle = `rgba(0,245,255,${a*.15})`; ctx.fill(); }
  });
  requestAnimationFrame(drawStars);
}
resizeCanvas(); drawStars(); addEventListener('resize', resizeCanvas);

