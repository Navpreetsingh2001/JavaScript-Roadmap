// objects can be created in 2 ways 
// 1 literal 
// 2 constructor

// * singleton  => only single onbject

// when we create object using literal singleton is not created 
// when created using constructor then singleton is created 


Object.create   // constructor method


// declarring a symbol 

const mySym  = Symbol("key1")

// symbol used as key in objects

// * objects literal 
const jsUser = {
    name : "Navy",
    "full name" : "Navpreet singh",
    // mySym : "mykey1",
    [mySym] : "mykey1",
    age: 13,
    email : "Navpreetsingh@gmail.com",
    location : "Punjab",
    isLoggedIn : false,
    lastLoggedIn : []
}  

// accessing objects 
console.log(jsUser.name)
console.log(jsUser["name"])
console.log(jsUser["full name"])
// not used as symbol
console.log(typeof jsUser[mySym])

jsUser.email = "navy@gmail.com"
console.log(jsUser.email)

// to freeze the value 
// Object.freeze(jsUser)

jsUser.email = "navy@newgmail.com"
console.log(jsUser)


// function 
jsUser.greeting = function(){
    console.log("Hello friend")
}
jsUser.greetingTwo = function(){
    console.log(`Hello friend1 , ${this["full name"]}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());