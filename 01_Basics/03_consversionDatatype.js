let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber )
console.log( valueInNumber )

//  "33" => 33
//  "33abc" => NaN 
// true => 1 ; false =>0 




let isLoggedIn = " ";
let checkLoggIn = Boolean(isLoggedIn)
console.log(checkLoggIn);

// 1 => true  ,  0 => false
// "" => false , " " = > true  , "hello" = > true 


let someNumber = 33;
let convertToString = String(someNumber);
console.log(convertToString);
console.log(typeof convertToString);

// **************opertion*******************

let value = 3
let negVal = -value
console.log(negVal)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(2%3)

let str1 = "Navy"
let str2 = " Rajput"
let str3 = str1+str2
console.log(str3);

console.log("1"+ 2);
console.log(1 + "2")
console.log("1" + 2 + 2) ;
console.log(1 + 2 + "2") ;

// console.log(+true);
// console.log(+ "");

let num1,num2,num3

num1=num2=num3= 2+2
// console.log(num3); 

let gameCounter =100;
// postfix 
gameCounter++;
// prefix 
++gameCounter;

console.log(gameCounter);
