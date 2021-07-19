function User(name, email) {
  this.name = name;
  this.email = email;
  this.login = () => console.log(`${this.email} just logged in`);
  this.getName = () => console.log(`Your username is ${this.name}`);
  this.logout = () => console.log(`${this.email} just logged out`);
}

let userOne = new User("Ar Rasyid", "rasyidzkun@gmail.com");
let userTwo = new User("Bokuto Kotarou", "bokutokotarou44@gmail.com");

userOne.login();
userOne.getName();
userOne.logout();

userTwo.login();
userTwo.getName();
userTwo.logout();
