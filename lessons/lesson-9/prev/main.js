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