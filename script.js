let currentSlide = 0;
const slides = document.querySelectorAll('.carrossel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    const carrosselContainer = document.querySelector('.carrossel-container');
    carrosselContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos






function clickMenu(){
    let menu = document.getElementById("menu");

    if (menu.style.right === "-250px") {
        menu.style.right = "0"; // Abre o menu
    } else {
        menu.style.right = "-250px"; // Fecha o menu
    }
    
    
}
function mudouTamanho() {
    let menu = document.getElementById("menu");

    if (window.innerWidth >= 768) {
        menu.style.right = "0"; /* Garante que fique visível */
        menu.style.display = "block"; /* Remove qualquer ocultação */
    } else {
        menu.style.right = "-250px"; /* Oculta no mobile */
        menu.style.display = "block"; /* Garante que ele ainda possa ser aberto */
    }
}

// Adiciona o evento para corrigir quando a tela for redimensionada
window.addEventListener("resize", mudouTamanho);

// Executa a correção ao carregar a página
window.onload = mudouTamanho;


/* formulario */

document.getElementById('servico').addEventListener('change', function () {
    var detalhesReforma = document.getElementById('detalhes-reforma');
    if (this.value === 'Reforma Fechada') {
        detalhesReforma.style.display = 'block';
    } else {
        detalhesReforma.style.display = 'none';
    }
});
