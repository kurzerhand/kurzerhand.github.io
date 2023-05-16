const contador = document.getElementById("contador");
let count = 0;
const interval = 10; // intervalo en milisegundos
const target = 1000;
const duration = 3000; // duración en milisegundos
const increment = target / (duration / interval);
let counterStarted = false;
let timer = null;

function startCounter() {
  if (counterStarted) {
    return;
  }
  counterStarted = true;
  timer = setInterval(() => {
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
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
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

window.addEventListener('load', () => {
setTimeout(() => {
mostrarTexto();
// Reproducir el video aquí
const video = document.getElementById('miVideo');
video.play();
}, 1000); // Esperar 1 segundo antes de mostrar el texto y reproducir el video
});

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

// Loader

window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Ocultar el loader y mostrar el contenido de la página
  function showContent() {
    loader.style.display = "none";
    content.style.display = "block";
  }

  // Retrasar la visualización del contenido para simular la carga
  setTimeout(showContent, 1000); // Cambia el valor según tu necesidad
});
