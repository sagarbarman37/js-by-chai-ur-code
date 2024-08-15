// this keyword

const user = {
  name: "sagar",
  price: 299,
  welcomeMassage: function () {
    // console.log(`${this.name}, welcome to website`);
    // console.log(this); // user Object
  },
};
// user.welcomeMassage(); // sagar, welcome to website
// user.name = "rajkumar"; // change the name
user.welcomeMassage(); // rajkumar, welcome to website

// console.log(this); // {}
// this keyword Browser main window object OR node environment main emty object hota hai.

function valueOfThis() {
  const username = "rajan";
  //   console.log(this.username); // undefined
  //   console.log(this);
}
// valueOfThis();
/*               <ref *1> Object [global] {
                 global: [Circular *1],
                 clearImmediate: [Function: clearImmediate],
                 setImmediate: [Function: setImmediate] {
                   [Symbol(nodejs.util.promisify.custom)]: [Getter]
                 },
                 clearInterval: [Function: clearInterval],
                 clearTimeout: [Function: clearTimeout],
                 setInterval: [Function: setInterval],
                 setTimeout: [Function: setTimeout] {
                   [Symbol(nodejs.util.promisify.custom)]: [Getter]
                 },
                 queueMicrotask: [Function: queueMicrotask],
                 structuredClone: [Function: structuredClone],
                 atob: [Getter/Setter],
                 btoa: [Getter/Setter],
                 performance: [Getter/Setter],
                 fetch: [Function: value],
                 crypto: [Getter]
}*/

const arrFunc = () => {
  const username = "raju";
  //   console.log(this.username); // undefined
  //   console.log(this); // {}
};
arrFunc();

// Deferent type of Arrow fujnction⤵️⤵️⤵️⤵️⤵️⤵️⤵️⤵️⤵️

// explesite arrow function
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 4)); // 7

// Implesite arrow function
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(3, 4)); // 7

// const addTwo = (num1, num2) => {
//   username: "kamal hasan";
// };
// console.log(addTwo(3, 3)); // undefined

const addTwo = (num1, num2) => ({
  username: "kamal hasan",
});
console.log(addTwo(3, 3)); // { username: 'kamal hasan' }

// video no - 23

//
