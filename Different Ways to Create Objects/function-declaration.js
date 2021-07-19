function user(name, email) {
  let user = {};
  user.name = name;
  user.email = email;

  user.login = function () {
    console.log(`${this.email} just logged in`);
  };

  user.getName = function () {
    console.log(`Your username is ${this.name}`);
  };

  user.logout = function () {
    console.log(`${this.email} just logged out`);
  };

  return user;
}

let userOne = user("Ar Rasyid", "rasyidzkun.gmail.com");
let userTwo = user("Bokuto Kotarou", "bokutokotarou44@gmail.com");

userOne.login();
userOne.getName();
userOne.logout();

userTwo.login();
userTwo.getName();
userTwo.logout();
