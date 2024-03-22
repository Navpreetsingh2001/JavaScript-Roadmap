// objects 
// loop on objects 
const myObj = {
    js : 'javascript',
    cpp: 'C++',
    rb: 'ruby'
}

//! forin loop

for(const k in myObj){
    console.log(`The key is ${k} and value is ${myObj[k]}`);
}


// on array 
const myArr = ['js', 'ruby','cpp']

for(const k in myArr){
    console.log(myArr[k]);
}

// * for in loop ---> on objects
// * for of loop ---> on array