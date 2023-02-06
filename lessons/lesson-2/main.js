console.log('hello');
let name1 = 'vasya'
let names = [name1,
    'petya',
    'anna',
    'olya',
    123,
    true,
    [11, [111, 222, 333], 33]];
console.log(names);
console.log(names[0]);
console.log(names[1]);
let innerArrayOfNumbers = names[6];
console.log(innerArrayOfNumbers);
console.log(innerArrayOfNumbers[1]);
console.log(names[6][1][1]);
console.log(names[1], names[2]);

names[3] = 'Tolya';
console.log(names);
names[100] = 'forokr';
console.log(names);

let length = names.length;
console.log(length);
names[length] = 'foo';
console.log(names);

names[names.length] = 'dlk';
names[names.length] = 'deee';
names[names.length] = 'bbbbv';
console.log(names);

console.log(typeof names);
console.log(Array.isArray(names));


//objects

let user1Name = 'kokos';
let user1Age = 23;

let user = {
    username: 'kokos',
    age: 23,
    status: true
}

console.log(user);














