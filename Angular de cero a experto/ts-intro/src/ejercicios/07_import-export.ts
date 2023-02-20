import { calculaISV, Producto } from "./06_desestructuracion_funcion";

const carritoCompras: Producto[] = [
  {
    descripcion: "Telefono 1",
    precio: 123,
  },
  {
    descripcion: "Telefono 2",
    precio: 400,
  },
];

const [total,isv]= calculaISV(carritoCompras);

console.log('Total',total)
console.log('Isv',isv)
