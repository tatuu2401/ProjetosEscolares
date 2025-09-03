// Mensagens motivacionais do mascote
const mascotMessages = [
    "Você é incrível em matemática!",
    "Vamos resolver alguns problemas?",
    "Cada erro é uma chance de aprender!",
    "Você está indo muito bem!",
    "Matemática é divertida com você!",
    "Continue assim, campeão!",
    "Estou orgulhoso do seu progresso!"
];

// Atualiza mensagem do mascote aleatoriamente
function updateMascotMessage() {
    const messageElement = document.getElementById('mascot-message');
    const randomIndex = Math.floor(Math.random() * mascotMessages.length);
    messageElement.textContent = mascotMessages[randomIndex];
}

// Atualiza a cada 10 segundos
setInterval(updateMascotMessage, 10000);

// Inicializa
document.addEventListener('DOMContentLoaded', function() {
    updateMascotMessage();
});

// Modo Noturno
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Verifica preferência salva
if (localStorage.getItem('darkMode')) {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i><span class="btn-text">Modo Claro</span>';
}

// Alternar modo
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i><span class="btn-text">Modo Claro</span>';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i><span class="btn-text">Modo Noturno</span>';
        localStorage.removeItem('darkMode');
    }
});