let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;
const nextBtn = document.querySelector(".arrow.right");
const prevBtn = document.querySelector(".arrow.left");

function showSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
}
// Espera a que todo el contenido de la página cargue
window.addEventListener('load', () => {
    // Selecciona la imagen y el texto
    const image = document.querySelector('.slide-image');
    const text = document.querySelector('.slide-text');

    // Agrega la clase "active" que activa la animación de CSS
    image.classList.add('active');
    text.classList.add('active');
});
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Autoplay
setInterval(nextSlide, 4000);
