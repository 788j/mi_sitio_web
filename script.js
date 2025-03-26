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
// Cambiar color de fondo al hacer clic en el botón
document.getElementById("cambiarColor").addEventListener("click", function() {
    const colores = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"];
    document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
});
