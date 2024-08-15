// Immediately Invoked Function Expressions (IIFE)
// ()()

(function name() {
  console.log("sagar barman");
})(); // ; mendatory to end code.

(() => {
  console.log("mango");
})();

// paramiter declear in IIFE
((name) => {
  console.log(`My name is ${name}`);
})("sagar");

// most people mistake to declear two deferent IIFE, they forgete ';' to end the code.

// video no - 24
