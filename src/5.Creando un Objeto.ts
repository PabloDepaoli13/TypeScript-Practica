class Persona1{
    private nombre:string;
    public edad:number;
    public vivo:boolean;
  
    constructor(nombre_persona:string, edad_persona:number, vivo_persona:boolean){
       this.nombre = nombre_persona;
       this.edad = edad_persona;
       this.vivo = vivo_persona;
    }
    ObtenerNombre():string{
        return this.Nombre;
    }
  
    get Nombre():string{
      return this.nombre
    }
    get Edad():number{
      return this.edad
    }
    get Vivo():boolean{
      return this.vivo
    }
  }