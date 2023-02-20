class PersonaNormal{
  constructor(
    public nombre:string,
    public direccion:string,
  ){}
 
 }

class Heroe extends PersonaNormal {
  // alterEgo: string;
  // edad: number;
  // nombreReal: string;
  // constructor(alterEgo:string) {
  //   this.alterEgo=alterEgo
  // }
  constructor(
    public alterEgo: string,
    public edad?: number,
    public nombreReal?: string
  ) {
    super(nombreReal,'New york, Usa');
  }
}



const spiderman = new Heroe('spiderman',12,'Iroman');
console.log(spiderman);
