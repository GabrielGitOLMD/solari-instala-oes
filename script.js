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

document.addEventListener("scroll", function() {
    const imagemP = document.querySelectorAll('.imagemP');
    
    imagemP.forEach(function(el) {
        if (window.scrollY > el.offsetTop - window.innerHeight) {
            el.classList.add('scrolled'); // Ativa o efeito de parallax
        } else {
            el.classList.remove('scrolled'); // Desativa o efeito
        }
    });
});
