// Definir el objeto factura
const factura = {
    nombreCliente: "Astrid Carolina",
    listaProductos: [
        { nombre: "Producto A", precio: 1150 },
        { nombre: "Producto B", precio: 1250 },
        { nombre: "Producto C", precio: 2450 }
    ],
// Método para calcular el total de la factura
    calcularTotal: function() {
        let total = 0;
        // Iterar sobre la lista de productos y sumar los precios
        this.listaProductos.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }
};

// Mostrar el total de la factura en la consola
console.log("Total de la factura:", factura.calcularTotal());
