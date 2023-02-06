// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['anna', 11, true, false, 230.1, 'freedom', 230, 112, 'eoior', 'kdjfkj'];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Moby Dick',
    pageCount: 200,
    genre: 'adventure'
}
console.log(book1);
let book2 = {
    title: 'Little Women',
    pageCount: 759,
    genre: 'coming of age'
}
console.log(book2);
let book3 = {
    title: 'Robison Crusoe',
    pageCount: 540,
    genre: 'roman'
}
console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Moby Dick',
    pageCount: 200,
    genre: 'adventure',
    authors: [
        {name: 'Herman Melville', age: 72}
    ]
}
console.log(book4);
let book5 = {
    title: 'Little Women',
    pageCount: 759,
    genre: 'coming of age',
    authors: [
        {name: 'Louisa May Alcott', age: 55}
    ]
}
console.log(book5);
let book6 = {
    title: 'Robison Crusoe',
    pageCount: 540,
    genre: 'roman',
    authors: [
        {name: 'Daniel Defoe', age: 70}
    ]
}
console.log(book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
let users = [
    {
        name: 'Yura',
        username: 'goodboy',
        password: '03930480dkj'
    },
    {
        name: 'Max',
        username: 'badboy',
        password: '039cggd0dkj'
    },
    {
        name: 'Oleg',
        username: 'peacelife',
        password: '024dfds480dkj'
    },
    {
        name: 'Anna',
        username: 'itwasgood',
        password: '04646fgfww33'
    },
    {
        name: 'Sasha',
        username: 'imagoodperson',
        password: '0332234333ddkj'
    },
    {
        name: 'Dima',
        username: 'imaginedragon',
        password: '0232gd0dkj'
    },
    {
        name: 'Anastasia',
        username: 'jukitot',
        password: '456676d480dkj'
    },
    {
        name: 'Bogdan',
        username: 'nosuicide',
        password: '0dfg5gd0dkj'
    },
    {
        name: 'Anton',
        username: 'ilovemylife',
        password: '03930456gj'
    },
    {
        name: 'Andrey',
        username: 'xxfuur',
        password: '03fdfggd0dkj'
    }
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = 1;
if (x !== 0) {
    console.log('right!')
} else {
    console.log('error!')
}

let x1 = 0;
if (x1 !== 0) {
    console.log('right!')
} else {
    console.log('error!')
}

let x2 = -3;
if (x2 !== 0) {
    console.log('right!')
} else {
    console.log('error!')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 10;
if (time <= 14 && time >= 0) {
    console.log('1 quarter')
} else if (time <= 29 && time >= 15) {
    console.log('2 quarter')
} else if (time <= 44 && time >= 30) {
    console.log('3 quarter')
} else if (time <= 59 && time >= 45) {
    console.log('4 quarter')
} else {
    console.log('incorrect value')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 11;
if (day <= 10 && day >= 1) {
    console.log('1 decade')
} else if (day <= 20 && day >= 11) {
    console.log('2 decade')
} else if (day <= 31 && day >= 21) {
    console.log('3 decade')
} else {
    console.log('incorrect value')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let num = prompt('Enter number of the day:');
console.log(num);
switch (num) {
    case '1' :
        console.log('monday');
        document.write('<h1> Monday');
        document.write('<h3> -learn js');
        document.write('<h3> -clean house');
        document.write('<h3> -love myself');
        break;
    case '2' :
        console.log('tuesday');
        document.write('<h1> Tuesday');
        document.write('<h3> -learn html');
        document.write('<h3> -cooking');
        document.write('<h3> -love myself');
        break;
    case '3' :
        console.log('wednesday');
        document.write('<h1> Wednesday');
        document.write('<h3> -learn js');
        document.write('<h3> -clean house');
        document.write('<h3> -love myself');
        break;
    case '4' :
        console.log('thursday');
        document.write('<h1> Thursday');
        document.write('<h3> -learn html');
        document.write('<h3> -cooking');
        document.write('<h3> -love myself');
        break;
    case '5' :
        console.log('friday');
        document.write('<h1> Friday');
        document.write('<h3> -learn js');
        document.write('<h3> -walking');
        document.write('<h3> -love myself');
        break;
    case '6':
        console.log('saturday');
        document.write('<h1> Saturday');
        document.write('<h3> -learn html');
        document.write('<h3> -cooking');
        document.write('<h3> -love myself');
        break;
    case '7' :
        console.log('sunday');
        document.write('<h1> Sunday');
        document.write('<h3> -learn js');
        document.write('<h3> -relax');
        document.write('<h3> -love myself');
        break;
    default:
        console.log('i don`t know this number of day ');
        document.write('<h1> please write day 1-7 ');
}


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.


let num1 = prompt('Enter 1 number:', 45);
let num2 = prompt('Enter 2 number:', 200);
num1 = Number(num1);
num2 = Number(num2);

if (num1 > num2) {
    console.log(num1);
} else if (num1 < num2) {
    console.log(num2);
} else if (num1 === num2) {
    console.log('these numbers are the same ');
} else {
    console.log('you need to enter 2 numbers, try again!');
}
1

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x1 = false ? 'default' : 200;
// console.log(x1);

//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super!');
}