// Inicializar EmailJS
(function() {
    emailjs.init("YOUR_USER_ID"); // Reemplaza con tu User ID de EmailJS
})();

// Abre la ventana emergente
document.getElementById('reportButton').addEventListener('click', function() {
    document.getElementById('reportPopup').style.display = 'block';
});

// Cierra la ventana emergente
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('reportPopup').style.display = 'none';
});

// Maneja el envío del formulario
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío estándar del formulario

    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const dni = document.getElementById('dni').value;
    const address = document.getElementById('address').value;
    const problem = document.getElementById('problem').value;

    // Crear un objeto con los datos del formulario
    const templateParams = {
        name: name,
        dni: dni,
        address: address,
        problem: problem
    };

    // Enviar el correo a través de EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(function(response) {
            console.log('Mensaje enviado exitosamente', response);
            alert('¡Gracias por tu reporte! Será revisado pronto.');
            document.getElementById('reportPopup').style.display = 'none'; // Cerrar el popup
            document.getElementById('reportForm').reset(); // Limpiar el formulario
        }, function(error) {
            console.error('Error al enviar el mensaje', error);
            alert('Hubo un error al enviar el reporte. Por favor, intenta nuevamente.');
        });
});
