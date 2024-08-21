// const coding = ["js", "ruby", "java", "python", "cpp"];

// const value = coding.forEach((item) => {
//   console.log(item);
// });
// console.log(value);

// filter

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10];

// const newNums = nums.filter((num) => num > 4);
// console.log(newNums);

// const newNums = nums.filter((num) => {
//   return num > 4; // agar carly braket use karte ho to return keyword use hota hai.
// });
// console.log(newNums);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10];
// const newNums = [];
// nums.forEach((num) => {
//   if (num > 5) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

// ex :-

const books = [
  { title: "book one", genre: "Fiction", publish: 1981 },
  { title: "book two", genre: "horror", publish: 1991 },
  { title: "book three", genre: "history", publish: 1881 },
  { title: "book four", genre: "Non-fiction", publish: 2002 },
  { title: "book five", genre: "Science", publish: 2009 },
  { title: "book six", genre: "Fiction", publish: 2015 },
  { title: "book seven", genre: "horror", publish: 1999 },
  { title: "book eight", genre: "history", publish: 2015 },
  { title: "book nine", genre: "Non-fiction", publish: 2020 },
  { title: "book ten", genre: "Fiction", publish: 2023 },
];

// const userBooks = books.filter((bk) => bk.genre === "history");
const userBooks = books.filter((bk) => {
  return bk.publish >= 2000 && bk.genre === "history";
});
// const userBooks = books.filter((bk) => bk.publish <= 2000);

console.log(userBooks);
