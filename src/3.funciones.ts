//**Funciones */
function calcularIVA(productos:Producto[]):[number, number]{
    let total=0
    productos.forEach (({precio})=>{
       total+=precio;
    })
    return [total, total*0.15]
}

//**Class Producto */
class Producto  {
    public precio:number;

    constructor(precio_producto:number){
       this.precio = precio_producto;
    }
}