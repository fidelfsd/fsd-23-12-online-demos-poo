class Padre {
   constructor() {
      console.log("Hola desde el contructor padre");
   }
}

class Hija extends Padre {
   constructor() {
      super();
      console.log("Hola desde el contructor hijo");
   }
}

let padre = new Padre();
let hija = new Hija();
