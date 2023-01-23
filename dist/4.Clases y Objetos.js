"use strict";
class Mascota {
    constructor(nombre_mascota) {
        this.nombre = nombre_mascota;
    }
    obtenerNombre() {
        return this.nombre;
    }
    static consulta() {
        return 30;
    }
}
let perro = new Mascota('Canela');
console.log(perro.obtenerNombre());
console.log(Mascota.consulta());
//# sourceMappingURL=4.Clases%20y%20Objetos.js.map