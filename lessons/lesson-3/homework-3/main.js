// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>today is a good day!</div>`)

}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>i love myself! ${i} </div>`)
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {

    document.write(`<h1>hello! </h1>`)
    i++;
}
;
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


let x = 0;
while (x < 20) {
    document.write(`<h1>hello! ${x} </h1>`)
    x++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];


for (const listOfItem of listOfItems) {
    document.write(`<ul> <li> ${listOfItem} </li> </ul>`)
}

// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [{
    title: 'Milk',
    price: 22,
    image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
}, {
    title: 'Juice',
    price: 27,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
}, {
    title: 'Tomato',
    price: 47,
    image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
}, {
    title: 'Tea',
    price: 15,
    image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
},];


for (const product of products) {
    document.write(`<div class="product-card">
    <h3 class="product-title">${product.title}. Price - ${product.price} UAH</h3>
    <img src="${product.image}" alt="" class="product-image"> </div>`)
}

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
// за допомоги циклу вивести:
//     - користувачів зі статусом true
document.write(`<h1> True status:</h1>`)
for (let j = 0; j < users.length; j++) {
    const user = users[j];
    if (user.status === true){
        document.write(`<h1> ${user.name} ${user.age}</h1>`)
    }
}
//     - користувачів зі статусом false
document.write(`<h1> False status:</h1>`)
for (let j = 0; j < users.length; j++) {
    const user = users[j];
    if (user.status === false){
        document.write(`<h1> ${user.name} ${user.age}</h1>`)
    }
}
//     - користувачів які старші за 30 років
document.write(`<h1>Over 30 years old:</h1>`)
for (let j = 0; j < users.length; j++) {
    const user = users[j];
    if (user.age > 30){
        document.write(`<h1> ${user.name} ${user.age}</h1>`)
    }
}
