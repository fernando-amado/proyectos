function curar(personaje:PersonajeLOR, curarX:number): void {
  personaje.ph += curarX;
  console.log(personaje);
}

interface PersonajeLOR{
    nombre:string;
    ph:number;
    mostrarHp:()=>void;
}

const nuevoPersonaje:PersonajeLOR={
    nombre:'strider',
    ph:50,
    mostrarHp(){
        console.log('puntos de vida',this.ph)
    }
}
curar(nuevoPersonaje,20)
nuevoPersonaje.mostrarHp()

interface Jugador{
    nombre:string,
    apellido:string,
    numero:number,
    cantidadGoles:number,
    MostrarDatosJugador:()=>void;
}

const sumarGoles=(datosJugador:Jugador,cantidadGoles:number):void=>{
    datosJugador.cantidadGoles+=cantidadGoles;
    
}
const datosJugador:Jugador={
    nombre:'leo',
    apellido:'messi',
    numero:10,
    cantidadGoles:500,
    MostrarDatosJugador(){
        console.log('Jugador:',this.nombre+this.apellido,'br',
                    'Numero:',this.numero,
                    'Goles Total:',this.cantidadGoles )
    }
}
sumarGoles(datosJugador,200)
datosJugador.MostrarDatosJugador();




