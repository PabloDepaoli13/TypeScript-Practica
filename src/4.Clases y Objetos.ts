
class Mascota{
    
    private nombre:string;

    constructor(nombre_mascota:string){
       this.nombre = nombre_mascota;
    }
 //Este metodo se utiliza para acceder al atributo que es privado
    obtenerNombre():string{
        return this.nombre;
    }

    static consulta():number{
        return 30;
    }

}
let perro = new Mascota('Canela')


console.log(perro.obtenerNombre())

console.log(Mascota.consulta())