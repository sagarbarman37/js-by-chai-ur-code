const accountId = 4654845354;
// assignment cannot be changed in const variable
// accountId = 65436458;
// console.log(accountId);

let accountEmail = "sagar43@gmail.com";
// console.log(accountEmail);
accountEmail = "barman@gmail.com";
// console.log(accountEmail);
/*
The let declaration declares re-assignable, 
block-scoped local variables, optionally initializing each to a value.
*/

var accountPassword = "sagar";
accountPassword = 12134;
// console.log(typeof accountPassword);
/*
 Prefer not to use var 
 becouse of issue in block scope and functional scope.
*/

accountCity = "bangalore";
accountCity = "Delhi";
// console.log(accountCity);

// ek sath main anek output dikhane ke liye:
// console.log(accountId, accountEmail, accountPassword, accountCity);
// console.table([a, b, c])
// console.table([accountId, accountEmail, accountPassword, accountCity]);
