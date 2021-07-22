class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log(`${this.email} just logged in`);
  }
  getName() {
    console.log(`Your username is ${this.name}`);
  }
  logout() {
    console.log(`${this.email} just logged out`);
  }
}

let userOne = new User("Ar Rasyid", "rasyidzkun@gmail.com");
let userTwo = new User("Bokuto Kotarou", "bokutokotarou44@gmail.com");

userOne.login();
userOne.getName();
userOne.logout();

userTwo.login();
userTwo.getName();
userTwo.logout();
