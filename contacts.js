document.addEventListener('DOMContentLoaded', function() {
    // Adicione interações se necessário
    console.log('Página de contatos carregada!');

    // Exemplo: Efeito hover nos itens de contato
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
});