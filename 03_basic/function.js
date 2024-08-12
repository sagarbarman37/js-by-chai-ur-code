// function

// console.log("s");
// console.log("a");
// console.log("g");
// console.log("a");
// console.log("a");
// console.log("r");

function sayMyName() {
  //   console.log("s");
  //   console.log("a");
  //   console.log("g");
  //   console.log("a");
  //   console.log("a");
  //   console.log("r");
}
// sayMyName();

function addTwoNumber(num1, num2) {
  //   console.log(num1 + num2);
}
// addTwoNumber(3, 4); // 7
// if you store this value whar will happen?
let result = addTwoNumber(3, 4);
// console.log(result); // Undefined

function subTwoNumber(num1, num2) {
  return num1 + num2;
}
let subNum = subTwoNumber(3, 4);
// console.log(subNum);

// 👉 if you return a function, store the funcrion call
function loginUserMassage(username) {
  return `${username} just logged in`;
}
let name = loginUserMassage("sagar barman");
// console.log(name);
// OR
// console.log(loginUserMassage("sagar barman"));

function sendMassage(name = "sam") {
  // (name = sam)
  // (name === undefined)
  if (!name) {
    return "enter your name";
  } else {
    return `${name} send a massage`;
  }
}
// console.log(sendMassage("suman")); // suman send a massage
// console.log(sendMassage()); // sam send a massage
// console.log(sendMassage("")); // enter your name

// video nol -> 19

function calculatePrice(...price) {
  return price;
}

let calPrice = calculatePrice(12, 343, 3534, 1145);
// console.log(calPrice); // [ 12, 343, 3534, 1145 ]

// function calculatePrice(num1, num2, ...price) {
//   return price;
// }

// let calPrice = calculatePrice(12, 343, 3534, 1145);
// console.log(calPrice); // [ 3534, 1145 ]

//👉 How to handle Object in Function:-

const buy = {
  name: "T-shirt",
  price: 299,
};

function shopping(add) {
  return `I bought one ${add.name}, price is ${add.price}`; // paramiter handle this Object.
}
// console.log(shopping(buy));
// another way to declear⤵️
//    console.log(
//      shopping({
//        name: "Full-shirt",
//        price: 399,
//      })
//    );

//👉 How to handle Array in Function:-

const newArr = [214, 544, 465, 657, 256];

function returnArray(arr) {
  return arr[2];
}
console.log(returnArray(newArr)); //465
// another way to declear⤵️
console.log(returnArray([321, 451, 544, 234, 465]));

// video no -> 20
