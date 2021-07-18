const user = {
  name: "Ar Rasyid",
  email: "rasyidzkun@gmail.com",
  login() {
    console.log(`${this.email} just logged in`);
  },
  getName() {
    console.log(`Your username is ${this.name}`);
  },
  logout() {
    console.log(`${this.email} just logged out`);
  },
};

user.login();
user.getName();
user.logout();
