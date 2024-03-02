// types 
// Primitive    non Primitive or refrence type


    // 7 Types:
    // They all are call by value .They are not original but the copy is given and changes are made in copy.

    // String 
    // Number
    // Boolean
    // Null -->empty not 0
    // Undefined
    // Symbol
    // BigInt

    const score =100
    const scoreVal =100.01

    const logedIn = false
    const temp = null
    let userEmail; 
    // or 
    let userEmail1 =undefined

    const id = Symbol('123')
    const anotherId = Symbol('123')
    console.log(id === anotherId) // They are not same

    const bigNumber = 1213333333333333333n

    //Array
    const heros = ["hello" , "world"]

    //objects
    let myObj={
       name : "navy",
       age : 22, 
    }

    //functions
    const myFunction = function(){
        console.log("hello")
    }
    console.log(typeof bigNumber);
    console.log(typeof temp);


    // 2. Refrence or non primitive 

    // Array
    // Objects
    // Functions

    // Q-> Is js dynamically type or statically type language
    // A language is dynamically typed if the type is associated with run-time values, and not named variables/fields/etc.


    / *  stack and heap 

// stack (primitive)  , heap (non-primitive ) 

let myName = "NavpreetSingh.com"
let anotherName= myName

anotherName = "navy"

console.log(anotherName);
console.log(myName);

// heap 

let userOne = {
    email : "Navy@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "NewMail@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

