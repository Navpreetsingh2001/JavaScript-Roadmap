
const fruits = ["apple" ,"Banana" ,"grapes"]
const vitamins = [ "vita c" ,"vita a"]

// fruits.push(vitamins);
// console.log(fruits[3][1]);

const fruitsVit = fruits.concat(vitamins)
console.log(fruitsVit);


const anotherArray = [1,2,3,[3,4,5,6],[1,[7,8,9]]]
const solvedArray = anotherArray.flat(Infinity)
// console.log(solvedArray);


// !important 

// any type of data to array 
console.log(Array.isArray("jfndjn"))
// in array 
console.log(Array.from("jfndjn"))
console.log(Array.from({
    name:"navy"        //!interesting //== >> will give emty array
}))

let score1 =100
let score2 =100
let score3 =100

// to values in array 
console.log(Array.of(score1,score2 ,score3));