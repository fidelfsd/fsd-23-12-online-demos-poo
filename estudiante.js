class Persona {
   #nombre;
   #edad;

   constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
   }

   get nombre() {
      return this.#nombre;
   }

   get edad() {
      return this.#edad;
   }

   saludar() {
      console.log(`Hola, soy ${this.#nombre} y tengo ${this.#edad} años`);
   }
}

// -----------------------------------------------------------------------------

class Estudiante extends Persona {
   #grado;

   constructor(nombre, edad, grado) {
      super(nombre, edad);
      this.#grado = grado;
   }

   estudiar() {
      console.log(`${this.nombre} esta estudiando en el grado ${this.#grado}`);
   }
}

// -----------------------------------------------------------------------------

let persona1 = new Persona("John", 30);
persona1.saludar();

let estudiante1 = new Estudiante("Maria", 40, "12vo");
estudiante1.saludar();
estudiante1.estudiar();
