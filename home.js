console.log('Hello');

// alert('Hello this is jay');

// How to write a comment inline

// Varibles
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);
//Manipulate DOM with JavaScript
/* ... It's just a fancy way of saying
change HTML with JavaScript*/

//var age = prompt('What is your age?');
//document.getElementById('someText').innerHTML = age;

// Numbers in JavaScript
var num1 = 10;

// Increament num1 by 1
num1++;

// Decreament num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 6);

// Increament/decreament by 20
num1 += 20;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/

// Create
function fun() {
    console.log('This is a funtion');
}

// Call
fun();

/* Let's create a function that take a name 
and says hello followed by your name

For example
Name: "Jay"
Return: "Hello Jay" 
*/

function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName; // String Concatenation
    console.log(result);
}
// var name = prompt('What is your name?');
// greeting(name);

// How do arguments work in function?
// How do we add 2 numbers in a function?

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(10, 10);

/* While loop

var num = 0;

while (num < 100) {
    num += 5;
    console.log(num);
} */

// For loop
for (let num = 0; num <= 100; num+= 2) {
    console.log(num);
}

// Data types
let yourAge = 16; // number
let yourName = 'Jay' // string
let name = {first: 'John', last: 'Doe'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let ramdom; // undefined
let nothing = null; // value null

// String in JavaScript (common methods)
let fruit = 'banana';
let moreFruit = 'apple\nbanana'; // new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLocaleLowerCase());
console.log(fruit.charAt(3));
console.log(fruit[3]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by a characters

// Array

let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array ('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[3]); // access value at index 3rd

fruits[3] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits); // remove last item
console.log(fruits.push('mangos'), fruits); // appends
console.log(fruits[3]);
fruits[fruits.length] = 'melon';
console.log(fruits);
fruits.shift(); // remove first element from an array
console.log(fruits);
fruits.unshift('lime'); // add first element from an array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());

let someNumbers = [5, 10, 23, 65, 233, 54, 23, 2, 1, 3, 103,];
console.log(someNumbers.sort(function(a, b){return a-b})); // sorted in ascending order
console.log(someNumbers.sort(function(a, b){return b-a})); // sorted in decending order

let emptyArray = new Array();
for (let num = 1; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in JavaScript
// dictionaries in Python

let student = {
    first: 'Jay',
    last: 'Kon',
    age: 23,
    height: 170,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
//console.log(student.first);
//console.log(student.last);
//student.first = 'notJay'; //Change value
//console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());