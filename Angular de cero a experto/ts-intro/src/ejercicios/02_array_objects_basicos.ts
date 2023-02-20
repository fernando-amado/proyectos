let habilidades:(string|number)[]=['Fernando',1];

interface Personaje{
    nombre:string;
    numero:number;
    habilidades:(string|number)[];
    ciudad?:string;
}
const personaje:Personaje={
    nombre:'fercho',
    numero:10,
    habilidades:['rapido',20]
}
personaje.ciudad='bogota'

console.table(personaje)