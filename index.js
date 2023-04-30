


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


  