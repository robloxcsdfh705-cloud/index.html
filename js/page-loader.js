// 頁面載入動畫
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('pageLoader').classList.add('hidden');
    document.querySelectorAll('.title-line[data-text]').forEach(line => {
      const text = line.getAttribute('data-text');
      line.innerHTML = '';
      [...text].forEach((c, i) => {
        const s = document.createElement('span');
        s.className = 'char'; s.textContent = c;
        s.style.animationDelay = (i * 0.08) + 's';
        line.appendChild(s);
      });
    });
  }, 1200);
});

