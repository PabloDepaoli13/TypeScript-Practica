// function identity<T>(arg:T): T{
//     return arg;
// }

// function identity(arg:number): number{
//     return arg
// }

// console.log(identity(22))

// *Objetos*

let persona:object= {
    nombre:'ana',
    edad:45
}

// *Desestructuracion de un objeto
var obj={a:1,b:2,c:3}

console.log(obj.a)

var array=[1,2,3]
console.log(array[1])

var array=[1,2,3,5]
var [x,y, ...rest]= array



// function rests(first, second, ...allOthers){
//     console.log(allOthers)

// }

// console.log(rests(1,2,3,4,5,6))
//Esta funcion solamente va a mostrar todo lo que este detras del 1 y el 2


//**Asercion de Tipos */

//Primera pósibilidad
// (nombre as string).toUpperCase();
//Segunda posibilidad
// (<string>nombre).toUpperCase()


