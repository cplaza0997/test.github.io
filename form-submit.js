document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario de forma predeterminada

    // Obtén los datos del formulario
    const formData = new FormData(this);

    // Convierte los datos del formulario a un objeto JSON
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Envia la solicitud POST
    fetch('https://script.google.com/macros/s/AKfycbw9MDEVM41hfa1eCwqYWYmeBrNnVdO5sqADI_AJaIz4_svsh9o3iG-_kxa4IggjqeI0QQ/exec', { // Reemplaza con la URL de tu servidor
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with the form submission.');
    });
});
