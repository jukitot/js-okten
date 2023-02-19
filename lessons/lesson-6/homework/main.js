// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hello = 'hello world';
let lorem = 'lorem ipsum';
let js = 'javascript is cool';
console.log(hello.length);
console.log(lorem.length);
console.log(js.length);
console.log('-------------')
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(hello.toUpperCase());
console.log(lorem.toUpperCase());
console.log(js.toUpperCase());
console.log('-------------')
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
console.log('-------------')


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

let str = ' dirty string   ';
console.log(str.trim());
console.log('-------------')
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let str1 = 'Ревуть воли як ясла повні';
function stringToArray(str){
    return str.split(' ');
}

console.log(stringToArray(str1));;
console.log('-------------')
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr = [10,8,-7,55,987,-1011,0,1050,0];
let arrMap = arr.map(String);
console.log(arrMap);
console.log('-------------')
// - створити функцію sortNums(nums, direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
let nums = [11,21,3];
function sortNums(nums, direction){

    if (direction === 'ascending') {
        return nums.sort(function (a, b){
            return a - b;
        });
    }else if (direction === 'descending') {
       return nums.sort(function (a, b){
            return b - a;
        });
    }
}

console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums, 'descending'));
console.log('-------------')



// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonth = coursesAndDurationArray.sort(function (a, b){
    return b.monthDuration-a.monthDuration;
})
console.log(sortMonth);
console.log('-------------')
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredCourses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredCourses);
console.log('-------------')
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mappingCourses = coursesAndDurationArray.map(function (value, index){
    return { id: index+1, ...value};
})
console.log(mappingCourses);
console.log('-------------')
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cards = [
  { cardSuit: 'spade', value: '6', color: 'black' },
  { cardSuit: 'spade', value: '7', color: 'red' },
  { cardSuit: 'clubs', value: '9', color: 'black' },
  { cardSuit: 'clubs', value: '10', color: 'black' },
  { cardSuit: 'spade', value: '10', color: 'red' },
  { cardSuit: 'heart', value: '6', color: 'red' },
  { cardSuit: 'spade', value: 'queen', color: 'red' },
  { cardSuit: 'diamond', value: '6', color: 'red' },
  { cardSuit: 'spade', value: 'ace', color: 'black' },
]
// - знайти піковий туз
let findSpadeAce = cards.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(findSpadeAce);
console.log('-------------')
// - всі шістки
let findSix = cards.filter(value => value.value === '6');
console.log(findSix);
console.log('-------------')
// - всі червоні карти
let findRed = cards.filter(value => value.color === 'red');
console.log(findRed);
console.log('-------------')
// - всі буби
let findDiamond = cards.filter(value => value.cardSuit === 'diamond');
console.log(findDiamond);
console.log('-------------')
// - всі трефи від 9 та більше
let findClubs = cards.filter(value => value.cardSuit === 'clubs' && value.value >= 9);
console.log(findClubs);
console.log('-------------')
//
// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let Cardreduce = cards.reduce((accumulator, card) => {
    if(card.cardSuit === 'spade'){
        accumulator.spades.push(card);
    }else if(card.cardSuit === 'diamond'){
        accumulator.diamonds.push(card);
    }else if(card.cardSuit === 'heart'){
        accumulator.hearts.push(card);
    }else if (card.cardSuit === 'clubs'){
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]});
console.log(Cardreduce);
console.log('-------------')
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let findSass = coursesArray.filter(function (course){
    return course.modules.includes('sass');
});
console.log(findSass);
console.log('-------------')
// --написати пошук всіх об'єктів, в який в modules є docker
let findDocker = coursesArray.filter(function (course){
    return course.modules.includes('docker');
});
console.log(findDocker);

