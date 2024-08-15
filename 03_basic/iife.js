// Immediately Invoked Function Expressions (IIFE)
// ()()

(function name() {
  console.log("sagar barman");
})(); // ; mendatory to end code.

(() => {
  console.log("mango");
})();

((name) => {
  console.log(`My name is ${name}`);
})("sagar");
