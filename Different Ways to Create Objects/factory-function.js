function user(name, email) {
  return {
    name,
    email,
    login: function () {
      console.log(`${this.email} just logged in`);
    },
    getName: function () {
      console.log(`Your username is ${this.name}`);
    },
    logout: function () {
      console.log(`${this.email} just logged out`);
    },
  };
}

let userOne = user("Ar Rasyid", "rasyidzkun@gmail.com");
let userTwo = user("Bokuto Kotarou", "bokutokotarou44@gmail.com");

userOne.login();
userOne.getName();
userOne.logout();

userTwo.login();
userTwo.getName();
userTwo.logout();
