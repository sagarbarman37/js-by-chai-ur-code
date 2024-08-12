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
