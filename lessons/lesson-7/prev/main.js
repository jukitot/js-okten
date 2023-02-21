//date

let now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());
let date1 = new Date(1673536118048);
console.log(date1);
let date2 = new Date(1987, 0, 30, 12, 30, 50, 0);
console.log(date2);
let date3 = new Date('June 10 1991 12:30:34');
console.log(date3);

date1.setDate(31);
console.log(date1);


let user = {
    id: 1,
    name: 'kokos',
    bday: new Date(1673536118048)
}

console.log(user);

//errors

console.log('start');
try {
    console.log('try block');
}catch (e) {
    console.log(e)
}finally {
    console.log('finally block');
}
console.log('end');

function calc(a, b){
    if (b === 0){
        throw new Error('b is 0');
    }
    return a / b;
}
//?.
calc(10, 2);

let user1 = {
    name: { }
};
user1?.name?.fn;

// destruct
let name = 'vasya';
let age = 23;
let user2 = {
    name,
    age,
    foo(){
        console.log(this);
    },
    wife: {
        name: 'Anna',
        age: 23
    }
}
console.log(user2);
user2.foo();


let user3 = {
    name: 'vasya',
    age: 33,
    foo(){
        console.log('foo');
    },

};

// let {age,name, foo} = user3;
// console.log(name);
// console.log(age);
// foo();

console.log(user3.name);

function asd({name}){
    console.log(name);
}

asd({a:'skdjksj', name:'skjdkjs,dfd,kj'});

let {name: userName, age: userAge, wife:{name:wifeName},wife} = user2;
console.log(userName, userAge);
console.log(wife);

let numbers = [11, 22, 33];
let [a, b] = numbers;
console.log(a, b);

let[c, , e] = [11, 22, 33];
console.log(c, e);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


// let[{name:nameUser1, age:ageUser1, status}, user22] = users;
//
//
// console.log(user11);
// console.log(user22);


//spred

let user5 = {
    name: 'vasya',
    age: 32
};

let user6 = user5;
let user7 = {
    name: 'vasya',
    age: 32
}
console.log(user5 === user6); //true
console.log(user5 === user7); //false


let userCopy ={...user5}
console.log(userCopy);
console.log(userCopy === user5);
userCopy.age = 0;
console.log(userCopy);
console.log(user5);

let nums = [11, 22, 33];
let nums2 = nums;
console.log(nums === nums2); //true

let nums3 = [...nums];
console.log(nums === nums3); //false

//shallow deep copy

let user10 = {
    name: 'vasya',
    skills: ['html', 'js'],
    greeting: function (){}
}

let userClone = {...user10};
console.log(user10 === userClone); //false
console.log(user10.skills === userClone.skills); //true


let s = JSON.stringify(123);
console.log(s);
console.log(typeof s);

let userJsonClone = JSON.stringify(user10);//convert to json
console.log(userJsonClone);
let parse = JSON.parse('123')
console.log(parse);
console.log(typeof parse);

let userparse = JSON.parse(userJsonClone);
console.log(userparse);
console.log(user10);
console.log(user10 === userparse);
console.log(user10.skills === parse.skills);

let assign = Object.assign({}, user10);
console.log(assign);
console.log(assign === user10);//false
console.log(assign.skills === user10.skills);//true