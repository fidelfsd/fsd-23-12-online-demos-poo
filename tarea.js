class Tarea {
   constructor(texto, id) {
      console.log("tarea instanciada! con el texto:", texto);
      this.texto = texto;
      this.id = id;
      this.fecha = new Date();
   }

   fechaHoy() {
      this.fecha = new Date();
   }
}

let tarea = new Tarea("comprar leche", 1); // "tarea instanciada!"

console.log(typeof tarea); // object
console.log(tarea);

let tarea2 = new Tarea("Comprar pan", 2);
console.log(tarea2);
