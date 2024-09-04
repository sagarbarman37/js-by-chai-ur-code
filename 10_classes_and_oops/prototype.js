// let myName = "sagar     ";
// console.log(myName.trueLength);

let heros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spiderman power is ${this.spiderman}`);
  },
};

// Create new method:-⤵️⤵️⤵️⤵️⤵️

Object.prototype.sagar = function () {
  console.log(`sagar is present in all object`);
};

// heroPower.sagar(); // sagar is present in all object
// heros.sagar();  // sagar is present in all object
// myName.sagar();   // sagar is present in all object

Array.prototype.haySagar = function () {
  console.log(`sagar says hello`);
};

// heros.haySagar(); //sagar says hello
// heroPower.haySagar(); // heroPower.haySagar is not a function

// 👉👉 Inheritance

const User = {
  name: "sagar",
  email: "sagar@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // it's outdated
};

Teacher.__proto__ = User; // it's outdated

// mordern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let userName = "sagar      ";

String.prototype.trueLenght = function () {
  console.log(this);
  console.log(`TrueLenght is: ${this.trim().length}`);
};

userName.trueLenght();
"sagar barman".trueLenght();
"iceTea".trueLenght();

//
