// Object literals

// How to add Symbol in Object
const mySym = Symbol("key1");

const JsUser = {
  name: "sagar barman",
  age: 24,
  location: "bangalore",
  email: "sagar@gmail.com",
  isLoggedIn: false,
  lastLoginDay: ["monday", "webnessday"],
  "parent name": ["sataru", "ratna"], // String added in a Object as key.
  [mySym]: "key1", // Symbol added in a Object
};

// access the object value :-

// console.log(JsUser.name); // basic accessing Object
// console.log(JsUser["email"]); // Use string to access value.
// console.log(JsUser["parent name"][0]); // line no -> 13
// console.log(JsUser[mySym]); //  line no -> 14

// How to Change the Value :-

JsUser.email = "barman@gmail.com"; // Change the email's value.
// console.log(JsUser.email);
JsUser["parent name"] = "Ratna"; //  Change the String's value.
// console.log(JsUser["parent name"]) ;

//Add Function in a Object :-

JsUser.greating = function () {
  console.log("Hello JsUser");
};
JsUser.greatingTwo = function () {
  console.log(`Hello JsUser, ${this.name}`); //It's called string interpolation.
  //   console.log(`Hello JsUser, ${this["parent name"]}`); //It's called string interpolation.
  //   console.log(`Hello JsUser, ${this[mySym]}`); //It's called string interpolation.
};

// console.log(JsUser.greating); // It's called function reference.
// console.log(JsUser.greating());
// console.log(JsUser.greatingTwo());

// Freeze Or Lock the Object :-

Object.freeze(JsUser); // Object was Freezed,

JsUser.email = "sumanb@gmail.com"; // Object was Freezed, email can't be change.
// console.log(JsUser);
