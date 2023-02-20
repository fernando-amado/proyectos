export interface Producto {
  descripcion: string;
  precio: number;
}
const telefono: Producto = {
  descripcion: "Iphone 13 pro max",
  precio: 150,
};
const computador: Producto = {
  descripcion: "Asus vivobook",
  precio: 300,
};

export function calculaISV(productos: Producto[]) {
  let total: number = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });
  return [total, total * 0.15];
}

const articulos = [telefono, computador];
const [total, impuesto] = calculaISV(articulos);
// console.log("isv:  ", impuesto);
// console.log("total:  ", total);
