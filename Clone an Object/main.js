const name = {
  firstName: "Ar Rasyid",
  lastName: "Sarifullah",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  sayHello() {
    return `Hello ${this.fullName()}`;
  },
};

console.log(name.fullName());
console.log(name.sayHello());

// clone With Loop
const newName = {};
for (let key in name) {
  newName[key] = name[key];
}

console.log(newName);
console.log(newName.sayHello());

// clone with Object.assign
const objName = Object.assign({}, name);
console.log(objName);
console.log(objName.sayHello());

// clone with spread operator
const _name = { ...name };
console.log(_name);
console.log(_name.sayHello());
