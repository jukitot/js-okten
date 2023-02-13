// function expression

// let greeting = function () {
//     console.log('hi!');
// }
// greeting();
//function declaration
//hoisting
asd();
function asd() {
    console.log('kjdkjf');
}

//arrow function
function calc(a, b) {
    return a + b;
}

let calcul = (a, b) => a + b;
console.log(calcul(10, 20));

let user = {
    name: 'vasya',
    age: 31,
    greeting : function (msg) {
        console.log(this);
        return `${msg} my name is ${this.name}`
    },
    vitannya : (msg) => `${msg} my age is ${user.age}`
}
console.log(user.greeting('hi'));
console.log(user.vitannya('hi!'));

//recursiya

function foo() {
    console.log('foo');
    // foo();
}
foo();

function iterator(arr, i) {
    console.log(arr[i]);
    i++;
    if(i < arr.length) {
        iterator(arr, i);
    }
}

iterator([11, 22, 33], 0);

let arr1 = [11, 22, 33, [44, 55],[66, 77, [88,99]]];
let innerArray = [];
function flatter(array){
    for (const item of array) {
        if (Array.isArray(item)){
            flatter(item);
        }else{
            innerArray.push(item);
        }
    }
}
flatter(arr1);
console.log(innerArray);

//callback

function foo1(callback) {
    console.log(callback());
}


foo1(function () {
    return 100;
});

function calc1(a, b, callback) {
    return callback(a, b);

}

console.log(calc1(10, 20, (a, b) => {
    return a + b;
}));

console.log(calc1(15, 20, (a, b) => a - b));