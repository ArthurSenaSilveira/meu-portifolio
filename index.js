// Função que adiciona ou remove a classe 'visible' aos eventos
const eventos = document.querySelectorAll('.evento');

let lastScrollY = window.scrollY;  // Guardar a última posição de rolagem

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && window.scrollY > lastScrollY) {
      // Se o elemento entrar na tela e a rolagem for para baixo, o elemento aparece
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
    } else if (!entry.isIntersecting && window.scrollY < lastScrollY) {
      // Quando o elemento sair da tela e a rolagem for para cima, o elemento ainda vai ficar invisível
      entry.target.classList.remove('visible');  // Não precisa animar sumindo
      entry.target.classList.add('hidden');
    }
  });

  // Atualizando a última posição de rolagem
  lastScrollY = window.scrollY;
}, {
  threshold: 0.5  // O elemento precisa estar 50% visível para disparar a animação
});

// Começa a observar todos os eventos
eventos.forEach(evento => {
  observer.observe(evento);
});
