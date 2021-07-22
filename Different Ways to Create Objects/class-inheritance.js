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

class SuperUser extends User {
  constructor(name, email, role) {
    super(name, email);
    this.role = role;
  }
  _role() {
    console.log(`My role is ${this.role}`);
  }
}

let su = new SuperUser("root", "kucingkun@gmail.com", "Admin");
console.log(su);
su.login();
su.getName();
su.logout();
su._role();
