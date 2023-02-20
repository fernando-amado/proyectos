function sumar(a:number, b:number):number {
  return (a + b);
}
const sumar2 = (a:number,b:number):number => a+b;

const multiplicar = (numero:number,base:number=5,otroNumero?:number):number=>{
    return numero * otroNumero ;
}

const resultado =multiplicar(5,0,5)

console.log(resultado)
