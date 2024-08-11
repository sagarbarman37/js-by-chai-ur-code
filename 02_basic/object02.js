// Singaleton Object

// const tinderUser = new Object();
// console.log(tinderUser);

const tinderuser = {};

(tinderuser.id = "134abcd"),
  (tinderuser.email = "something@gmail.com"),
  (tinderuser.isLoggedIn = false);
//   console.log(tinderuser);

// Access Keys and Values:-
// console.log(Object.keys(tinderuser)); // [ 'id', 'email', 'isLoggedIn' ]
// console.log(Object.values(tinderuser)); // [ 'id', 'email', 'isLoggedIn' ]
// console.log(Object.entries(tinderuser)); // [ [ 'id', '134abcd' ], [ 'email', 'something@gmail.com' ],  [ 'isLoggedIn', false ]]
// output Array main ata hain

// console.log(tinderuser.hasOwnProperty("email"));  // true
// Aap ka key object main hain yan nehi.

// nested Object
const regulerUser = {
  email: "sagar@gmail.com",
  fullName: {
    userName: {
      firstName: "sagar",
      lastName: "barman",
    },
    password: 753482,
  },
  isLoggedIn: true,
};

// console.log(regulerUser); // full object
// console.log(regulerUser.fullName); // { userName: { firstName: 'sagar', lastName: 'barman' },password: 753482}
// console.log(regulerUser.fullName.userName); // { firstName: 'sagar', lastName: 'barman' }
// console.log(regulerUser.fullName.userName.firstName); // sagar

//Object Combine

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 }; // output -> nested object // { obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }
// const obj3 = Object.assign({}, obj1, obj2); // assign method // { a: 1, b: 2, c: 3, d: 4 }
// const obj3 = { ...obj1, ...obj2 }; // Sprade Oprator  // { a: 1, b: 2, c: 3, d: 4 }

// console.log(obj3);

// Backend se Array ke rup main Object ata hai
// Example:-

const user = [
  { id: 12344, email: "one@gmail.com" },
  { id: 12345, email: "two@gmail.com" },
  { id: 12346, email: "three@gmail.com" },
  { id: 12347, email: "four@gmail.com" },
];

// console.log(user);
// console.log(user[0]); // { id: 12344, email: 'one@gmail.com' }
// console.log(user[0].email); // one@gmail.com
// console.log(user[3].id); // 12347
// console.log(user[3][id]); // ReferenceError: id is not defined

// video no - 17

// Destracture of Object:-

const course = {
  courseName: "JavaScript",
  price: "499",
  courseInstructor: "Hitesh ",
};

// console.log(course.courseInstructor); // normal values

const { courseInstructor } = course; // Destracture values
// console.log(courseInstructor);
// if your keys name so big then you change it⤵️
const { courseInstructor: instructor } = course;
console.log(instructor);

// APIs concept
