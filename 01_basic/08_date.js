let myDate = new Date();
// console.log(myDate.toString()); // Thu Jul 25 2024 17:17:46 GTM+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString()); // 7/25/2024, 5:17:46 PM
// console.log(myDate.toDateString()); // Thu Jul 25 2024
// console.log(myDate.toISOString()); // 2024-07-25T17:21:35.950Z
// console.log(myDate.toJSON()); //
// console.log(myDate.toLocaleDateString()); // 7/25/2024
// console.log(myDate.toTimeString()); // 17:26:33 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleTimeString()); // 5:29:06 PM
// console.log(myDate.toUTCString()); //

// let myCreatedTime = new Date(2024, 2, 23);
// console.log(myCreatedTime.toString());

// let myCreatedTime = new Date(2024, 2, 23, 10, 30);
// console.log(myCreatedTime.toLocaleString());

let myCreatedTime = new Date("2000-03-23");
// console.log(myCreatedTime.toLocaleString());

let myTimeStamp = Date.now(); // output will mili-second
// console.log(myTimeStamp); // Ms
// console.log(myCreatedTime.getTime()); // Ms
// console.log(Math.floor(Date.now() / 1000)); // second

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1); // getMonth main +1 add kana parta hain
// becouse month works as a Array, so clind will see right month
// console.log(newDate.getFullYear());

// INDIAN Time Zone
let indianTime = new Date().toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
  timeStyle: "short",
  hourCycle: "h12",
});
// console.log(indianTime);
