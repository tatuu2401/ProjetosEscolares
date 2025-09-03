document.addEventListener('DOMContentLoaded', function() {
    // Mensagens alternadas para o mascote
    const messages = [
        "Vamos lá?",
        "Vamos aprender!",
        "Pronto para começar?",
        "A matemática te espera!",
        "Você consegue!"
    ];
    
    const messageElement = document.getElementById('hero-message');
    
    function changeMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageElement.style.animation = 'none';
        void messageElement.offsetWidth; // Trigger reflow
        messageElement.style.animation = 'textFadeIn 1s ease-out';
        messageElement.textContent = messages[randomIndex];
    }
    
    // Alterna mensagens a cada 3 segundos
    setInterval(changeMessage, 3000);
    
    // Adiciona animação ao carregar
    setTimeout(() => {
        document.querySelector('.title-section').style.animation = 'fadeInUp 1s ease-out';
        document.querySelector('.start-button').style.animation = 'fadeInUp 1s ease-out 0.3s both';
    }, 500);
});

// Adiciona animações dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);