document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica do Accordion ---
    const triggers = document.querySelectorAll('.accordion-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const icon = this.querySelector('.icon');
            const content = this.nextElementSibling;

            this.classList.toggle('active');

            if (content.style.maxHeight) {
                // Fechar
                content.style.maxHeight = null;
            } else {
                // Abrir
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // --- 2. Lógica do Quiz Interativo ---
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
                    resultText.innerHTML = "✅ Correto! É " + correctAnswer.toUpperCase() + ".";
                    resultText.className = "ans-result acerto";
                } else {
                    this.classList.add('wrong');
                    
                    // Destacar qual era o botão certo para o usuário aprender
                    buttons.forEach(btn => {
                        if(btn.getAttribute('data-choice') === correctAnswer) {
                            btn.classList.add('correct');
                        }
                    });

                    resultText.innerHTML = "❌ Incorreto! A resposta é " + correctAnswer.toUpperCase() + ".";
                    resultText.className = "ans-result erro";
                }

                // Mostra a explicação
                feedback.classList.add('show');
            });
        });
    });
});