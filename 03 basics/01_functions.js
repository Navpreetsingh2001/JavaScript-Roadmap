function myName(name){
    console.log(`My name is ${name}`);
}
// myName

function sum(a,b){
    // result=a+b
    // console.log(c);
    return a+b;
}
const result =sum(7,8);
// console.log(result);

function login(username ="nav"){
    if(!username){
        console.log("Please enter a username");
        return
    }
return `${username} just logged In `
}

// console.log(login("Navy"))
// console.log(login())


//! shopping  cart  example
// ... operator is called rest operator and spread operator 
function totalCartItems(val1 ,val2, ...num){
return num
}
// console.log(totalCartItems(200,400,500));


// *objects and functions 

const users ={
    username : "navy",
    price : 100,
    totalItems : 23
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} , price is ${anyObject.price} and total items are ${anyObject.totalItems}`);
}

// handleObject(users);

//! we can also directly add objects ]
// we can add objects and also arrays 
handleObject(
    {
        username : "Navy",
        price : 12,
        totalItems :32
    }
)

// !in array 
const newArray = [200,300,400]

function returnSecondValue(getArray){
return getArray[0];
}

// console.log(returnSecondValue(newArray));

console.log(returnSecondValue(
    [200,2332,1132]
))
// we need to type safe it.
