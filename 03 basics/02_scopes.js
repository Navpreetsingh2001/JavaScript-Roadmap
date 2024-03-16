// global scope 
let a =100
if(true){
    //block scope
    let a = 10;
    const b =12;
    var c = 19;

}

// console.log(a);
// console.log(b);
// console.log(c);

// * both the scope in console (inspect) and in code environment(node) .Both are different

// ! Nested scope 

function one(){
    const name = "Navy"

    function two(){
        const lastname ="rajput"
        console.log(name);
    }
    two();
    console.log(lastname);
}

// one()

if(true){
    const fname = "Navpreet"
    if(fname === "Navpreet"){
        const lname = "Rajput"
        console.log(fname + lname)
    }
    // console.log(lname) == >error 
}
// console.log(fname); == >error 



// example 
// * ===========interesting concept=============

// * Hositing 

function addone(num){
return num +1
}


addone(5)

const addTwo = function(num){
return num +2
}

console.log(addTwo(4));