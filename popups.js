document.addEventListener('DOMContentLoaded', function() {
    // Função para abrir popup
    function openPopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Adiciona animação
            const content = popup.querySelector('.popup-content');
            content.style.animation = 'popupSlideIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards';
        }
        const formulaButtons = document.querySelectorAll('.formula-btn');
        formulaButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation(); // Impede a propagação do evento
                const popupId = this.getAttribute('data-formula-popup');
                openPopup(popupId);
    });
});

    }

    // Função para fechar popup
    function closePopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            const content = popup.querySelector('.popup-content');
            content.style.animation = 'popupSlideOut 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards';
            
            setTimeout(() => {
                popup.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 250);
        }
    }

    // Adiciona eventos a todos os botões
    const buttons = document.querySelectorAll('.math-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            openPopup(popupId);
        });
    });

    // Adiciona eventos para fechar popups
    const closeButtons = document.querySelectorAll('.close-popup');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = this.closest('.popup');
            closePopup(popup.id);
        });
    });

    // Fecha popup ao clicar fora do conteúdo
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup(this.id);
            }
        });
    });

    // Fecha popup com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.popup').forEach(popup => {
                if (popup.style.display === 'flex') {
                    closePopup(popup.id);
                }
            });
        }
    });
});

// Adiciona animação de saída dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes popupSlideOut {
        from { 
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to { 
            opacity: 0;
            transform: translateY(30px) scale(0.95);
        }
    }
`;
document.head.appendChild(style);