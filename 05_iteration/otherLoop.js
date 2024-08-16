// "for of" loop

const arr = [1, 2, 3, 4, 5, 6];
for (let val of arr) {
  //   console.log(val);
}

// "Loop" on String

const greeting = "Hello World";
for (let greet of greeting) {
  //   console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "America");
map.set("FR", "France");
// console.log(map);

// for (let key of map) {
//   console.log(key);
/*  output : 
[ 'IN', 'India' ]
[ 'USA', 'America' ]
[ 'FR', 'France' ]
  */

// } // normal

// for (let [key, value] of map) {
//   console.log(`${key} :- ${value}`);
/* output:
  IN :- India
    USA :- America
    FR :- France    */
// } // first destraucture then access.

// "for of" loop on Object

const myObj = {
  game1: "NFS",
  game2: "Spiderman",
};
// for (let [key, val] of myObj) {
//   //   console.log(`${key} :- ${val}`); //  myObj is not iterable
// }
// for of loop is not working

// "for in" loop on Object 👉👉👉👉👉

const newObj = {
  js: "javaScript",
  cpp: "c++",
  rust: "rust languege",
};

// for (let key in newObj) {
//   console.log(key);  // Only key
// }
for (let key in newObj) {
  //   console.log(`${key} shortcut is for ${newObj[key]}`); // "newObj.key" value will be Undefined.
}

// "for in" loop on Array 👉👉👉👉👉

const newArr = ["js", "rb", "py", "java"];
// for (let key in newArr) {
//   console.log(key); // 01234
// }
for (let key in newArr) {
  //   console.log(newArr[key]); // js rb py java
}

// "for in" loop on map

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "America");
// map.set("FR", "France");

// for (let key in map) {
//   console.log(key); // empty
// }
