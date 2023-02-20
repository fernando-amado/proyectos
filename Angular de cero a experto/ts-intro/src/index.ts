interface Usuario{
    nombre:string,
    edad:number,
    familia:Familia,
    esHombre:boolean,
    mostrarDatos:()=>string,
}
interface Familia{
    mama:string,
    papa:string,
    hermanos:string[]
}
const usuario:Usuario ={
    nombre:'Fernando',
    edad:19,
    familia:{
        mama:'Liliana',
        papa:'rigo',
        hermanos:[
            'dillan',
            'valentina'
        ],
    },
    esHombre:true,
    mostrarDatos():string{
        return`Se llama ${this.nombre} su edad es ${this.edad} su familia son : 
        su mama se llama ${this.familia.mama} su papa se llama ${this.familia.papa} sus hermanos son ${this.familia.hermanos}`; 
    }
}

const datos = usuario.mostrarDatos();
console.log(datos);