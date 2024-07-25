const name = "Sagar barman";
const repoCount = 12;
// it's Old
// console.log("my name is " + name + " and repositories " + repoCount);

//modern
// console.log(`I am ${name} and my repositories is ${repoCount}`);

// another way to write String
// use 'new' keyword.

const gameName = new String("ping pong");
// console.log(gameName.length); // output => 9
// console.log(gameName.toUpperCase()); // output => PING PONG
// console.log(gameName.toLowerCase()); // output => ping pong
// console.log(gameName.charAt(3)); // output => g
// console.log(gameName.indexOf("o")); // output => 6
// console.log(gameName.lastIndexOf("p")); // output => 5  start from last
// console.log(gameName.concat(" ball")); // output => ping pong ball
// console.log(gameName.includes("ping pong")); // output => true / false
// if word or letter includes then output will true ather then false.

const newString = gameName.substring(0, 6);
// console.log(newString);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Number in js

const score = 300;
// console.log(score);

const ballance = new Number(100);
// console.log(ballance);

// console.log(ballance.toString()); // output => String[100]
// console.log(ballance.toFixed(2)); // output => 100.00
// console.log(ballance.toFixed(3); // output => 100.000

const otherNumber = 245.954834;
// console.log(otherNumber.toPrecision(3)); // output => 146 rumber ko round of karta hain
// console.log(otherNumber.toPrecision(4)); // output => 146.0
// console.log(otherNumber.toPrecision(5)); // output => 245.95
// console.log(otherNumber.toPrecision(2)); // output => 2.5e+2

const thousand = 1000000;
// console.log(thousand.toLocaleString()); // 1,000,000
// console.log(thousand.toLocaleString("en-IN")); // 10,00,000

///+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Math in Js

// console.log(Math); // Math is a Object, he as own mathd and function
// console.log(Math.abs(-4)); // output => 4 negetive se positive karta hain.
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.2)); // 4
// console.log(Math.min(2, 4, 5, 7, 8)); // 2
// console.log(Math.max(2, 4, 5, 7, 8)); // 8

// console.log(Math.random()); // 0-1
// console.log(Math.random() * 6 + 1);

const min = 10;
const max = 20;

const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNumber);
