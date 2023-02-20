interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: "Fernando",
  hijos: ["Daniel", "Estefany"],
};
const pasajero2: Pasajero = {
  nombre: "Luis",
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijosHay = pasajero.hijos?.length || 0;

  console.log(cuantosHijosHay);
}

imprimeHijos(pasajero2);
