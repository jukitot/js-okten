// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function Rectangle(a, b) {
    let S = a * b;
    return S;
}
console.log(Rectangle(5, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14;
function Circle(r) {
    let S =  PI * Math.pow(r,2);
    return S;
}
console.log(Circle(5));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function Cylinder(h, r) {
    let S = 2 * PI * r * (h + r);
    return S;
}
console.log(Cylinder(7, 2));
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayItem(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
let users = [
        { id: 1,  name: 'Vasya', age: 31},
        { id: 2,  name: 'Petya', age: 30},
        { id: 3,  name: 'Kolya', age: 29},
        { id: 4,  name: 'Olya', age: 28},
        { id: 5,  name: 'Max', age: 30},
        { id: 6,  name: 'Anya', age: 31},
        { id: 7,  name: 'Oleg', age: 28},
        { id: 8,  name: 'Andrey', age: 29},
        { id: 9,  name: 'Masha', age: 30},
        { id: 10,  name: 'Olya', age: 31},
        { id: 11,  name: 'Max', age: 31}
    ];
arrayItem(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p> ${text} </p>`);
}
paragraph('it`s just some text for paragraph');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий



function list1(a) {
    document.write(`<ul>
<li> ${a} </li>
<li> ${a} </li>
<li> ${a} </li>
</ul>`)
}

list1('first');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list2(a, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(` <li> ${a} </li>`);
    }
    document.write(`</ul>`);
}

list2('second', 10)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr2 = [1, true, 'text', 0.22, false, 'just'];

function arrayList(array){
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(` <li> ${arrayElement} </li>`);
    }
    document.write(`</ul>`)
}

arrayList(arr2);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function usersList(array){
    for (const arrayElement of array) {
        document.write(` <div class="userBlock"> <h1># ${arrayElement.id} </h1>
                    <h2> Name: ${arrayElement.name} </h2>
                   <h2> Age: ${arrayElement.age} </h2>
  </div>`);
    }
}
usersList(users);

// - створити функцію яка повертає найменьше число з масиву
let arrayNumbers = [21, 11, 123, 7, 500, 9, 10, 33];

function minNum(array) {
    let minimum = array[0];
    for (const arrayElement of array) {
        if (arrayElement < minimum) {
            minimum = arrayElement;
        }
    }
    console.log(minimum);
}
minNum(arrayNumbers);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum = 0;
    for (const arrayElement of arr) {
            sum += arrayElement;

    }
    console.log(sum);
}
sum(arrayNumbers);
sum([1, 2, 10]);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах


function swap(arr, index1, index2) {
    let arr1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = arr1;
    console.log(arr);
}
swap([11, 22, 33, 44], 0, 1);
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
swap(arrayNumbers, 3, 1);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let currencyValues = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
];

function exchange(sumUAH, currencyValues, exchangeCurrency){

    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return  sumUAH / item.value  + ` ${item.currency}`;
        }
    }
}

console.log(exchange(10000, currencyValues, 'USD'));
console.log(exchange(21000, currencyValues, 'EUR'));
console.log(exchange(30000, currencyValues, 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));