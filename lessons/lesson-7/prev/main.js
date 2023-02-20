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

