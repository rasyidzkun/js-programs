function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.email} just logged in`);
};

User.prototype.getName = function () {
  console.log(`Your username is ${this.name}`);
};

User.prototype.logout = function () {
  console.log(`${this.email} just logged out`);
};

let userOne = new User("Ar Rasyid", "rasyidzkun@gmail.com");
let userTwo = new User("Bokuto Kotarou", "bokutokotarou44@gmail.com");

userOne.login();
userOne.getName();
userOne.logout();

userTwo.login();
userTwo.getName();
userTwo.logout();
