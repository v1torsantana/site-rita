document.addEventListener('DOMContentLoaded', () => {
    
    const quizItems = document.querySelectorAll('.quiz-item');

    quizItems.forEach(item => {
        const buttons = item.querySelectorAll('.quiz-btn');
        const feedback = item.querySelector('.quiz-feedback');
        const resultText = item.querySelector('.ans-result');
        const correctAnswer = item.getAttribute('data-answer');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const userChoice = this.getAttribute('data-choice');

                // Trava os botões
                buttons.forEach(btn => btn.disabled = true);

                if (userChoice === correctAnswer) {
                    this.classList.add('correct');
                    resultText.innerHTML = "✅ ACERTOU! É " + correctAnswer.toUpperCase() + ".";
                    resultText.style.color = "var(--retro-green)";
                } else {
                    this.classList.add('wrong');
                    
                    // Mostra o botão correto em verde
                    buttons.forEach(btn => {
                        if(btn.getAttribute('data-choice') === correctAnswer) {
                            btn.classList.add('correct');
                        }
                    });

                    resultText.innerHTML = "❌ ERROU! O correto é " + correctAnswer.toUpperCase() + ".";
                    resultText.style.color = "var(--retro-pink)";
                }

                // Mostra a explicação
                feedback.classList.add('show');
            });
        });
    });
});