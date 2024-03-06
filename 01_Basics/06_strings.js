const name = "navy"
const age = 13

//string concatination
console.log(name + age);

//better way
console.log(`My nmae is ${name} and age is ${age}`);

// another way to declare string 
const name1 = new String("Hello world");
console.log(name1[0]);


/* 
js donot have inheritance so to link 2 object we use __proto__
*/
const Anminal ={
    name : "loo",
    age: 10
}
const Dog = {
    owner :"poo",
    canRun: true
}
Dog.__proto__ =Anminal
console.log(Dog.name);

//String functionss

console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.charAt(2));
console.log(name1.indexOf('e'));
console.log(name1.substring(0,3));

const newString = name1.slice(-4,4);
console.log(newString);


const newStringOne = "   Navy     "
console.log(newStringOne);
console.log(newStringOne.trim());



//replace function
const url = "https://navy.com/navy%20rajput"
const newUrl = url.replace("%20", " ")
console.log(newUrl);


//include fun
console.log(newUrl.includes("navy"));


//split fun
console.log(name1.split(' '));
