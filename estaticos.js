class Calculadora {
   static IVA = 0.21;

   static suma(a, b) {
      return a + b;
   }

   static resta(a, b) {
      return a - b;
   }
}

let result = Calculadora.suma(3, 6);

console.log(result);
console.log(Calculadora.IVA);
console.log(Math.PI);
