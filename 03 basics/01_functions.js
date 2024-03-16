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

console.log(login("Navy"))
console.log(login())
