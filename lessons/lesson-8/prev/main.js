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
// function User(name, age){
//     this.name = name;
//     this.age = age;
// }
//
// User.prototype.greeting = function () {
//     return `hello my name is ${this.name}`;
// };
//
// let user = new User('vasya', 123);
// console.log(user);
// console.log(user.greeting());
//
// let user2 = new User('olya', 23);
// console.log(user2);
// console.log(user2.greeting());
//
// let user = new User('vasya', 123);
// user.greeting = function (msg) {
//     return `${msg} my name is ${this.name} `;
// };
//
// console.log(user.greeting('hello'));
// let user2 = new User('olya', 23);
// // console.log(user.greeting.apply(user2, ['hi'])); //user2.greeting()
// console.log(user.greeting.call(user2, 'hi'));
//
// let greetingCopy = user.greeting.bind(user2, 'hey');
// console.log(greetingCopy());

//classes and extends

// class User {
//
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // static greeting() {
//     //     console.log(this);
//     //     return `hello my name is ${this.name}`
//     // }
//
//      greeting() {
//         console.log(this);
//         return `hello my name is ${this.name}`
//     }
//
//     work() {
//         return `work in process`;
//     }
//
//
// }
//
// // let user = new User('vasya', 31);
// // console.log(user);
// // console.log(User.greeting());
//
// class Customer extends User{
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
//     work() {
//         return super.work();
//     }
// }
//
// let customer = new Customer('vasya', 31, '1111');
// console.log(customer);
// console.log(customer.work());

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// function Customer(name, age, password) {
//     User.apply(this, arguments);
//     this.password = password;
// }
// let customer = new Customer('vasya', 31, '1111');
// console.log(customer);

//prototypes of objects


let user = {
    id: 1,
    name: 'kokos'
};
let user2p = Object.create(user);
console.log(user2p === user);
console.log(user2p);
console.log(user2p.id);
console.log(user2p.name);

console.log(user2p.hasOwnProperty('id'));
console.log(user2p.hasOwnProperty('name'));
user2p.surname = 'foobar';
console.log(user2p.hasOwnProperty('surname'));
console.log(user2p);
