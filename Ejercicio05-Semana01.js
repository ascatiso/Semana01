
// Función para generar un número aleatorio entre 1 y 100
function numeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Variables
const numeroMisterioso = numeroAleatorio();
let intentos = 10;

// Función para adivinar el número
function adivinarNumero() {
    const numeroUsuario = parseInt(document.getElementById("numero-usuario").value);
    const pista = document.getElementById("pista");
    const intentosElement = document.getElementById("intentos");

    if (intentos > 0) {
        if (numeroUsuario === numeroMisterioso) {
            pista.textContent = "Adivinaste el número en " + (10 - intentos) + " intentos.";
            desactivarBoton();
        } else if (numeroUsuario < numeroMisterioso) {
            pista.textContent = "El número misterioso es mayor";
            intentos--;
            intentosElement.textContent = "Te quedan " + intentos + " intentos";
        } else {
            pista.textContent = "El número misterioso es menor";
            intentos--;
            intentosElement.textContent = "Te quedan " + intentos + " intentos";
        }
    } else {
        pista.textContent = "¡Perdisteeeee! El número misterioso es " + numeroMisterioso;
        desactivarBoton();
    }
}

// Función para desactivar el botón
function desactivarBoton() {
    document.getElementById("boton-adivinar").disabled = true;
}

// Evento para el botón
document.getElementById("boton-adivinar").addEventListener("click", adivinarNumero);
