//forms api
// console.log(document.forms);
// console.log(document.forms['f1']['userName']);
// console.log(document.forms.f1.userName);
// console.log(document.forms.f2.userEmail);

//events
let target = document.getElementById('target');
// target.onclick = function (event) {
//     console.log('click');
//     console.log(event);
// }


// target.onmousemove = function (event) {
//     console.log('move');
//     console.log(event.clientX, event.clientY);
//     let r = event.clientX;
//     let g = event.clientX;
//     let b = event.clientY;
//     this.style.background = `rgb(${r}, ${g}, ${b})`
// }

// target.onclick = function () {
//     console.log('ksjdkjs');
// }
// console.log(target);

// target.addEventListener('click', function (event) {
//     console.log(event);
//     console.log('sljfjdjskjssfslkef');
// });
//
// target.onmouseover = function (){
//     console.log('over');
// }
// target.onmouseleave = function (){
//     console.log('leave');
// }
//
// let i1 = document.getElementById('i1');
// i1.oninput = function () {
//     console.log(this.value);
//     target.innerText = this.value;
//
// }

// let f1 = document.forms.f1;
// f1.onsubmit = function (event) {
//     event.preventDefault();
//     console.log('hello');
//     let user = {name: this.username.value}
//     console.log(user);
// }

// window.onload = function () {
//     console.log('load');
// }
//
// document.onreadystatechange = function () {
//     if (document.readyState === 'interactive') {
//         document.body.innerText = 'loading start...';
//     }
//     if (document.readyState === 'complete') {
//         document.body.innerText = 'loading complete';
//     }
// }

//local storage
// localStorage.setItem('ksq', 'kas');
// let item = localStorage.getItem('ksq');
// console.log(item);
// localStorage.clear();
// localStorage.setItem('user',JSON.stringify({id:1, name:'kokos'}));
let userJSON = localStorage.getItem('user');
console.log(userJSON);
let user = JSON.parse(userJSON);
console.log(user);
user.age = 31;
console.log(user);
let string = JSON.stringify(user);
localStorage.setItem('user', JSON.stringify(user));

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
localStorage.setItem('users', JSON.stringify(users));

let usersJSON = localStorage.getItem('users');
console.log(usersJSON);
let parse = JSON.parse(usersJSON);
console.log(parse);
parse.push({});
console.log(parse);
localStorage.setItem('users', JSON.stringify(parse));
//example