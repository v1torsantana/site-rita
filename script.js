document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Quiz Interativo ---
    const quizItems = document.querySelectorAll('.quiz-item');

    quizItems.forEach(item => {
        const buttons = item.querySelectorAll('.quiz-btn');
        const feedback = item.querySelector('.quiz-feedback');
        const resultText = item.querySelector('.ans-result');
        const correctAnswer = item.getAttribute('data-answer');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const userChoice = this.getAttribute('data-choice');

                // Desativar botões após a primeira escolha
                buttons.forEach(btn => btn.disabled = true);

                // Verifica se acertou ou errou
                if (userChoice === correctAnswer) {
                    this.classList.add('correct');
                    resultText.innerHTML = "✅ Correto! A resposta é " + correctAnswer.toUpperCase() + ".";
                    resultText.style.color = "var(--retro-green)";
                } else {
                    this.classList.add('wrong');
                    
                    // Destaca a correta
                    buttons.forEach(btn => {
                        if(btn.getAttribute('data-choice') === correctAnswer) {
                            btn.classList.add('correct');
                        }
                    });

                    resultText.innerHTML = "❌ Incorreto! A resposta é " + correctAnswer.toUpperCase() + ".";
                    resultText.style.color = "var(--retro-pink)";
                }

                // Exibir explicação
                feedback.classList.add('show');
            });
        });
    });
});