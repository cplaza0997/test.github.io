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
    fetch('https://script.google.com/macros/s/AKfycbyHLB-JDO-pMesKIe8zc1JEPXyTTR8x1eQ2A7XpFzFp2V--qdVSQ77Se1bCy08T2CRJPg/exec', { // Reemplaza con la URL de tu servidor
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
