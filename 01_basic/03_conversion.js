// number to string conversion operation:
let score = 33;

// console.log(score); // 33
// console.log(typeof score); // number

let numToString = String(score);
// changing number veriable to string
// console.log(typeof numToString); // string
// console.log(numToString);

// string to number conversion operation:
// let score = "33";
let str = true;
// if score change to "33abc" what happen then
// console.log(str); //33abc
// console.log(typeof str); // string

let strToNumber = Number(str);
// changing string veriable to number
// console.log(typeof strToNumber); // number
// console.log(strToNumber); // NaN

// str  to  num
// "33" => 33
// "33abc" => NaN

// null to num
// null => 0

// undefined to num
// undefined => NaN

// boolean to num
// true => 1
// false => 0

let isLoggedIn = "543";
// convert to boolean
let boolValue = Boolean(isLoggedIn);
// console.log(boolValue);

// 1 => true
// 0 => false
// "" => false
// "0" => true
// "sagar" => true
