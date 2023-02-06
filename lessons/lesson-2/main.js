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
    status: true,
    skills: ['java', 'js', 'html'],
    wife: {
        username: 'anna',
        age: 21
    }
}

console.log(user);
console.log(user.username);
console.log(user.age);
console.log(user.status);
console.log(user.skills);
console.log(user.skills[2]);;

console.log(user['username']);//аналог к user.username

console.log(user.wife);
console.log(user.wife.username);

//////////////////////////////////////
let user1 = {
    username: 'kokos',
    age: 23,
    status: true,
    skills: [
        {title: 'java', exp: 3},
        {title: 'js', exp: 4},
        {title: 'html', exp: 12}
    ],
    wife: {
        username: 'anna',
        age: 21
    }
};

console.log(user1.skills[2].exp);

user1.nickname = 'kamikadze';
console.log(user1);


user1.car = {
    manufactirer: 'porshe',
    model: 'cayyene',
    year: 2014,
    generation: 2,
    power: 300
};

console.log(user1);

fetch ('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        console.log(value);
    })


let x = 0;
let y = x;

y = y + 1;
console.log(x, y);

let obj = {
    foo: 0
}

let obj2 = obj;
obj2.foo = 100500;
console.log(obj2);

console.log(obj);

const obj5 = {
    name: 'vasya'
}

obj5.age = 23;

const obj6 = obj5;

console.log(obj6);

color = 'red';
if (color === 'black') {
    console.log('++++')
}else{
    console.log('-----')
}

const answer = confirm('are you older than 18?');
console.log(answer);

if (answer) {
    document.write('<h1> hello and watch your hot movies');
} else {
    document.write('<h1> hello and watch your cartoons');
}


let color1 = 'red';
let isRoadClear = true;

if (color === 'red'){
    if(isRoadClear){
        console.log('wait');
    }
}

if (color1 === 'green'){
    console.log('go');
} else if (color1 === 'yellow') {
    console.log('wait');
} else if (color1 === 'red') {
    console.log('stop');
} else {
    console.log('????');
}


console.log(5 < 4 && 100 > 99);
console.log(5 < 4 || 100 > 99);



let key = 'foofl';
switch (key) {
    case 'foo':
        console.log('helloooo!!!');
        break;
    default:
        console.log('default value!');


}

let x1;
if (true){
    x1 = 100;
}else{
    x1 = 200;
}
console.log(x1);

let x3 = true ? 100 : 200;
console.log(x3);
