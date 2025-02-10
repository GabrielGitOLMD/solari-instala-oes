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
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
    }
}


/* formulario */

document.getElementById('servico').addEventListener('change', function () {
    var detalhesReforma = document.getElementById('detalhes-reforma');
    if (this.value === 'Reforma Fechada') {
        detalhesReforma.style.display = 'block';
    } else {
        detalhesReforma.style.display = 'none';
    }
});
