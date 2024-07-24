const name = "Sagar barman";
const repoCount = 12;
// it's Old
// console.log("my name is " + name + " and repositories " + repoCount);

//modern
// console.log(`I am ${name} and my repositories is ${repoCount}`);

// another way to write String
// use 'new' keyword.

const gameName = new String("ping pong");
// console.log(gameName.length); // output => 9
// console.log(gameName.toUpperCase()); // output => PING PONG
// console.log(gameName.toLowerCase()); // output => ping pong
// console.log(gameName.charAt(3)); // output => g
// console.log(gameName.indexOf("o")); // output => 6
// console.log(gameName.lastIndexOf("p")); // output => 5  start from last
// console.log(gameName.concat(" ball")); // output => ping pong ball
console.log(gameName.includes("ping pong")); // output => true / false
// if word or letter includes then output will true ather then false.

const newString = gameName.substring(0, 6);
console.log(newString);
