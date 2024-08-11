// Array

const myArr = [1, 2, 3, 4, 5];
const heros = ["shaktiman", "spyderman", "badman"];
const myArr2 = new Array(1, 2, 3, 4, 5, 6);

// Array methods

myArr.push(6, 7); // item added, end of the array.
myArr.pop(); // item deleted, end of the array.
// console.log(myArr);

myArr.unshift(9); // item added, stat of the array.
myArr.shift(); // item delete, start of the array.
// console.log(myArr);

// console.log(myArr.includes(4));// Boolean // item there or not.
// console.log(myArr.indexOf(4)); // How many numbers are in the index?

const newArray = myArr.join(); //Adds all the elements of an array into a string
// console.log(newArray);
// console.log(typeof newArray); //type --> String

// console.log(myArr);

const newArr1 = myArr.slice(1, 3); //original array connot menipulate
// console.log("slice", myArr);
// console.log("slice", newArr1);

const newArr2 = myArr.splice(2, 5); // original array menipulate
// console.log("splice", myArr);
// console.log("splice", newArr2);

// part 2

const marvel_hero = ["Thior", "Ironman", "Spiderman"];
const dc_hero = ["superman", "flash", "batman"];
// marvel_hero.push(dc_hero) //output => ["Thior", "Ironman", "Spiderman",["superman", "flash", "batman"]]
// console.log(marvel_hero[3][1]); // access the dc_hero

//concat operator
let allHero = marvel_hero.concat(dc_hero); // 
// console.log(allHero); // ["Thior", "Ironman", "Spiderman", "superman", "flash", "batman"]

// sprade operator
let allNewHero = [...marvel_hero, ...dc_hero]
// console.log(allNewHero);// ["Thior", "Ironman", "Spiderman", "superman", "flash", "batman"]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const onlyOneAnotherArray = anotherArray.flat(Infinity); // value will 1 to Infinity.
// console.log(onlyOneAnotherArray); //[1,2,3,4,5,6,7,8,9,10,11]

// console.log(Array.isArray("sagar")); // check it is Array or not.
// console.log(Array.from("sagar")); // creat string to Array. 
// console.log(Array.from({ name: "sagar" }));// []  (it is interesting case.)

// many variable intu One Array
let sum = 100
let sum2 = 200
let sum3 = 300
let sum4 = 400

let allSum = Array.of(sum, sum2, sum3, sum4); // [100,200,300,400]
// console.log(allSum)

