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

//destruct
let name = 'vasya';
let age = 23;
let user2 = {
    name,
    age
}
console.log(user2);