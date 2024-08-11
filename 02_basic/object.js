// Object literals

// How to add Symbol in Object
const mySym = Symbol("key1")

const JsUser = {
    name: "sagar barman",
    age: 24,
    location: "bangalore",
    email: "sagar@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["monday", "webnessday"],
    "parent name": ["sataru", "ratna"], // String added in a Object as key.
    [mySym]: mySym,  // Symbol added in a Object

}

// access the object value
// console.log(JsUser.name); // basic accessing Object
// console.log(JsUser["email"]); // Use string to access value.
// console.log(JsUser["parent name"][0]); // line no -> 13
console.log(JsUser[mySym]); //  line no -> 14
