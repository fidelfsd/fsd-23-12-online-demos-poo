class Coche {
   constructor(nombre, marca, velocidad) {
      this.nombre = nombre;
      this.marca = marca;
      this.velocidad = velocidad;
   }

   acelerar() {
      this.velocidad += 30;
   }

   frenar() {
      this.velocidad = 0;
   }
}

let coche1 = new Coche("Coche1", "Marca1", 10);
let coche2 = new Coche("Coche2", "Marca2", 0);

console.log(coche1.marca);
console.log(coche1.velocidad);
coche1.acelerar();
console.log(coche1.velocidad);
coche1.acelerar();
console.log(coche1.velocidad);
coche1.frenar();
console.log(coche1.velocidad);
