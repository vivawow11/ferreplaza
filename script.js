// Seleccionamos el botón usando su ID
const boton = document.getElementById("miBoton");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
// Le agregamos un "listener" que espera un click


menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const slideImg = document.querySelector('.slide-in');

window.addEventListener('scroll', () => {
  const rect = slideImg.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    slideImg.style.animation = 'slideIn 2s ease-out forwards';
  }
});
const buttons = document.querySelectorAll('.categoria-buttons button');
const contenidos = document.querySelectorAll('.contenido');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;

    contenidos.forEach(c => {
      if (c.id === target) {
        c.classList.toggle('active'); // muestra u oculta el panel
      } else {
        c.classList.remove('active'); // oculta los demás
      }
    });
  });
});


<script src="script.js"></script>


