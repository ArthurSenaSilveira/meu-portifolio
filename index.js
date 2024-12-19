// Função que será chamada quando o evento estiver visível na tela
const observerOptions = {
    root: null,  // Observa a visibilidade dentro da viewport (área visível da tela)
    threshold: 0.5  // A animação é acionada quando 50% do elemento entra na viewport
};

// Cria o Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Se o evento estiver visível
        if (entry.isIntersecting) {
            // Adiciona a classe 'show' para animar a data e descrição
            entry.target.classList.add('show');
            // Após o evento ser visto, não é necessário observar mais
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleciona todos os eventos para observar
const eventos = document.querySelectorAll('.evento');
eventos.forEach(evento => {
    observer.observe(evento);  // Inicia a observação de cada evento
});
