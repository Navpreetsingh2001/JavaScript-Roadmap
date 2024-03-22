const coding = ['js', 'ruby','cpp','python']

// callback fun dont have name 
coding.forEach(function (val) {
    // console.log(val);
})

coding.forEach((item) =>{
// console.log(item);
})

function printme(item){
    console.log(item);
}


// we need to add reference no need to add function call or excecute it 
// coding.forEach(printme)

coding.forEach((item,index,arr) => {
// console.log(item,index,arr);
})

const myCoding = [
    {
        languageName : 'javascript',
        languageFileName : "js"
    },
    {
        languageName : 'javas',
        languageFileName : "java"
    },
    {
        languageName : 'python',
        languageFileName : "py"
    }
]

//! iteration over objects in array 
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})