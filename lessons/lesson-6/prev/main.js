//string functions
let str = 'hello okten';
console.log(str);
console.log(str[0]);
for (const strElement of str) {
    console.log(strElement);
}

let s = new String('kjkjd');
console.log(typeof s);

//concat
let d = str.concat('!!!');
console.log(d);

//uppercase
let u = str.toUpperCase();
console.log(u);
//lowercase
console.log(str.toLowerCase());

//startswith
console.log(str.startsWith('hell'));

//endswith
console.log(str.endsWith('en'));

//substring
console.log(str.substring(0, 7));

//indexOf
console.log(str.indexOf('h'))
console.log(str.indexOf('o', 5))

//lastindexof
console.log(str.lastIndexOf('o'));

//charAt
console.log(str.charAt(8));

//replace
console.log(str.replace('e', '!'));
console.log(str.replaceAll('l', '&'));

//split

let split = str.split(' ');
console.log(split);


//arrays methods

let arr = [];
console.log(typeof arr);
console.log(Array.isArray(arr));

arr[arr.length] = 100;

//push
arr.push('new elem1');
arr.push('new elem2');
arr.push('new elem3');
arr.push('new elem4');
arr.push('new elem5');
console.log(arr);
//pop
arr.pop();
console.log(arr.pop());
console.log(arr);

//unshift
arr.unshift('!!!');
console.log(arr);
console.log(arr.shift());
console.log(arr);

//join
console.log(arr.join('-'));

let nums = [11, 22, 33];
let concat = arr.concat(nums);
console.log(concat);
console.log(arr);


//revers
console.log(nums);
console.log(nums.reverse());

//slice
console.log(concat);
console.log(concat.slice(0, 4));

//splice

console.log(concat.splice(0,2));
console.log(concat);

console.log(concat);
console.log(concat.indexOf(11));
console.log(concat.splice(concat.indexOf(11), 1));
console.log(concat);

console.log(concat.includes(11));
console.log('hello okten'.includes('ok'));


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
//forEach
users.forEach(function (value, index){
    console.log(value, index);
});

users.forEach(value => console.log(value))


//filter
console.log('--------------');
let filteredUsers = users.filter(function (value){
    return value.age > 30;
});
console.log(filteredUsers);

let filteredUsers1 = users.filter(value => value.age > 30);
console.log(filteredUsers1);

//map

let mapedUsers = users.map(function (value, index){

    let newUser = {
        name: value.name,
        age: value.age,
        status: value.status,
        id: index + 1
    }
    return newUser;
} );
console.log(mapedUsers);

let mapedUsers1 = users.map(function (value, index){
    return {
        name: value.name,
        age: value.age,
        status: value.status,
        id: index + 1
    }
} );
console.log(mapedUsers1);

let mapedUsers3 = users.map(function (value, index){
    return {...value, id: index+1}
} );
console.log(mapedUsers3);

let mapedUsers4 = users.map((value, index) => ({...value, id: index + 1}));
console.log(mapedUsers4);

//find
console.log(users.find(value => value.name === 'max'));

//every
console.log(users.every(value => value.status));
//some
console.log(users.some(value => value.status));

//sort
let sortUsers = users.sort((user1, user2) => {
    return user1.age - user2.age;
});
console.log(sortUsers);

// console.log(users.sort((user1, user2) => {
//     return user2.age - user1.age;
// }));

let nameSort = users.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    if (a.name === b.name) {
        return 0;
    }
});
console.log(nameSort);

//reduce

let reduce = users.reduce((accumulator, user) => {
    if(user.status === true){
        accumulator.statT.push(user);
    }else{
        accumulator.statF.push(user)
    }
    return accumulator;
}, {statT:[], statF:[]});
console.log(reduce);