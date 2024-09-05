class User {
  constructor(username) {
    this.username = username;
  }

  lgoMe() {
    return `Username: ${this.username}`;
  }

  static createId() {
    // 'static' keyword user ko access nehi deta hai.
    return `32456`;
  }
}

const sagar = new User("sagar");
console.log(sagar.createId()); // Not access due to 'static' keyword.

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const hiteshSir = new Teacher("Hitesh chaudhary", "hitesh@gmail.com");
// console.log(hiteshSir.lgoMe());

//
