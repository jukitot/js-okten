//string functions
let str = 'hello okten';
console.log(str);
console.log(str[0]);
for (const strElement of str) {
    console.log(strElement);
}

let s = new String('kjkjd');
console.log(typeof s);

//concat
let d = str.concat('!!!');
console.log(d);

//uppercase
let u = str.toUpperCase();
console.log(u);
//lowercase
console.log(str.toLowerCase());

//startswith
console.log(str.startsWith('hell'));

//endswith
console.log(str.endsWith('en'));

//substring
console.log(str.substring(0, 7));

//indexOf
console.log(str.indexOf('h'))
console.log(str.indexOf('o', 5))

//lastindexof
console.log(str.lastIndexOf('o'));

//charAt
console.log(str.charAt(8));

//replace
console.log(str.replace('e', '!'));
console.log(str.replaceAll('l', '&'));

//split

let split = str.split(' ');
console.log(split);


//arrays methods

let arr = [];
console.log(typeof arr);
console.log(Array.isArray(arr));

arr[arr.length] = 100;

//push
arr.push('new elem1');
arr.push('new elem2');
arr.push('new elem3');
arr.push('new elem4');
arr.push('new elem5');
console.log(arr);
//pop
arr.pop();
console.log(arr.pop());
console.log(arr);

//unshift
arr.unshift('!!!');
console.log(arr);
console.log(arr.shift());
console.log(arr);

//join
console.log(arr.join('-'));

let nums = [11, 22, 33];
let concat = arr.concat(nums);
console.log(concat);
console.log(arr);


//revers
console.log(nums);
console.log(nums.reverse());

//slice
console.log(concat);
console.log(concat.slice(0, 4));

//splice

console.log(concat.splice(0,2));
console.log(concat);

console.log(concat);
console.log(concat.indexOf(11));
console.log(concat.splice(concat.indexOf(11), 1));
console.log(concat);

console.log(concat.includes(11));
console.log('hello okten'.includes('ok'));