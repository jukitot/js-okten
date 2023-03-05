//DOM
// console.log(document.head);
// console.log(document.head.children);
// console.log(document.body.innerHTML);

//ID

let ul1 = document.getElementById('list-1');
console.log(ul1);

//class

let menuCollection = document.getElementsByClassName('menu');
console.log(menuCollection);

for (const menuCollectionElement of menuCollection) {
    console.log(menuCollectionElement);
}


//tag
let liList = document.getElementsByTagName('li');
console.log(liList);

let list1 = document.getElementById('list-1');
console.log(list1);

let list1LiCollection = list1.getElementsByTagName('li');
console.log(list1LiCollection);

//querySelector
console.log(document.querySelector('body .menu'));

console.log(document.querySelectorAll('.menu'));

let nodeListOf = document.querySelectorAll('.menu:nth-child(2)>li');
console.log(nodeListOf);
for (const nodeListOfElement of nodeListOf) {
    console.log(nodeListOfElement);
}

//manipulation DOM elements
let target = document.getElementById('target');
console.log(target.innerText);
// target.innerText = 'okten';
target.style.background = 'silver';
// console.log(target.classList);
target.classList.add('foo');
target.classList.add('bar');
// console.log(target.classList.keys());
// console.log(target.classList.item(0));
// console.log(target.classList.contains('asd'));
// target.classList.toggle('bar');

console.log(target.getAttribute('xxx'));
console.log(target.getAttribute('id'));
console.log(target.getAttribute('class'));
console.log(target.getAttribute('style'));

console.log(target.previousElementSibling);
console.log(target.nextElementSibling);
console.log(target.children);
console.log(target.childNodes);

target.innerHTML = '<b>aksjdkj</b>'
console.log(target.outerHTML);

let collectionOfDiv = document.getElementsByClassName('point');
for (const collectionOfDivElement of collectionOfDiv) {
    collectionOfDivElement.innerText = 'skfjdskjfj';
    collectionOfDivElement.classList.add('dlkflk')
}


//created elements

let h2 = document.createElement('h2');
h2.innerText = 'some title';
document.body.appendChild(h2);
let allUsersDiv = document.getElementsByClassName('users')[0];
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

for (const user of users) {
    let div = document.createElement('div');
    div.classList.add('user');
    div.innerText = user.name;
    allUsersDiv.appendChild(div);
}
for (const user of users) {
    let li = document.createElement('li');
    li.classList.add('user');
    li.innerText = user.name;
    allUsersDiv.appendChild(li);
}

for (const user of users) {
    let userInfoDiv = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = user.name;

    let p = document.createElement('p');
    p.innerText = user.status + ' ' + user.age;

    userInfoDiv.append(h2, p);

    document.body.appendChild(userInfoDiv);
}

//recursion
function explorer(htmlElement) {

}

explorer(document.body);