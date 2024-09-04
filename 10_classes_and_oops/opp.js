const user = {
  username: "sagar",
  loginCount: 5,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`username: ${this.username}`);
    // console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this; // by defolt 'this' return hota hai
}

const userOne = new User("sagar", 8, false); // when you not use 'new' keyword
const userTwo = new User("hello", 3, true); // Over right the value.
// 'new' keyword new insstance create karta hai
// console.log(userOne);
// console.log(userTwo);
console.log(userTwo.constructor); // [Function: User]
