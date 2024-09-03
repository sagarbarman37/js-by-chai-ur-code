// A Promise is in one of these states:
// 1. pending
// 2. fulfilled
// 3. rejected

// How to Create Promise?
// 1.
const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  // DB calls, crypptography, network
  setTimeout(() => {
    console.log("Async task is complite");
    resolve();
  }, 1000);
});
// resolve() connect to 'then'

promiseOne.then(() => {
  console.log("promise consume");
});

// 2.
// When you don't set the variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolve");
});

// 3.
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Sagar", email: "sagar@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

// 4.
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({ username: "sagar", password: "1234" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

// You can't save in the veriable
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  }) // jab app return karte ho to next ".then" pass hota hai.
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolve or rejected"));

// 5.
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({ corse: "javaScript", price: "999" });
    } else {
      reject("ERROR: You can't buy this corse");
    }
  }, 1000);
});

async function consumePromiseFive() {
  // "async await" can't handle error
  // so 'resolve - reject' value ke liye 'try - catch' use hota hai.
  try {
    const response = await promiseFive;
    console.log(response); // { corse: 'javaScript', price: '999' }
  } catch (error) {
    console.log(error); // ERROR: You can't buy this corse
  }
}
consumePromiseFive();

// 6.
// Behind the scenes
async function getUser() {
  try {
    const user = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(typeof user);// object
    const data = await user.json(); // isko vi convart honeme time lagta hai so use 'await' keyword.
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// getUser();

// 7.
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
