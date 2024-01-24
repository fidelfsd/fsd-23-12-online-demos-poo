class Vehiculo {
   constructor(marca, matricula, ruedas, puertas, años, velocidad) {
      this.marca = marca;
      this.matricula = matricula;
      this.ruedas = ruedas;
      this.puertas = puertas;
      this.años = años;
      this.velocidad = velocidad;
   }
   correr() {
      return (this.velocidad += 10);
   }
   frenar() {
      return (this.velocidad = 0);
   }
   aparcar() {
      return console.log("Aparcado!");
   }
}

class Coche extends Vehiculo {
   constructor(marca, matricula, ruedas, puertas, años, velocidad) {
      super(marca, matricula, ruedas, puertas, años, velocidad);
      this.consumo = "Diesel";
   }
}

class Moto extends Vehiculo {
   constructor(marca, matricula, ruedas, años, velocidad) {
      super(marca, matricula, ruedas, null, años, velocidad);
      this.consumo = "Gasolina";
   }
}

class Patin extends Vehiculo {
   constructor(marca, ruedas, años, velocidad) {
      super(marca, null, ruedas, null, años, velocidad);
   }
}

class Bicicleta extends Vehiculo {
   constructor(marca, años, velocidad) {
      super(marca, null, 2, null, años, velocidad);
   }
}

let bici = new Bicicleta("MarcaX", 3, 0);
console.log(bici);
