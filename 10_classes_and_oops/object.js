function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

// console.log(multipleBy5(5)); // 25
// console.log(multipleBy5.power); // 2
// console.log(multipleBy5.prototype); //{}

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  console.log(this.score++);
};

createUser.prototype.printme = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 20); // use 'new' keyword otherwise error
const tea = new createUser("tea", 40); // use 'new' keyword otherwise error

// chai.printme();
tea.increment();
