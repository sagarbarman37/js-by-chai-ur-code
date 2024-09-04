function SetUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}

function CreateUser(username, email, password) {
  //   SetUsername(username); // username can't be create
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const sagar = new CreateUser("sagar37", "sagar@fb.com", "73649");
console.log(sagar);
/* output:-
CreateUser {
    username: 'sagar37',
    email: 'sagar@fb.com',
    password: '73649'
  }
*/

//
