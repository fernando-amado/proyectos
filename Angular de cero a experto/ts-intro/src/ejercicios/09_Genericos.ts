function queTipoSoy<T> (argumento:T){
  return argumento;
}
let soyString = queTipoSoy('Hola mundo');
let soynumero = queTipoSoy(2);
let soyarray = queTipoSoy([1,2]);
let soyExplicito = <number>queTipoSoy(1)

