document.addEventListener('DOMContentLoaded', () => {
  // Quiz validation
  document.querySelectorAll('.quiz-item').forEach(item => {
    const buttons = item.querySelectorAll('.quiz-btn');
    const feedback = item.querySelector('.quiz-feedback');
    const result = item.querySelector('.ans-result');
    const correct = item.dataset.answer;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.disabled = true);
        if (btn.dataset.choice === correct) {
          btn.classList.add('correct');
          result.textContent = '✅ Correto!';
          result.style.color = '#155724';
        } else {
          btn.classList.add('wrong');
          buttons.forEach(b => {
            if (b.dataset.choice === correct) b.classList.add('correct');
          });
          result.textContent = '❌ Incorreto!';
          result.style.color = '#721c24';
        }
        feedback.classList.add('show');
      });
    });
  });

  // Tab switching
  document.querySelectorAll('.quiz-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.quiz-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.quiz-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('panel-' + target).classList.add('active');
    });
  });

  // Play button - scroll to first video and autoplay
  const playBtn = document.getElementById('play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const iframe = document.querySelector('.video-wrapper iframe');
      if (iframe) {
        const src = iframe.src;
        iframe.src = src.includes('?') ? src + '&autoplay=1' : src + '?autoplay=1';
        iframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
});
