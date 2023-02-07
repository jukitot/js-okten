//increments
let x = 0;
x = x + 1;
console.log(x);
x++;
console.log(x);
x += 1;
console.log(x);
x = x - 1;
console.log(x);
x -= 1;
console.log(x);
x--;
console.log(x);
++x;
console.log(x);

let a = 0;
let b = a++;
console.log(a, b);

a = 0;
b = ++a;
console.log(a, b);

//for

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
    {name: 'max', age: 31, status: true},
];

for (let i = 0; i < users.length; i++){
    console.log(users[i]);
}

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    document.write(`<h3> user info - ${user.name}  ${user.age} - ${user.status} </h3> `);
}

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    
}


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
]; //DB
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(product);
    document.write(`<div class = "target">
    <h2> ${product.title} - ${product.price} UAH </h2> 
    <img src = " ${product.image} " >
    </div> `) };

//for of
for (let user1 of users) {
    console.log(user1);
};

for (let product1 of products) {

    console.log(product1);
    document.write(`<div class = "target">
    <h2> ${product1.title} - ${product1.price} UAH </h2> 
    <img src = " ${product1.image} " >
    </div> `) };

//for in

let user2 = {
    id: 1,
    name: 'vasya',
    status: true
}

for (let fieldName in user2){
    console.log(fieldName, user2[fieldName]);
}


for (const user3 of users) {
    for (const field in user3) {
        console.log(field, user3[field]);
    }
}

//while
let i = 0;
while(i < users.length){
    let user4 = users[i];
    console.log(user4);
    i++;
}



do{
    console.log('klskd');
}while(false)