let mensaje: string = "hola mundo"

mensaje = 'chanchito feliz'



mensaje = 'chao mundo'

console.log(mensaje)
console.log(typeof [])

/*Tipos Nativos de JS 
//number
//string
//boolean
//null
//undefined
//object
//function
+Tipos de TS
+any (NO USARLO)
+unknown
+never
+arrays
+tuplas
+Enums
+tipos inferidos
*/

let extincionDinosaurios:number = 76_000_000

let dinosaurioFavorito:string = 'T-Rex'

let extintos: boolean = true

/*let mivariable // TIPO ANY que no queremos utilizar

mivariable = 'chanchito feliz'
mivariable = 23*/

function chanchitoFeliz(config: number){
   return config
}

let animales:string[] = ['perro', 'gato']
let nums:number[] = [1,2,3]
let checks:boolean[] = []
let nums2: Array<number> = []

nums2.push(1,2,3,4)

console.log(nums2)

nums.map(x => x.toFixed)//Importante, se puede ver en este comando como typescript detecta automaticamente el tipo de valor y solo te ofrece el tipo de comando que sirve para el tipo de variable.

//***Tupla***

let tupla: [number, string[]] = [1, ['chanchito feliz', 'perrito feliz']] // Las tuplas nos permiten guardar datos siempre y cuando ya esten definidos ahi

//***Enums***

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//Uso de pascalcase cada palabra inicia con mayuscula
enum Talla {Chica = 's', Mediana = 'm', Grande = 'l', Extragrande = 'xl'}

const variable1 = Talla.Grande

console.log(variable1)

 const enum LoadingState {Idle, Loading, Success, Error}

 const estado = LoadingState.Success

 //***Objetos***//Se puede agregar el tipo de valores que son desde el principio
 const objeto: {
    readonly id: number, //En caso de que no quisieramos que la propiedad sea cambiada de valor se usa ReadOnly
   nombre:string,
   talla: Talla,
 } = { id: 1, nombre: 'Pablo', talla: Talla.Extragrande}

 console.log(objeto.talla)

//***Otra Cosa que se puede hacer con los objetos***/
type Direccion = {
    numero: number,
    calle: string,
    pais: string,
}

type Persona = {
    readonly id:number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const Ropa:Persona = {
    id: 2,
    nombre: 'Pepe',
    talla: Talla.Grande,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Chanchitolandia'
    }
}

const arr: Persona[] = []

