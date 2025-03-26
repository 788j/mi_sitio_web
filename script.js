document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("miBoton");

    if (boton) {
        boton.addEventListener("click", function () {
            alert("¡Hola! Has hecho clic en el botón.");
        });
    } else {
        console.error("No se encontró el botón con id 'miBoton'.");
    }
});
