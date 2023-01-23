"use strict";
function calcularIVA(productos) {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * 0.15];
}
class Producto {
    constructor(precio_producto) {
        this.precio = precio_producto;
    }
}
//# sourceMappingURL=3.funciones.js.map