class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return `${this._email.toUpperCase()}`;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    // return this._password.toUpperCase();
    return `SRKKKR${this._password.toUpperCase()}CSKRCB`;
  }

  set password(value) {
    this._password = value;
  }
}

const sagar = new User("sagar@fb.com", "sagar72427@");
console.log(sagar.email); // SAGAR@FB.COM
console.log(sagar.password); // SRKKKRSAGAR72427@CSKRCB

//
