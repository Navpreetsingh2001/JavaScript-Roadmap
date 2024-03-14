// object can be creatd in this ways 

//* object literal 
const tinderUser1 = new Object();   //==>singlton object

// const tinderUser2 = {}  ==>non singlton 

tinderUser1.id = "123abc"
tinderUser1.name = "Navy"
tinderUser1.isLoggedIn = false

// console.log(tinderUser1);
// console.log(tinderUser2);

const regualrUser = {
    email : "abc@gmail.com",
    fullName :{
        userFullName:{
            firstName : "Navy",
            lastName : "Rajput"
        }
    } 
}

// console.log(regualrUser.fullName?.userFullName.firstName);

// optional chaining == >  ?  is used if fullName don't exist or not
// other we need to use if else which will be complex 

const obj1 = {1: "a" , 2 : "b"}
const obj2 = {1: "c" , 2 : "d"}
// combining objects 
const obj3  = Object.assign({} ,obj1,obj2)
console.log(obj3);