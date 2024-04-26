// Los números menores o iguales a 1 no son primos
function esPrimo(numero) {
  
    if (numero <= 1) {
        return false;
    }
// Verificación  si el número es divisible solo por 1 y por sí mismo
for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
 // Si el número es divisible por algún número distinto de 1 y de sí mismo, no es primo
        return false;
    }
}

// Si no se encontró ningún divisor distinto de 1 y de sí mismo, el número es primo
return true;
}

// Ejemplo:
const numero = 17;
if (esPrimo(numero)) {
console.log(`${numero} es primo.`);
} else {
console.log(`${numero} no es primo.`);
}