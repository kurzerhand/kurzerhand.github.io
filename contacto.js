document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto

    // Obtener los valores de los campos del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Construir la URL con los datos del formulario
    var mailtoLink = 'mailto:angel.aguilera.fdz@gmail.com' +
        '?subject=' + encodeURIComponent('Nuevo mensaje de contacto') +
        '&body=' + encodeURIComponent('Nombre: ' + name + '\nEmail: ' + email + '\nMensaje: ' + message);

    // Abrir el cliente de correo predeterminado con el enlace de correo electrónico
    window.location.href = mailtoLink;

    // Mostrar mensaje de éxito después de 2 segundos
    setTimeout(function() {
        document.getElementById('success-message').classList.remove('hidden');
    }, 1000);
});
