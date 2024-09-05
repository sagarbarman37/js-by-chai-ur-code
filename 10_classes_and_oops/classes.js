// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abcd`;
  }

  changeUsernaume() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@fb.com", "2323");
console.log(chai.encryptPassword());
console.log(chai.changeUsernaume());

// Behind the scene 👉👉👉👉

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abcd`;
// };

// User.prototype.changeUsernaume = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const raja = new User("raja", "raja@fb.com", "3435");
// console.log(raja.encryptPassword());
// console.log(raja.changeUsernaume());
