document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica Interativa do Quiz (Mitos e Verdades) ---
    const quizItems = document.querySelectorAll('.quiz-item');

    quizItems.forEach(item => {
        const buttons = item.querySelectorAll('.quiz-btn');
        const feedback = item.querySelector('.quiz-feedback');
        const resultText = item.querySelector('.ans-result');
        const correctAnswer = item.getAttribute('data-answer');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const userChoice = this.getAttribute('data-choice');

                // Bloqueia cliques adicionais desativando os botões da pergunta
                buttons.forEach(btn => btn.disabled = true);

                // Tratamento de Acerto ou Erro
                if (userChoice === correctAnswer) {
                    this.classList.add('correct');
                    resultText.innerHTML = "✅ Correto! É " + correctAnswer.toUpperCase() + ".";
                    resultText.style.color = "var(--retro-dark)";
                } else {
                    this.classList.add('wrong');
                    
                    // Exibe a alternativa correta em verde para fins didáticos
                    buttons.forEach(btn => {
                        if(btn.getAttribute('data-choice') === correctAnswer) {
                            btn.classList.add('correct');
                        }
                    });

                    resultText.innerHTML = "❌ Incorreto! A resposta correta é " + correctAnswer.toUpperCase() + ".";
                    resultText.style.color = "var(--retro-pink)";
                }

                // Revela dinamicamente a caixa explicativa do PDF
                feedback.classList.add('show');
            });
        });
    });
});