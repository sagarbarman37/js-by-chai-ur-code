// map()

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNum.map((num) => num + 10); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// const newNums = myNum.map((num) => {
//   return num + 10;
// });

// chaining

const newNums = myNum
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 50);
// console.log(newNums); // [ 51, 61, 71, 81, 91, 101 ]

// reduce()

// const newNum = [1, 2, 3, 4];

// const total = newNum.reduce(function (acc, currval) {
//   return acc + currval;
// }, 0);
// console.log(total); // 10

// const newNum = [1, 2, 3, 4];

// const total = newNum.reduce(function (acc, currval) {
//   console.log(`acc: ${acc}, currval: ${currval}`);
//   return acc + currval;
// }, 0);
// console.log(total); // 10

const newNum = [1, 2, 3, 4];
const total = newNum.reduce((acc, crVal) => acc + crVal, 0);
// console.log(total);

const shoppingCart = [
  { itemName: "js course", price: 599 },
  { itemName: "data science course", price: 2500 },
  { itemName: "python course", price: 999 },
  { itemName: "mobile dev course", price: 5000 },
  { itemName: "backend course", price: 3000 },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);
