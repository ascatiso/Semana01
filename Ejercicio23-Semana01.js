// crear  el objeto "carro"
const carro = {
    marca: "Ford",
    modelo: "Edge",
    año: 2019,
}
// bucle para iterar las propiedades del carro e imprimir en consola
for (let propiedad in carro) {
    console.log(`${propiedad}: ${carro[propiedad]}`);
}