function writer (productTitle, price, descr) {
    document.write(`
<div>
<h2>${productTitle} ${price}</h2>
<p>${descr}</p>
</div>
    `);
}

writer('milk', 23, 'some milk');
writer('meat', 150, 'a bit a meat')


function printerArray (array){
    for (const item of array) {
        console.log(item);
    }
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

printerArray(users);

let products = [{
    title: 'Milk',
    price: 22,
    image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
},
    {
    title: 'Juice',
    price: 27,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
},
    {
    title: 'Tomato',
    price: 47,
    image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
},
    {
    title: 'Tea',
    price: 15,
    image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
},];

printerArray(products);

//return

function calc (a, b) {
    let result = a + b;
    return result;
}

let r1 = calc(10, 20);
let r2 = calc(20, 22);
console.log(r1, r2);
