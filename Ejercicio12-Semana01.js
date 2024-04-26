// Función para generar la tabla de multiplicar
function generarTablaMultiplicar() {
    const numero = parseInt(document.getElementById("numero").value);
    const tabla = document.getElementById("tabla");

// Limpiar la tabla
    tabla.innerHTML = '';

// Crear filas de la tabla
    const cuerpoTabla = tabla.createTBody();
    for (let i = 1; i <= 10; i++) {
        const fila = cuerpoTabla.insertRow();
        const multiplicacion = numero * i;
        const td = fila.insertCell();
        td.textContent = multiplicacion;
    }
}
// Evento para el botón
document.getElementById("boton-generar").addEventListener("click", generarTablaMultiplicar);