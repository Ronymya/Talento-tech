document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll(".miBoton");

    botones.forEach(function(boton) {
        boton.addEventListener("mouseover", function() {
            boton.textContent = "¡Genial!"; 
        });

        boton.addEventListener("mouseout", function() {
            boton.textContent = "Haz clic aqui"; 
        });
    });
});