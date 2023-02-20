// interface SuperHeroe{
//     nombre:string,
//     edad:number,
//     direccion:Direccion,
//     mostrarDireccion:()=>string
// }
// interface Direccion{
//     carrera:(number|string),
//     pais:string,
//     ciudad:string,
// }
// const superHeroe: SuperHeroe = {
//     nombre: "SpiderMan",
//     edad: 30,
//     direccion: {
//       carrera: 6,
//       pais: "Usa",
//       ciudad: "NewYork",
//     },
//     mostrarDireccion():string {
//       return (
//         this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais
//       );
//     },
//   };
//   const direccion = superHeroe.mostrarDireccion()
//   console.log(direccion)

//   interface Usuario{
//     nombre:string,
//     edad:number,
//     familia:Familia,
//     esHombre:boolean,
//     mostrarDatos:()=>string,
// }
// interface Familia{
//     mama:string,
//     papa:string,
//     hermanos:string[]
// }
// const usuario:Usuario ={
//     nombre:'Fernando',
//     edad:19,
//     familia:{
//         mama:'Liliana',
//         papa:'rigo',
//         hermanos:[
//             'dillan',
//             'valentina'
//         ],
//     },
//     esHombre:true,
//     mostrarDatos():string{
//         return`Se llama ${this.nombre} su edad es ${this.edad} su familia son : 
//         su mama se llama ${this.familia.mama} su papa se llama ${this.familia.papa} sus hermanos son ${this.familia.hermanos}`; 
//     }
// }

// const datos = usuario.mostrarDatos();
// console.log(datos);