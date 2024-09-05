class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME: is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCorse() {
    return `A new corse was added by ${this.username}`;
  }
}

const sagar = new Teacher("sagar", "sagar@google.com", "2135");
// console.log(sagar.addCorse()); // A new corse was added by sagar
// console.log(sagar.logMe()); // USERNAME: is sagar

const suman = new User("suman");
console.log(suman.logMe());
// console.log(suman.addCorse()); // ERROR: child ka function access nehi karpate hai.

// How to check Inheritance????

console.log(sagar instanceof User); // true
console.log(sagar instanceof Teacher); // true
console.log(suman instanceof User); // true
console.log(suman instanceof Teacher); // false

//
