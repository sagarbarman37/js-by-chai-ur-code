// "forEach" loop

const coding = ["js", "ruby", "java", "python", "cpp"];

// 1
// coding.forEach(function (item) {
//   console.log(item);
// });
// 2
// coding.forEach((val) => {
//   console.log(val);
// });

// 3
function printMe(item) {
  //   console.log(item);
}
coding.forEach(printMe); //only function referance dena hota hai.

// 4
coding.forEach((val, idx, arr) => {
  //   console.log(val, idx, arr);
});

// Array ke ander ki Object ko forEach loop lagana⤵️⤵️⤵️⤵️⤵️⤵️⤵️

const myCoding = [
  {
    languegeName: "javaScreipt",
    languegeFileName: "js",
  },
  {
    languegeName: "java",
    languegeFileName: "java",
  },
  {
    languegeName: "python",
    languegeFileName: "py",
  },
];

myCoding.forEach((val) => {
  //   console.log(val.languegeName);
  console.log(val.languegeFileName);
});

// video no - 28
