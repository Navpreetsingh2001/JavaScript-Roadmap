// if 

const isLoggedIn =true
if(isLoggedIn){
    
}

// < , > , <= ,=> ,== ,!= ,!==  ,=== 


// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);

// short hand notation 

const balance = 1000

// is tarah se nahi karna haa 
// if(balance > 500 ) console.log("test"),console.log("test2")

// if(balance < 500){
// console.log("less than");
// }
// else if (balance <750){
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1200");
// }


const userLoggedIn =true
const debitCard = true
const googleLoggedIn = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard){
    console.log("Allow to buy");
}
if(googleLoggedIn || loggedInFromEmail){
    console.log("You can log in")
}
