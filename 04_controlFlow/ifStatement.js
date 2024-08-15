// IF

if (true) {
  //   console.log("hello");
} else {
  //   console.log("hi");
}

// <, <=, >, >=, ==, !=, ===, !==

// const ballance = 1000;

// if (ballance > 500) {
//   console.log("grater than 500");
// } else if (ballance > 700) {
//   console.log("grater than 700");
// }

const userLoggedIn = true;
const debitCart = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if (userLoggedIn && debitCart) {
  console.log("user can buy product");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user can logged in");
}

// Ternity Operatur
// condition ? true : false;

const price = 10;
price < 100 ? console.log("buy it") : console.log("dont buy it");
