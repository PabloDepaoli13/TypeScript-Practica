interface Alumno{
    nombre:string;
    apellido: string;
    edad?:number;
}
interface calificacion{
    mostrarCalificacion():void;
}

let alumno1:Alumno = {nombre:'Juan', apellido:'Contreras'}

let nota:calificacion = {mostrarCalificacion: function(){console.log('63 puntos')} }

nota.mostrarCalificacion();