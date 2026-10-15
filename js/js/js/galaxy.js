// 銀河旋轉 + 滑鼠視差
document.addEventListener('mousemove', e => {
  const mx = (e.clientX/innerWidth - .5) * 2, my = (e.clientY/innerHeight - .5) * 2;
  const g = document.getElementById('galaxyContainer');
  if (g) { g.style.marginLeft = mx*30+'px'; g.style.marginTop = my*30+'px'; }
});
