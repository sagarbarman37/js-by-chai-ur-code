function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return `${this._email.toUpperCase()}`;
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return `${this._password.toUpperCase()}`;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const raju = new User("raju@goojle.ai", "raju324");
console.log(raju.email); // RAJU@GOOJLE.AI
console.log(raju.password); // RAJU324

//
