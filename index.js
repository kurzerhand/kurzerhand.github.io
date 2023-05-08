const contador = document.getElementById("contador");
let count = 0;
const interval = 10; // intervalo en milisegundos
const target = 1000;
const duration = 3000; // duración en milisegundos
const increment = target / (duration / interval);

let counterStarted = false;

function startCounter() {
  if (counterStarted) {
    return;
  }
  counterStarted = true;
  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      clearInterval(timer);
      count = target;
    }
    contador.textContent = Math.round(count);
  }, interval);
}

function isVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}

document.addEventListener("scroll", () => {
  if (isVisible(contador)) {
    startCounter();
  }
});



window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
  });

  

  const textoAnimado = document.querySelector('.texto-animado');

  function mostrarTexto() {
    textoAnimado.classList.add('animated', 'fadeInLeft');
    textoAnimado.style.opacity = 1;
  }
  
  window.addEventListener('load', mostrarTexto);
  
  
  

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Desplegar el menú
    nav.classList.toggle('nav-active');

    // Animar las líneas de la hamburguesa
    burger.classList.toggle('toggle');

    // Animar los enlaces de navegación
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  });
};

navSlide();


  