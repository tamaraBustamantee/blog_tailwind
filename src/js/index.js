document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario

        // Simula un retraso para la "enviación" del formulario
        setTimeout(function () {
            // Muestra un mensaje de éxito o realiza otras acciones
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            form.reset(); // Opcional: reinicia el formulario
        }, 1000); // Retraso de 1 segundo
    });
});