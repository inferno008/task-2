var myname = "   buvan   ";

// string methods
console.log(myname.length);
console.log(myname.charAt(3));
console.log(myname.toLowerCase("v"));
console.log(myname.trim());
console.log(myname.toUpperCase());

// number method
const number = 23.45434332;

console.log(number.toPrecision(4));
console.log(number.toFixed(3));
console.log(number.toString())

let thousand = 1000;
numb = thousand.toExponential();

console.log(numb);

let x = 50043
x.valueOf();
console.log(x);

// array methods

let colours = ["red", "Orange", "blue", "green"];

console.log(colours.length);
console.log(colours.indexOf('Orange'));
console.log(colours.includes('black'));


let numbers = [1,2,3,4,5];

console.log(numbers.shift());
console.log(numbers);

numbers.push('100');
console.log(numbers);

// date methods

let d;

d = new Date();
console.log(d.toString());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMilliseconds());
console.log(d.getMinutes());

// function methods

function myFunction(n1, n2){
    product = n1 * n2;
    return product;
}
console.log(myFunction(100, 100));

function myFunction(h, b){
    area_of_triangle = 1/2 * b * h;
    return area_of_triangle;
}
console.log(myFunction(20, 40));


