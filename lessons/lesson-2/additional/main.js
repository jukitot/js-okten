// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//


let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3){
    console.log('This array is a long, it is have 3 or more elements');
}else{
    console.log('This array is a little, it is have 2 or less elements');
}

//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
let nums = [11, 22, 33];
let number = Math.trunc(nums.length/2);
console.log(nums[number]);
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let nums1 = [1, 7, 4];

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let a = 2;
let b = 3;
let result1 = (a + b < 4) ? 'not much': 'many';
console.log(result1);
//
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//
let a1 = -1;

let numA = (a1 <= -1) ? 'negative':
    (a1 === 0) ? 'zero':
        (a1 >= 1)? 'positive':
            'undefined';
console.log(numA);


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
let test = false;
let res = (test === true)? 'true':
    (test === false)? 'false':
            'undef';
console.log(res);


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let quest = prompt('What is official name of JavaScript');
// if (quest === 'ECMAScript' || quest === 'ecmascript' ){
//     alert('You are right!!!');
// } else {
//     alert('Are you do not know? It is ECMAScript :)');
// }

let answer = (quest === 'ECMAScript' || quest === 'ecmascript' ) ? alert('You are right!!!'):
    alert('Are you do not know? It is ECMAScript :)');
console.log(answer);




//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let quest2 = prompt('Enter the apartment number');

let answer2 = (quest2 >= 1 && quest2 <= 20) ? alert('First porch'):
    (quest2 >= 21 && quest2 <= 48) ? alert('Second porch'):
        (quest2 >= 49 && quest2 <= 90) ? alert('Third porch'):
            'undef';
console.log(answer2);

//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
