//constructions

// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
//
// let user1 = new User('akjds', 123, true);

// function User(name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife
// }
// new User('jkk', 23, true, {name: 'ksjk'});

// function User(name, age, status, wifeName, wifeAge){
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge}
//     this.greeting = function () {
//         console.log('hi');
//     }
// }
//
// let user = new User('mkk', 122, true, 'kjkj', 22);
// console.log(user);
// user.greeting();


//prototype call apply bind
function User(name, age){
    this.name = name;
    this.age = age;
}



User.prototype.greeting = function () {
    return `hello my name is ${this.name}`;
};

let user = new User('vasya', 123);
console.log(user);
console.log(user.greeting());

let user2 = new User('olya', 23);
console.log(user2);
console.log(user2.greeting());
