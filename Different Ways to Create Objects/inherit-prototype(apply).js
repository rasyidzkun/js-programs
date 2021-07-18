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

//Superuser constructor
function SuperUser(...args) {
  User.apply(this, args);
  this.role = "Super User";
}

// Inherit prototype
SuperUser.prototype = Object.create(User.prototype);

//Use SuperUser prototype
SuperUser.prototype.constructor = SuperUser;

SuperUser.prototype._role = function () {
  console.log(`My role is ${this.role}`);
};

let su = new SuperUser("root", "kucingkun@gmail.com");
console.log(su);
su.login();
su.getName();
su.logout();
su._role();
