document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz-item').forEach(item => {
    const buttons = item.querySelectorAll('.quiz-btn');
    const feedback = item.querySelector('.quiz-feedback');
    const result = item.querySelector('.ans-result');
    const correct = item.dataset.answer;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.disabled = true);
        const choice = btn.dataset.choice;

        if (choice === correct) {
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
});
