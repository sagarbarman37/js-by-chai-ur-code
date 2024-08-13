// Scope

// Global scope
// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

if (true) {
  // block scopie
  // var a = 100;
  let b = 200;
  const c = 300;
  //   console.log("inner: ", a); // inner:  100
  //   console.log("inner: ", b); // inner:  200
  //   console.log("inner: ", c); // inner:  300
}
// console.log(a); // 100
// console.log(b); // b is not defined
// console.log(c); // c is not defined

// Code Invironment and Browser Invironment alag alag hota hai.

// video no - 21

// ⤵️⤵️⤵️⤵️⤵️⤵️

//  Nested Scoope

function one() {
  const username = "sagar";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website); // ReferenceError: website is not defined

  return two();
}
// one();

if (true) {
  const name = "suman";
  if (name === "suman") {
    const website = "Facebook";
    // console.log(`Your name ${name} website ${website}.`); // Your name suman website Facebook.
  }
  // console.log(website); // ReferenceError: website is not defined
}
// console.log(name); //ReferenceError: website is not defined

//+++++++++++++++++ Interesting +++++++++++++++
// Cannot access before initialization, this is called Hoisting.

// console.log(addOne(5)); // 6

function addOne(num) {
  return num + 1;
}
// console.log(addOne(5));  // 6

// console.log(addTwo(5)); //ReferenceError: Cannot access 'addTwo' before initialization.

const addTwo = function (num) {
  return num + 2;
};
// console.log(addTwo(5)); // 7
