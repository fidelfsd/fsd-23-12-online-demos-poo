class CuentaBancaria {
   #balance;

   constructor() {
      this.#balance = 0; // Usamos una almohadilla # para indicar que es una propiedad "privada"
   }

   // getter javascript
   get balance() {
      return this.#balance;
   }

   // setter javascript
   set balance(nuevoBalance) {
      if (nuevoBalance >= 0) {
         this.#balance = nuevoBalance;
      } else {
         console.log("El balance no puede ser negativo.");
      }
   }

   // getter tradicional
   getBalance() {
      return this.#balance;
   }

   // setter tradicional
   setBalance(nuevoBalance) {
      if (nuevoBalance >= 0) {
         this.#balance = nuevoBalance;
      } else {
         console.log("El balance no puede ser negativo.");
      }
   }
}

const cuenta = new CuentaBancaria();

// setter javascript
cuenta.balance = 1000; // Establecer el balance
console.log(`Balance actual: ${cuenta.balance}`); // Obtener el balance

// setter tradicional
cuenta.setBalance(2000);
console.log(`Balance actual: ${cuenta.balance}`); // Obtener el balance
