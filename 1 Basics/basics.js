//!variables in javascript


//* 4 ways to declare variables 

//  Automatically
//  using var  -- >used in all js code from 1995 to 2015
// ---> var keyword should only used in code written in older browsers. 
//  using let
//  using const -->let and const were added to js in 2015

let x = 10;
let y = 11;
let z = x+y;
console.log(z);

const a =5;
const b =10;
const c =a+b;
console.log(c)

//* const -- > is used if the value should not be changed .
//* Such as array and objects 

//* use let if you cannot use const 
//* use var if you must support old browser

//* mixed 
const price1 =100;
const price2 =300;
let total = price1+price2;
console.log(total);


// ! javascript let keyword 
// let--> have block scope 
// must be declared before use 
//  let cannot be redeclared 

// let and const have block scope.

// let and const can not be redeclared.

// let and const must be declared before use.

// let and const does not bind to this.

// let and const are not hoisted.

// !javascript const keyword 



