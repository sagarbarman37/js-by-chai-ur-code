// Scope

// Global scope
var a = 10;
let b = 20;
const c = 30;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

if (true) {
  // block scopie
  var a = 100;
  console.log("inner: ", a);
  let b = 200;
  console.log("inner: ", b);
  const c = 300;
  console.log("inner: ", c);
}
// console.log(a); // 100
// console.log(b); // b is not defined
// console.log(c); // c is not defined

// Code Invironment and Browser Invironment alag alag hota hai.

// video no - 21