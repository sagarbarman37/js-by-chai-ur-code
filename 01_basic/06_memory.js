// memory
// Stack (primitive)  // memory ka copy millta hain
// Heap (non-primitive) // memory ka referance milta hain

// Stack memory
let youTubeName = "sagarbarman37";
let anotherYouTubeName = youTubeName;
anotherYouTubeName = "fazilGamer";

// console.log(youTubeName);
// console.log(anotherYouTubeName);

// Heap memory

const userOne = {
  email: "userOne@gmail.com",
  mobile: 5476354,
};

const userTwo = userOne;
userTwo.email = "sagar@gmail.com";

// console.log(userOne);
// console.log(userTwo);
