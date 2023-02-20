interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}
interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "mess",
  detalles: {
    anio: 2020,
    autor: "Fernando",
  },
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor: autorDetalle } = detalles;

console.log("El volumen actual es de:", volumen);
console.log("El segundo actual es de:", segundo);
console.log("la cancion actual es de:", cancion);
console.log("El autor es:", autorDetalle);

