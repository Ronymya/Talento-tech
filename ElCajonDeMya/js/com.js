document.getElementById("clienteForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;

    // Validaciones simples (puedes personalizarlas más)
    if (nombre === "" || email === "" || telefono === "" || direccion === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Mostrar un mensaje de éxito
    document.getElementById("resultado").innerHTML = `
        <h3>Datos Enviados:</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Direccion:</strong> ${direccion}</p>
    `;

    // Limpiar el formulario
    this.reset();
});