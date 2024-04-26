 // Función para validar la contraseña
 function validarContrasena() {
    const contrasena = document.getElementById('contrasena').value;
    const mensaje = document.getElementById('mensaje');

// Requisitos mínimos de la contraseña
    const longitudMinima = 8;
    const contieneMayuscula = /[A-Z]/.test(contrasena);
    const contieneMinuscula = /[a-z]/.test(contrasena);
    const contieneNumero = /\d/.test(contrasena);

// Validar la longitud de la contraseña
    if (contrasena.length < longitudMinima) {
        mensaje.textContent = 'La contraseña debe tener al menos 8 caracteres.';
// Validar que lleve una letra mayúscula
    } else if (!contieneMayuscula) {
        mensaje.textContent = 'La contraseña debe contener al menos una letra mayúscula.';
//Validar que lleve una letra minúscula
    } else if (!contieneMinuscula) {
        mensaje.textContent = 'La contraseña debe contener al menos una letra minúscula.';
//Validar que lleve un número
    } else if (!contieneNumero) {
        mensaje.textContent = 'La contraseña debe contener al menos un número.';
//Validación exitosa de la contraseña
    } else {
        mensaje.textContent = '¡Contraseña válida!';
    }
}
// Evento para el botón
document.getElementById("boton-validar").addEventListener("click", validarContrasena);