// Array

const myArr = [1, 2, 3, 4, 5]
const heros = ["shaktiman", "spyderman", "badman"]
const myArr2 = new Array(1, 2, 3, 4, 5, 6)

// Array methods

myArr.push(6, 7)  // item added, end of the array.
myArr.pop()  // item deleted, end of the array.
// console.log(myArr);

myArr.unshift(9) // item added, stat of the array.
myArr.shift() // item delete, start of the array.
// console.log(myArr);

// console.log(myArr.includes(4));// Boolean // item there or not.
// console.log(myArr.indexOf(4)); // How many numbers are in the index?


const newArray = myArr.join() //Adds all the elements of an array into a string
// console.log(newArray);
// console.log(typeof newArray); //type --> String

// console.log(myArr);

const newArr1 = myArr.slice(1, 3) //original array connot menipulate
// console.log("slice", myArr);
// console.log("slice", newArr1);

const newArr2 = myArr.splice(2, 5) // original array menipulate
// console.log("splice", myArr);
// console.log("splice", newArr2);