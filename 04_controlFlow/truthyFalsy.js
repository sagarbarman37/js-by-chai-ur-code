// const userEmail = "sagar"; // truthy value
// const userEmail = {}; // truthy value
// const userEmail = []; // truthy value
const userEmail = 2; // truthy value
// const userEmail = ""; // falsy value

if (userEmail) {
  console.log("got user email");
} else {
  console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truethy values
// "0", "false", " ", [], {}, function(){}

// how to check empty Object & Array

const emptyArr = [];
if (emptyArr.length === 0) {
  console.log("array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}
// Object.keys & Object.values alwase return Array.

// false == 0; // true
// false == ""; // true
// 0 == ""; // true

// Nullish Coalescing Operator (??): null undefined ⤵️⤵️⤵️⤵️⤵️⤵️

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? "sagar"; // sagar
val1 = undefined ?? 29; // 29
val1 = null ?? 29 ?? 36; // 29

console.log(val1);

// Ternity Operatur
// condition ? true : false;

const price = 10;
price < 100 ? console.log("buy it") : console.log("dont buy it");
