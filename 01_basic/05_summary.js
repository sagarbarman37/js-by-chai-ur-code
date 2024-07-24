// primitive data  type
//  7 types = string, number, boolean, null, undefine, Symbol, bigInt

// primitive main memory ka copy milta hain. agar aap change karte he
// to main memory main change nehin  hota hain, copy main change hota hain.
const str = "string";
const score = 100;
const isLoggedIn = false;
const tempareture = null;
let userEmail; // let userEmail = undefined;
const id = Symbol("sagar");
const bigNumber = 435786578087465n;

// non-primitive data type / reference data type

// non-primitive main value change karte hain to Original value main change hota hain.

// Array, Objects, Functions

const fruits = ["apple", "mango", "banana", "orange"];
// console.log(fruits);
// console.log(fruits[2]);
// console.log(fruits.length);

const student = {
  fullName: "sagar barman",
  age: 24,
  isStudent: false,
};
// console.log(student);
// console.log(student.fullName);

const myfunc = function () {
  console.log("sagar barman");
};
// console.log(myfunc());


// console.log(typeof fruits);