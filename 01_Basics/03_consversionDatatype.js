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